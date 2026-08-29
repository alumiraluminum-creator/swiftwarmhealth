const tests={
  mental:{title:'الملعب الداخلي',label:'التركيز تحت الضغط',questions:[
    'بعد خسارة نقطة، أعود للخطة سريعاً.',
    'أستطيع تهدئة نفسي قبل الإرسال أو البداية.',
    'لا أسمح لخطأ واحد أن يحدد أدائي كله.',
    'أعرف ما الذي أريد تحسينه في الحصة القادمة.',
    'أستطيع التركيز على النقطة الحالية بدل التفكير في النتيجة.'
  ],low:'ابدأ بتدريب ذهني قصير: نفس هادئ، كلمة مفتاحية واحدة، ثم عد إلى المهمة الحالية.',high:'لديك أساس جيد للتركيز. اجعل هدف كل حصة سلوكاً واحداً قابلاً للملاحظة.'},
  energy:{title:'مؤشر الطاقة',label:'إدارة طاقة اليوم',questions:[
    'نمت بشكل مناسب بالنسبة لي.',
    'أشعر أن جسمي مستعد لحركة خفيفة أو متوسطة.',
    'تركيزي اليوم جيد دون إجهاد غير معتاد.',
    'شربت سوائل كافية خلال اليوم.',
    'أستطيع تخصيص وقت هادئ للتعافي إذا احتجت.'
  ],low:'اجعل اليوم أخف: حركة لطيفة، سوائل، وطعام متوازن ونوم أفضل. لا تحاول تعويض الإرهاق بضغط إضافي.',high:'طاقتك تبدو جيدة. استغلها في جلسة تدريب مناسبة مع إحماء وتعافٍ بعد النشاط.'},
  tennis:{title:'جاهزية التنس',label:'الاستعداد قبل الملعب',questions:[
    'أستطيع الحركة جانبياً دون ألم.',
    'أشعر بثبات جيد في التوازن.',
    'أعرف هدف الحصة القادمة.',
    'أستطيع أداء إحماء تدريجي الآن.',
    'لدي ماء ووقت كافٍ للتدريب.'
  ],low:'خفف الحمل وابدأ بإحماء تدريجي. إذا ظهر ألم أو دوخة أو عرض مقلق، أوقف النشاط واطلب تقييماً متخصصاً.',high:'جاهز مبدئياً لحصة منظمة. ابدأ بالإحماء ثم انتقل تدريجياً إلى المهارات الأساسية قبل رفع الشدة.'},
  balance:{title:'توازن العادة',label:'الاستمرارية',questions:[
    'لدي وقت محدد أستطيع حمايته للحركة.',
    'أعرف أصغر خطوة أستطيع تنفيذها اليوم.',
    'أكافئ الاستمرارية لا الكمال.',
    'إذا انقطعت، أستطيع العودة دون جلد ذات.',
    'بيئتي تساعدني على تذكر العادة.'
  ],low:'مشكلتك ليست بالضرورة في الإرادة؛ صغّر العادة. عشر دقائق ثابتة أفضل من خطة ضخمة لا تستمر.',high:'أساس الاستمرارية لديك جيد. جرّب تحدي 7 أيام بنفس الموعد ونفس البداية الصغيرة.'},
  nutrition:{title:'بوصلة التغذية',nutrition:true}
};
const plans={
  loss:{title:'تخفيف الوزن بدون تجويع',text:'الفكرة ليست حذف الطعام؛ بل بناء يوم أكثر اتزاناً مع حركة منتظمة ونوم أفضل. تجنب الوعود السريعة والحرمان القاسي.',items:[['الصباح','بروتين + مصدر حبوب كاملة + فاكهة','مثال: بيض مع خبز كامل وخضار وفاكهة.'],['الغداء','نصف الطبق خضار + بروتين + نشويات مناسبة','اختر الشوي أو الطهي البسيط وراقب حجم الحصة.'],['المساء','وجبة أخف حسب جوعك ونشاطك','زبادي أو جبن مناسب مع خضار أو فاكهة خيار عملي.']]},
  gain:{title:'زيادة الوزن بصورة متوازنة',text:'زيادة الوزن الصحية تحتاج انتظاماً وطاقة غذائية كافية، لا الاعتماد على الحلويات والوجبات السريعة وحدها. عند وجود مشكلة صحية أو نقص وزن واضح، استشر مختصاً.',items:[['الصباح','وجبة كاملة + إضافة مغذية','أضف مصدراً للطاقة والبروتين إلى وجبتك الأساسية.'],['الغداء','وجبة كاملة مع مصدر بروتين','لا تتخطَّ الوجبات، وأضف وجبة خفيفة مغذية عند الحاجة.'],['المساء','وجبة متوازنة أو سناك مغذٍ','مثل زبادي مع مكسرات أو ساندويتش بسيط حسب احتياجك.']]},
  fitness:{title:'لياقة أفضل',text:'لا تحتاج إلى خطة معقدة. اجمع بين قوة وحركة هوائية ومرونة، وابدأ بحجم يمكنك الاستمرار عليه.',items:[['الحركة','20–30 دقيقة من نشاط مناسب','المشي السريع أو الدراجة أو السباحة حسب قدرتك.'],['القوة','تمارين مقاومة مرتان أسبوعياً','ابدأ بحركات أساسية وبشدة تسمح بتكنيك جيد.'],['التعافي','نوم وحركة خفيفة','خصص وقتاً للتعافي ولا تجعل كل الأيام عالية الشدة.']]}
};
let currentTest=null,currentIndex=0,score=0;
const $=id=>document.getElementById(id);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
function openModal(id){const m=$(id);if(!m)return;m.classList.remove('hidden');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){const m=$(id);if(!m)return;m.classList.add('hidden');m.setAttribute('aria-hidden','true');if(!document.querySelector('.modal:not(.hidden)'))document.body.style.overflow=''}
function renderTest(key){currentTest=tests[key];if(!currentTest)return;if(currentTest.nutrition){showPlan(store.get('swiftwarm:plan','loss'));closeModal('testModal');$('plans')?.scrollIntoView({behavior:'smooth'});return}currentIndex=0;score=0;$('modalTitle').textContent=currentTest.title;$('modalResult').classList.add('hidden');$('modalResult').innerHTML='';renderQuestion();openModal('testModal')}
function renderQuestion(){const total=currentTest.questions.length;$('modalQuestion').textContent=currentTest.questions[currentIndex];$('modalProgress').textContent=(currentIndex+1)+' / '+total;$('modalAnswers').innerHTML='<button class="answer-choice" data-score="2">نعم، غالباً</button><button class="answer-choice" data-score="1">أحياناً</button><button class="answer-choice" data-score="0">ليس بعد</button>';$('modalAnswers').querySelectorAll('button').forEach(b=>b.onclick=()=>{score+=Number(b.dataset.score);if(currentIndex<total-1){currentIndex++;renderQuestion()}else showResult()})}
function showResult(){const pct=Math.round(score/(currentTest.questions.length*2)*100);const strong=pct>=70;const medium=pct>=45;$('modalQuestion').textContent='تحليلك اكتمل';$('modalProgress').textContent='نتيجة شخصية';$('modalAnswers').innerHTML='<button id="restartTest" class="answer-choice">إعادة التقييم</button><button id="goPlans" class="answer-choice">افتح خطتي الغذائية والرياضية ←</button>';$('modalResult').classList.remove('hidden');const tone=strong?'ممتاز — لديك أساس قوي يمكن البناء عليه.':medium?'جيد — لديك أساس واضح، لكن هناك مساحة للتحسين.':'هنا توجد فرصة حقيقية للتحسين، والأفضل أن تبدأ بخطوة صغيرة.';const advice=strong?currentTest.high:currentTest.low;$('modalResult').innerHTML='<b>'+tone+'</b><div class="result-score"><span>مؤشر '+currentTest.label+'</span><strong>'+pct+'%</strong></div><div class="result-bar"><i style="width:'+pct+'%"></i></div><p>'+advice+'</p><small>هذه أداة توعوية عامة وليست تشخيصاً طبياً أو نفسياً.</small>';$('restartTest').onclick=()=>renderTest(Object.keys(tests).find(k=>tests[k]===currentTest));$('goPlans').onclick=()=>{closeModal('testModal');$('plans')?.scrollIntoView({behavior:'smooth'})}}
function showPlan(key){const p=plans[key]||plans.loss;$('planContent').innerHTML='<h3>'+p.title+'</h3><p>'+p.text+'</p><div class="plan-grid">'+p.items.map((x,i)=>'<article class="plan-item"><b>0'+(i+1)+'</b><strong>'+x[0]+' · '+x[1]+'</strong><span>'+x[2]+'</span></article>').join('')+'</div>';document.querySelectorAll('[data-plan]').forEach(b=>b.classList.toggle('active',b.dataset.plan===key));store.set('swiftwarm:plan',key)}
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('[data-test]').forEach(b=>b.onclick=()=>renderTest(b.dataset.test));
document.querySelectorAll('[data-plan]').forEach(b=>b.onclick=()=>showPlan(b.dataset.plan));
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
document.querySelectorAll('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)closeModal(m.id)});
document.onkeydown=e=>{if(e.key==='Escape')document.querySelectorAll('.modal:not(.hidden)').forEach(m=>closeModal(m.id))};
$('supportProgram')?.addEventListener('click',()=>{$('programDetails')?.scrollIntoView({behavior:'smooth',block:'start'});$('supportMessage').textContent='هذه هي المحاور بالتفصيل — اقرأها ثم كوّن رأيك.'});
showPlan(store.get('swiftwarm:plan','loss'));

const discoverContent={
 kids:{title:'اكتشف نفسك الرياضية — للأطفال',text:'تجربة خفيفة تساعد الطفل على اكتشاف ما يحبه في الرياضة: المنافسة، الحركة، التعاون أو المهارة. لا توجد إجابة صحيحة وأخرى خاطئة.',points:[['الميل الرياضي','هل تستمتع بالحركة واللعب أم المهارات الدقيقة؟'],['روح الفريق','كيف تتعامل مع زملائك عندما تفوز أو تخسر؟'],['الخطوة التالية','اختيار نشاط مناسب وتجربته قبل الحكم عليه.']]},
 teens:{title:'الصحة النفسية للمراهق',text:'مساحة توعوية لفهم الضغط الرياضي، المقارنة، الخوف من الفشل والثقة بالنفس. لا يقدم التطبيق تشخيصاً؛ وعند الضيق المستمر أو الخطر يجب طلب دعم من شخص بالغ موثوق أو مختص.',points:[['الضغط','التفريق بين ضغط يحفزك وضغط يستنزفك.'],['المقارنة','نتيجتك ليست قيمة شخصيتك.'],['طلب الدعم','الكلام مع شخص موثوق قوة وليس ضعفاً.']]},
 girls:{title:'فتيات رياضيات',text:'محتوى يحترم خصوصية الفتاة ويضع الرياضة في مكانها الطبيعي: قوة، صحة، ثقة، مهارة واستمرارية.',points:[['الثقة','قيسي تقدمك بأدائك لا بمظهر الآخرين.'],['التدريب','التدرج والإحماء والتعافي جزء من الإنجاز.'],['الاستمرارية','اختاري بيئة تشجعك وتحترم حدودك.']]},
 champions:{title:'نصائح من الأبطال',text:'مكتبة قصيرة مبنية على عقلية المنافسة، ويمكن لاحقاً ربط كل بطاقة ببطل حقيقي من النادي بعد توثيق الاسم والبطولة.',points:[['قبل المنافسة','استعد لما يمكنك التحكم فيه.'],['بعد الخسارة','حلل الأداء ثم عد للتدريب.'],['بعد الفوز','احفظ التواضع وواصل البناء.']]}
};
document.querySelectorAll('[data-content]').forEach(b=>b.onclick=()=>{const d=discoverContent[b.dataset.content];$('discoverPanel').innerHTML='<h3>'+d.title+'</h3><p>'+d.text+'</p><div class="discover-points">'+d.points.map(x=>'<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div>';$('discoverPanel').classList.add('show');$('discoverPanel').scrollIntoView({behavior:'smooth',block:'nearest'})});

document.querySelectorAll('[data-hub]').forEach(card=>card.addEventListener('click',()=>{const target=document.querySelector(card.dataset.hub);if(target){target.scrollIntoView({behavior:'smooth',block:'start'});target.classList.remove('hub-focus');void target.offsetWidth;target.classList.add('hub-focus')}}));
