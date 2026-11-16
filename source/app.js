'use strict';
const LANGS=['en','uk','tr','ar','ru','fa'];
const TEXT={
language:['Translation language','Мова перекладу','Çeviri dili','لغة الترجمة','Язык перевода'],
eyebrow:['GERMAN, ONE WORD AT A TIME','НІМЕЦЬКА, СЛОВО ЗА СЛОВОМ','HER SEFERİNDE BİR ALMANCA KELİME','الألمانية، كلمة تلو الأخرى','НЕМЕЦКИЙ, СЛОВО ЗА СЛОВОМ'],
headline:['A little practice.<br>A growing vocabulary.','Трохи практики.<br>Більше знайомих слів.','Biraz pratik.<br>Gelişen kelime hazinesi.','قليل من التدريب.<br>مفردات تنمو كل يوم.','Немного практики.<br>Всё больше знакомых слов.'],
intro:['Your personal dictionary and daily practice space. Learn at your own pace.','Твій особистий словник і щоденна практика. Навчайся у власному темпі.','Kişisel sözlüğün ve günlük pratik alanın. Kendi hızında öğren.','قاموسك الشخصي ومساحتك للتدريب اليومي. تعلّم بالوتيرة التي تناسبك.','Твой личный словарь и ежедневная практика. Учись в своём темпе.'],
practiceNow:['Start practising ↗','Почати повторення ↗','Pratiğe başla ↗','ابدأ التدريب ↖','Начать повторение ↗'],
entries:['dictionary entries','записів у словнику','sözlük maddesi','مدخل في القاموس','записей в словаре'],
learned:['words learned','вивчених слів','öğrenilen kelime','كلمة متعلمة','слов изучено'],
due:['ready for review','час повторити','tekrar zamanı gelen','جاهزة للمراجعة','пора повторить'],
progress:['your progress','твій прогрес','ilerlemen','تقدمك','твой прогресс'],
dictionary:['Dictionary','Словник','Sözlük','القاموس','Словарь'],
cards:['Flashcards','Картки','Kelime kartları','بطاقات المراجعة','Карточки'],
backup:['Your progress','Твій прогрес','İlerlemen','تقدمك','Твой прогресс'],
collection:['YOUR COLLECTION','ТВОЯ КОЛЕКЦІЯ','KOLEKSİYONUN','مجموعتك','ТВОЯ КОЛЛЕКЦИЯ'],
search:['Search German or a translation…','Пошук німецькою або за перекладом…','Almanca veya çeviride ara…','ابحث بالألمانية أو بالترجمة…','Поиск по немецкому слову или переводу…'],
filter:['Filter','Фільтр','Filtre','تصفية','Фильтр'],
all:['All words','Усі слова','Tüm kelimeler','كل الكلمات','Все слова'],
new:['Not learned','Ще не вивчені','Henüz öğrenilmemiş','لم تُتعلم بعد','Ещё не изучены'],
known:['Learned','Вивчені','Öğrenildi','تم تعلمها','Изучены'],
starred:['Starred','Обрані','Yıldızlılar','المفضلة','Избранные'],
verifyFilter:['Check transcription','Перевірити текст','Yazımı kontrol et','تحقق من النص','Проверить текст'],
dictHint:['Original order · German synonyms and antonyms are shown where useful. Related words may depend on context.','Початковий порядок · Де доречно, наведено німецькі синоніми й антоніми. Значення залежать від контексту.','Özgün sıra · Uygun yerlerde Almanca eş ve zıt anlamlılar gösterilir. Anlamlar bağlama göre değişebilir.','الترتيب الأصلي · تظهر المرادفات والأضداد الألمانية حيث تفيد. قد تعتمد المعاني على السياق.','Исходный порядок · Где уместно, приведены немецкие синонимы и антонимы. Значения зависят от контекста.'],
noResults:['No matching words. Try a different search.','Нічого не знайдено. Спробуй інший запит.','Eşleşme yok. Farklı bir arama dene.','لا توجد نتائج. جرّب بحثًا آخر.','Ничего не найдено. Попробуй другой запрос.'],
loadMore:['Show more words','Показати більше слів','Daha fazla kelime göster','عرض كلمات أخرى','Показать ещё слова'],
daily:['A LITTLE EVERY DAY','ТРОХИ ЩОДНЯ','HER GÜN BİRAZ','قليل كل يوم','ПОНЕМНОГУ КАЖДЫЙ ДЕНЬ'],
deck:['Deck','Набір','Deste','المجموعة','Набор'],
dueDeck:['Due + new words','До повторення + нові','Tekrarı gelen + yeni','المستحقة + الجديدة','К повторению + новые'],
direction:['Direction','Напрямок','Yön','الاتجاه','Направление'],
deFirst:['German → translation','Німецька → переклад','Almanca → çeviri','الألمانية ← الترجمة','Немецкий → перевод'],
translationFirst:['Translation → German','Переклад → німецька','Çeviri → Almanca','الترجمة ← الألمانية','Перевод → немецкий'],
reveal:['Show answer','Показати відповідь','Cevabı göster','إظهار الإجابة','Показать ответ'],
again:['Again','Ще раз','Tekrar','مرة أخرى','Ещё раз'],
hard:['Hard','Складно','Zor','صعب','Сложно'],
good:['Got it','Знаю','Biliyorum','عرفتها','Знаю'],
skip:['Skip this word →','Пропустити слово →','Bu kelimeyi geç →','تخطّ هذه الكلمة ←','Пропустить слово →'],
restart:['New session ↻','Нова сесія ↻','Yeni oturum ↻','جلسة جديدة ↻','Новая сессия ↻'],
reviewHint:['Again: 1 minute · Hard: 10 minutes · Got it: 1, 3, 7, 14, then 30 days. New words appear in their original order.','Ще раз: 1 хвилина · Складно: 10 хвилин · Знаю: 1, 3, 7, 14, потім 30 днів. Нові слова — у початковому порядку.','Tekrar: 1 dakika · Zor: 10 dakika · Biliyorum: 1, 3, 7, 14, sonra 30 gün. Yeni kelimeler özgün sırada gösterilir.','مرة أخرى: دقيقة · صعب: 10 دقائق · عرفتها: 1، 3، 7، 14، ثم 30 يومًا. تظهر الكلمات الجديدة بالترتيب الأصلي.','Ещё раз: 1 минута · Сложно: 10 минут · Знаю: 1, 3, 7, 14, затем 30 дней. Новые слова — в исходном порядке.'],
keep:['KEEP YOUR GROWTH','ЗБЕРЕЖИ СВІЙ ПРОГРЕС','İLERLEMENİ KORU','احفظ تقدمك','СОХРАНИ СВОЙ ПРОГРЕСС'],
savedHint:['Saved automatically in this browser. Export a backup to move your progress to another device. Clearing browser data removes local progress.','Автоматично зберігається в цьому браузері. Експортуй копію для перенесення на інший пристрій. Очищення даних браузера видаляє прогрес.','Bu tarayıcıda otomatik kaydedilir. Başka cihaza taşımak için yedek dışa aktar. Tarayıcı verilerini temizlemek ilerlemeyi siler.','يُحفظ تلقائيًا في هذا المتصفح. صدّر نسخة لنقل تقدمك إلى جهاز آخر. مسح بيانات المتصفح يحذف التقدم المحلي.','Автоматически сохраняется в этом браузере. Экспортируй копию для переноса на другое устройство. Очистка данных браузера удаляет прогресс.'],
export:['Export progress','Експорт прогресу','İlerlemeyi dışa aktar','تصدير التقدم','Экспорт прогресса'],
import:['Import progress','Імпорт прогресу','İlerlemeyi içe aktar','استيراد التقدم','Импорт прогресса'],
reset:['Reset progress','Скинути прогрес','İlerlemeyi sıfırla','تصفير التقدم','Сбросить прогресс'],
footer:['A small space for a growing vocabulary. No account needed.','Невеликий простір для нових слів. Без реєстрації.','Büyüyen kelime hazinen için küçük bir alan. Hesap gerekmez.','مساحة صغيرة لمفردات تنمو. لا حاجة إلى حساب.','Небольшое пространство для новых слов. Без регистрации.'],
notation:['etw. = something · jdn. = someone (acc.) · jdm. = someone (dat.) · ⸚ = plural with umlaut · Sg. = singular · Pl. = plural','etw. = щось · jdn. = когось (Akk.) · jdm. = комусь (Dat.) · ⸚ = умлаут у множині · Sg. = однина · Pl. = множина','etw. = bir şey · jdn. = birini (Akk.) · jdm. = birine (Dat.) · ⸚ = çoğulda ünlü değişimi · Sg. = tekil · Pl. = çoğul','etw. = شيء · jdn. = شخص في النصب · jdm. = شخص في الداتيف · ⸚ = جمع مع إمالة صوتية · Sg. = مفرد · Pl. = جمع','etw. = что-либо · jdn. = кого-либо (Akk.) · jdm. = кому-либо (Dat.) · ⸚ = умлаут во множественном числе · Sg. = ед. ч. · Pl. = мн. ч.'],
resetConfirm:['Delete all learning progress and stars from this browser? Export a backup first if you want to keep them.','Видалити прогрес і обрані слова з цього браузера? Щоб зберегти їх, спочатку експортуй копію.','Bu tarayıcıdaki tüm ilerleme ve yıldızlar silinsin mi? Saklamak için önce yedek dışa aktar.','هل تريد حذف كل التقدم والمفضلة من هذا المتصفح؟ صدّر نسخة أولًا للاحتفاظ بها.','Удалить весь прогресс и избранное из этого браузера? Чтобы сохранить их, сначала экспортируй копию.'],
cancel:['Cancel','Скасувати','Vazgeç','إلغاء','Отмена'],
delete:['Delete progress','Видалити прогрес','İlerlemeyi sil','حذف التقدم','Удалить прогресс'],
syn:['Synonyms','Синоніми','Eş anlamlılar','مرادفات','Синонимы'],
ant:['Antonyms','Антоніми','Zıt anlamlılar','أضداد','Антонимы'],
mark:['Mark learned','Позначити вивченим','Öğrenildi işaretle','تحديد كمتعلّمة','Отметить изученным'],
unmark:['✓ Learned','✓ Вивчено','✓ Öğrenildi','✓ تم تعلمها','✓ Изучено'],
star:['Add to favourites','Додати до обраних','Favorilere ekle','إضافة إلى المفضلة','Добавить в избранное'],
unstar:['Remove from favourites','Прибрати з обраних','Favorilerden kaldır','إزالة من المفضلة','Убрать из избранного'],
speak:['Listen in German','Слухати німецькою','Almanca dinle','استمع بالألمانية','Слушать по-немецки'],
verify:['The print is unclear in the photo. Please verify this transcription.','Друк на фото нечіткий. Перевір цей запис.','Fotoğraftaki yazı net değil. Lütfen bu metni kontrol et.','الطباعة غير واضحة في الصورة. يرجى التحقق من هذا النص.','Печать на фото нечёткая. Этот текст нужно проверить.'],
noCards:['All done for now. Come back later, or choose “All words”.','Наразі все! Повертайся пізніше або обери «Усі слова».','Şimdilik tamam! Sonra gel veya “Tüm kelimeler”i seç.','انتهيت الآن! عُد لاحقًا أو اختر «كل الكلمات».','Пока всё! Возвращайся позже или выбери «Все слова».'],
noStar:['Star some words in the dictionary to practise them here.','Додай слова до обраних, щоб повторювати їх тут.','Burada çalışmak için sözlükte kelimelere yıldız ekle.','أضف كلمات إلى المفضلة للتدرب عليها هنا.','Добавь слова в избранное, чтобы повторять их здесь.'],
reviewed:['Reviewed this session','Повторено за сесію','Bu oturumda tekrar edilen','تمت مراجعتها في الجلسة','Повторено за сессию'],
saved:['Progress saved on this device.','Прогрес збережено на цьому пристрої.','İlerleme bu cihaza kaydedildi.','حُفظ التقدم على هذا الجهاز.','Прогресс сохранён на этом устройстве.'],
blocked:['Browser storage is unavailable. Export your progress before closing this page.','Сховище браузера недоступне. Експортуй прогрес перед закриттям сторінки.','Tarayıcı depolaması kullanılamıyor. Sayfayı kapatmadan ilerlemeyi dışa aktar.','تخزين المتصفح غير متاح. صدّر تقدمك قبل إغلاق الصفحة.','Хранилище браузера недоступно. Экспортируй прогресс перед закрытием страницы.'],
invalid:['This is not a valid Wortgarten backup. Nothing was changed.','Це не дійсна копія Wortgarten. Нічого не змінено.','Bu geçerli bir Wortgarten yedeği değil. Hiçbir şey değişmedi.','هذه ليست نسخة Wortgarten صالحة. لم يتغير شيء.','Это не корректная копия Wortgarten. Ничего не изменено.'],
imported:['Progress imported and merged.','Прогрес імпортовано й об’єднано.','İlerleme içe aktarıldı ve birleştirildi.','تم استيراد التقدم ودمجه.','Прогресс импортирован и объединён.'],
resetDone:['Progress reset.','Прогрес скинуто.','İlerleme sıfırlandı.','تم تصفير التقدم.','Прогресс сброшен.'],
noVoice:['German speech is unavailable in this browser.','Озвучення німецькою недоступне в цьому браузері.','Bu tarayıcıda Almanca seslendirme yok.','النطق الألماني غير متاح في هذا المتصفح.','Немецкое озвучивание недоступно в этом браузере.'],
seen:['shown','показано','gösteriliyor','معروضة','показано'],
unique:['unique words','унікальних слів','benzersiz kelime','كلمات فريدة','уникальных слов'],
relatedNote:['Related terms are in German.','Пов’язані слова німецькою.','İlgili kelimeler Almancadır.','الكلمات المرتبطة بالألمانية.','Связанные слова на немецком.']
};
TEXT["language"].push("زبان ترجمه");
TEXT["eyebrow"].push("آلمانی، هر بار یک واژه");
TEXT["headline"].push("کمی تمرین.<br>واژگانی بیشتر.");
TEXT["intro"].push("فرهنگ واژگان شخصی و فضای تمرین روزانه شما. با سرعت خودتان یاد بگیرید.");
TEXT["practiceNow"].push("شروع تمرین ↖");
TEXT["entries"].push("مدخل در فرهنگ واژگان");
TEXT["learned"].push("واژه آموخته‌شده");
TEXT["due"].push("آماده مرور");
TEXT["progress"].push("پیشرفت شما");
TEXT["dictionary"].push("فرهنگ واژگان");
TEXT["cards"].push("فلش‌کارت‌ها");
TEXT["backup"].push("پیشرفت شما");
TEXT["collection"].push("مجموعه شما");
TEXT["search"].push("جستجو به آلمانی یا در ترجمه‌ها…");
TEXT["filter"].push("فیلتر");
TEXT["all"].push("همه واژه‌ها");
TEXT["new"].push("هنوز آموخته نشده");
TEXT["known"].push("آموخته‌شده");
TEXT["starred"].push("نشان‌دارها");
TEXT["verifyFilter"].push("بررسی متن");
TEXT["dictHint"].push("ترتیب اصلی · مترادف‌ها و متضادهای آلمانی در موارد مناسب نمایش داده می‌شوند. معنی‌ها به بافت بستگی دارند.");
TEXT["noResults"].push("نتیجه‌ای پیدا نشد. عبارت دیگری را امتحان کنید.");
TEXT["loadMore"].push("نمایش واژه‌های بیشتر");
TEXT["daily"].push("هر روز کمی تمرین");
TEXT["deck"].push("مجموعه");
TEXT["dueDeck"].push("موعد مرور + واژه‌های جدید");
TEXT["direction"].push("جهت");
TEXT["deFirst"].push("آلمانی ← ترجمه");
TEXT["translationFirst"].push("ترجمه ← آلمانی");
TEXT["reveal"].push("نمایش پاسخ");
TEXT["again"].push("دوباره");
TEXT["hard"].push("دشوار");
TEXT["good"].push("بلدم");
TEXT["skip"].push("رد کردن این واژه ←");
TEXT["restart"].push("جلسه جدید ↻");
TEXT["reviewHint"].push("دوباره: ۱ دقیقه · دشوار: ۱۰ دقیقه · بلدم: ۱، ۳، ۷، ۱۴ و سپس ۳۰ روز. واژه‌های جدید به ترتیب اصلی نمایش داده می‌شوند.");
TEXT["keep"].push("پیشرفت خود را نگه دارید");
TEXT["savedHint"].push("به‌طور خودکار در این مرورگر ذخیره می‌شود. برای انتقال به دستگاه دیگر نسخه پشتیبان بگیرید. پاک کردن داده‌های مرورگر پیشرفت محلی را حذف می‌کند.");
TEXT["export"].push("دریافت نسخه پشتیبان");
TEXT["import"].push("وارد کردن پیشرفت");
TEXT["reset"].push("بازنشانی پیشرفت");
TEXT["footer"].push("فضایی کوچک برای واژگانی رو به رشد. نیازی به حساب کاربری نیست.");
TEXT["notation"].push("etw. = چیزی · jdn. = کسی در حالت Akk. · jdm. = کسی در حالت Dat. · ⸚ = جمع با اوملاوت · Sg. = مفرد · Pl. = جمع");
TEXT["resetConfirm"].push("همه پیشرفت و نشان‌ها از این مرورگر حذف شوند؟ برای نگه داشتن آن‌ها ابتدا نسخه پشتیبان بگیرید.");
TEXT["cancel"].push("لغو");
TEXT["delete"].push("حذف پیشرفت");
TEXT["syn"].push("مترادف‌ها");
TEXT["ant"].push("متضادها");
TEXT["mark"].push("آموخته شد");
TEXT["unmark"].push("✓ آموخته‌شده");
TEXT["star"].push("افزودن به نشان‌دارها");
TEXT["unstar"].push("حذف از نشان‌دارها");
TEXT["speak"].push("شنیدن به آلمانی");
TEXT["verify"].push("چاپ در عکس واضح نیست. لطفاً این متن را بررسی کنید.");
TEXT["noCards"].push("فعلاً تمام شد! بعداً برگردید یا «همه واژه‌ها» را انتخاب کنید.");
TEXT["noStar"].push("برای تمرین در اینجا، واژه‌هایی را در فرهنگ نشان‌دار کنید.");
TEXT["reviewed"].push("مرور در این جلسه");
TEXT["saved"].push("پیشرفت در این دستگاه ذخیره شد.");
TEXT["blocked"].push("حافظه مرورگر در دسترس نیست. پیش از بستن صفحه نسخه پشتیبان بگیرید.");
TEXT["invalid"].push("این نسخه پشتیبان معتبر Wortgarten نیست. چیزی تغییر نکرد.");
TEXT["imported"].push("پیشرفت وارد و ادغام شد.");
TEXT["resetDone"].push("پیشرفت بازنشانی شد.");
TEXT["noVoice"].push("خواندن آلمانی در این مرورگر در دسترس نیست.");
TEXT["seen"].push("نمایش داده شده");
TEXT["unique"].push("واژه یکتا");
TEXT["relatedNote"].push("واژه‌های مرتبط به آلمانی هستند.");
TEXT.grammar=['Grammatik Übungen ↗','Граматичні вправи ↗','Dil bilgisi alıştırmaları ↗','تمارين القواعد ↖','Упражнения по грамматике ↗','تمرین‌های دستور زبان ↖'];
TEXT.topic=['Topic','Тема','Konu','الموضوع','Тема','موضوع'];
TEXT.allTopics=['All topics','Усі теми','Tüm konular','كل المواضيع','Все темы','همه موضوع‌ها'];
TEXT.dictHint=['Grouped by topic · Original order within each topic. German synonyms and antonyms depend on context.','За темами · Усередині теми збережено початковий порядок. Німецькі синоніми й антоніми залежать від контексту.','Konulara göre · Her konuda özgün sıra korunur. Almanca eş ve zıt anlamlılar bağlama bağlıdır.','مرتبة حسب الموضوع · الترتيب الأصلي داخل كل موضوع. المرادفات والأضداد الألمانية تعتمد على السياق.','По темам · Внутри темы сохранён исходный порядок. Немецкие синонимы и антонимы зависят от контекста.','دسته‌بندی بر اساس موضوع · ترتیب اصلی در هر موضوع حفظ شده است. مترادف‌ها و متضادهای آلمانی به بافت بستگی دارند.'];
TEXT.reviewHint=['Again: 1 minute · Hard: 10 minutes · Got it: 1, 3, 7, 14, then 30 days. New words follow the selected topic order.','Ще раз: 1 хвилина · Складно: 10 хвилин · Знаю: 1, 3, 7, 14, потім 30 днів. Нові слова йдуть за порядком обраних тем.','Tekrar: 1 dakika · Zor: 10 dakika · Biliyorum: 1, 3, 7, 14, sonra 30 gün. Yeni kelimeler seçilen konu sırasındadır.','مرة أخرى: دقيقة · صعب: 10 دقائق · عرفتها: 1، 3، 7، 14، ثم 30 يومًا. الكلمات الجديدة حسب ترتيب المواضيع المحددة.','Ещё раз: 1 минута · Сложно: 10 минут · Знаю: 1, 3, 7, 14, затем 30 дней. Новые слова идут в порядке выбранных тем.','دوباره: ۱ دقیقه · دشوار: ۱۰ دقیقه · بلدم: ۱، ۳، ۷، ۱۴ و سپس ۳۰ روز. واژه‌های جدید به ترتیب موضوع‌های انتخاب‌شده هستند.'];
const $=id=>document.getElementById(id);
const STORE='wortgarten.v1';
let lang='en', progress={}, storageOK=true, visible=24, toastTimer, session={done:0,skipped:new Set(),current:null,revealed:false};
const normalize=s=>s.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');
// Progress remains keyed by the original German headword across topics.
const keyOf=w=>w.de.replace(/ \(Sg\.\)/g,'').trim();
const KEYS=new Set(WORDS.map(keyOf));
const deduplicate=words=>[...new Map(words.map(w=>[keyOf(w),w])).keys()].map(key=>words.find(w=>keyOf(w)===key));
const unique=deduplicate(WORDS);
const topicWords=topic=>topic==='all'?WORDS:WORDS.filter(w=>w.topic===topic);
const topicName=id=>TOPICS.find(topic=>topic.id===id)?.de||'';
const t=k=>(TEXT[k]||[k])[LANGS.indexOf(lang)]||k;
function validRecord(r){return r&&typeof r==='object'&&!Array.isArray(r)&&typeof r.known==='boolean'&&typeof r.star==='boolean'&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5&&Number.isFinite(r.due)&&r.due>=0&&Number.isFinite(r.updated)&&r.updated>=0;}
function readState(raw){
 const s=JSON.parse(raw);if(!s||s.version!==1||!s.progress||typeof s.progress!=='object'||Array.isArray(s.progress))throw Error('Invalid');
 const clean={};for(const [k,v]of Object.entries(s.progress)){if(!KEYS.has(k)||!validRecord(v))throw Error('Invalid');clean[k]={known:v.known,star:v.star,level:v.level,due:v.due,updated:v.updated};}
 return {progress:clean,lang:LANGS.includes(s.lang)?s.lang:'en'};
}
try{const raw=localStorage.getItem(STORE);if(raw){const s=readState(raw);lang=s.lang;progress=s.progress;}}catch(e){storageOK=false;}
const status=w=>progress[keyOf(w)]||{known:false,star:false,level:0,due:0,updated:0};
function payload(){return {app:'Wortgarten',version:1,lang,exportedAt:new Date().toISOString(),progress};}
function save(){try{localStorage.setItem(STORE,JSON.stringify(payload()));storageOK=true;}catch(e){storageOK=false;} $('saveStatus').textContent=t(storageOK?'saved':'blocked');}
function update(w,changes){progress[keyOf(w)]={...status(w),...changes,updated:Date.now()};save();}
function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').hidden=false;toastTimer=setTimeout(()=>$('toast').hidden=true,4500);}
function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
function related(w,target){
 target.replaceChildren();const r=RELATIONS[w.de];if(!r)return;
 r.forEach((v,i)=>{if(!v)return;const line=el('div','relationLine');line.append(el('span','relationLabel',t(i?'ant':'syn')));const terms=el('b','',v);terms.lang='de';terms.dir='ltr';line.append(terms);target.append(line);});
}
function renderTopicNav(){
 const nav=$('topicNav');nav.replaceChildren();nav.setAttribute('aria-label',t('topic'));
 TOPICS.forEach(topic=>{const words=deduplicate(topicWords(topic.id)),known=words.filter(w=>status(w).known).length;
 const button=el('button','topicTile');button.setAttribute('aria-pressed',$('topic').value===topic.id);
 const name=el('span','topicName',topic.de);name.lang='de';name.dir='ltr';button.append(name,el('span','small',known+' / '+words.length+' · '+t('learned')));
 button.onclick=()=>{$('topic').value=topic.id;selectDictionaryTopic();};nav.append(button);});
}
function selectDictionaryTopic(){visible=24;$('practiceTopic').value=$('topic').value;renderTopicNav();renderWords();newSession();}
function stats(){
 renderTopicNav();
 const learned=unique.filter(w=>status(w).known).length;
 const due=unique.filter(w=>status(w).due>0&&status(w).due<=Date.now()).length;
 $('total').textContent=WORDS.length;$('learned').textContent=learned;$('due').textContent=due;
 const pct=Math.round(learned/unique.length*100);$('percent').textContent=pct+'%';$('progress').value=pct;$('progress').setAttribute('aria-label',t('progress'));
}
function matches(){const q=normalize($('search').value.trim()),filter=$('filter').value;return topicWords($('topic').value||'all').filter(w=>{
 const s=status(w);if(filter==='new'&&s.known||filter==='known'&&!s.known||filter==='star'&&!s.star||filter==='verify'&&!w.verify)return false;
 return !q||normalize([w.de,...LANGS.map(l=>w[l]),...(RELATIONS[w.de]||[])].join(' ')).includes(q);
});}
function speak(w){if(!('speechSynthesis'in window)){toast(t('noVoice'));return;}const synth=window.speechSynthesis;synth.cancel();const msg=new SpeechSynthesisUtterance(w.de.replace(/^(der|die|das) /,'$1 ').split(',')[0].replace(/\([^)]*\)/g,''));msg.lang='de-DE';const voice=synth.getVoices().find(v=>v.lang.startsWith('de'));if(voice)msg.voice=voice;msg.onerror=()=>toast(t('noVoice'));synth.speak(msg);}
function renderWords(){
 const list=$('wordList'),result=matches();list.replaceChildren();$('empty').hidden=result.length>0;$('loadMore').hidden=visible>=result.length;
 $('resultCount').textContent=`${Math.min(visible,result.length)} / ${result.length} ${t('seen')}`;
 let previousTopic=null;
 result.slice(0,visible).forEach(w=>{
  if(w.topic!==previousTopic){const group=el('h3','topicHeading');const name=el('span','',topicName(w.topic));name.lang='de';name.dir='ltr';group.append(name,el('span','small',result.filter(item=>item.topic===w.topic).length+' '+t('entries')));list.append(group);previousTopic=w.topic;}
  const s=status(w),article=el('article','word'+(s.known?' known':''));article.id=w.id;
  const heading=el('div','wordHeading'),titleWrap=el('div');titleWrap.append(el('span','wordNo',String(WORDS.indexOf(w)+1).padStart(3,'0')));const title=el('h4','',w.de);title.lang='de';title.dir='ltr';titleWrap.append(title);
  const star=el('button','iconButton'+(s.star?' starred':''),s.star?'★':'☆');star.setAttribute('aria-label',t(s.star?'unstar':'star'));star.setAttribute('aria-pressed',s.star);star.onclick=()=>{update(w,{star:!s.star});renderWords();stats();};heading.append(titleWrap,star);article.append(heading);
  const translation=el('p','translation',w[lang]);translation.lang=lang;translation.dir=['ar','fa'].includes(lang)?'rtl':'auto';article.append(translation);
  const relation=el('div','relations');related(w,relation);article.append(relation);
  if(w.verify)article.append(el('div','verify',t('verify')));
  const foot=el('div','wordFoot'),learn=el('button','learnButton',t(s.known?'unmark':'mark'));learn.setAttribute('aria-pressed',s.known);learn.onclick=()=>{const wasKnown=status(w).known;update(w,{known:!wasKnown,level:wasKnown?0:1,due:wasKnown?0:Date.now()+86400000});renderWords();stats();};
  const sound=el('button','iconButton sound','▷');sound.setAttribute('aria-label',t('speak'));sound.title=t('speak');sound.onclick=()=>speak(w);foot.append(learn,sound);article.append(foot);list.append(article);
 });
}
function eligible(){const deck=$('deck').value,now=Date.now();return deduplicate(topicWords($('practiceTopic').value||'all')).filter(w=>{const s=status(w);if(deck==='star')return s.star;if(deck==='new')return !s.known;if(deck==='due')return !s.due||s.due<=now;return true;});}
function pickCard(){
 const deck=$('deck').value;
 let pool=eligible().filter(w=>!session.skipped.has(keyOf(w)));
 if(deck==='due')pool.sort((a,b)=>{const aDue=status(a).due,bDue=status(b).due;return (aDue===0)-(bDue===0)||(aDue-bDue);});
 session.current=pool[0]||null;session.revealed=false;renderCard();
}
function renderCard(){
 const w=session.current,translationFirst=$('direction').value==='translation';
 $('cardLabel').textContent=translationFirst?$('language').selectedOptions[0].text:'DEUTSCH';
 $('practiceTopicLabel').textContent=w?topicName(w.topic):'';
 $('cardCounter').textContent=`${session.done} ${t('reviewed')}`;
 $('cardAnswer').hidden=!session.revealed;$('ratings').hidden=!session.revealed||!w;$('reveal').hidden=session.revealed||!w;$('skip').disabled=!w;$('cardMessage').textContent='';
 if(!w){$('cardFront').textContent='✳';$('cardMessage').textContent=t($('deck').value==='star'?'noStar':'noCards');return;}
 $('cardFront').textContent=translationFirst?w[lang]:w.de;$('cardFront').lang=translationFirst?lang:'de';$('cardFront').dir=translationFirst&&['ar','fa'].includes(lang)?'rtl':'ltr';
 $('cardBack').textContent=translationFirst?w.de:w[lang];$('cardBack').lang=translationFirst?'de':lang;$('cardBack').dir=!translationFirst&&['ar','fa'].includes(lang)?'rtl':'ltr';related(w,$('cardRelated'));
 if(w.verify)$('cardMessage').textContent=t('verify');
}
function newSession(){session={done:0,skipped:new Set(),current:null,revealed:false};pickCard();}
function rate(rating){
 if(!session.current||!session.revealed)return;
 const w=session.current,s=status(w),now=Date.now(),intervals=[1,3,7,14,30];
 if(rating==='good'){const level=Math.min(s.level+1,5);update(w,{known:true,level,due:now+intervals[level-1]*86400000});}
 else update(w,{known:false,level:rating==='again'?0:s.level,due:now+(rating==='again'?60000:600000)});
 session.done++;session.skipped.add(keyOf(w));stats();renderWords();pickCard();
}
function translate(){
 document.documentElement.lang=lang;document.documentElement.dir=['ar','fa'].includes(lang)?'rtl':'ltr';$('language').value=lang;document.querySelectorAll('.grammarLink').forEach(a=>a.href='grammar.html?lang='+lang);
 document.querySelectorAll('[data-i]').forEach(n=>{const value=t(n.dataset.i);if(n.dataset.i==='headline'){n.replaceChildren();value.split('<br>').forEach((line,i)=>{if(i)n.append(document.createElement('br'));n.append(document.createTextNode(line));});}else n.textContent=value;});
 document.querySelectorAll('[data-placeholder]').forEach(n=>{n.placeholder=t(n.dataset.placeholder);n.setAttribute('aria-label',t(n.dataset.placeholder));});
 $('saveStatus').textContent=t(storageOK?'saved':'blocked');document.title='Wortgarten · '+t('dictionary');stats();renderWords();renderCard();
}
$('language').onchange=e=>{lang=e.target.value;save();translate();};
$('search').oninput=()=>{visible=24;renderWords();};$('filter').onchange=()=>{visible=24;renderWords();};
$('loadMore').onclick=()=>{visible+=24;renderWords();};
$('topic').onchange=selectDictionaryTopic;$('practiceTopic').onchange=newSession;
$('deck').onchange=newSession;$('direction').onchange=()=>{session.revealed=false;renderCard();};
$('reveal').onclick=()=>{if(!session.current)return;session.revealed=true;renderCard();};
document.querySelectorAll('[data-rating]').forEach(b=>b.onclick=()=>rate(b.dataset.rating));
$('skip').onclick=()=>{if(session.current)session.skipped.add(keyOf(session.current));pickCard();};$('restart').onclick=newSession;
$('export').onclick=()=>{const blob=new Blob([JSON.stringify(payload(),null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=el('a');a.href=url;a.download='wortgarten-progress-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('import').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>5_000_000)throw Error('Too large');const incoming=readState(await file.text());const merged={...progress};for(const [key,value]of Object.entries(incoming.progress)){if(!merged[key]||value.updated>=merged[key].updated)merged[key]=value;}progress=merged;save();newSession();translate();toast(t('imported'));}catch(err){toast(t('invalid'));}finally{e.target.value='';}};
$('reset').onclick=()=>$('confirmDialog').showModal();$('cancelReset').onclick=()=>$('confirmDialog').close();$('confirmReset').onclick=()=>{progress={};save();$('confirmDialog').close();newSession();translate();toast(t('resetDone'));};
window.addEventListener('storage',e=>{if(e.key!==STORE)return;try{if(e.newValue){const incoming=readState(e.newValue);progress=incoming.progress;lang=incoming.lang;}else progress={};translate();newSession();}catch(err){/* Do not overwrite valid in-memory data with an invalid external update. */}});
// Refresh due counts when returning to the tab; a new session picks up newly due cards.
document.addEventListener('visibilitychange',()=>{if(!document.hidden){stats();if(!session.current)pickCard();}});
for(const select of [$('topic'),$('practiceTopic')]){for(const topic of TOPICS){const option=el('option','',topic.de);option.value=topic.id;option.lang='de';option.dir='ltr';select.append(option);}}
newSession();translate();

// The downloadable single-file edition embeds grammar and opens it on a user gesture.
document.querySelectorAll('.grammarLink').forEach(a=>a.addEventListener('click',event=>{
 if(!window.GRAMMAR_HTML)return;
 event.preventDefault();
 const tab=window.open('','_blank');
 if(!tab){toast(['Allow a new tab/window to open grammar.','Дозволь відкриття нового вікна для граматики.','Dil bilgisi için yeni pencereye izin ver.','اسمح بفتح نافذة جديدة للقواعد.','Разреши открытие нового окна для грамматики.','برای دستور زبان اجازه باز شدن پنجره جدید را بدهید.'][LANGS.indexOf(lang)]);return;}
 const initial='<script>window.WORTGARTEN_INITIAL_LANGUAGE='+JSON.stringify(lang)+';<'+ '/script>';
 tab.document.open();tab.document.write(window.GRAMMAR_HTML.replace('<head>','<head>'+initial));tab.document.close();
}));
