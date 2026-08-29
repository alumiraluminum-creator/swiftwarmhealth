const tests = {
  mental: { title: 'اختبار الملعب الداخلي', questions: ['بعد خسارة نقطة، أعود للخطة سريعاً.', 'أستطيع تهدئة نفسي قبل الإرسال.', 'أتعامل مع الخطأ كمعلومة لا كحكم على مستواي.'], advice: 'إذا كانت نتيجتك منخفضة، جرّب تنفس 4-4-4 قبل التدريب واكتب هدفاً واحداً للمباراة.' },
  energy: { title: 'مؤشر الطاقة', questions: ['نمت بشكل كافٍ الليلة الماضية.', 'أشعر أن جسمي مستعد لحركة متوسطة.', 'أستطيع التركيز دون إجهاد واضح.'], advice: 'الطاقة المنخفضة تعني أن التعافي قد يكون خطوتك الأفضل اليوم.' },
  tennis: { title: 'جاهزية التنس', questions: ['أستطيع الحركة جانبياً دون ألم.', 'أشعر بثبات جيد في التوازن.', 'أعرف هدف الحصة القادمة.', 'أستطيع أداء إحماء خفيف الآن.', 'لدي ماء ووقت كافٍ للتدريب.'], advice: 'ابدأ بإحماء تدريجي، وخفف الحمل إذا ظهر ألم أو دوخة.' },
  balance: { title: 'توازن العادة', questions: ['لدي وقت محدد أستطيع حمايته للحركة.', 'أعرف أصغر خطوة يمكنني تنفيذها اليوم.', 'أكافئ الاستمرارية لا الكمال.', 'أعود بعد الانقطاع دون جلد ذات.'], advice: 'اختر عادة صغيرة جداً لمدة 7 أيام، ثم زدها تدريجياً.' }
};
const challenges = ['تحدي تبديل اليد: 3 دقائق بيدك غير المعتادة.', 'امشِ 12 دقيقة دون هاتف وراقب تنفسك.', 'اكتب شيئاً تعلمته من آخر تمرين.', 'أرسل رسالة تقدير لزميل في الفريق.', 'نفّذ إحماء مفاصل لطيفاً لمدة 5 دقائق.'];
const plans = {
  loss: { title: 'خطوة أخف', text: 'خطة بداية من ثلاثة محاور: حركة منتظمة، وجبات متوازنة، ونوم يمكن قياسه. لا تستهدف نزولاً سريعاً.', pills: ['مشي سريع 20 دقيقة', 'طبق متوازن', 'ماء على فترات', 'تقييم أسبوعي'] },
  gain: { title: 'بناء متوازن', text: 'زيادة الوزن الصحية تحتاج فائضاً غذائياً تدريجياً وتمارين مقاومة واستشارة مختص عند وجود حالة صحية أو هدف كبير.', pills: ['وجبة صغيرة إضافية', 'بروتين مناسب', 'مقاومة خفيفة', 'متابعة أسبوعية'] },
  fitness: { title: 'لياقة أفضل', text: 'برنامج مرن لتحسين القدرة العامة: جلسات قصيرة، يوم تعافٍ، وتحديات صغيرة تمنحك إحساساً بالتقدم.', pills: ['قوة مرتان أسبوعياً', 'مرونة 5 دقائق', 'نشاط ممتع', 'نوم منتظم'] }
};
let currentTest = null;
let currentIndex = 0;
let score = 0;
const $ = (id) => document.getElementById(id);
const storage = { get(key, fallback = 0) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }, set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} } };
function openModal(id) { $(id)?.classList.remove('hidden'); document.body.classList.add('modal-open'); }
function closeModal(id) { $(id)?.classList.add('hidden'); if (!document.querySelector('.modal:not(.hidden)')) document.body.classList.remove('modal-open'); }
function renderTest(testKey) {
  currentTest = tests[testKey];
  if (!currentTest) return;
  currentIndex = 0; score = 0;
  $('modalTitle').textContent = currentTest.title;
  $('modalResult').classList.add('hidden');
  renderQuestion(); openModal('testModal');
}
function renderQuestion() {
  const total = currentTest.questions.length;
  const q = currentTest.questions[currentIndex];
  $('modalQuestion').textContent = q;
  $('modalProgress').textContent = `${currentIndex + 1} / ${total}`;
  $('modalAnswers').innerHTML = '<button class="answer-choice" data-score="1">غالباً</button><button class="answer-choice" data-score="0">أحتاج تدريباً</button>';
  $('modalAnswers').querySelectorAll('button').forEach((btn) => btn.addEventListener('click', () => {
    score += Number(btn.dataset.score);
    if (currentIndex < total - 1) { currentIndex += 1; renderQuestion(); }
    else showResult();
  }));
}
function showResult() {
  const pct = Math.round(score / currentTest.questions.length * 100);
  $('modalQuestion').textContent = 'اكتمل التقييم';
  $('modalAnswers').innerHTML = '<button id="restartTest" class="answer-choice">إعادة الاختبار</button>';
  $('modalResult').classList.remove('hidden');
  $('modalResult').innerHTML = `<strong>نتيجتك: ${pct}%</strong><br>${currentTest.advice}<br><span class="text-mint">النتيجة إرشادية وليست تشخيصاً.</span>`;
  storage.set('swiftwarm:lastTest', { title: currentTest.title, score: pct, at: new Date().toISOString() });
  $('restartTest').addEventListener('click', () => renderTest(Object.keys(tests).find(key => tests[key] === currentTest)));
}
function showPlan(key) {
  const p = plans[key]; if (!p) return;
  $('planContent').innerHTML = `<h3>${p.title}</h3><p>${p.text}</p><div class="plan-pills">${p.pills.map((x) => `<span>${x}</span>`).join('')}</div>`;
  document.querySelectorAll('.plan-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.plan === key));
  storage.set('swiftwarm:plan', key);
}
function openAI() { openModal('aiModal'); $('aiInput').focus(); }
function sendAI() {
  const q = $('aiInput').value.trim();
  if (!q) { $('aiAnswer').textContent = 'اكتب سؤالك أولاً، مثل: كيف أبدأ بعد انقطاع؟'; return; }
  let response = 'ابدأ بخطوة صغيرة قابلة للقياس، وسجل شعورك قبل وبعد النشاط.';
  if (/ألم|دوخة|إصابة|صدر/.test(q)) response = 'أوقف النشاط عند الأعراض المقلقة واطلب تقييماً من مختص. لا يقدم Swiftwarm AI تشخيصاً طبياً.';
  else if (/وزن|تخسيس|زيادة/.test(q)) response = 'اختر برنامج هدفك في الصفحة، وغيّر شيئاً واحداً هذا الأسبوع. وجود حالة صحية يستدعي استشارة مختص تغذية.';
  else if (/تركيز|توتر|قلق/.test(q)) response = 'جرّب اختبار الملعب الداخلي، ثم نفّذ 4 دورات تنفس هادئ قبل التدريب.';
  $('aiAnswer').textContent = response; $('aiInput').value = '';
}
function toast(message) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = message; document.body.appendChild(el); setTimeout(() => el.remove(), 2200); }

document.querySelectorAll('[data-test]').forEach((card) => card.addEventListener('click', () => renderTest(card.dataset.test)));
document.querySelectorAll('[data-plan]').forEach((btn) => btn.addEventListener('click', () => showPlan(btn.dataset.plan)));
$('focusTap').addEventListener('click', () => { const n = Number($('tapScore').textContent) + 1; $('tapScore').textContent = n; storage.set('swiftwarm:focus', n); if (n === 10) toast('أحسنت، اكتمل تحدي التركيز.'); else if (n > 10) toast('استمر، كل ضغطة ترفع تركيزك.'); });
$('newChallenge').addEventListener('click', () => { $('challengeText').textContent = challenges[Math.floor(Math.random() * challenges.length)]; const n = Number($('streakScore').textContent) + 1; $('streakScore').textContent = n; storage.set('swiftwarm:challenge', n); });
$('openAi').addEventListener('click', openAI); $('heroAi').addEventListener('click', openAI); $('sendAi').addEventListener('click', sendAI); $('aiInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendAI(); });
document.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', () => closeModal(btn.dataset.close)));
document.querySelectorAll('.modal').forEach((modal) => modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal.id); }));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') document.querySelectorAll('.modal:not(.hidden)').forEach((modal) => closeModal(modal.id)); });
$('supportProgram').addEventListener('click', () => { $('supportMessage').textContent = 'تم تسجيل رأيك محلياً'; $('supportProgram').textContent = 'تم التأييد ✓'; $('supportProgram').disabled = true; storage.set('swiftwarm:support', true); });
$('tapScore').textContent = storage.get('swiftwarm:focus', 0);
$('streakScore').textContent = storage.get('swiftwarm:challenge', 0);
showPlan(storage.get('swiftwarm:plan', 'loss'));
