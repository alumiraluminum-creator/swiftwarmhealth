const tests={
mental:{title:'اختبار الملعب الداخلي',questions:['بعد خسارة نقطة، أعود للخطة سريعاً.','أستطيع تهدئة نفسي قبل الإرسال.','أتعامل مع الخطأ كمعلومة لا كحكم على مستواي.'],advice:'جرّب 4 دورات تنفس هادئ قبل التدريب، وحدد هدفاً واحداً للمباراة.'},
energy:{title:'مؤشر الطاقة',questions:['نمت بشكل كافٍ الليلة الماضية.','أشعر أن جسمي مستعد لحركة متوسطة.','أستطيع التركيز دون إجهاد واضح.'],advice:'إذا كانت الطاقة منخفضة، اجعل التعافي والحركة الخفيفة أولويتك اليوم.'},
tennis:{title:'جاهزية التنس',questions:['أستطيع الحركة جانبياً دون ألم.','أشعر بثبات جيد في التوازن.','أعرف هدف الحصة القادمة.','أستطيع أداء إحماء خفيف الآن.','لدي ماء ووقت كافٍ للتدريب.'],advice:'ابدأ بإحماء تدريجي، وخفف الحمل إذا ظهر ألم أو دوخة.'},
balance:{title:'توازن العادة',questions:['لدي وقت محدد أستطيع حمايته للحركة.','أعرف أصغر خطوة يمكنني تنفيذها اليوم.','أكافئ الاستمرارية لا الكمال.','أعود بعد الانقطاع دون جلد ذات.'],advice:'اختر عادة صغيرة جداً لمدة 7 أيام ثم زدها تدريجياً.'}
};
const $=id=>document.getElementById(id);let currentTest=null,currentIndex=0,score=0;
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
function openModal(id){const m=$(id);if(!m)return;m.classList.remove('hidden');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeModal(id){const m=$(id);if(!m)return;m.classList.add('hidden');m.setAttribute('aria-hidden','true');if(!document.querySelector('.modal:not(.hidden)'))document.body.style.overflow=''}
function renderTest(key){currentTest=tests[key];if(!currentTest)return;currentIndex=0;score=0;$('modalTitle').textContent=currentTest.title;$('modalResult').classList.add('hidden');renderQuestion();openModal('testModal')}
function renderQuestion(){const total=currentTest.questions.length;$('modalQuestion').textContent=currentTest.questions[currentIndex];$('modalProgress').textContent=(currentIndex+1)+' / '+total;$('modalAnswers').innerHTML='<button class="answer-choice" data-score="1">غالباً</button><button class="answer-choice" data-score="0">أحتاج تدريباً</button>';$('modalAnswers').querySelectorAll('button').forEach(b=>b.onclick=()=>{score+=Number(b.dataset.score);if(currentIndex<total-1){currentIndex++;renderQuestion()}else showResult()})}
function showResult(){const pct=Math.round(score/currentTest.questions.length*100);$('modalQuestion').textContent='اكتمل التقييم';$('modalAnswers').innerHTML='<button id="restartTest" class="answer-choice">إعادة الاختبار</button>';$('modalResult').classList.remove('hidden');$('modalResult').innerHTML='<b>نتيجتك: '+pct+'%</b><br>'+currentTest.advice+'<br><span style="color:var(--mint)">النتيجة إرشادية وليست تشخيصاً.</span>';$('restartTest').onclick=()=>renderTest(Object.keys(tests).find(k=>tests[k]===currentTest))}
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('[data-test]').forEach(b=>b.onclick=()=>renderTest(b.dataset.test));
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
document.querySelectorAll('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)closeModal(m.id)});
document.onkeydown=e=>{if(e.key==='Escape')document.querySelectorAll('.modal:not(.hidden)').forEach(m=>closeModal(m.id))};
$('supportProgram').onclick=()=>{store.set('swiftwarm:support',true);$('supportProgram').textContent='تم تسجيل إعجابك ✓';$('supportProgram').disabled=true;$('supportMessage').textContent='شكراً لمشاركتك';};
if(store.get('swiftwarm:support',false)){ $('supportProgram').textContent='تم تسجيل إعجابك ✓';$('supportProgram').disabled=true}
