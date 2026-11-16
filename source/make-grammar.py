import json,pathlib
p=pathlib.Path(__file__).parent
topics=[]
for line in (p/'grammar-source.txt').read_text().splitlines():
 if line.startswith('@'):
  level,title,rule=line[1:].split('|');topics.append(dict(id='g'+str(len(topics)+1),level=level,title=title,rule=rule,questions=[]))
 elif line:
  prompt,answer,a,b,why=line.split('|')
  topic=topics[-1];topic['questions'].append(dict(id=topic['id']+'q'+str(len(topic['questions'])+1),prompt=prompt,answer=answer.split('~')[0],accepted=answer.split('~'),options=[answer,a,b] if a else [],why=why))
assert len(topics)==24
assert all(len(t['questions'])==5 for t in topics)
(p/'grammar-data.js').write_text('window.GRAMMAR = '+json.dumps(topics,ensure_ascii=False)+';\n')
print('24 topics, 120 exercises')
