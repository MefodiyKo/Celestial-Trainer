/* =========================================================
   CELESTIAL TRAINER — THEORY BOOK ENGINE v2
   ========================================================= */

const THEORY_BOOK = window.THEORY_BOOK || {};

const TheoryBookState = {
  topic: "almanac",
  page: 0,
  activeTerm: null
};

/* Безопасное преобразование текста */
function theoryEscapeHTML(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* Получить выбранную книгу */
function getTheoryBook(topic){

  const book = THEORY_BOOK[topic];

  if(!book || !Array.isArray(book.pages)){
    return null;
  }

  return book;
}

/* Закрыть все раскрытые объяснения */
function closeTheoryExplanations(){

  const bookBox = document.getElementById("theoryBook");
  if(!bookBox)return;

  bookBox
    .querySelectorAll(".thTerm")
    .forEach(term=>{
      term.classList.remove("active");
      term.setAttribute("aria-pressed","false");
    });

  bookBox
    .querySelectorAll(".theoryExplain")
    .forEach(block=>{
      block.classList.remove("active");
      block.hidden=true;
    });

  TheoryBookState.activeTerm=null;
}

/* Открыть объяснение выбранного термина */
function theoryExplain(key){

  const bookBox = document.getElementById("theoryBook");
  if(!bookBox)return;

  const term = bookBox.querySelector(
    `.thTerm[data-theory="${key}"]`
  );

  const explanation = bookBox.querySelector(
    `#explain_${key}`
  );

  if(!explanation)return;

  const isAlreadyOpen =
    TheoryBookState.activeTerm === key &&
    explanation.classList.contains("active");

  closeTheoryExplanations();

  if(isAlreadyOpen)return;

  TheoryBookState.activeTerm=key;

  if(term){
    term.classList.add("active");
    term.setAttribute("aria-pressed","true");
  }

  explanation.hidden=false;

  requestAnimationFrame(()=>{
    explanation.classList.add("active");
  });

  setTimeout(()=>{
    explanation.scrollIntoView({
      behavior:"smooth",
      block:"nearest"
    });
  },120);

  updateTheoryDiagram(key);
}

/* Заглушка для будущих интерактивных схем */
function updateTheoryDiagram(key){

  const diagram = document.getElementById("theoryInteractiveDiagram");
  if(!diagram)return;

  diagram.dataset.activeTerm=key || "";
}

/* Создание формулы из массива элементов */
function buildTheoryFormula(parts){

  if(!Array.isArray(parts)){
    return parts || "";
  }

  return parts.map(part=>{

    if(typeof part === "string"){
      return `<span class="theoryOperator">${part}</span>`;
    }

    if(!part || !part.key){
      return "";
    }

    const label=theoryEscapeHTML(part.label || part.key);

    return `
      <button
        type="button"
        class="thTerm"
        data-theory="${theoryEscapeHTML(part.key)}"
        aria-pressed="false"
        onclick="theoryExplain('${theoryEscapeHTML(part.key)}')">
        ${label}
      </button>
    `;
  }).join("");
}

/* Кнопки Previous / Next */
function buildTheoryNavigation(book){

  const total=book.pages.length;
  const current=TheoryBookState.page;

  return `
    <nav class="theoryNavigation">

      <button
        type="button"
        class="theoryNavButton"
        onclick="theoryPreviousPage()"
        ${current<=0 ? "disabled" : ""}>
        ◀ Previous
      </button>

      <span class="theoryNavCounter">
        ${current+1} / ${total}
      </span>

      <button
        type="button"
        class="theoryNavButton"
        onclick="theoryNextPage()"
        ${current>=total-1 ? "disabled" : ""}>
        Next ▶
      </button>

    </nav>
  `;
}

/* Главная отрисовка страницы */
function renderTheoryBook(topic, pageIndex=0){

  const box=document.getElementById("theoryBook");
  if(!box)return;

  const book=getTheoryBook(topic);

  if(!book || book.pages.length===0){

    box.innerHTML=`
      <div class="theoryEmpty">
        This theory chapter is not available yet.
      </div>
    `;

    return;
  }

  TheoryBookState.topic=topic;

  TheoryBookState.page=Math.max(
    0,
    Math.min(pageIndex,book.pages.length-1)
  );

  TheoryBookState.activeTerm=null;

  const page=book.pages[TheoryBookState.page];

  const progress=
    ((TheoryBookState.page+1)/book.pages.length)*100;

  const formulaHTML=
    buildTheoryFormula(page.formula);

  box.innerHTML=`
    <article class="theoryPage">

      <header class="theoryHeader">

        <div class="theoryChapter">
          ${theoryEscapeHTML(book.title || topic)}
        </div>

        <h2 class="theoryTitle">
          ${theoryEscapeHTML(page.title || "")}
        </h2>

        <div class="theoryPageNumber">
          Page ${TheoryBookState.page+1}
          of ${book.pages.length}
        </div>

        <div class="theoryProgress">
          <div
            class="theoryProgressBar"
            style="width:${progress}%">
          </div>
        </div>

      </header>

      <section class="theoryFormulaSection">

        <div class="theorySectionLabel">
          Formula
        </div>

        <div class="theoryFormulaBox">
          ${formulaHTML}
        </div>

        ${
          page.formulaHint
          ? `<div class="theoryFormulaHint">
               ${page.formulaHint}
             </div>`
          : ""
        }

      </section>

      <section
        id="theoryPageContent"
        class="theoryPageContent">

        ${page.content || ""}

      </section>

      <section class="theoryDiagramSection">

        <div class="theorySectionLabel">
          Interactive diagram
        </div>

        <div
          id="theoryInteractiveDiagram"
          class="theoryInteractiveDiagram"
          data-active-term="">

          ${
            page.diagram ||
            `
              <div class="theoryDiagramPlaceholder">
                Tap a term in the formula to highlight it
                on the diagram.
              </div>
            `
          }

        </div>

      </section>

      ${buildTheoryNavigation(book)}

    </article>
  `;

  closeTheoryExplanations();
}

/* Предыдущая страница */
function theoryPreviousPage(){

  if(TheoryBookState.page<=0)return;

  renderTheoryBook(
    TheoryBookState.topic,
    TheoryBookState.page-1
  );

  scrollTheoryBookToTop();
}

/* Следующая страница */
function theoryNextPage(){

  const book=getTheoryBook(TheoryBookState.topic);
  if(!book)return;

  if(TheoryBookState.page>=book.pages.length-1)return;

  renderTheoryBook(
    TheoryBookState.topic,
    TheoryBookState.page+1
  );

  scrollTheoryBookToTop();
}

/* Вернуться к началу книги */
function scrollTheoryBookToTop(){

  const box=document.getElementById("theoryBook");
  if(!box)return;

  box.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
}

/* Открытие выбранной темы */
function openTheoryBookTopic(topic){

  const selectedTopic=
    THEORY_BOOK[topic]
    ? topic
    : "almanac";

  renderTheoryBook(selectedTopic,0);
}

/* Запуск */
function initTheoryBook(){

  const select=document.getElementById("theorySelect");

  const topic=
    select?.value &&
    THEORY_BOOK[select.value]
    ? select.value
    : "almanac";

  renderTheoryBook(topic,0);
}

/* Делаем функции доступными из HTML */
window.renderTheoryBook=renderTheoryBook;
window.theoryExplain=theoryExplain;
window.theoryPreviousPage=theoryPreviousPage;
window.theoryNextPage=theoryNextPage;
window.openTheoryBookTopic=openTheoryBookTopic;
window.initTheoryBook=initTheoryBook;