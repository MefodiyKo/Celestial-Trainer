/* =========================================================
   CELESTIAL TRAINER — THEORY: SIGHT REDUCTION
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.sight = {
  title: "Sight Reduction",

  pages: [

    /* =====================================================
       PAGE 1 — GENERAL IDEA
       ===================================================== */

    {
      title: "What Is Sight Reduction?",

      formula: [
        { key: "hs", label: "Hs" },
        "→",
        { key: "ho", label: "Ho" },
        "→",
        { key: "hc", label: "Hc" },
        "→",
        { key: "intercept", label: "Intercept" }
      ],

      formulaHint:
        "Sight reduction converts a sextant observation into a line of position.",

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
            It is not yet the final observed altitude because several
            corrections still have to be applied.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Hs is the raw sextant reading.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Ho — Observed Altitude</h3>

          <p>
            Ho is the corrected altitude of the celestial body.
          </p>

          <p>
            It is obtained after applying index correction, dip,
            refraction and the body-specific corrections.
          </p>

          <div class="theoryRemember">
            Ho is the altitude that is compared with the calculated altitude.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Hc — Calculated Altitude</h3>

          <p>
            Hc is the altitude that the celestial body should have
            from the assumed position.
          </p>

          <p>
            It is calculated from latitude, LHA and declination.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Intercept</h3>

          <p>
            The intercept is the difference between Ho and Hc.
          </p>

          <p>
            One minute of altitude difference corresponds to
            approximately one nautical mile.
          </p>

          <div class="theoryRemember">
            Ho &gt; Hc = Toward<br>
            Ho &lt; Hc = Away
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>What the navigator normally works with</h3>

          <div class="theoryTableExample">

            <div>Sextant altitude Hs</div>
            <div>42° 18.6'</div>

            <div>Observed altitude Ho</div>
            <div>42° 15.8'</div>

            <div>Calculated altitude Hc</div>
            <div>42° 10.2'</div>

            <div>Intercept</div>
            <div>5.6 NM Toward</div>

          </div>

          <p>
            Sight reduction does not directly give a ship's position.
          </p>

          <p>
            It produces one line of position. Two or more lines
            are required for a fix.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sextant

          <br><br>

          ↓ Hs

          <br><br>

          Corrections

          <br><br>

          ↓ Ho

          <br><br>

          Compare with Hc

          <br><br>

          ↓

          <br><br>

          Intercept + Zn

          <br><br>

          ↓

          <br><br>

          Line of Position

        </div>
      `
    },


    /* =====================================================
       PAGE 2 — FROM HS TO HO
       ===================================================== */

    {
      title: "From Hs to Ho",

      formula: [
        { key: "hs", label: "Hs" },
        "+",
        { key: "ie", label: "IE" },
        "+",
        { key: "dip", label: "Dip" },
        "+",
        { key: "refraction", label: "Refraction" },
        "+",
        { key: "sdpa", label: "SD / PA" },
        "=",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "The raw sextant altitude must be corrected before it can be used.",

      content: `

        <div
          class="theoryExplain"
          id="explain_hs"
          hidden>

          <h3>Sextant Altitude — Hs</h3>

          <p>
            Hs is the angle measured between the celestial body
            and the visible horizon.
          </p>

          <p>
            This is the value read from the sextant at the time
            of observation.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ie"
          hidden>

          <h3>Index Error / Index Correction</h3>

          <p>
            A sextant may not read exactly zero when the true horizon
            is aligned.
          </p>

          <p>
            The correction for this small instrument error must be
            applied to the sextant altitude.
          </p>

          <div class="theoryRemember">
            Check the sextant's index error before observations.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_dip"
          hidden>

          <h3>Dip</h3>

          <p>
            The observer's eye is above sea level, so the visible horizon
            is slightly below the true horizontal plane.
          </p>

          <p>
            Dip corrects for the height of eye.
          </p>

          <div class="theoryRemember">
            Greater height of eye = greater dip correction.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_refraction"
          hidden>

          <h3>Refraction</h3>

          <p>
            The Earth's atmosphere bends light from celestial bodies.
          </p>

          <p>
            This makes the body appear slightly higher than its
            geometrical position.
          </p>

          <p>
            Refraction is strongest at low altitudes.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_sdpa"
          hidden>

          <h3>SD / Parallax</h3>

          <p>
            Semi-diameter is used when observing the upper or lower
            limb of the Sun or Moon.
          </p>

          <p>
            Parallax is especially important for the Moon because
            it is much closer to Earth than other celestial bodies.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Observed Altitude — Ho</h3>

          <p>
            Ho is the final corrected altitude.
          </p>

          <p>
            This is the observational value used in the intercept
            calculation.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example correction sequence</h3>

          <div class="theoryTableExample">

            <div>Hs</div>
            <div>42° 18.6'</div>

            <div>Index correction</div>
            <div>+0.4'</div>

            <div>Dip</div>
            <div>-3.2'</div>

            <div>Refraction</div>
            <div>-1.0'</div>

            <div>SD / PA</div>
            <div>+1.0'</div>

            <div>Ho</div>
            <div>42° 15.8'</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Hs

          <br><br>

          + Index Correction

          <br><br>

          + Dip

          <br><br>

          + Refraction

          <br><br>

          + SD / Parallax

          <br><br>

          = Ho

        </div>
      `
    },


    /* =====================================================
       PAGE 3 — ALMANAC DATA
       ===================================================== */

    {
      title: "Almanac Data for Sight Reduction",

      formula: [
        { key: "gha", label: "GHA" },
        "+",
        { key: "longitude", label: "Longitude" },
        "→",
        { key: "lha", label: "LHA" },
        "+",
        { key: "declination", label: "Declination" }
      ],

      formulaHint:
        "LHA and Declination define the body's geometrical position relative to the observer.",

      content: `

        <div
          class="theoryExplain"
          id="explain_gha"
          hidden>

          <h3>GHA</h3>

          <p>
            GHA gives the body's angular position measured westward
            from the Greenwich meridian.
          </p>

          <p>
            It comes from the nautical almanac or the offline almanac engine.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_longitude"
          hidden>

          <h3>Longitude</h3>

          <p>
            The observer's longitude converts GHA into Local Hour Angle.
          </p>

          <p>
            This moves the reference from Greenwich to the observer's meridian.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lha"
          hidden>

          <h3>Local Hour Angle — LHA</h3>

          <p>
            LHA is the angular position of the celestial body measured
            from the observer's own meridian.
          </p>

          <p>
            LHA is one of the main values used in calculating Hc and Zn.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_declination"
          hidden>

          <h3>Declination</h3>

          <p>
            Declination is the celestial equivalent of latitude.
          </p>

          <p>
            It tells how far north or south of the celestial equator
            the body is located.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>GHA</div>
            <div>155° 22.4'</div>

            <div>Longitude</div>
            <div>068° 31.6' E</div>

            <div>LHA</div>
            <div>223° 54.0'</div>

            <div>Declination</div>
            <div>18° 42.1' N</div>

          </div>

          <p>
            These values are combined with the assumed latitude
            to calculate the body's altitude and azimuth.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Greenwich

          <br><br>

          ↓ GHA

          <br><br>

          Observer Longitude

          <br><br>

          ↓

          <br><br>

          LHA

          <br><br>

          + Declination

          <br><br>

          ↓

          <br><br>

          Hc and Zn

        </div>
      `
    },


    /* =====================================================
       PAGE 4 — HC AND ZN
       ===================================================== */

    {
      title: "Calculated Altitude and Azimuth",

      formula: [
        { key: "latitude", label: "Latitude" },
        "+",
        { key: "lha", label: "LHA" },
        "+",
        { key: "declination", label: "Declination" },
        "→",
        { key: "hc", label: "Hc" },
        "+",
        { key: "zn", label: "Zn" }
      ],

      formulaHint:
        "From the assumed position, the navigator calculates where the body should appear.",

      content: `

        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Assumed Latitude</h3>

          <p>
            The assumed latitude is the latitude used for the sight
            reduction calculation.
          </p>

          <p>
            In traditional tabular methods it is often chosen as
            a convenient whole degree.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lha"
          hidden>

          <h3>LHA</h3>

          <p>
            LHA shows where the celestial body is east or west
            of the observer's meridian.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_declination"
          hidden>

          <h3>Declination</h3>

          <p>
            Declination shows the body's north-south position
            on the celestial sphere.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Calculated Altitude — Hc</h3>

          <p>
            Hc is the predicted altitude of the celestial body
            from the assumed position.
          </p>

          <p>
            It is compared directly with Ho.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zn"
          hidden>

          <h3>True Azimuth — Zn</h3>

          <p>
            Zn is the true bearing from the observer toward
            the celestial body.
          </p>

          <p>
            It is measured clockwise from True North.
          </p>

          <div class="theoryRemember">
            Zn tells you the direction in which the intercept
            must be plotted.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Example result</h3>

          <div class="theoryTableExample">

            <div>Assumed Latitude</div>
            <div>08° N</div>

            <div>LHA</div>
            <div>224°</div>

            <div>Declination</div>
            <div>18° 42.1' N</div>

            <div>Hc</div>
            <div>42° 10.2'</div>

            <div>Zn</div>
            <div>286.4°</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Assumed Position

          <br><br>

          ↓ calculate

          <br><br>

          Hc = expected altitude

          <br><br>

          Zn = direction to body

        </div>
      `
    },


    /* =====================================================
       PAGE 5 — INTERCEPT
       ===================================================== */

    {
      title: "Intercept — Toward or Away",

      formula: [
        { key: "ho", label: "Ho" },
        "−",
        { key: "hc", label: "Hc" },
        "=",
        { key: "intercept", label: "Intercept" }
      ],

      formulaHint:
        "One minute of altitude difference is treated as one nautical mile.",

      content: `

        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Ho</h3>

          <p>
            Ho is what you actually observed after all corrections.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Hc</h3>

          <p>
            Hc is what you calculated from the assumed position.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Intercept</h3>

          <p>
            If Ho is greater than Hc, the body appears higher
            than expected.
          </p>

          <p>
            That means the observer is closer to the body's geographical
            position than the assumed position.
          </p>

          <p>
            The intercept is therefore plotted <b>Toward</b> the body.
          </p>

          <p>
            If Ho is smaller than Hc, the intercept is plotted
            <b>Away</b>.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example — Toward</h3>

          <div class="theoryTableExample">

            <div>Ho</div>
            <div>42° 15.8'</div>

            <div>Hc</div>
            <div>42° 10.2'</div>

            <div>Difference</div>
            <div>+5.6'</div>

            <div>Intercept</div>
            <div>5.6 NM Toward</div>

          </div>

          <h3>Example — Away</h3>

          <div class="theoryTableExample">

            <div>Ho</div>
            <div>31° 22.0'</div>

            <div>Hc</div>
            <div>31° 26.5'</div>

            <div>Difference</div>
            <div>-4.5'</div>

            <div>Intercept</div>
            <div>4.5 NM Away</div>

          </div>

          <div class="theoryRemember">
            <b>Rule:</b><br>
            Ho higher → Toward<br>
            Ho lower → Away
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Ho &gt; Hc

          <br><br>

          ↓

          <br><br>

          Toward body

          <br><br><br>

          Ho &lt; Hc

          <br><br>

          ↓

          <br><br>

          Away from body

        </div>
      `
    },


    /* =====================================================
       PAGE 6 — PLOTTING THE LOP
       ===================================================== */

    {
      title: "Plotting the Line of Position",

      formula: [
        { key: "ap", label: "AP" },
        "→",
        { key: "zn", label: "Zn" },
        "→",
        { key: "intercept", label: "Intercept" },
        "→",
        { key: "lop", label: "LOP" }
      ],

      formulaHint:
        "The intercept is laid off along Zn, then the LOP is drawn perpendicular to Zn.",

      content: `

        <div
          class="theoryExplain"
          id="explain_ap"
          hidden>

          <h3>Assumed Position — AP</h3>

          <p>
            The AP is the reference point used for the calculation.
          </p>

          <p>
            The plotted intercept starts from this point.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zn"
          hidden>

          <h3>Zn Direction</h3>

          <p>
            Draw a line from the AP in the true azimuth direction.
          </p>

          <p>
            This is the azimuth line toward the celestial body's
            geographical position.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Plot the Intercept</h3>

          <p>
            Measure the intercept distance along the Zn line.
          </p>

          <p>
            Plot toward the body if Ho is greater than Hc,
            and away if Ho is smaller than Hc.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lop"
          hidden>

          <h3>Line of Position — LOP</h3>

          <p>
            Through the intercept point, draw a line perpendicular
            to the azimuth line.
          </p>

          <p>
            The observer is somewhere on this line at the time
            of observation.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical plotting sequence</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Mark the Assumed Position</div>

            <div>2</div>
            <div>Draw Zn from AP</div>

            <div>3</div>
            <div>Lay off intercept Toward or Away</div>

            <div>4</div>
            <div>Draw a perpendicular line</div>

            <div>5</div>
            <div>This line is the LOP</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          AP ●

          <br><br>

          ↗ Zn

          <br><br>

          ● Intercept point

          <br><br>

          ───────────

          <br>

          LOP perpendicular to Zn

        </div>
      `
    },


    /* =====================================================
       PAGE 7 — COMPLETE WORKFLOW
       ===================================================== */

    {
      title: "Complete Sight Reduction Workflow",

      formula: [
        { key: "observe", label: "Observe" },
        "→",
        { key: "correct", label: "Correct" },
        "→",
        { key: "calculate", label: "Calculate" },
        "→",
        { key: "compare", label: "Compare" },
        "→",
        { key: "plot", label: "Plot" }
      ],

      formulaHint:
        "A reliable sight is a chain. Every value must belong to the same observation.",

      content: `

        <div
          class="theoryExplain"
          id="explain_observe"
          hidden>

          <h3>Observe</h3>

          <p>
            Measure the altitude with the sextant and record
            the exact UTC.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_correct"
          hidden>

          <h3>Correct</h3>

          <p>
            Apply index correction, dip, refraction,
            semi-diameter and parallax as required.
          </p>

          <p>
            The result is Ho.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_calculate"
          hidden>

          <h3>Calculate</h3>

          <p>
            Use GHA, longitude, declination and latitude
            to calculate LHA, Hc and Zn.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_compare"
          hidden>

          <h3>Compare</h3>

          <p>
            Compare Ho with Hc.
          </p>

          <p>
            The difference gives the intercept.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_plot"
          hidden>

          <h3>Plot</h3>

          <p>
            Plot the intercept along Zn and draw the LOP perpendicular
            to the azimuth line.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Full navigator workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Identify celestial body</div>

            <div>2</div>
            <div>Take sextant altitude Hs</div>

            <div>3</div>
            <div>Record exact UTC</div>

            <div>4</div>
            <div>Apply sight corrections</div>

            <div>5</div>
            <div>Obtain Ho</div>

            <div>6</div>
            <div>Obtain GHA and Declination</div>

            <div>7</div>
            <div>Calculate LHA</div>

            <div>8</div>
            <div>Calculate Hc and Zn</div>

            <div>9</div>
            <div>Calculate intercept</div>

            <div>10</div>
            <div>Plot Toward or Away</div>

            <div>11</div>
            <div>Draw the LOP</div>

            <div>12</div>
            <div>Combine with another LOP for a fix</div>

          </div>

          <div class="theoryRemember">
            <b>The whole logic:</b><br><br>
            What I observed → Ho<br>
            What I expected → Hc<br>
            Difference → Intercept<br>
            Direction → Zn<br>
            Result → Line of Position
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Observe Hs

          <br><br>

          ↓

          <br><br>

          Correct to Ho

          <br><br>

          ↓

          <br><br>

          Calculate Hc + Zn

          <br><br>

          ↓

          <br><br>

          Ho − Hc

          <br><br>

          ↓

          <br><br>

          Intercept

          <br><br>

          ↓

          <br><br>

          Plot LOP

        </div>
      `
    }

  ]
};