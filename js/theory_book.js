let THEORY_BOOK = {};

function renderTheoryBook(topic){

  let box=document.getElementById("theoryBook");
  if(!box)return;

  let book=THEORY_BOOK[topic];

  if(!book || !book.pages || !book.pages.length){
    box.innerHTML="";
    return;
  }

  let page=book.pages[0];

  box.innerHTML=
    "<div class='theoryPage'>"+

      "<div class='theoryHeader'>"+
        "<div class='theoryChapter'>Chapter 1</div>"+
        "<div class='theoryTitle'>"+page.title+"</div>"+

        "<div class='theoryProgress'>"+
          "<div class='theoryProgressBar'></div>"+
        "</div>"+
      "</div>"+

      "<div class='theoryFormulaBox'>"+
        page.formula+
      "</div>"+

      "<div id='theoryPageContent'>"+
        page.content+
      "</div>"+

    "</div>";
}

function theoryExplain(key){

  document.querySelectorAll(".thTerm")
    .forEach(e=>e.classList.remove("active"));

  document.querySelectorAll(".theoryExplain")
    .forEach(e=>e.classList.remove("active"));

  let term=document.querySelector("[data-theory='"+key+"']");
  if(term)term.classList.add("active");

  let block=document.getElementById("explain_"+key);
  if(block){
    block.classList.add("active");
    block.scrollIntoView({behavior:"smooth",block:"center"});
  }
}

function initTheoryBook(){
  renderTheoryBook("almanac");
}