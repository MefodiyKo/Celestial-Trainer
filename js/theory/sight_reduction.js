/* =========================================================
   CELESTIAL TRAINER — THEORY: SIGHT REDUCTION
   ========================================================= */

THEORY_BOOK.sight = {
  title: "Sight Reduction",

  pages: [
    {
      title: "From Sextant Altitude to Intercept",

      formula: [
        { key: "hs", label: "Hs" },
        "→",
        { key: "ho", label: "Ho" },
        "−",
        { key: "hc", label: "Hc" },
        "=",
        { key: "intercept", label: "Intercept" }
      ],

      formulaHint:
        "Tap Hs, Ho, Hc or Intercept. Only the selected explanation will open.",

      content: `
        <div
          class="theoryExplain"
          id="explain_hs"
          hidden>

          <h3>Sextant Altitude — Hs</h3>

          <p>
            Hs is the altitude read directly from the sextant.
          </p>

          <p>
            It is the angle measured between the visible horizon
            and the celestial body.
          </p>

          <p>
            Hs is still a raw observation. It must be corrected
            before it can be used for navigation.
          </p>

          <div class="theoryRemember">
            <b>Remember:</b><br>
            Hs is what the sextant shows.
          </div>
        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Observed Altitude — Ho</h3>

          <p>
            Ho is the corrected altitude of the celestial body.
          </p>

          <p>
            It is obtained after applying all necessary corrections
            to Hs, such as index correction, dip, refraction,
            semidiameter and parallax.
          </p>

          <p>
            Ho represents the altitude that is used in the final
            sight reduction comparison.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Ho is the corrected sextant altitude.
          </div>
        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Calculated Altitude — Hc</h3>

          <p>
            Hc is the altitude the celestial body should have
            from the assumed position.
          </p>

          <p>
            It is calculated from latitude, declination and LHA.
          </p>

          <p>
            Hc is not measured with the sextant.
            It is produced by calculation or sight reduction tables.
          </p>

          <div class="theoryRemember">
            <b>Think of it this way:</b><br>
            Hc is the predicted altitude.
          </div>
        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Intercept</h3>

          <p>
            The intercept is the difference between the observed
            altitude Ho and the calculated altitude Hc.
          </p>

          <p>
            One minute of altitude difference corresponds to
            one nautical mile on the Earth's surface.
          </p>

          <p>
            If Ho is greater than Hc, the intercept is plotted
            toward the celestial body.
          </p>

          <p>
            If Ho is less than Hc, the intercept is plotted
            away from the celestial body.
          </p>

          <div class="theoryRemember">
            <b>Rule:</b><br>
            Ho greater than Hc = Toward.<br>
            Ho less than Hc = Away.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>What the navigator normally sees</h3>

          <div class="theoryTableExample">
            <div>Hs</div>
            <div>35° 18.6'</div>

            <div>Corrections</div>
            <div>- 4.2'</div>

            <div>Ho</div>
            <div>35° 14.4'</div>

            <div>Hc</div>
            <div>35° 09.1'</div>

            <div>Intercept</div>
            <div>5.3 NM Toward</div>
          </div>

          <p>
            Sight reduction compares what was actually observed
            with what should have been observed from the assumed position.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sextant observation

          <br><br>

          Hs

          ↓

          Corrections

          ↓

          Ho

          ↓

          Compare with Hc

          ↓

          Intercept

        </div>
      `
    },


    {
      title: "Correcting Sextant Altitude",

      formula: [
        { key: "hs", label: "Hs" },
        "+",
        { key: "ic", label: "IC" },
        "−",
        { key: "dip", label: "Dip" },
        "+",
        { key: "mainCorrection", label: "Main Correction" },
        "=",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "The exact corrections depend on the celestial body and the observation method.",

      content: `
        <div class="theoryBookIntro">

          <h3>Step 1 — Correct the sextant reading</h3>

          <p>
            The sextant does not directly provide Ho.
            It provides Hs, which must be corrected.
          </p>

          <p>
            The correction sequence normally includes index correction,
            dip and the appropriate Almanac correction.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_hs"
          hidden>

          <h3>Hs</h3>

          <p>
            Hs is the raw sextant reading before corrections.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ic"
          hidden>

          <h3>Index Correction — IC</h3>

          <p>
            Index correction removes the sextant's instrumental error.
          </p>

          <p>
            The correction is opposite in sign to the measured index error.
          </p>

          <div class="theoryRemember">
            <b>Simple rule:</b><br>
            Index error on the arc — subtract.<br>
            Index error off the arc — add.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_dip"
          hidden>

          <h3>Dip</h3>

          <p>
            Dip corrects for the observer's height of eye above sea level.
          </p>

          <p>
            The visible horizon is lower than the true horizontal plane,
            so dip is normally subtracted.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_mainCorrection"
          hidden>

          <h3>Main Correction</h3>

          <p>
            The main correction depends on the body being observed.
          </p>

          <p>
            It may include refraction, semidiameter and parallax.
          </p>

          <p>
            For stars, refraction is the main correction.
            For the Sun and Moon, additional corrections are required.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Ho</h3>

          <p>
            Ho is the final corrected altitude.
          </p>

          <p>
            This is the value compared with Hc.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Example correction sequence</h3>

          <div class="theoryTableExample">
            <div>Hs</div>
            <div>35° 18.6'</div>

            <div>Index correction</div>
            <div>+ 1.2'</div>

            <div>Dip</div>
            <div>- 4.8'</div>

            <div>Main correction</div>
            <div>- 0.6'</div>

            <div>Ho</div>
            <div>35° 14.4'</div>
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Hs

          ↓

          Index Correction

          ↓

          Dip

          ↓

          Almanac Correction

          ↓

          Ho

        </div>
      `
    },


    {
      title: "Calculated Altitude and Azimuth",

      formula: [
        { key: "latitude", label: "Latitude" },
        "+",
        { key: "declination", label: "Declination" },
        "+",
        { key: "lha", label: "LHA" },
        "→",
        { key: "hc", label: "Hc" },
        "+",
        { key: "zn", label: "Zn" }
      ],

      formulaHint:
        "Latitude, declination and LHA define the celestial triangle.",

      content: `
        <div
          class="theoryExplain"
          id="explain_latitude"
          hidden>

          <h3>Latitude</h3>

          <p>
            Latitude defines the observer's north or south position.
          </p>

          <p>
            In sight reduction, the assumed latitude is used
            to construct the celestial triangle.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_declination"
          hidden>

          <h3>Declination</h3>

          <p>
            Declination is the celestial body's angular distance
            north or south of the celestial equator.
          </p>

          <p>
            It is similar to latitude, but for the body's geographical position.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lha"
          hidden>

          <h3>LHA</h3>

          <p>
            LHA defines the body's east-west angular position
            relative to the observer's meridian.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Hc</h3>

          <p>
            Hc is the calculated altitude produced from
            latitude, declination and LHA.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zn"
          hidden>

          <h3>Azimuth — Zn</h3>

          <p>
            Zn is the true bearing of the celestial body
            measured clockwise from true north.
          </p>

          <p>
            The intercept is plotted along the azimuth line.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>What the calculation produces</h3>

          <div class="theoryTableExample">
            <div>Assumed Latitude</div>
            <div>08° 43.5' N</div>

            <div>LHA</div>
            <div>282° 50.0'</div>

            <div>Declination</div>
            <div>21° 14.2' N</div>

            <div>Hc</div>
            <div>35° 09.1'</div>

            <div>Zn</div>
            <div>286.4°</div>
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Latitude

          +

          Declination

          +

          LHA

          ↓

          Celestial Triangle

          ↓

          Hc and Zn

        </div>
      `
    },


    {
      title: "Toward or Away",

      formula: [
        { key: "ho", label: "Ho" },
        "−",
        { key: "hc", label: "Hc" },
        "=",
        { key: "intercept", label: "a" }
      ],

      formulaHint:
        "The sign of Ho − Hc determines whether the intercept is Toward or Away.",

      content: `
        <div
          class="theoryExplain"
          id="explain_ho"
          hidden>

          <h3>Ho</h3>

          <p>
            Ho is the altitude actually observed after all corrections.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_hc"
          hidden>

          <h3>Hc</h3>

          <p>
            Hc is the altitude calculated for the assumed position.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Intercept — a</h3>

          <p>
            The intercept is normally expressed in nautical miles.
          </p>

          <p>
            One minute of altitude equals one nautical mile.
          </p>

          <div class="theoryRemember">
            <b>Mnemonic:</b><br>
            Ho More — Toward.<br>
            Ho Less — Away.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Example 1 — Toward</h3>

          <div class="theoryTableExample">
            <div>Ho</div>
            <div>35° 14.4'</div>

            <div>Hc</div>
            <div>35° 09.1'</div>

            <div>Difference</div>
            <div>5.3'</div>

            <div>Intercept</div>
            <div>5.3 NM Toward</div>
          </div>

          <h3>Example 2 — Away</h3>

          <div class="theoryTableExample">
            <div>Ho</div>
            <div>28° 41.2'</div>

            <div>Hc</div>
            <div>28° 46.7'</div>

            <div>Difference</div>
            <div>5.5'</div>

            <div>Intercept</div>
            <div>5.5 NM Away</div>
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Assumed Position

          <br><br>

          Toward → Celestial Body

          <br><br>

          Away ← Celestial Body

        </div>
      `
    },


    {
      title: "Plotting the Line of Position",

      formula: [
        { key: "ap", label: "AP" },
        "+",
        { key: "zn", label: "Zn" },
        "+",
        { key: "intercept", label: "Intercept" },
        "→",
        { key: "lop", label: "LOP" }
      ],

      formulaHint:
        "Plot the intercept along Zn, then draw the LOP at 90° to the azimuth line.",

      content: `
        <div
          class="theoryExplain"
          id="explain_ap"
          hidden>

          <h3>Assumed Position — AP</h3>

          <p>
            The assumed position is the starting point used
            for the sight reduction calculation.
          </p>

          <p>
            The LOP is plotted relative to this point.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zn"
          hidden>

          <h3>Zn</h3>

          <p>
            Zn gives the direction toward the celestial body.
          </p>

          <p>
            Draw the azimuth line from the assumed position
            in the direction of Zn.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_intercept"
          hidden>

          <h3>Intercept</h3>

          <p>
            Measure the intercept distance along the azimuth line.
          </p>

          <p>
            Plot toward the body when Ho is greater than Hc,
            and away when Ho is less than Hc.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_lop"
          hidden>

          <h3>Line of Position — LOP</h3>

          <p>
            Through the intercept point, draw a line at right angles
            to the azimuth line.
          </p>

          <p>
            The observer is located somewhere on this line.
          </p>

          <p>
            Two or more LOPs can be combined to obtain a fix.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Plotting sequence</h3>

          <div class="theoryTableExample">
            <div>Assumed Position</div>
            <div>08° 43.5' N, 068° 31.6' E</div>

            <div>Zn</div>
            <div>286.4°</div>

            <div>Intercept</div>
            <div>5.3 NM Toward</div>

            <div>Final result</div>
            <div>One Line of Position</div>
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          AP

          ↓ Draw Zn

          Intercept point

          ↓ Draw 90°

          Line of Position

        </div>
      `
    }
  ]
};