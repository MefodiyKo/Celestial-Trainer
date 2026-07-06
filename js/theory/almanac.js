THEORY_BOOK.almanac = {
  title:"📘 Almanac",

  pages:[
    {
      title:"Local Hour Angle (LHA)",

      formula:
      "<div class='theoryFormula'>"+
        "<span class='thTerm' data-theory='lha' onclick=\"theoryExplain('lha')\">LHA</span>"+
        " = "+
        "<span class='thTerm' data-theory='gha' onclick=\"theoryExplain('gha')\">GHA</span>"+
        " + "+
        "<span class='thTerm' data-theory='longitude' onclick=\"theoryExplain('longitude')\">Longitude</span>"+
      "</div>"+
      "<div class='theorySmall'>Tap LHA, GHA or Longitude to understand the formula.</div>",

      content:
      "<div class='theoryExplain' id='explain_lha'>"+
        "<b>LHA — Local Hour Angle</b><br>"+
        "This is the angle of the celestial body measured from your own meridian. "+
        "In simple words: GHA tells where the body is from Greenwich, but LHA tells where it is from you."+
      "</div>"+

      "<div class='theoryExplain' id='explain_gha'>"+
        "<b>GHA — Greenwich Hour Angle</b><br>"+
        "This value comes from the Almanac. It shows where the celestial body is measured from the Greenwich meridian."+
      "</div>"+

      "<div class='theoryExplain' id='explain_longitude'>"+
        "<b>Longitude</b><br>"+
        "Longitude moves the reference from Greenwich to the ship position. "+
        "That is why we combine GHA with Longitude to get LHA."+
      "</div>"+

      "<div class='bookNote'>"+
        "<b>What is happening?</b><br>"+
        "The navigator first sees the formula. The app helps explain what each part means, step by step."+
      "</div>"
    }
  ]
};