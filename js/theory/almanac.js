/* =========================================================
   CELESTIAL TRAINER — THEORY: ALMANAC
   ========================================================= */

THEORY_BOOK.almanac = {
  title: "Almanac",

  pages: [
    {
      title: "Local Hour Angle (LHA)",

      formula: [
        { key: "lha", label: "LHA" },
        "=",
        { key: "gha", label: "GHA" },
        "±",
        { key: "longitude", label: "Longitude" }
      ],

      formulaHint:
        "Tap LHA, GHA or Longitude. Only the selected explanation will open.",

      content: `
        <div
          class="theoryExplain"
          id="explain_lha"
          hidden>

          <h3>Local Hour Angle — LHA</h3>

          <p>
            LHA is the angular position of a celestial body measured
            from the observer’s own meridian.
          </p>

          <p>
            In practical terms, it answers the question:
            <b>where is the body relative to the ship?</b>
          </p>

          <p>
            The Almanac gives the body’s position relative to Greenwich.
            LHA converts that information to the observer’s longitude.
          </p>

          <div class="theoryRemember">
            <b>Remember:</b><br>
            GHA is referenced to Greenwich.<br>
            LHA is referenced to the observer.
          </div>
        </div>

        <div
          class="theoryExplain"
          id="explain_gha"
          hidden>

          <h3>Greenwich Hour Angle — GHA</h3>

          <p>
            GHA is the angular distance measured westward from the
            Greenwich meridian to the hour circle of the celestial body.
          </p>

          <p>
            This is the value the navigator normally takes from the
            Nautical Almanac.
          </p>

          <p>
            GHA tells us where the Sun, Moon, planet or Aries is positioned
            relative to Greenwich at a particular UTC.
          </p>

          <div class="theoryRemember">
            <b>Think of it this way:</b><br>
            GHA is the body’s Greenwich-based address.
          </div>
        </div>

        <div
          class="theoryExplain"
          id="explain_longitude"
          hidden>

          <h3>Longitude</h3>

          <p>
            Longitude tells us how far the ship is east or west of
            Greenwich.
          </p>

          <p>
            By applying longitude to GHA, we move the reference point
            from Greenwich to the observer’s local meridian.
          </p>

          <p>
            The sign depends on the convention used in the calculation.
            In Celestial Trainer the result is automatically normalized
            to the range from 0° to 360°.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Longitude moves the calculation from Greenwich to the ship.
          </div>
        </div>

        <div class="theoryBookIntro">

          <h3>What the navigator normally sees</h3>

          <div class="theoryTableExample">
            <div>GHA Sun</div>
            <div>214° 18.4'</div>

            <div>Longitude</div>
            <div>068° 31.6' E</div>

            <div>LHA</div>
            <div>282° 50.0'</div>
          </div>

          <p>
            At first these may look like unrelated numbers.
            This page explains how they represent one continuous geometric
            relationship between Greenwich, the observer and the celestial body.
          </p>

        </div>
      `,

      diagram: `
        <div class="lhaDiagram">

          <div class="diagramEarth">
            <div class="diagramGreenwich"></div>
            <div class="diagramObserver"></div>
            <div class="diagramBodyDirection"></div>

            <div class="diagramLabel diagramLabelGreenwich">
              Greenwich
            </div>

            <div class="diagramLabel diagramLabelObserver">
              Ship
            </div>

            <div class="diagramLabel diagramLabelBody">
              Celestial body
            </div>
          </div>

          <div class="diagramMessage">
            Tap a formula term.
          </div>

        </div>
      `
   },
{
  title: "Finding GHA in the Nautical Almanac",

  formula: [
    { key:"utc", label:"UTC" },
    "→",
    { key:"gha", label:"GHA" },
    "+",
    { key:"increment", label:"Increment" }
  ],

  formulaHint:
    "The Almanac gives the hourly value. The Increment corrects it to the exact minute and second.",

  content: `

<div class="theoryBookIntro">

<h3>Step 1 — Start with UTC</h3>

<p>
Every celestial calculation begins with the exact UTC.
The Nautical Almanac is arranged by date and by every full hour.
</p>

<p>
Example:
</p>

<div class="theoryTableExample">

<div>Date</div><div>15 July</div>

<div>UTC</div><div>10:23:18</div>

</div>

</div>


<div class="theoryExplain" id="explain_utc" hidden>

<h3>UTC</h3>

<p>

UTC determines which page of the Almanac must be opened.

</p>

<p>

Always use UTC, never ship's local time.

</p>

</div>


<div class="theoryExplain" id="explain_gha" hidden>

<h3>Hourly GHA</h3>

<p>

The Almanac provides GHA for every full hour.

</p>

<p>

For 10:00 UTC you simply read the value directly from the daily page.

</p>

</div>


<div class="theoryExplain" id="explain_increment" hidden>

<h3>Increment</h3>

<p>

Because the observation is rarely made exactly on the hour,
an Increment is added.

</p>

<p>

The Increment is taken from the Increment and Correction Tables.

</p>

<div class="theoryRemember">

Final GHA = Hourly GHA + Increment

</div>

</div>

`,

diagram: `

<div class="theoryDiagramPlaceholder">

📖 Nautical Almanac

<br><br>

Daily page

↓

Hourly GHA

↓

Increment Tables

↓

Final GHA

</div>

`

}
]
};
};