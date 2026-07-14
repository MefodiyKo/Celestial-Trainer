let THEORY_BOOK = {};
let theoryCurrentTopic = "almanac";
let theoryCurrentPage = 0;

function renderTheoryBook(topic, pageIndex = 0){

  const box = document.getElementById("theoryBook");
  if(!box) return;

  const book = THEORY_BOOK[topic];

  if(!book || !Array.isArray(book.pages) || book.pages.length === 0){
    box.innerHTML = "";
    return;
  }

  theoryCurrentTopic = topic;
  theoryCurrentPage = Math.max(
    0,
    Math.min(pageIndex, book.pages.length - 1)
  );

  const page = book.pages[theoryCurrentPage];
  const progress = ((theoryCurrentPage + 1) / book.pages.length) * 100;

  box.innerHTML = `
    <article class="theoryPage">

      <header class="theoryHeader">
        <div class="theoryChapter">
          ${book.title} · Chapter ${theoryCurrentPage + 1}
        </div>

        <div class="theoryTitle">
          ${page.title}
        </div>

        <div class="theoryPageNumber">
          Page ${theoryCurrentPage + 1} of ${book.pages.length}
        </div>

        <div class="theoryProgress">
          <div
            class="theoryProgressBar"
            style="width:${progress}%">
          </div>
        </div>
      </header>

      <section class="theoryFormulaBox">
        ${page.formula || ""}
      </section>

      <section id="theoryPageContent">
        ${page.content || ""}
      </section>

    </article>
  `;

  closeTheoryExplanations();
}

function closeTheoryExplanations(){

  document.querySelectorAll("#theoryBook .theoryExplain")
    .forEach(block => {
      block.classList.remove("active");
      block.hidden = true;
    });

  document.querySelectorAll("#theoryBook .thTerm")
    .forEach(term => term.classList.remove("active"));
}

function theoryExplain(key){

  const selectedTerm = document.querySelector(
    `#theoryBook .thTerm[data-theory="${key}"]`
  );

  const selectedBlock = document.getElementById("explain_" + key);

  const wasOpen =
    selectedBlock &&
    selectedBlock.classList.contains("active");

  closeTheoryExplanations();

  if(wasOpen || !selectedBlock) return;

  if(selectedTerm){
    selectedTerm.classList.add("active");
  }

  selectedBlock.hidden = false;
  selectedBlock.classList.add("active");

  setTimeout(() => {
    selectedBlock.scrollIntoView({
      behavior:"smooth",
      block:"nearest"
    });
  }, 50);
}

function theoryPreviousPage(){

  if(theoryCurrentPage <= 0) return;

  renderTheoryBook(
    theoryCurrentTopic,
    theoryCurrentPage - 1
  );
}

function theoryNextPage(){

  const book = THEORY_BOOK[theoryCurrentTopic];
  if(!book) return;

  if(theoryCurrentPage >= book.pages.length - 1) return;

  renderTheoryBook(
    theoryCurrentTopic,
    theoryCurrentPage + 1
  );
}

function initTheoryBook(){

  const select = document.getElementById("theorySelect");
  const topic = select?.value || "almanac";

  renderTheoryBook(
    THEORY_BOOK[topic] ? topic : "almanac",
    0
  );
}