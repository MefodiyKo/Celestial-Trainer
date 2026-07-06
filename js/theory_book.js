let THEORY_BOOK = {};

function renderTheoryBook(topic){

  let box=document.getElementById("theoryBook");
  if(!box)return;

  let book=THEORY_BOOK[topic];

  if(!book){
    box.innerHTML="";
    return;
  }

  let page=book.pages[0];

  box.innerHTML=
  "<div class='theoryPage'>"+
    "<h2>"+book.title+"</h2>"+
    "<h3>"+page.title+"</h3>"+
    page.formula+
    page.content+
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