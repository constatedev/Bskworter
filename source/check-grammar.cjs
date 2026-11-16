const fs=require('fs'),vm=require('vm'),assert=require('assert');
class E{constructor(){this.children=[];this.attrs={};this.value='';this.dataset={};this.hidden=false;}append(...a){this.children.push(...a)}replaceChildren(...a){this.children=a}setAttribute(k,v){this.attrs[k]=v}scrollIntoView(){}focus(){}showModal(){this.open=true}close(){this.open=false}remove(){}click(){}}
const ids={};const get=id=>ids[id]||=new E();get('gLevel').value='all';let store={};
const c={console,URLSearchParams,URL,Blob,Date,Math,setTimeout:()=>1,clearTimeout(){},window:{location:{search:'?lang=fa'},addEventListener(){}},document:{getElementById:get,createElement:()=>new E(),querySelectorAll:()=>[],documentElement:{},body:new E()},localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>store[k]=v}};
vm.createContext(c);vm.runInContext(fs.readFileSync(__dirname+'/grammar-data.js','utf8'),c);c.GRAMMAR=c.window.GRAMMAR;vm.runInContext(fs.readFileSync(__dirname+'/grammar-app.js','utf8'),c);
const run=s=>vm.runInContext(s,c);
run(`if(GRAMMAR.length!==24||byId.size!==120)throw Error('coverage');if([...byId.values()].filter(q=>!q.options.length).length!==24)throw Error('input coverage');if(!Object.values(GT).every(v=>v.length===6))throw Error('translations');if(gLang!=='fa'||document.documentElement.dir!=='rtl')throw Error('requested language');`);
run(`for(const q of byId.values()){if(!q.prompt.includes('___')||!q.why||!q.answer)throw Error('invalid exercise');if(q.options.length&&(new Set(q.options).size!==3||!q.options.includes(q.answer)))throw Error('options');}`);
// Every correct answer, including all typed exercises, is accepted and recorded exactly once.
run(`for(const q of byId.values()){startSession([q.id],q.topic.title);if(q.options.length)currentSession.selected=q.answer;else g$('typedAnswer').value=q.answer;submitAnswer();submitAnswer();if(!records[q.id].lastCorrect||records[q.id].attempts!==1)throw Error('answer or double submit '+q.id);}`);
run(`const q=byId.values().next().value;startSession([q.id],'test');currentSession.selected=q.options.find(v=>v!==q.answer);submitAnswer();if(records[q.id].lastCorrect||records[q.id].attempts!==2||records[q.id].correct!==1)throw Error('wrong score');if(!availableQuestions().some(x=>!records[x.id].lastCorrect))throw Error('mistake review');`);
run(`g$('gLevel').value='B2';if(availableQuestions().some(q=>q.topic.level!=='B2'))throw Error('level');g$('gLevel').value='all';`);
run(`for(const l of GL){gLang=l;gTranslate();if(document.documentElement.dir!==(['ar','fa'].includes(l)?'rtl':'ltr'))throw Error('RTL');}`);
run(`const data=gRead(JSON.stringify(gPayload()));if(Object.keys(data.records).length!==120)throw Error('backup roundtrip');let ok=false;try{gRead(JSON.stringify({app:'WortgartenGrammar',version:1,records:{fake:{}}}));}catch{ok=true}if(!ok)throw Error('invalid import');`);
run(`localStorage.setItem=()=>{throw Error('blocked')};gSave();if(gStorage)throw Error('blocked storage');`);
console.log('PASS: 24 topics / 120 exercises / 24 typed answers; six UI languages; Persian RTL; every answer; double-submit guard; mistakes; level filter; export/import validation; storage failure.');
