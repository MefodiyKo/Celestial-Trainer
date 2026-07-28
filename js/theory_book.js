/* =========================================================
   CELESTIAL TRAINER — THEORY BOOK ENGINE v2.1
   ========================================================= */

/*
  ВАЖНО:
  Не создаём отдельную постоянную копию THEORY_BOOK.

  Все функции каждый раз обращаются к window.THEORY_BOOK.
  Поэтому главы могут быть объявлены как до этого движка,
  так и после него.
*/

window.THEORY_BOOK = window.THEORY_BOOK || {};


/* =========================================================
   СОСТОЯНИЕ THEORY BOOK
   ========================================================= */

const TheoryBookState = {
  topic: "almanac",
  page: 0,
  activeTerm: null
};


/* =========================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
   ========================================================= */

/* Безопасное преобразование текста */
function theoryEscapeHTML(value){

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* Получить актуальный объект всех книг */
function getAllTheoryBooks(){

  return window.THEORY_BOOK || {};
}


/* Получить выбранную книгу */
function getTheoryBook(topic){

  const books = getAllTheoryBooks();
  const book = books[topic];

  if(!book){
    return null;
  }

  if(!Array.isArray(book.pages)){
    return null;
  }

  return book;
}


/* Проверка существования темы */
function theoryTopicExists(topic){

  return Boolean(getTheoryBook(topic));
}


/* Получить доступную тему */
function getAvailableTheoryTopic(topic){

  if(topic && theoryTopicExists(topic)){
    return topic;
  }

  if(theoryTopicExists("almanac")){
    return "almanac";
  }

  const books = getAllTheoryBooks();
  const firstTopic = Object.keys(books).find(key=>{
    return getTheoryBook(key);
  });

  return firstTopic || null;
}


/* =========================================================
   РАСКРЫВАЮЩИЕСЯ ОБЪЯСНЕНИЯ
   ========================================================= */

/* Закрыть все раскрытые объяснения */
function closeTheoryExplanations(){

  const bookBox =
    document.getElementById("theoryBook");

  if(!bookBox){
    TheoryBookState.activeTerm = null;
    return;
  }

  bookBox
    .querySelectorAll(".thTerm")
    .forEach(term=>{

      term.classList.remove("active");

      term.setAttribute(
        "aria-pressed",
        "false"
      );
    });

  bookBox
    .querySelectorAll(".theoryExplain")
    .forEach(block=>{

      block.classList.remove("active");
      block.hidden = true;
    });

  TheoryBookState.activeTerm = null;
}


/* Открыть объяснение выбранного термина */
function theoryExplain(key){

  const bookBox =
    document.getElementById("theoryBook");

  if(!bookBox || !key){
    return;
  }

  const safeKey =
    window.CSS && CSS.escape
      ? CSS.escape(String(key))
      : String(key).replace(
          /[^a-zA-Z0-9_-]/g,
          ""
        );

  const term = bookBox.querySelector(
    `.thTerm[data-theory="${safeKey}"]`
  );

  const explanation = bookBox.querySelector(
    `#explain_${safeKey}`
  );

  if(!explanation){
    updateTheoryDiagram(key);
    return;
  }

  const isAlreadyOpen =
    TheoryBookState.activeTerm === key &&
    explanation.classList.contains("active");

  closeTheoryExplanations();

  if(isAlreadyOpen){
    updateTheoryDiagram(null);
    return;
  }

  TheoryBookState.activeTerm = key;

  if(term){

    term.classList.add("active");

    term.setAttribute(
      "aria-pressed",
      "true"
    );
  }

  explanation.hidden = false;

  requestAnimationFrame(()=>{

    explanation.classList.add("active");
  });

  setTimeout(()=>{

    explanation.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  },120);

  updateTheoryDiagram(key);
}


/* =========================================================
   ИНТЕРАКТИВНАЯ СХЕМА
   ========================================================= */

/*
  Пока функция устанавливает выбранный термин
  в data-active-term.

  Позже сюда можно добавить настоящую
  отрисовку Canvas или SVG.
*/
function updateTheoryDiagram(key){

  const diagram =
    document.getElementById(
      "theoryInteractiveDiagram"
    );

  if(!diagram){
    return;
  }

  diagram.dataset.activeTerm = key || "";

  diagram
    .querySelectorAll("[data-diagram-term]")
    .forEach(element=>{

      const elementTerm =
        element.dataset.diagramTerm;

      element.classList.toggle(
        "active",
        Boolean(key) && elementTerm === key
      );
    });
}


/* =========================================================
   ФОРМУЛА
   ========================================================= */

/* Создание формулы из массива элементов */
function buildTheoryFormula(parts){

  if(parts === undefined || parts === null){
    return "";
  }

  if(!Array.isArray(parts)){
    return String(parts);
  }

  return parts.map(part=>{

    /*
      Обычная строка:
      знак равно, плюс, минус и т. п.
    */
    if(typeof part === "string"){

      return `
        <span class="theoryOperator">
          ${theoryEscapeHTML(part)}
        </span>
      `;
    }

    /*
      Неправильный элемент массива
    */
    if(!part || !part.key){
      return "";
    }

    const key =
      theoryEscapeHTML(part.key);

    const label =
      theoryEscapeHTML(
        part.label || part.key
      );

    return `
      <button
        type="button"
        class="thTerm"
        data-theory="${key}"
        aria-pressed="false"
        onclick="theoryExplain('${key}')">
        ${label}
      </button>
    `;

  }).join("");
}


/* =========================================================
   НАВИГАЦИЯ PREVIOUS / NEXT
   ========================================================= */

function buildTheoryNavigation(book){

  if(
    !book ||
    !Array.isArray(book.pages) ||
    book.pages.length === 0
  ){
    return "";
  }

  const total = book.pages.length;
  const current = TheoryBookState.page;

  return `
    <nav
      class="theoryNavigation"
      aria-label="Theory page navigation">

      <button
        type="button"
        class="theoryNavButton"
        onclick="theoryPreviousPage()"
        ${current <= 0 ? "disabled" : ""}>
        ◀ Previous
      </button>

      <span class="theoryNavCounter">
        ${current + 1} / ${total}
      </span>

      <button
        type="button"
        class="theoryNavButton"
        onclick="theoryNextPage()"
        ${current >= total - 1
          ? "disabled"
          : ""}>
        Next ▶
      </button>

    </nav>
  `;
}


/* =========================================================
   ГЛАВНАЯ ОТРИСОВКА THEORY BOOK
   ========================================================= */

function renderTheoryBook(topic, pageIndex = 0){

  const box =
    document.getElementById("theoryBook");

  if(!box){
    console.warn(
      'Theory Book: element with id="theoryBook" not found.'
    );

    return;
  }

  /*
    Берём актуальную доступную тему.
  */
  const selectedTopic =
    getAvailableTheoryTopic(topic);

  if(!selectedTopic){

    box.innerHTML = `
      <div class="theoryEmpty">
        Theory book data is not loaded.
      </div>
    `;

    console.warn(
      "Theory Book: window.THEORY_BOOK is empty."
    );

    return;
  }

  const book =
    getTheoryBook(selectedTopic);

  if(
    !book ||
    !Array.isArray(book.pages) ||
    book.pages.length === 0
  ){

    box.innerHTML = `
      <div class="theoryEmpty">
        This theory chapter is not available yet.
      </div>
    `;

    return;
  }

  /*
    Синхронизируем select с открытой темой.
  */
  const select =
    document.getElementById("theorySelect");

  if(select && select.value !== selectedTopic){
    select.value = selectedTopic;
  }

  TheoryBookState.topic = selectedTopic;

  const numericPage =
    Number.isFinite(Number(pageIndex))
      ? Number(pageIndex)
      : 0;

  TheoryBookState.page = Math.max(
    0,
    Math.min(
      Math.trunc(numericPage),
      book.pages.length - 1
    )
  );

  TheoryBookState.activeTerm = null;

  const page =
    book.pages[TheoryBookState.page];

  if(!page){

    box.innerHTML = `
      <div class="theoryEmpty">
        Theory page could not be loaded.
      </div>
    `;

    return;
  }

  const progress =
    (
      (TheoryBookState.page + 1) /
      book.pages.length
    ) * 100;

  const formulaHTML =
    buildTheoryFormula(page.formula);

  const chapterTitle =
    theoryEscapeHTML(
      book.title || selectedTopic
    );

  const pageTitle =
    theoryEscapeHTML(page.title || "");

  /*
    page.content, page.diagram и page.formulaHint
    содержат готовый HTML, поэтому намеренно
    не пропускаются через theoryEscapeHTML.
  */
  box.innerHTML = `
    <article class="theoryPage">

      <header class="theoryHeader">

        <div class="theoryChapter">
          ${chapterTitle}
        </div>

        ${
          pageTitle
          ? `
            <h2 class="theoryTitle">
              ${pageTitle}
            </h2>
          `
          : ""
        }

        <div class="theoryPageNumber">
          Page ${TheoryBookState.page + 1}
          of ${book.pages.length}
        </div>

        <div
          class="theoryProgress"
          aria-hidden="true">

          <div
            class="theoryProgressBar"
            style="width:${progress}%">
          </div>

        </div>

      </header>

      ${
        formulaHTML || page.formulaHint
        ? `
          <section class="theoryFormulaSection">

            <div class="theorySectionLabel">
              Formula
            </div>

            ${
              formulaHTML
              ? `
                <div class="theoryFormulaBox">
                  ${formulaHTML}
                </div>
              `
              : ""
            }

            ${
              page.formulaHint
              ? `
                <div class="theoryFormulaHint">
                  ${page.formulaHint}
                </div>
              `
              : ""
            }

          </section>
        `
        : ""
      }

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


/* =========================================================
   ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
   ========================================================= */

/* Предыдущая страница */
function theoryPreviousPage(){

  if(TheoryBookState.page <= 0){
    return;
  }

  renderTheoryBook(
    TheoryBookState.topic,
    TheoryBookState.page - 1
  );

  scrollTheoryBookToTop();
}


/* Следующая страница */
function theoryNextPage(){

  const book =
    getTheoryBook(
      TheoryBookState.topic
    );

  if(!book){
    return;
  }

  if(
    TheoryBookState.page >=
    book.pages.length - 1
  ){
    return;
  }

  renderTheoryBook(
    TheoryBookState.topic,
    TheoryBookState.page + 1
  );

  scrollTheoryBookToTop();
}


/* Вернуться к началу книги */
function scrollTheoryBookToTop(){

  const box =
    document.getElementById("theoryBook");

  if(!box){
    return;
  }

  box.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================================================
   ОТКРЫТИЕ ТЕМЫ
   ========================================================= */

function openTheoryBookTopic(topic){

  const selectedTopic =
    getAvailableTheoryTopic(topic);

  if(!selectedTopic){
    renderTheoryBook(topic, 0);
    return;
  }

  const select =
    document.getElementById("theorySelect");

  if(select){
    select.value = selectedTopic;
  }

  renderTheoryBook(
    selectedTopic,
    0
  );
}


/*
  Совместимость со старым кодом.

  Если где-то остался вызов showTheory(),
  он теперь тоже откроет новый Theory Book.
*/
function showTheory(){

  const select =
    document.getElementById("theorySelect");

  const requestedTopic =
    select?.value ||
    TheoryBookState.topic ||
    "almanac";

  renderTheoryBook(
    requestedTopic,
    0
  );
}


/* =========================================================
   ЗАПУСК THEORY BOOK
   ========================================================= */

function initTheoryBook(){

  const select =
    document.getElementById("theorySelect");

  const requestedTopic =
    select?.value ||
    TheoryBookState.topic ||
    "almanac";

  const selectedTopic =
    getAvailableTheoryTopic(
      requestedTopic
    );

  if(!selectedTopic){

    renderTheoryBook(
      requestedTopic,
      0
    );

    return;
  }

  if(select){
    select.value = selectedTopic;
  }

  renderTheoryBook(
    selectedTopic,
    0
  );
}


/* =========================================================
   АВТОМАТИЧЕСКИЙ ЗАПУСК ПОСЛЕ ЗАГРУЗКИ HTML
   ========================================================= */

function startTheoryBookWhenReady(){

  /*
    Небольшая задержка позволяет загрузиться файлу,
    в котором объявлены главы window.THEORY_BOOK.
  */
  setTimeout(()=>{

    const bookBox =
      document.getElementById("theoryBook");

    if(bookBox){
      initTheoryBook();
    }

  },0);
}


if(document.readyState === "loading"){

  document.addEventListener(
    "DOMContentLoaded",
    startTheoryBookWhenReady
  );

}else{

  startTheoryBookWhenReady();
}


/* =========================================================
   ДЕЛАЕМ ФУНКЦИИ ДОСТУПНЫМИ ИЗ HTML
   ========================================================= */

window.renderTheoryBook =
  renderTheoryBook;

window.theoryExplain =
  theoryExplain;

window.closeTheoryExplanations =
  closeTheoryExplanations;

window.updateTheoryDiagram =
  updateTheoryDiagram;

window.theoryPreviousPage =
  theoryPreviousPage;

window.theoryNextPage =
  theoryNextPage;

window.scrollTheoryBookToTop =
  scrollTheoryBookToTop;

window.openTheoryBookTopic =
  openTheoryBookTopic;

window.initTheoryBook =
  initTheoryBook;

window.showTheory =
  showTheory;