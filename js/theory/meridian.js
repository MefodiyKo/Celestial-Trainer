/* =========================================================
   CELESTIAL TRAINER — THEORY: MERIDIAN PASSAGE
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.meridian = {
  title: "Meridian Passage",

  pages: [

    /* =====================================================
       PAGE 1 — GENERAL IDEA
       ===================================================== */

    {
      title: "What Is Meridian Passage?",

      formula: [
        { key: "sun", label: "Sun" },
        "→",
        { key: "meridian", label: "Observer's Meridian" },
        "→",
        { key: "maximumAltitude", label: "Maximum Altitude" }
      ],

      formulaHint:
        "Meridian passage occurs when the Sun crosses the observer's meridian and reaches its highest altitude for the day.",

      content: `

        <div
          class="theoryExplain"
          id="explain_sun"
          hidden>

          <h3>The Sun</h3>

          <p>
            During the day the Sun appears to move across the sky
            from east to west.
          </p>

          <p>
            Its altitude increases in the morning, reaches a maximum,
            then decreases in the afternoon.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_meridian"
          hidden>

          <h3>Observer's Meridian</h3>

          <p>
            The observer's meridian is the north-south great circle
            passing through the observer's position and the poles.
          </p>

          <p>
            When the Sun crosses this meridian, it is at local apparent noon.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_maximumAltitude"
          hidden>

          <h3>Maximum Altitude</h3>

          <p>
            At meridian passage the Sun reaches its greatest altitude
            above the horizon for that day.
          </p>

          <p>
            This maximum altitude can be used to determine latitude.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Meridian passage converts one maximum Sun altitude
            into a latitude.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>What the navigator normally looks for</h3>

          <div class="theoryTableExample">

            <div>Body</div>
            <div>Sun</div>

            <div>Observation</div>
            <div>Maximum altitude</div>

            <div>Corrected altitude</div>
            <div>Ho</div>

            <div>Declination</div>
            <div>From Almanac</div>

            <div>Result</div>
            <div>Latitude</div>

          </div>

          <p>
            Unlike a normal sight reduction, meridian passage does not
            require plotting an intercept.
          </p>

          <p>
            The maximum corrected altitude and the Sun's declination
            are enough to determine latitude.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Morning

          <br><br>

          ☀ rising

          <br><br>

          ↗ altitude increases

          <br><br>

          ☀ maximum altitude

          <br><br>

          ↓ Meridian Passage

          <br><br>

          ↘ altitude decreases

          <br><br>

          Afternoon

        </div>
      `
    },


    /* =====================================================
       PAGE 2 — LOCAL APPARENT NOON
       ===================================================== */

    {
      title: "Local Apparent Noon",

      formula: [
        { key: "lha", label: "LHA Sun" },
        "=",
        { key: "zero", label: "000°" },
        "→",
        { key: "lan", label: "LAN" }
      ],

      formulaHint:
        "At local apparent noon, the Sun is on the observer's meridian.",

      content: `

        <div
          class="theoryExplain"
          id="explain_lha"
          hidden>

          <h3>LHA of the Sun</h3>

          <p>
            Local Hour Angle tells how far west the Sun is from
            the observer's meridian.
          </p>

          <p>
            At meridian passage, the Sun lies directly on that meridian.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zero"
          hidden>

          <h3>LHA = 000°</h3>

          <p>
            When LHA is 000°, the Sun is crossing the observer's meridian.
          </p>

          <p>
            This is the astronomical condition for local apparent noon.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lan"
          hidden>

          <h3>LAN — Local Apparent Noon</h3>

          <p>
            LAN is the moment when the apparent Sun crosses the local meridian.
          </p>

          <p>
            It is not always exactly 12:00 by clock time.
          </p>

          <p>
            Longitude and the equation of time cause the actual time
            of meridian passage to differ from civil noon.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical meaning</h3>

          <div class="theoryTableExample">

            <div>Before LAN</div>
            <div>Sun altitude increasing</div>

            <div>At LAN</div>
            <div>Sun altitude maximum</div>

            <div>After LAN</div>
            <div>Sun altitude decreasing</div>

          </div>

          <p>
            On the bridge, the navigator normally takes a series
            of sextant sights around the predicted time of LAN.
          </p>

          <p>
            The highest corrected altitude is treated as the meridian altitude.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          East side of meridian

          <br><br>

          ☀

          <br><br>

          → rising altitude

          <br><br>

          │ Observer's Meridian │

          <br><br>

          ☀ at LAN

          <br><br>

          → falling altitude

          <br><br>

          West side of meridian

        </div>
      `
    },


    /* =====================================================
       PAGE 3 — FROM HS TO HO
       ===================================================== */

    {
      title: "Correct the Sextant Altitude",

      formula: [
        { key: "hs", label: "Hs" },
        "+",
        { key: "corrections", label: "Corrections" },
        "=",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "The maximum sextant altitude must be corrected before latitude is calculated.",

      content: `

        <div
          class="theoryExplain"
          id="explain_hs"
          hidden>

          <h3>Hs — Sextant Altitude</h3>

          <p>
            Hs is the altitude read directly from the sextant.
          </p>

          <p>
            Around meridian passage several readings may be taken
            until the maximum altitude is identified.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_corrections"
          hidden>

          <h3>Sight Corrections</h3>

          <p>
            Index correction, dip, refraction and Sun semi-diameter
            are applied in the same way as in normal sight reduction.
          </p>

          <p>
            The result must be the true observed altitude of the Sun's centre.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Ho — Observed Altitude</h3>

          <p>
            Ho is the corrected maximum altitude used in the latitude calculation.
          </p>

          <div class="theoryRemember">
            Use the corrected maximum altitude, not the raw sextant reading.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Maximum Hs</div>
            <div>78° 28.1'</div>

            <div>Index correction</div>
            <div>+0.2'</div>

            <div>Dip</div>
            <div>-3.0'</div>

            <div>Refraction</div>
            <div>-0.2'</div>

            <div>Sun SD</div>
            <div>-0.6'</div>

            <div>Ho</div>
            <div>78° 24.5'</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sextant reading Hs

          <br><br>

          ↓

          <br><br>

          Index Correction

          <br><br>

          + Dip

          <br><br>

          + Refraction

          <br><br>

          + Semi-Diameter

          <br><br>

          ↓

          <br><br>

          Ho

        </div>
      `
    },


    /* =====================================================
       PAGE 4 — CO-ALTITUDE
       ===================================================== */

    {
      title: "Co-Altitude",

      formula: [
        { key: "coalt", label: "Co-altitude" },
        "=",
        "90°",
        "−",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "Co-altitude is the angular distance from the zenith to the Sun.",

      content: `

        <div
          class="theoryExplain"
          id="explain_coalt"
          hidden>

          <h3>Co-Altitude</h3>

          <p>
            Altitude is measured upward from the horizon.
          </p>

          <p>
            Co-altitude is the remaining angle from the body
            to the observer's zenith.
          </p>

          <p>
            Together they always total 90°.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Observed Altitude — Ho</h3>

          <p>
            Ho is the corrected altitude of the Sun at meridian passage.
          </p>

          <p>
            Subtracting Ho from 90° gives the zenith distance.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Ho</div>
            <div>78° 24.5'</div>

            <div>90° 00.0'</div>
            <div>- 78° 24.5'</div>

            <div>Co-altitude</div>
            <div>11° 35.5'</div>

          </div>

          <div class="theoryRemember">
            Co-altitude is also called zenith distance.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Zenith

          <br><br>

          ●

          <br><br>

          │ Co-altitude

          <br><br>

          ☀ Sun

          <br><br>

          │ Ho

          <br><br>

          ───────── Horizon

        </div>
      `
    },


    /* =====================================================
       PAGE 5 — SAME NAME / CONTRARY NAME
       ===================================================== */

    {
      title: "Same Name and Contrary Name",

      formula: [
        { key: "coalt", label: "Co-alt" },
        "±",
        { key: "declination", label: "Declination" },
        "=",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "The relationship depends on whether latitude and declination have the same or opposite names.",

      content: `

        <div
          class="theoryExplain"
          id="explain_coalt"
          hidden>

          <h3>Co-Altitude</h3>

          <p>
            Co-altitude is the angular distance between the Sun
            and the observer's zenith.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_declination"
          hidden>

          <h3>Declination</h3>

          <p>
            Declination is the Sun's latitude on the celestial sphere.
          </p>

          <p>
            It is named North or South.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Latitude</h3>

          <p>
            The observer's latitude is obtained by combining
            co-altitude with the Sun's declination.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Same Name</h3>

          <p>
            If latitude and declination are both North or both South,
            the usual relationship is:
          </p>

          <div class="theoryRemember">
            Latitude = Declination + Co-altitude
          </div>

          <h3>Contrary Name</h3>

          <p>
            If latitude and declination have opposite names,
            the values are subtracted.
          </p>

          <div class="theoryRemember">
            Latitude = |Co-altitude − Declination|
          </div>

          <p>
            The side of the zenith on which the Sun is observed
            is important for selecting the correct latitude name.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          SAME NAME

          <br><br>

          Dec N + Co-alt = Lat N

          <br><br><br>

          CONTRARY NAME

          <br><br>

          Co-alt − Dec = Latitude

        </div>
      `
    },


    /* =====================================================
       PAGE 6 — SUN NORTH OR SOUTH
       ===================================================== */

    {
      title: "Was the Sun North or South?",

      formula: [
        { key: "bearing", label: "Sun Bearing at LAN" },
        "→",
        { key: "relationship", label: "Zenith Relationship" },
        "→",
        { key: "latitude", label: "Latitude Rule" }
      ],

      formulaHint:
        "The Sun's meridian bearing helps determine whether to add or subtract co-altitude and declination.",

      content: `

        <div
          class="theoryExplain"
          id="explain_bearing"
          hidden>

          <h3>Sun Bearing at LAN</h3>

          <p>
            At meridian passage the Sun will normally be due north
            or due south.
          </p>

          <p>
            Its bearing tells which side of the zenith the Sun lies on.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_relationship"
          hidden>

          <h3>Zenith Relationship</h3>

          <p>
            The observer's zenith, the celestial equator and the Sun
            all lie on the same meridian plane.
          </p>

          <p>
            Their relative positions determine the correct latitude formula.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Selecting the Correct Rule</h3>

          <p>
            Do not rely only on memorising one formula.
          </p>

          <p>
            First identify whether the Sun is north or south,
            note the declination name, and visualise the meridian plane.
          </p>

          <div class="theoryRemember">
            Think geometrically first. Then apply the arithmetic.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical bridge check</h3>

          <div class="theoryTableExample">

            <div>Sun bearing</div>
            <div>South</div>

            <div>Declination</div>
            <div>21° 31.2' N</div>

            <div>Co-altitude</div>
            <div>11° 35.5'</div>

            <div>Latitude</div>
            <div>33° 06.7' N</div>

          </div>

          <p>
            The Sun is south of the observer and the Sun's declination
            is north. In this geometry, latitude lies farther north
            than the declination, so the co-altitude is added.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          N

          <br><br>

          Observer Zenith ●

          <br><br>

          ↓

          <br><br>

          Celestial Equator

          <br><br>

          ↓

          <br><br>

          ☀ Sun South

          <br><br>

          S

        </div>
      `
    },


    /* =====================================================
       PAGE 7 — WORKED EXAMPLE
       ===================================================== */

    {
      title: "Worked Example",

      formula: [
        { key: "ho", label: "Ho" },
        "→",
        { key: "coalt", label: "Co-alt" },
        "+",
        { key: "declination", label: "Declination" },
        "=",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "Follow the complete calculation from observed altitude to latitude.",

      content: `

        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Observed Altitude</h3>

          <p>
            Corrected maximum Sun altitude:
            <b>78° 24.5'</b>
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_coalt"
          hidden>

          <h3>Calculate Co-Altitude</h3>

          <p>
            90° 00.0' − 78° 24.5'
            = <b>11° 35.5'</b>
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_declination"
          hidden>

          <h3>Sun Declination</h3>

          <p>
            From the almanac:
            <b>21° 31.2' N</b>
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Latitude Result</h3>

          <p>
            21° 31.2' + 11° 35.5'
            = <b>33° 06.7' N</b>
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Full calculation</h3>

          <div class="theoryTableExample">

            <div>Ho</div>
            <div>78° 24.5'</div>

            <div>Co-alt</div>
            <div>11° 35.5'</div>

            <div>Declination</div>
            <div>21° 31.2' N</div>

            <div>Sun at LAN</div>
            <div>South</div>

            <div>Calculation</div>
            <div>21° 31.2' + 11° 35.5'</div>

            <div>Latitude</div>
            <div>33° 06.7' N</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Ho = 78° 24.5'

          <br><br>

          ↓

          <br><br>

          Co-alt = 11° 35.5'

          <br><br>

          +

          <br><br>

          Dec = 21° 31.2' N

          <br><br>

          =

          <br><br>

          Latitude = 33° 06.7' N

        </div>
      `
    },


    /* =====================================================
       PAGE 8 — PRACTICAL WORKFLOW
       ===================================================== */

    {
      title: "Practical Meridian Passage Workflow",

      formula: [
        { key: "predict", label: "Predict LAN" },
        "→",
        { key: "observe", label: "Observe" },
        "→",
        { key: "maximum", label: "Find Maximum" },
        "→",
        { key: "correct", label: "Correct" },
        "→",
        { key: "calculate", label: "Calculate Latitude" }
      ],

      formulaHint:
        "A good meridian passage observation depends on preparation and identifying the true maximum altitude.",

      content: `

        <div
          class="theoryExplain"
          id="explain_predict"
          hidden>

          <h3>Predict LAN</h3>

          <p>
            Estimate the time of meridian passage in advance
            from the almanac and ship's longitude.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_observe"
          hidden>

          <h3>Observe</h3>

          <p>
            Begin taking Sun sights before the predicted LAN.
          </p>

          <p>
            Continue observations as altitude approaches its maximum.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_maximum"
          hidden>

          <h3>Find Maximum Altitude</h3>

          <p>
            The Sun may appear to pause near its highest point.
          </p>

          <p>
            Take repeated sights until the altitude clearly begins to decrease.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_correct"
          hidden>

          <h3>Correct the Observation</h3>

          <p>
            Apply all normal sextant corrections to the maximum altitude.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_calculate"
          hidden>

          <h3>Calculate Latitude</h3>

          <p>
            Convert Ho to co-altitude, obtain declination,
            determine the geometry and calculate latitude.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Predict LAN</div>

            <div>2</div>
            <div>Prepare sextant</div>

            <div>3</div>
            <div>Start observations before LAN</div>

            <div>4</div>
            <div>Take repeated altitudes</div>

            <div>5</div>
            <div>Identify maximum altitude</div>

            <div>6</div>
            <div>Apply corrections</div>

            <div>7</div>
            <div>Calculate co-altitude</div>

            <div>8</div>
            <div>Obtain Sun declination</div>

            <div>9</div>
            <div>Determine Sun north or south</div>

            <div>10</div>
            <div>Calculate latitude</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            Highest Sun altitude<br>
            ↓<br>
            Distance from zenith<br>
            ↓<br>
            Combine with declination<br>
            ↓<br>
            Latitude
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Predict LAN

          <br><br>

          ↓

          <br><br>

          Take repeated sights

          <br><br>

          ↓

          <br><br>

          Maximum Hs

          <br><br>

          ↓

          <br><br>

          Correct to Ho

          <br><br>

          ↓

          <br><br>

          Co-alt + Declination

          <br><br>

          ↓

          <br><br>

          Latitude

        </div>
      `
    }

  ]
};