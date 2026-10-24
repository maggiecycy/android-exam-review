(function () {
  const chapters = window.CHAPTERS || [];
  let currentId = chapters.find((c) => !c.locked)?.id || chapters[0]?.id;
  let activeTab = "knowledge";
  let scoreVisible = false;
  let currentMockSetId = null;

  const navEl = document.getElementById("chapter-nav");
  const titleEl = document.getElementById("chapter-title");
  const metaEl = document.getElementById("chapter-meta");
  const knowledgeEl = document.getElementById("panel-knowledge");
  const quizEl = document.getElementById("panel-quiz");

  function currentChapter() {
    return chapters.find((c) => c.id === currentId);
  }

  function activeQuizList(ch) {
    if (ch.mockSets && ch.mockSets.length) {
      if (!currentMockSetId) currentMockSetId = ch.mockSets[0].id;
      const set = ch.mockSets.find((s) => s.id === currentMockSetId) || ch.mockSets[0];
      return { list: set.quiz || [], set };
    }
    return { list: ch.quiz || [], set: null };
  }

  function renderNav() {
    navEl.innerHTML = chapters
      .map((ch) => {
        const locked = ch.locked ? " is-locked" : "";
        const active = ch.id === currentId ? " is-active" : "";
        return `
          <button type="button" class="chapter-btn${active}${locked}" data-id="${ch.id}" ${ch.locked ? "disabled" : ""}>
            <strong>${ch.no}</strong>
            <span>${ch.title}${ch.locked ? " · 待更新" : ""}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderKnowledge(ch) {
    if (!ch.knowledge || ch.knowledge.length === 0) {
      knowledgeEl.innerHTML = `<div class="empty-state">这一章知识点还没整理。</div>`;
      return;
    }

    knowledgeEl.innerHTML = ch.knowledge
      .map((block) => {
        const list = (block.points || [])
          .map((p) => `<li>${escapeHtml(p)}</li>`)
          .join("");
        const table = block.table ? renderTable(block.table) : "";
        const tip = block.tip
          ? `<div class="tip${/不必|建议/.test(block.tip) ? " warn" : ""}">${escapeHtml(block.tip)}</div>`
          : "";
        return `
          <article class="section-card">
            <h3>${escapeHtml(block.title)}</h3>
            ${list ? `<ul>${list}</ul>` : ""}
            ${table}
            ${tip}
          </article>
        `;
      })
      .join("");
  }

  function renderTable(table) {
    const head = table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("");
    const body = table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
      .join("");
    return `
      <div class="table-wrap" style="margin-top:12px">
        <table>
          <thead><tr>${head}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    `;
  }

  function isOpenEnded(type) {
    return type === "填空" || type === "简答" || type === "代码补全" || type === "代码";
  }

  function renderQuestion(q, index) {
    const head = `
      <div class="question-head">
        <h4>${index + 1}. ${escapeHtml(q.stem)}</h4>
        <span class="q-type">${escapeHtml(q.type)}</span>
      </div>
    `;

    if (isOpenEnded(q.type)) {
      const multi = q.type === "简答" || q.type === "代码";
      return `
        <article class="question" data-qid="${q.id}" data-qtype="${q.type}">
          ${head}
          <textarea class="fill-input open-input${q.code || q.type === "代码" || q.type === "代码补全" ? " code-input" : ""}"
            rows="${multi ? 6 : 3}"
            placeholder="${q.type === "代码" || q.type === "代码补全" ? "在此写代码或关键语句" : "在此作答"}"></textarea>
          <div class="feedback" hidden></div>
        </article>
      `;
    }

    const multi = q.type === "多选";
    const inputType = multi ? "checkbox" : "radio";
    const options = (q.options || [])
      .map(
        (opt, i) => `
          <label class="option">
            <input type="${inputType}" name="${q.id}" value="${i}" />
            <span>${escapeHtml(String.fromCharCode(65 + i))}. ${escapeHtml(opt)}</span>
          </label>
        `
      )
      .join("");

    return `
      <article class="question" data-qid="${q.id}" data-qtype="${q.type}">
        ${head}
        <div class="options">${options}</div>
        <div class="feedback" hidden></div>
      </article>
    `;
  }

  function renderQuiz(ch) {
    const { list, set } = activeQuizList(ch);

    if (!list.length) {
      quizEl.innerHTML = `<div class="empty-state">这一章测试还没整理。</div>`;
      return;
    }

    const setSwitcher =
      ch.mockSets && ch.mockSets.length
        ? `
      <div class="set-switcher" role="tablist" aria-label="模拟套卷">
        ${ch.mockSets
          .map(
            (s) => `
          <button type="button" class="set-btn${s.id === (set && set.id) ? " is-active" : ""}" data-set="${s.id}">
            ${escapeHtml(s.title)}
          </button>
        `
          )
          .join("")}
      </div>
    `
        : "";

    const items = list.map((q, index) => renderQuestion(q, index)).join("");
    const setLabel = set ? `（${set.title}）` : "";

    quizEl.innerHTML = `
      ${setSwitcher}
      <div class="quiz-toolbar">
        <p>共 ${list.length} 题${setLabel}。多选需选全；简答/代码写关键词即可。</p>
        <button type="button" class="btn btn-primary" id="btn-grade">交卷看分</button>
        <button type="button" class="btn btn-ghost" id="btn-reset">清空重做</button>
      </div>
      <div id="score-box"></div>
      ${items}
    `;

    document.getElementById("btn-grade").addEventListener("click", () => grade(ch));
    document.getElementById("btn-reset").addEventListener("click", () => {
      scoreVisible = false;
      renderQuiz(ch);
    });

    const switcher = quizEl.querySelector(".set-switcher");
    if (switcher) {
      switcher.addEventListener("click", (e) => {
        const btn = e.target.closest(".set-btn");
        if (!btn) return;
        currentMockSetId = btn.dataset.set;
        scoreVisible = false;
        renderQuiz(ch);
      });
    }
  }

  function matchOpen(value, q) {
    const lower = value.toLowerCase();
    const keys = q.accept || [];
    if (!value.trim() || !keys.length) return false;
    // require at least half of keywords (min 1) for short/code answers with many keys
    const need = Math.min(keys.length, Math.max(1, Math.ceil(keys.length * 0.45)));
    let hit = 0;
    keys.forEach((key) => {
      if (lower.includes(String(key).toLowerCase())) hit += 1;
    });
    return hit >= need;
  }

  function grade(ch) {
    const { list } = activeQuizList(ch);
    let correct = 0;
    let autoCount = 0;

    list.forEach((q) => {
      const card = quizEl.querySelector(`[data-qid="${q.id}"]`);
      const feedback = card.querySelector(".feedback");
      let ok = false;

      if (isOpenEnded(q.type)) {
        autoCount += 1;
        const value = (card.querySelector(".fill-input").value || "").trim();
        ok = matchOpen(value, q);
        feedback.hidden = false;
        feedback.className = `feedback ${ok ? "ok" : "bad"}`;
        const ref = q.answerText || "";
        feedback.innerHTML = ok
          ? `可给分。<div class="ref-answer"><strong>参考：</strong><pre>${escapeHtml(ref)}</pre></div>${q.explain ? escapeHtml(q.explain) : ""}`
          : `再对照参考答案。<div class="ref-answer"><strong>参考：</strong><pre>${escapeHtml(ref)}</pre></div>${q.explain ? escapeHtml(q.explain) : ""}`;
      } else {
        autoCount += 1;
        const selected = Array.from(card.querySelectorAll("input:checked")).map((el) =>
          Number(el.value)
        );
        const expected = [...q.answer].sort((a, b) => a - b);
        const got = [...selected].sort((a, b) => a - b);
        ok =
          expected.length === got.length && expected.every((v, i) => v === got[i]);

        card.querySelectorAll(".option").forEach((label) => {
          label.classList.remove("is-correct", "is-wrong");
          const input = label.querySelector("input");
          const idx = Number(input.value);
          if (q.answer.includes(idx)) label.classList.add("is-correct");
          else if (input.checked) label.classList.add("is-wrong");
        });

        feedback.hidden = false;
        feedback.className = `feedback ${ok ? "ok" : "bad"}`;
        const ansText = q.answer.map((i) => String.fromCharCode(65 + i)).join("、");
        feedback.textContent = ok
          ? `正确。${q.explain || ""}`
          : `不正确。正确答案：${ansText}。${q.explain || ""}`;
      }

      if (ok) correct += 1;
    });

    scoreVisible = true;
    const box = document.getElementById("score-box");
    box.innerHTML = `
      <div class="score-box">
        得分：<strong>${correct}</strong> / ${list.length}
        <p style="margin:8px 0 0;color:var(--muted);font-size:14px">
          客观题按选项判分；简答/代码按关键词判分，并以参考答案为准自行核对。
        </p>
      </div>
    `;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showTab(tab) {
    activeTab = tab;
    document.querySelectorAll(".tab").forEach((btn) => {
      const on = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    knowledgeEl.hidden = tab !== "knowledge";
    quizEl.hidden = tab !== "quiz";
    knowledgeEl.classList.toggle("is-active", tab === "knowledge");
    quizEl.classList.toggle("is-active", tab === "quiz");
  }

  function renderAll() {
    const ch = currentChapter();
    renderNav();
    titleEl.textContent = `${ch.no}　${ch.title}`;
    metaEl.textContent = ch.examWeight || "";
    renderKnowledge(ch);
    renderQuiz(ch);
    showTab(activeTab);
    scoreVisible = false;
  }

  navEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chapter-btn");
    if (!btn || btn.disabled) return;
    currentId = btn.dataset.id;
    activeTab = "knowledge";
    scoreVisible = false;
    if (currentId === "mock") currentMockSetId = null;
    renderAll();
  });

  document.querySelector(".tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    showTab(btn.dataset.tab);
  });

  renderAll();
})();
