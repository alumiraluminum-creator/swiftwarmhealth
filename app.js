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

const discoverTests={
 kids:{title:'أي لاعب أنت؟',qs:['في لعبة جماعية، أول ما يشدك هو أن تجرّب حركة جديدة.','إذا خسر فريقك، تفكر في طريقة العودة أكثر من النتيجة.','تحب أن تتعلم مهارة واحدة وتتقنها.','وجود فريق حولك يجعلك تستمتع أكثر.','تتحمس عندما يكون هناك تحدٍ واضح.','إذا أخطأت، تحاول مرة أخرى بدل ترك اللعبة.'],types:['المستكشف','قائد الفريق','صانع المهارة','المنافس']},
 teens:{title:'كيف تتعامل مع الضغط؟',qs:['قبل المنافسة، تفكر في ما تستطيع التحكم فيه.','إذا قارنت نفسك بغيرك، تستطيع العودة إلى هدفك الشخصي.','بعد خطأ واضح، تستطيع استكمال اللعب.','تطلب المساعدة عندما يصبح الضغط أكبر من قدرتك.','الخسارة عندك معلومة وليست حكمًا على قيمتك.'],types:['هادئ تحت الضغط','يتعلم من الضغط','يحتاج مساحة تنفس','يبني ثقته']},
 girls:{title:'ما أسلوبك الرياضي؟',qs:['أفضل هدفًا واضحًا أعرف كيف أقيس تقدمي فيه.','أستطيع الاستمرار حتى لو كان التقدم بطيئًا.','أهتم بالإحماء والتعافي مثل اهتمامي بالتدريب.','أقارن نفسي بأدائي السابق أكثر من الآخرين.','أعرف متى أحتاج إلى الراحة أو طلب المساعدة.'],types:['المخططة','المثابرة','المتوازنة','الواعية']},
 champions:{title:'قرارك تحت المنافسة',qs:['تأخرت في النتيجة… أركز على النقطة التالية.','ارتكبت خطأ… أبحث عن سببه لا عن شخص ألومه.','فزت… أراجع ما يمكن تحسينه قبل الاحتفال.','زميلك أخطأ… تساعده بدل أن تهاجمه.','تعبت… تميز بين الإرهاق الطبيعي وإشارة تستحق التوقف.'],types:['عقلية العودة','عقلية التعلم','عقلية التطور','عقلية الفريق']}
};
let discoverKey=null,discoverIndex=0,discoverScore=0;
function openDiscover(key){discoverKey=key;discoverIndex=0;discoverScore=0;const t=discoverTests[key];if(!t)return;$('discoverTitle').textContent=t.title;$('discoverResultModal').classList.add('hidden');$('discoverResultModal').innerHTML='';renderDiscoverQ();openModal('discoverModal')}
function renderDiscoverQ(){const t=discoverTests[discoverKey];$('discoverQuestion').textContent=t.qs[discoverIndex];$('discoverProgress').textContent=(discoverIndex+1)+' / '+t.qs.length;$('discoverAnswers').innerHTML='<button class="answer-choice" data-d="2">تنطبق جدًا</button><button class="answer-choice" data-d="1">تنطبق أحيانًا</button><button class="answer-choice" data-d="0">لا تنطبق</button>';$('discoverAnswers').querySelectorAll('button').forEach(b=>b.onclick=()=>{discoverScore+=Number(b.dataset.d);discoverIndex<t.qs.length-1?(discoverIndex++,renderDiscoverQ()):finishDiscover()})}
function finishDiscover(){const t=discoverTests[discoverKey],pct=Math.round(discoverScore/(t.qs.length*2)*100),idx=Math.min(t.types.length-1,Math.floor((discoverScore/(t.qs.length*2))*t.types.length));$('discoverQuestion').textContent='هذه ليست علامة نجاح أو فشل.';$('discoverProgress').textContent='نتيجتك';$('discoverAnswers').innerHTML='<button class="answer-choice" id="discoverAgain">أعد الاختبار</button><button class="answer-choice" id="discoverClose">العودة للتجربة</button>';$('discoverResultModal').classList.remove('hidden');$('discoverResultModal').innerHTML='<b>أسلوبك الأقرب: '+t.types[idx]+'</b><div class="result-score"><span>مؤشر التفاعل الرياضي</span><strong>'+pct+'%</strong></div><div class="result-bar"><i style="width:'+pct+'%"></i></div><p>استخدم النتيجة كنقطة بداية: اختر نشاطًا يناسبك، ثم جرّب وراقب ما يتغير في أدائك وشعورك.</p><small>تجربة توعوية وليست تشخيصًا.</small>';$('discoverAgain').onclick=()=>openDiscover(discoverKey);$('discoverClose').onclick=()=>closeModal('discoverModal')}
document.querySelectorAll('[data-discover-test]').forEach(b=>b.onclick=()=>openDiscover(b.dataset.discoverTest));
const legacyData={
 all:{year:'1896',title:'من أين بدأت الحكاية؟',text:'نادي التوفيقية أُنشئ عام 1896 ويُوصف في المصادر المنشورة بأنه من أقدم أندية التنس في مصر. هنا لا نعرض تاريخًا جامدًا؛ بل نفتح محطات صنعت علاقة النادي بالمنافسة وصناعة الأجيال.',stats:[['1896','بداية النادي'],['3000+','مشارك في بطولة 2020'],['20','دولة في بطولة 2021']]},
 1896:{year:'1896',title:'نادي وُلد مع تاريخ التنس المصري',text:'تأسس النادي عام 1896، وتصفه مصادر منشورة بأنه أقدم نادي في مصر ومتخصص في التنس. هذه ليست معلومة للزينة؛ إنها نقطة البداية لسؤال: كيف نحافظ على الإرث ونحوّله إلى مستقبل؟',stats:[['1896','التأسيس'],['130+','عامًا من التاريخ'],['🎾','هوية النادي']]},
 2020:{year:'2020',title:'التوفيقية تتحول إلى ملعب جماهيري ضخم',text:'بطولة التوفيقية المفتوحة شارك فيها أكثر من 3000 لاعب ولاعبة من أنحاء الجمهورية، وأقيمت على 9 ملاعب تنس. الرقم هنا يحكي عن قدرة النادي على استيعاب المنافسة وصناعة الحدث.',stats:[['3000+','لاعب ولاعبة'],['9','ملاعب'],['17/9–3/10','موعد البطولة']]},
 2021:{year:'2021',title:'العالم يصل إلى ملاعب التوفيقية',text:'استضاف النادي بطولة دولية للناشئين والناشئات تحت 18 سنة بمشاركة أكثر من 160 لاعبًا ولاعبة من 20 دولة وعلى 9 ملاعب. وفي العام نفسه استضاف بطولة جمهورية GA، أعلى تصنيف محلي وفق التغطية المنشورة.',stats:[['20','دولة'],['160+','لاعب ولاعبة'],['GA','أعلى تصنيف محلي']]},
 2022:{year:'2022',title:'الناشئون في قلب المشهد',text:'استضاف النادي بطولة دولية للناشئين والناشئات تحت 18 سنة، بمشاركة 120 لاعبًا ولاعبة من مصر وخارجها. هذه المحطة تعطي معنى عمليًا لفكرة الاستثمار في الناشئين.',stats:[['120','مشاركًا'],['U18','تحت 18 سنة'],['🌍','دول متعددة']]},
 2025:{year:'2025',title:'النادي لا يعيش على التنس وحده',text:'التقرير السنوي المنشور للنادي يوثق نتائج وميداليات في التنس والخماسي الحديث والسباحة والكاراتيه وتنس الطاولة وكرة السلة، ويعرض مسار تطوير للمرافق والأنشطة.',stats:[['5+','ألعاب موثقة'],['🏅','نتائج وميداليات'],['2025','تقرير سنوي']]}
};
function renderLegacy(key){const d=legacyData[key]||legacyData.all;$('legacyStory').innerHTML='<div class="story-main"><span class="story-year">'+d.year+'</span><h3>'+d.title+'</h3><p>'+d.text+'</p><button class="btn btn-gold" data-legacy-open="'+(key==='all'?'2020':key==='2020'?'2021':key==='2021'?'2022':key==='2022'?'2025':'all')+'">المحطة التالية ←</button></div><div class="story-side">'+d.stats.map(x=>'<div class="story-stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div>';document.querySelectorAll('.legacy-filter').forEach(b=>b.classList.toggle('active',b.dataset.legacy===key));document.querySelectorAll('[data-legacy-open]').forEach(b=>b.onclick=()=>renderLegacy(b.dataset.legacyOpen))}
document.querySelectorAll('.legacy-filter').forEach(b=>b.onclick=()=>renderLegacy(b.dataset.legacy));
document.querySelectorAll('[data-legacy-open]').forEach(b=>b.onclick=()=>renderLegacy(b.dataset.legacyOpen));
renderLegacy('all');
