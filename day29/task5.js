<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Quiz + Message Toggler (Show/Hide)</title>
  <style>
    :root{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111}
    body{margin:24px;max-width:900px}
    h1{font-size:1.5rem}
    .card{border:1px solid #ddd;padding:16px;border-radius:8px;margin-bottom:16px;box-shadow:0 2px 6px rgba(0,0,0,0.03)}
    .controls{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    button{padding:8px 12px;border-radius:6px;border:1px solid #bbb;background:#f6f6f6;cursor:pointer}
    button.primary{background:#2563eb;color:white;border-color:transparent}
    .hidden{display:none !important}
    .answer{margin-top:12px;padding:10px;background:#f8fafc;border-radius:6px;border-left:4px solid #60a5fa}
    .message{padding:10px;border-radius:6px;margin-bottom:8px;border:1px solid #e6e6e6}
    .message.small{font-size:0.95rem}
    .muted{color:#666;font-size:0.9rem}
    .status{margin-top:8px;font-weight:600}

    /* small responsive tweaks */
    @media (max-width:520px){button{flex:1 1 100%}}
  </style>
</head>
<body>
  <h1>Quiz + Message Toggler (Show / Hide methods)</h1>

  <section class="card" id="quizCard">
    <h2>Quick Quiz</h2>
    <div id="questionArea" aria-live="polite"></div>

    <div class="controls" aria-hidden="false">
      <button id="prevBtn">◀ Previous</button>
      <button id="showAnswerBtn" class="primary">Show Answer</button>
      <button id="nextBtn">Next ▶</button>
      <button id="revealAllBtn">Reveal All Answers</button>
    </div>

    <div id="score" class="status muted"></div>
  </section>

  <section class="card" id="messagesCard">
    <h2>Message Toggler</h2>
    <div class="controls">
      <button id="toggleAllBtn">Hide All</button>
      <button id="showNewBtn">Show New Messages</button>
      <button id="clearBtn">Clear Visible</button>
    </div>

    <div id="messagesList" style="margin-top:12px"></div>
  </section>

  <script>
    /* ----------------- QUIZ: show/hide pattern ------------------- */
    const quizData = [
      {q: 'What does HTML stand for?', a: 'HyperText Markup Language'},
      {q: 'Which tag is used for a paragraph in HTML?', a: '<p> (paragraph) tag'},
      {q: 'How do you create an unordered list?', a: 'Use <ul> with <li> items inside'},
      {q: 'Which attribute makes an image accessible?', a: 'alt attribute (e.g. alt="description")'}
    ];

    let currentIndex = 0;
    const questionArea = document.getElementById('questionArea');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const revealAllBtn = document.getElementById('revealAllBtn');
    const scoreEl = document.getElementById('score');

    // render a question card
    function renderQuestion(i){
      const item = quizData[i];
      questionArea.innerHTML = `
        <div>
          <div><strong>Q${i+1}.</strong> ${item.q}</div>
          <div id="answer_${i}" class="answer hidden" role="region" aria-hidden="true">Answer: ${item.a}</div>
        </div>
      `;

      // update buttons
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === quizData.length - 1;
      scoreEl.textContent = `Question ${i+1} of ${quizData.length}`;
    }

    // show/hide answer for current question
    function toggleAnswer(i){
      const ans = document.getElementById(`answer_${i}`);
      const isHidden = ans.classList.contains('hidden');
      if(isHidden){
        ans.classList.remove('hidden');
        ans.setAttribute('aria-hidden', 'false');
        showAnswerBtn.textContent = 'Hide Answer';
        showAnswerBtn.classList.remove('primary');
      } else {
        ans.classList.add('hidden');
        ans.setAttribute('aria-hidden', 'true');
        showAnswerBtn.textContent = 'Show Answer';
        showAnswerBtn.classList.add('primary');
      }
    }

    // reveal all answers (show/hide pattern applied to every answer element)
    function revealAll(show = true){
      quizData.forEach((_, idx) => {
        const el = document.getElementById(`answer_${idx}`);
        if(!el) return; // safety
        if(show){ el.classList.remove('hidden'); el.setAttribute('aria-hidden','false'); }
        else { el.classList.add('hidden'); el.setAttribute('aria-hidden','true'); }
      });
      revealAllBtn.textContent = show ? 'Hide All Answers' : 'Reveal All Answers';
    }

    // wire up quiz buttons
    showAnswerBtn.addEventListener('click', ()=> toggleAnswer(currentIndex));
    prevBtn.addEventListener('click', ()=>{ if(currentIndex>0){ currentIndex--; renderQuestion(currentIndex); }});
    nextBtn.addEventListener('click', ()=>{ if(currentIndex<quizData.length-1){ currentIndex++; renderQuestion(currentIndex); }});
    revealAllBtn.addEventListener('click', ()=>{
      const anyHidden = Array.from(document.querySelectorAll('[id^="answer_"]')).some(el=>el.classList.contains('hidden'));
      revealAll(anyHidden);
    });

    // initial render: create all answer elements off-DOM to allow revealAll to work
    function initQuiz(){
      // create container for all answers (but we'll only display the current via renderQuestion)
      questionArea.innerHTML = '';
      quizData.forEach((item, idx) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `<div><strong>Q${idx+1}.</strong> ${item.q}<div id="answer_${idx}" class="answer hidden" aria-hidden="true">Answer: ${item.a}</div></div>`;
        questionArea.appendChild(wrapper);
      });
      // show only the current question visually by hiding others (we'll keep their markup present)
      Array.from(questionArea.children).forEach((child, i)=>{
        if(i === currentIndex) child.style.display = '';
        else child.style.display = 'none';
      });

      // rebind renderQuestion to switch display
      renderQuestion = function(i){
        Array.from(questionArea.children).forEach((child, idx)=>{
          child.style.display = idx === i ? '' : 'none';
        });
        prevBtn.disabled = i === 0;
        nextBtn.disabled = i === quizData.length - 1;
        scoreEl.textContent = `Question ${i+1} of ${quizData.length}`;

        // Update showAnswerBtn text/class depending on whether current answer is visible
        const ans = document.getElementById(`answer_${i}`);
        if(ans.classList.contains('hidden')){
          showAnswerBtn.textContent = 'Show Answer';
          showAnswerBtn.classList.add('primary');
        } else {
          showAnswerBtn.textContent = 'Hide Answer';
          showAnswerBtn.classList.remove('primary');
        }
      };

      // ensure toggling uses updated render
      showAnswerBtn.addEventListener('click', ()=>{
        const ans = document.getElementById(`answer_${currentIndex}`);
        if(!ans) return;
        const wasHidden = ans.classList.contains('hidden');
        if(wasHidden){ ans.classList.remove('hidden'); ans.setAttribute('aria-hidden','false'); }
        else { ans.classList.add('hidden'); ans.setAttribute('aria-hidden','true'); }
        renderQuestion(currentIndex);
      });

      // override prev/next to update index and call render
      prevBtn.addEventListener('click', ()=>{ if(currentIndex>0){ currentIndex--; renderQuestion(currentIndex); }});
      nextBtn.addEventListener('click', ()=>{ if(currentIndex<quizData.length-1){ currentIndex++; renderQuestion(currentIndex); }});

      // initial state
      renderQuestion(currentIndex);
    }

    /* ----------------- MESSAGES: toggler using show/hide ------------------- */
    const messages = [
      {text: 'Welcome! Your profile is 80% complete.', type: 'info'},
      {text: 'New comment on your post.', type: 'social'},
      {text: 'Backup finished successfully.', type: 'success'},
      {text: 'Payment failed — please update card.', type: 'warning'}
    ];

    const messagesList = document.getElementById('messagesList');
    const toggleAllBtn = document.getElementById('toggleAllBtn');
    const showNewBtn = document.getElementById('showNewBtn');
    const clearBtn = document.getElementById('clearBtn');

    function renderMessages(){
      messagesList.innerHTML = '';
      messages.forEach((m, idx) => {
        const el = document.createElement('div');
        el.className = 'message small';
        el.setAttribute('