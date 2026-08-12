/* =========================================================
   CELESTIAL TRAINER — THEORY: FORMS / WORKSHEET
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.forms = {
  title: "Forms / Worksheet",

  pages: [

    {
      title: "Why Use a Worksheet?",

      formula: [
        { key: "observe", label: "Observation" },
        "→",
        { key: "record", label: "Record Data" },
        "→",
        { key: "calculate", label: "Calculate" },
        "→",
        { key: "check", label: "Check Result" }
      ],

      formulaHint:
        "A worksheet keeps the celestial navigation process in the correct order and makes errors easier to find.",

      content: `

        <div class="theoryExplain" id="explain_observe" hidden>
          <h3>Observation</h3>

          <p>
            Every celestial calculation begins with an actual observation.
          </p>

          <p>
            The celestial body, sextant altitude and exact UTC
            must belong to the same sight.
          </p>
        </div>


        <div class="theoryExplain" id="explain_record" hidden>
          <h3>Record Data</h3>

          <p>
            The worksheet stores the observation values in a fixed order.
          </p>

          <p>
            This prevents important information from being forgotten
            or mixed with another sight.
          </p>
        </div>


        <div class="theoryExplain" id="explain_calculate" hidden>
          <h3>Calculate</h3>

          <p>
            Each calculation follows from the previous value.
          </p>

          <p>
            For example, Hs is corrected to Ho, while GHA and longitude
            are used to obtain LHA.
          </p>
        </div>


        <div class="theoryExplain" id="explain_check" hidden>
          <h3>Check the Result</h3>

          <p>
            A structured worksheet makes it easier to check every step
            if the final position does not look reasonable.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            A worksheet is not only for recording.<br>
            It is also an error-checking tool.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Typical sight-reduction order</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Object + UTC</div>

            <div>2</div>
            <div>Hs + corrections</div>

            <div>3</div>
            <div>Ho</div>

            <div>4</div>
            <div>GHA + Declination</div>

            <div>5</div>
            <div>LHA</div>

            <div>6</div>
            <div>Hc + Zn</div>

            <div>7</div>
            <div>Intercept</div>

            <div>8</div>
            <div>LOP / Fix</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          OBSERVE

          <br><br>

          ↓

          <br><br>

          RECORD

          <br><br>

          ↓

          <br><br>

          CALCULATE

          <br><br>

          ↓

          <br><br>

          CHECK

        </div>
      `
    },


    {
      title: "Observation Data",

      formula: [
        { key: "object", label: "Object" },
        "+",
        { key: "utc", label: "UTC" },
        "+",
        { key: "position", label: "Position" },
        "→",
        { key: "observation", label: "Sight Record" }
      ],

      formulaHint:
        "The first part of the worksheet identifies exactly what was observed, when, and from where.",

      content: `

        <div class="theoryExplain" id="explain_object" hidden>
          <h3>Celestial Object</h3>

          <p>
            Record the exact body used for the observation.
          </p>

          <p>
            For example: Sun, Moon, Venus, Sirius or another
            navigation star.
          </p>
        </div>


        <div class="theoryExplain" id="explain_utc" hidden>
          <h3>Exact UTC</h3>

          <p>
            Time is one of the most important values in celestial navigation.
          </p>

          <p>
            The body's GHA changes continuously, so even a timing error
            of several seconds can affect the result.
          </p>
        </div>


        <div class="theoryExplain" id="explain_position" hidden>
          <h3>Observer / Assumed Position</h3>

          <p>
            Latitude and longitude define the reference position
            used in the sight reduction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_observation" hidden>
          <h3>Sight Record</h3>

          <p>
            These values must remain linked throughout the whole calculation.
          </p>

          <div class="theoryRemember">
            Never mix the UTC from one sight with the Hs from another.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example header</h3>

          <div class="theoryTableExample">

            <div>Date</div>
            <div>12 Aug 2026</div>

            <div>UTC</div>
            <div>04:21:18</div>

            <div>Object</div>
            <div>Sun</div>

            <div>AP</div>
            <div>08° 00.0' N / 068° 00.0' E</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          WHAT?

          <br>

          Celestial Body

          <br><br>

          WHEN?

          <br>

          UTC

          <br><br>

          WHERE?

          <br>

          Position

        </div>
      `
    },


    {
      title: "Sight Corrections Section",

      formula: [
        { key: "hs", label: "Hs" },
        "+",
        { key: "ie", label: "IE" },
        "+",
        { key: "dip", label: "Dip" },
        "+",
        { key: "ref", label: "Refraction" },
        "+",
        { key: "sdpa", label: "SD / PA" },
        "=",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "The worksheet keeps every altitude correction visible so the final Ho can be checked.",

      content: `

        <div class="theoryExplain" id="explain_hs" hidden>
          <h3>Hs</h3>

          <p>
            Hs is the raw sextant altitude.
          </p>
        </div>


        <div class="theoryExplain" id="explain_ie" hidden>
          <h3>Index Correction</h3>

          <p>
            Correction for sextant index error.
          </p>
        </div>


        <div class="theoryExplain" id="explain_dip" hidden>
          <h3>Dip</h3>

          <p>
            Correction for height of eye above sea level.
          </p>
        </div>


        <div class="theoryExplain" id="explain_ref" hidden>
          <h3>Refraction</h3>

          <p>
            Correction for bending of light in the atmosphere.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sdpa" hidden>
          <h3>SD / Parallax</h3>

          <p>
            Semi-diameter and parallax corrections depend on
            the celestial body being observed.
          </p>
        </div>


        <div class="theoryExplain" id="explain_ho" hidden>
          <h3>Ho</h3>

          <p>
            Ho is the final corrected observed altitude.
          </p>

          <div class="theoryRemember">
            Ho is the value that will later be compared with Hc.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Why every correction is shown</h3>

          <p>
            If Ho looks wrong, you can inspect each correction separately
            instead of repeating the whole sight from the beginning.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Hs

          <br><br>

          ↓ corrections

          <br><br>

          IE

          <br>

          Dip

          <br>

          Refraction

          <br>

          SD / PA

          <br><br>

          ↓

          <br><br>

          Ho

        </div>
      `
    },


    {
      title: "Almanac Data Section",

      formula: [
        { key: "gha", label: "GHA" },
        "+",
        { key: "longitude", label: "Longitude" },
        "=",
        { key: "lha", label: "LHA" },
        "+",
        { key: "dec", label: "Declination" }
      ],

      formulaHint:
        "This part connects the nautical almanac data with the observer's position.",

      content: `

        <div class="theoryExplain" id="explain_gha" hidden>
          <h3>GHA</h3>

          <p>
            GHA gives the celestial body's position relative to Greenwich.
          </p>
        </div>


        <div class="theoryExplain" id="explain_longitude" hidden>
          <h3>Longitude</h3>

          <p>
            Longitude shifts the reference from Greenwich
            to the observer's meridian.
          </p>
        </div>


        <div class="theoryExplain" id="explain_lha" hidden>
          <h3>LHA</h3>

          <p>
            Local Hour Angle is the body's angular position
            relative to the observer's meridian.
          </p>
        </div>


        <div class="theoryExplain" id="explain_dec" hidden>
          <h3>Declination</h3>

          <p>
            Declination is the north-south position of the body
            on the celestial sphere.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Example worksheet entries</h3>

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

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Almanac

          <br><br>

          GHA + Declination

          <br><br>

          ↓

          <br><br>

          Observer Longitude

          <br><br>

          ↓

          <br><br>

          LHA

        </div>
      `
    },


    {
      title: "Calculated Values",

      formula: [
        { key: "lat", label: "Latitude" },
        "+",
        { key: "lha", label: "LHA" },
        "+",
        { key: "dec", label: "Declination" },
        "→",
        { key: "hc", label: "Hc" },
        "+",
        { key: "zn", label: "Zn" }
      ],

      formulaHint:
        "These are the predicted altitude and true direction of the celestial body.",

      content: `

        <div class="theoryExplain" id="explain_lat" hidden>
          <h3>Latitude</h3>

          <p>
            The latitude used for the calculation is normally
            the assumed latitude.
          </p>
        </div>


        <div class="theoryExplain" id="explain_lha" hidden>
          <h3>LHA</h3>

          <p>
            LHA provides the body's east-west relationship
            to the observer.
          </p>
        </div>


        <div class="theoryExplain" id="explain_dec" hidden>
          <h3>Declination</h3>

          <p>
            Declination provides the body's north-south position.
          </p>
        </div>


        <div class="theoryExplain" id="explain_hc" hidden>
          <h3>Hc</h3>

          <p>
            Hc is the calculated altitude expected from the assumed position.
          </p>
        </div>


        <div class="theoryExplain" id="explain_zn" hidden>
          <h3>Zn</h3>

          <p>
            Zn is the true azimuth of the body.
          </p>

          <p>
            It determines the direction along which the intercept
            will be plotted.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Typical result</h3>

          <div class="theoryTableExample">

            <div>Hc</div>
            <div>42° 10.2'</div>

            <div>Zn</div>
            <div>286.4°</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Lat + LHA + Dec

          <br><br>

          ↓

          <br><br>

          Hc

          <br><br>

          +

          <br><br>

          Zn

        </div>
      `
    },


    {
      title: "Intercept Section",

      formula: [
        { key: "ho", label: "Ho" },
        "−",
        { key: "hc", label: "Hc" },
        "=",
        { key: "intercept", label: "Intercept" },
        "→",
        { key: "ta", label: "Toward / Away" }
      ],

      formulaHint:
        "This is the key comparison between what was observed and what was calculated.",

      content: `

        <div class="theoryExplain" id="explain_ho" hidden>
          <h3>Ho</h3>

          <p>
            The corrected altitude actually observed.
          </p>
        </div>


        <div class="theoryExplain" id="explain_hc" hidden>
          <h3>Hc</h3>

          <p>
            The altitude calculated from the assumed position.
          </p>
        </div>


        <div class="theoryExplain" id="explain_intercept" hidden>
          <h3>Intercept</h3>

          <p>
            The difference between Ho and Hc is converted directly
            into nautical miles.
          </p>
        </div>


        <div class="theoryExplain" id="explain_ta" hidden>
          <h3>Toward or Away</h3>

          <p>
            If Ho is greater than Hc, plot toward the body.
          </p>

          <p>
            If Ho is less than Hc, plot away from the body.
          </p>

          <div class="theoryRemember">
            Ho &gt; Hc → Toward<br>
            Ho &lt; Hc → Away
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Ho</div>
            <div>42° 15.8'</div>

            <div>Hc</div>
            <div>42° 10.2'</div>

            <div>Difference</div>
            <div>5.6'</div>

            <div>Intercept</div>
            <div>5.6 NM Toward</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          OBSERVED

          <br>

          Ho

          <br><br>

          −

          <br><br>

          CALCULATED

          <br>

          Hc

          <br><br>

          ↓

          <br><br>

          INTERCEPT

        </div>
      `
    },


    {
      title: "3-LOP Worksheet",

      formula: [
        { key: "sight1", label: "Sight 1" },
        "+",
        { key: "sight2", label: "Sight 2" },
        "+",
        { key: "sight3", label: "Sight 3" },
        "→",
        { key: "fix", label: "Fix Worksheet" }
      ],

      formulaHint:
        "The 3-LOP form places three sight reductions side by side for direct comparison.",

      content: `

        <div class="theoryExplain" id="explain_sight1" hidden>
          <h3>Sight 1</h3>

          <p>
            The first column contains the complete reduction
            of the first celestial body.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sight2" hidden>
          <h3>Sight 2</h3>

          <p>
            The second sight is calculated independently.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sight3" hidden>
          <h3>Sight 3</h3>

          <p>
            The third sight completes the three-line fix.
          </p>
        </div>


        <div class="theoryExplain" id="explain_fix" hidden>
          <h3>Fix Worksheet</h3>

          <p>
            Placing all three sights side by side makes it easy
            to compare UTC, Hc, Zn and intercept values.
          </p>

          <p>
            The plotting diagram then combines all three LOPs.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Typical columns</h3>

          <div class="theoryTableExample">

            <div>Column 1</div>
            <div>Object 1</div>

            <div>Column 2</div>
            <div>Object 2</div>

            <div>Column 3</div>
            <div>Object 3</div>

            <div>Final result</div>
            <div>Celestial Fix</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          SIGHT 1 | SIGHT 2 | SIGHT 3

          <br><br>

          ↓          ↓          ↓

          <br><br>

          LOP 1    LOP 2    LOP 3

          <br><br>

          ↓

          <br><br>

          FIX

        </div>
      `
    },


    {
      title: "Meridian and Running Fix Forms",

      formula: [
        { key: "meridian", label: "Meridian Form" },
        "+",
        { key: "running", label: "Running Fix Form" },
        "→",
        { key: "special", label: "Special Workflows" }
      ],

      formulaHint:
        "Different navigation methods need different worksheet layouts.",

      content: `

        <div class="theoryExplain" id="explain_meridian" hidden>
          <h3>Meridian Passage Form</h3>

          <p>
            The meridian form focuses on maximum Sun altitude,
            co-altitude, declination and latitude.
          </p>

          <p>
            It does not need the normal intercept plotting sequence.
          </p>
        </div>


        <div class="theoryExplain" id="explain_running" hidden>
          <h3>Running Fix Form</h3>

          <p>
            The running-fix form records two observations plus
            course, speed, elapsed time and distance run.
          </p>

          <p>
            This allows the first LOP to be advanced to the time
            of the second observation.
          </p>
        </div>


        <div class="theoryExplain" id="explain_special" hidden>
          <h3>Special Workflows</h3>

          <p>
            The mathematical purpose of the worksheet determines
            which values need to be shown.
          </p>

          <div class="theoryRemember">
            One form should support one clear navigation workflow.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Forms in Celestial Trainer</h3>

          <div class="theoryTableExample">

            <div>3-LOP Form</div>
            <div>Three-body celestial fix</div>

            <div>Meridian Form</div>
            <div>Latitude by meridian altitude</div>

            <div>Running Fix Form</div>
            <div>Two LOPs separated by vessel movement</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          METHOD

          <br><br>

          ↓

          <br><br>

          Choose correct form

          <br><br>

          ↓

          <br><br>

          Record correct values

        </div>
      `
    },


    {
      title: "How to Check a Completed Worksheet",

      formula: [
        { key: "signs", label: "Signs" },
        "+",
        { key: "time", label: "UTC" },
        "+",
        { key: "angles", label: "Angles" },
        "+",
        { key: "result", label: "Result" },
        "→",
        { key: "verified", label: "Verified Sight" }
      ],

      formulaHint:
        "A good worksheet allows the whole calculation to be checked quickly from top to bottom.",

      content: `

        <div class="theoryExplain" id="explain_signs" hidden>
          <h3>Check Signs</h3>

          <p>
            Check East/West, North/South and Toward/Away signs.
          </p>

          <p>
            Many large errors come from a correct number with
            the wrong sign.
          </p>
        </div>


        <div class="theoryExplain" id="explain_time" hidden>
          <h3>Check UTC</h3>

          <p>
            Make sure the recorded time belongs to the actual sight.
          </p>
        </div>


        <div class="theoryExplain" id="explain_angles" hidden>
          <h3>Check Angles</h3>

          <p>
            GHA, LHA and Zn should normally remain within 000°–360°.
          </p>

          <p>
            Latitude and declination names should also be checked.
          </p>
        </div>


        <div class="theoryExplain" id="explain_result" hidden>
          <h3>Check Final Result</h3>

          <p>
            Compare the final LOP or fix with DR and other
            available navigation information.
          </p>
        </div>


        <div class="theoryExplain" id="explain_verified" hidden>
          <h3>Verified Sight</h3>

          <p>
            A sight is much more useful when another navigator
            can follow the worksheet and reproduce the calculation.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Quick check sequence</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Object and UTC</div>

            <div>2</div>
            <div>Hs corrections</div>

            <div>3</div>
            <div>GHA / Dec</div>

            <div>4</div>
            <div>LHA</div>

            <div>5</div>
            <div>Hc / Zn</div>

            <div>6</div>
            <div>Intercept sign</div>

            <div>7</div>
            <div>Plot / Fix</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          TOP OF FORM

          <br><br>

          ↓ check every line

          <br><br>

          ↓

          <br><br>

          FINAL RESULT

          <br><br>

          ↓

          <br><br>

          Compare with DR

        </div>
      `
    },


    {
      title: "Practical Worksheet Workflow",

      formula: [
        { key: "fill", label: "Fill" },
        "→",
        { key: "calculate", label: "Calculate" },
        "→",
        { key: "plot", label: "Plot" },
        "→",
        { key: "verify", label: "Verify" },
        "→",
        { key: "record", label: "Record" }
      ],

      formulaHint:
        "The worksheet should guide the navigator from observation to final navigation result without skipping steps.",

      content: `

        <div class="theoryExplain" id="explain_fill" hidden>
          <h3>Fill Observation Data</h3>

          <p>
            Enter object, UTC, position and sextant information first.
          </p>
        </div>


        <div class="theoryExplain" id="explain_calculate" hidden>
          <h3>Calculate in Order</h3>

          <p>
            Work down the form step by step rather than jumping
            between unrelated calculations.
          </p>
        </div>


        <div class="theoryExplain" id="explain_plot" hidden>
          <h3>Plot</h3>

          <p>
            Use Zn and intercept to create the required LOPs.
          </p>
        </div>


        <div class="theoryExplain" id="explain_verify" hidden>
          <h3>Verify</h3>

          <p>
            Check signs, arithmetic, geometry and reasonableness.
          </p>
        </div>


        <div class="theoryExplain" id="explain_record" hidden>
          <h3>Record Result</h3>

          <p>
            Keep the completed worksheet or enter the final result
            in the appropriate navigation record.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Complete workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Enter observation data</div>

            <div>2</div>
            <div>Correct Hs to Ho</div>

            <div>3</div>
            <div>Enter GHA / Dec</div>

            <div>4</div>
            <div>Calculate LHA</div>

            <div>5</div>
            <div>Calculate Hc / Zn</div>

            <div>6</div>
            <div>Calculate intercept</div>

            <div>7</div>
            <div>Plot LOP</div>

            <div>8</div>
            <div>Combine LOPs if required</div>

            <div>9</div>
            <div>Check final position</div>

            <div>10</div>
            <div>Save / print / record</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            The worksheet shows the complete chain<br>
            from sextant observation<br>
            to navigational position.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Observation

          <br><br>

          ↓

          <br><br>

          Worksheet

          <br><br>

          ↓

          <br><br>

          Calculations

          <br><br>

          ↓

          <br><br>

          Plot

          <br><br>

          ↓

          <br><br>

          Navigation Result

        </div>
      `
    }

  ]
};