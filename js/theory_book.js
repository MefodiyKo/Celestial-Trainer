const THEORY_BOOK = {
  lha:{
    title:"Local Hour Angle (LHA)",

    formula:[
      {id:"lha",text:"LHA"},
      {id:"eq",text:" = "},
      {id:"gha",text:"GHA"},
      {id:"plus",text:" + "},
      {id:"lon",text:"Longitude"}
    ],

    blocks:{
      lha:{
        title:"LHA",
        text:"LHA is the angle between your local meridian and the meridian of the celestial body. In simple words: it shows where the body is relative to your own position."
      },
      gha:{
        title:"GHA",
        text:"GHA shows where the celestial body is relative to Greenwich. It comes from the Nautical Almanac or from the app calculation."
      },
      lon:{
        title:"Longitude",
        text:"Longitude tells where the observer is east or west of Greenwich. When combined with GHA, it converts Greenwich-based position into your local position."
      }
    },

    explanation:
      "A navigator usually sees this formula first. At first it looks like just numbers from the Almanac and longitude from the ship position. But physically it means: we take the position of the body relative to Greenwich and convert it to the position of the body relative to the observer.",

    use:
      "LHA is used for sight reduction. Together with latitude and declination it allows calculation of Hc and Zn."
  }
};

function renderTheoryBook(topic){

  let box=document.getElementById("theoryBook");
  if(!box)return;

  let page=THEORY_BOOK[topic] || THEORY_BOOK.lha;

  let formulaHTML=page.formula.map(p=>{
    if(p.id==="eq" || p.id==="plus"){
      return p.text;
    }

    return `<span class="formulaPart" data-key="${p.id}" onclick="highlightTheoryPart('${p.id}')">${p.text}</span>`;
  }).join("");

  let blocksHTML=Object.keys(page.blocks).map(key=>{
    let b=page.blocks[key];

    return `
      <div class="explainBlock" id="explain_${key}">
        <b>${b.title}</b><br>
        ${b.text}
      </div>
    `;
  }).join("");

  box.innerHTML=`
    <h2>${page.title}</h2>

    <div class="formulaBox">
      ${formulaHTML}
    </div>

    ${blocksHTML}

    <div class="bookNote">
      <b>What is happening:</b><br>
      ${page.explanation}
    </div>

    <div class="bookNote">
      <b>Navigation use:</b><br>
      ${page.use}
    </div>
  `;
}

function highlightTheoryPart(key){

  document.querySelectorAll(".formulaPart")
    .forEach(e=>e.classList.remove("active"));

  document.querySelectorAll(".explainBlock")
    .forEach(e=>e.classList.remove("active"));

  let formula=document.querySelector(`.formulaPart[data-key="${key}"]`);
  if(formula)formula.classList.add("active");

  let block=document.getElementById("explain_"+key);
  if(block){
    block.classList.add("active");
    block.scrollIntoView({behavior:"smooth",block:"center"});
  }
}

function initTheoryBook(){
  renderTheoryBook("lha");
}