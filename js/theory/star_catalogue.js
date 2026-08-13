/* =========================================================
   CELESTIAL TRAINER — THEORY: NAVIGATION STAR CATALOGUE
   57 NAVIGATION STARS + POLARIS
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};


/* =========================================================
   CATALOGUE HELPERS
   ========================================================= */

function catalogueFormatSHA(value){

  if(value === undefined || value === null){
    return "—";
  }

  let deg = Math.floor(value);
  let min = (value - deg) * 60;

  return (
    String(deg).padStart(3,"0") +
    "° " +
    min.toFixed(1) +
    "'"
  );
}


function catalogueFormatDec(value){

  if(value === undefined || value === null){
    return "—";
  }

  const hemi = value >= 0 ? "N" : "S";

  const abs = Math.abs(value);
  const deg = Math.floor(abs);
  const min = (abs - deg) * 60;

  return (
    String(deg).padStart(2,"0") +
    "° " +
    min.toFixed(1) +
    "' " +
    hemi
  );
}


function catalogueMagnitudeText(value){

  if(value === undefined || value === null){
    return "—";
  }

  let note = "";

  if(value < 0){
    note = " — exceptionally bright";
  }
  else if(value < 1){
    note = " — very bright";
  }
  else if(value < 2){
    note = " — bright";
  }
  else{
    note = " — moderate";
  }

  return value.toFixed(1) + note;
}


function catalogueLatitudeHint(dec){

  if(dec >= 60){
    return "Strong northern star. Best seen from Northern Hemisphere.";
  }

  if(dec >= 20){
    return "Northern celestial star. Visible from many northern and tropical latitudes.";
  }

  if(dec > -20){
    return "Near the celestial equatorial region. Visible from a wide range of latitudes.";
  }

  if(dec > -60){
    return "Southern celestial star. Particularly useful in tropical and southern latitudes.";
  }

  return "Far southern star. Best seen from Southern Hemisphere and low northern latitudes.";
}


function catalogueBrightnessClass(mag){

  if(mag < 0){
    return "Exceptional";
  }

  if(mag < 1){
    return "Very bright";
  }

  if(mag < 2){
    return "Bright";
  }

  return "Moderate";
}


/* =========================================================
   BUILD STAR CARDS
   ========================================================= */

function buildNavigationStarCards(){

  if(
    typeof STAR_CATALOG === "undefined" ||
    !STAR_CATALOG
  ){
    return `
      <div class="theoryRemember">
        STAR_CATALOG is not loaded.
      </div>
    `;
  }


  /*
    Polaris is handled separately.

    The normal catalogue contains the traditional
    57 selected navigation stars.
  */

  const names = Object.keys(STAR_CATALOG)
    .filter(name => name !== "Polaris")
    .sort((a,b) => a.localeCompare(b));


  let html = `

    <div class="theoryCatalogueSummary">

      <div class="theoryRemember">

        <b>${names.length} Navigation Stars</b><br><br>

        Search by star name or constellation.

      </div>

    </div>


    <input
      id="navigationStarSearch"
      type="search"
      class="full"
      placeholder="Search star or constellation..."
      autocomplete="off"
      oninput="filterNavigationStarCatalogue(this.value)"
      style="margin-bottom:14px;">


    <div
      id="navigationStarCount"
      class="small"
      style="margin-bottom:12px;">

      Showing ${names.length} stars

    </div>


    <div
      id="navigationStarCatalogueList"
      class="navigationStarCatalogueList">
  `;


  names.forEach(name => {

    const star = STAR_CATALOG[name];

    const sha =
      catalogueFormatSHA(star.SHA);

    const dec =
      catalogueFormatDec(star.Dec);

    const magnitude =
      catalogueMagnitudeText(star.Mag);

    const brightness =
      catalogueBrightnessClass(star.Mag);

    const visibility =
      catalogueLatitudeHint(star.Dec);

    const searchText =
      (
        name + " " +
        (star.Con || "") + " " +
        brightness
      ).toLowerCase();


    html += `

      <details
        class="navigationStarCard"
        data-star-search="${searchText}">

        <summary>

          <span class="navigationStarName">
            ★ ${name}
          </span>

          <span class="navigationStarConstellation">
            ${star.Con || "—"}
          </span>

        </summary>


        <div class="navigationStarDetails">

          <div class="theoryTableExample">

            <div>Star</div>
            <div>${name}</div>

            <div>Constellation</div>
            <div>${star.Con || "—"}</div>

            <div>SHA</div>
            <div>${sha}</div>

            <div>Declination</div>
            <div>${dec}</div>

            <div>Magnitude</div>
            <div>${magnitude}</div>

            <div>Brightness</div>
            <div>${brightness}</div>

          </div>


          <div class="theoryRemember">

            <b>Visibility:</b><br>
            ${visibility}

          </div>


          <p>

            In actual sight planning, also check the star's
            calculated altitude <b>Hc</b> and azimuth <b>Zn</b>
            for the observer's position and UTC.

          </p>

        </div>

      </details>
    `;
  });


  html += `

    </div>

    <div
      id="navigationStarNoResults"
      class="theoryRemember"
      style="display:none;margin-top:12px;">

      No matching navigation star found.

    </div>
  `;


  return html;
}


/* =========================================================
   POLARIS CARD
   ========================================================= */

function buildPolarisCatalogueCard(){

  if(
    typeof STAR_CATALOG === "undefined" ||
    !STAR_CATALOG.Polaris
  ){
    return "";
  }


  const p = STAR_CATALOG.Polaris;


  return `

    <div class="theoryBookIntro">

      <h3>Polaris — Special Navigation Star</h3>

      <div class="theoryTableExample">

        <div>Name</div>
        <div>Polaris</div>

        <div>Constellation</div>
        <div>${p.Con}</div>

        <div>SHA</div>
        <div>${catalogueFormatSHA(p.SHA)}</div>

        <div>Declination</div>
        <div>${catalogueFormatDec(p.Dec)}</div>

        <div>Magnitude</div>
        <div>${p.Mag.toFixed(1)}</div>

      </div>


      <div class="theoryRemember">

        Polaris is treated separately because it lies very close
        to the North Celestial Pole and is used directly for
        <b>Latitude by Polaris</b>.

      </div>

    </div>
  `;
}


/* =========================================================
   SEARCH / FILTER
   ========================================================= */

function filterNavigationStarCatalogue(value){

  const query =
    String(value || "")
      .trim()
      .toLowerCase();


  const cards =
    document.querySelectorAll(
      "#navigationStarCatalogueList .navigationStarCard"
    );


  let visible = 0;


  cards.forEach(card => {

    const text =
      card.dataset.starSearch || "";

    const match =
      !query ||
      text.includes(query);


    card.style.display =
      match ? "" : "none";


    if(match){
      visible++;
    }
  });


  const counter =
    document.getElementById(
      "navigationStarCount"
    );


  if(counter){

    counter.textContent =
      "Showing " +
      visible +
      " star" +
      (visible === 1 ? "" : "s");
  }


  const noResults =
    document.getElementById(
      "navigationStarNoResults"
    );


  if(noResults){

    noResults.style.display =
      visible === 0
        ? "block"
        : "none";
  }
}


/* =========================================================
   THEORY BOOK
   ========================================================= */

window.THEORY_BOOK.catalogue = {

  title: "57 Navigation Stars Catalogue",

  pages: [


    /* =====================================================
       PAGE 1
       ===================================================== */

    {

      title: "The Navigation Star Catalogue",

      formula: [

        {
          key: "stars",
          label: "57 Stars"
        },

        "+",

        {
          key: "polaris",
          label: "Polaris"
        },

        "→",

        {
          key: "catalogue",
          label: "Navigation Reference"
        }

      ],


      formulaHint:

        "The Nautical Almanac uses a selected group of bright, well-positioned stars for practical celestial navigation.",


      content: `

        <div
          class="theoryExplain"
          id="explain_stars"
          hidden>

          <h3>57 Navigation Stars</h3>

          <p>
            Navigators do not need to learn every visible star
            in the sky.
          </p>

          <p>
            A selected group of bright and useful stars is used
            for practical celestial navigation.
          </p>

          <div class="theoryRemember">

            The goal is not astronomy for its own sake.

            <br><br>

            The goal is to recognise useful stars quickly
            and confidently.

          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_polaris"
          hidden>

          <h3>Polaris</h3>

          <p>
            Polaris is normally treated separately from the
            57 selected navigation stars.
          </p>

          <p>
            Its special value comes from its position very close
            to the North Celestial Pole.
          </p>

          <p>
            This allows Polaris to be used directly for
            determining latitude.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_catalogue"
          hidden>

          <h3>Navigation Reference</h3>

          <p>
            For each star the navigator needs several pieces
            of information.
          </p>

          <p>
            The most important are the star's name,
            SHA and Declination.
          </p>

          <p>
            Constellation and magnitude are extremely useful
            for identification.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>What this catalogue contains</h3>

          <div class="theoryTableExample">

            <div>Name</div>
            <div>Star identification</div>

            <div>Constellation</div>
            <div>Where to look</div>

            <div>SHA</div>
            <div>Celestial longitude reference</div>

            <div>Declination</div>
            <div>Celestial latitude</div>

            <div>Magnitude</div>
            <div>Apparent brightness</div>

          </div>

        </div>
      `,


      diagram: `

        <div class="theoryDiagramPlaceholder">

          57 selected stars

          <br><br>

          +

          <br><br>

          Polaris

          <br><br>

          ↓

          <br><br>

          Navigation Star Catalogue

        </div>
      `
    },


    /* =====================================================
       PAGE 2
       ===================================================== */

    {

      title: "How to Read a Star Entry",

      formula: [

        {
          key: "sha",
          label: "SHA"
        },

        "+",

        {
          key: "dec",
          label: "Declination"
        },

        "+",

        {
          key: "mag",
          label: "Magnitude"
        },

        "+",

        {
          key: "constellation",
          label: "Constellation"
        }

      ],


      formulaHint:

        "These values describe where the star is located on the celestial sphere and how easily it can be recognised.",


      content: `

        <div
          class="theoryExplain"
          id="explain_sha"
          hidden>

          <h3>SHA</h3>

          <p>
            SHA means Sidereal Hour Angle.
          </p>

          <p>
            It is measured westward from the First Point of Aries
            from 000° to 360°.
          </p>

          <div class="theoryRemember">

            GHA Star = GHA Aries + SHA

          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_dec"
          hidden>

          <h3>Declination</h3>

          <p>
            Declination is the star's angular position
            north or south of the celestial equator.
          </p>

          <p>
            It is the celestial equivalent of latitude.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_mag"
          hidden>

          <h3>Magnitude</h3>

          <p>
            Magnitude describes apparent brightness.
          </p>

          <p>
            The smaller the magnitude number,
            the brighter the star appears.
          </p>

          <div class="theoryRemember">

            Sirius has a negative magnitude
            because it is exceptionally bright.

          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_constellation"
          hidden>

          <h3>Constellation</h3>

          <p>
            The constellation gives the visual neighbourhood
            of the star.
          </p>

          <p>
            This is extremely useful for positive identification
            before taking a sextant sight.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example — Sirius</h3>

          <div class="theoryTableExample">

            <div>Star</div>
            <div>Sirius</div>

            <div>Constellation</div>
            <div>Canis Major</div>

            <div>SHA</div>
            <div>About 259°</div>

            <div>Declination</div>
            <div>About 17° S</div>

            <div>Magnitude</div>
            <div>About -1.5</div>

          </div>

        </div>
      `,


      diagram: `

        <div class="theoryDiagramPlaceholder">

          STAR

          <br><br>

          ↓

          <br><br>

          SHA — where east/west

          <br><br>

          Declination — where north/south

          <br><br>

          Magnitude — how bright

          <br><br>

          Constellation — how to identify

        </div>
      `
    },


    /* =====================================================
       PAGE 3 — COMPLETE SEARCHABLE CATALOGUE
       ===================================================== */

    {

      title: "All 57 Navigation Stars",

      formula: [

        {
          key: "search",
          label: "Search"
        },

        "→",

        {
          key: "star",
          label: "Star"
        },

        "→",

        {
          key: "data",
          label: "Navigation Data"
        }

      ],


      formulaHint:

        "Tap a star to open its navigation data. Search by star name or constellation.",


      content: `

        <div
          class="theoryExplain"
          id="explain_search"
          hidden>

          <h3>Search</h3>

          <p>
            Type a star name or constellation.
          </p>

          <p>
            For example:
            Sirius, Orion, Crux, Centaurus or Pegasus.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_star"
          hidden>

          <h3>Select a Star</h3>

          <p>
            Tap the star entry to expand it.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_data"
          hidden>

          <h3>Navigation Data</h3>

          <p>
            Each entry shows SHA, Declination,
            magnitude and constellation.
          </p>

        </div>

        ${buildNavigationStarCards()}

      `,


      diagram: `

        <div class="theoryDiagramPlaceholder">

          Search

          <br><br>

          ↓

          <br><br>

          ★ Navigation Star

          <br><br>

          ↓

          <br><br>

          SHA + Dec + Magnitude

        </div>
      `
    },


    /* =====================================================
       PAGE 4 — POLARIS
       ===================================================== */

    {

      title: "Polaris — Special Case",

      formula: [

        {
          key: "polaris",
          label: "Polaris"
        },

        "≈",

        {
          key: "ncp",
          label: "North Celestial Pole"
        },

        "→",

        {
          key: "latitude",
          label: "Latitude"
        }

      ],


      formulaHint:

        "Polaris is shown separately because its navigation use is different from the other selected stars.",


      content: `

        <div
          class="theoryExplain"
          id="explain_polaris"
          hidden>

          <h3>Polaris</h3>

          <p>
            Polaris lies close to the North Celestial Pole.
          </p>

          <p>
            It therefore appears almost stationary in the sky.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ncp"
          hidden>

          <h3>North Celestial Pole</h3>

          <p>
            The altitude of the celestial pole above
            the horizon equals the observer's latitude.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Latitude</h3>

          <p>
            Polaris altitude is therefore approximately
            equal to latitude.
          </p>

          <p>
            A Polaris correction is applied for
            accurate navigation work.
          </p>

        </div>

        ${buildPolarisCatalogueCard()}

      `,


      diagram: `

        <div class="theoryDiagramPlaceholder">

          ★ Polaris

          <br><br>

          ● North Celestial Pole

          <br><br>

          ↓

          <br><br>

          Altitude ≈ Latitude

        </div>
      `
    }

  ]
};