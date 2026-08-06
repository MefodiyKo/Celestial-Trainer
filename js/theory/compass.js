/* =========================================================
   CELESTIAL TRAINER — THEORY: COMPASS OBSERVATION
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.compass = {
  title: "Compass Observation",

  pages: [

    /* =====================================================
       PAGE 1 — GENERAL IDEA
       ===================================================== */

    {
      title: "What Is a Compass Observation?",

      formula: [
        { key: "trueBearing", label: "True Bearing" },
        "−",
        { key: "observedBearing", label: "Observed Bearing" },
        "=",
        { key: "error", label: "Compass Error" }
      ],

      formulaHint:
        "A compass observation compares the calculated true bearing with the bearing observed on board.",

      content: `

        <div
          class="theoryExplain"
          id="explain_trueBearing"
          hidden>

          <h3>True Bearing</h3>

          <p>
            The true bearing is the direction of the celestial body
            measured clockwise from True North.
          </p>

          <p>
            In celestial navigation this bearing is normally called
            <b>Zn</b>.
          </p>

          <p>
            It is calculated from the observer's position, UTC
            and the position of the celestial body.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            True bearing is the reference direction.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_observedBearing"
          hidden>

          <h3>Observed Bearing</h3>

          <p>
            The observed bearing is the direction read from the ship's
            gyro repeater or magnetic compass.
          </p>

          <p>
            It is taken at the same moment for which the true bearing
            is calculated.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Observed bearing is what the instrument shows.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_error"
          hidden>

          <h3>Compass Error</h3>

          <p>
            Compass error is the difference between the true direction
            and the direction shown by the compass.
          </p>

          <p>
            The same comparison can be used for a gyro compass
            or a magnetic compass.
          </p>

          <div class="theoryRemember">
            <b>Purpose:</b><br>
            The observation checks whether the compass indication
            agrees with the true direction.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>What the navigator normally sees</h3>

          <div class="theoryTableExample">

            <div>Celestial body</div>
            <div>Sun</div>

            <div>Calculated Zn</div>
            <div>286.4°</div>

            <div>Gyro bearing</div>
            <div>285.2°</div>

            <div>Gyro error</div>
            <div>1.2° E</div>

          </div>

          <p>
            A compass observation is not primarily an astronomical
            position fix.
          </p>

          <p>
            The celestial body is used as a known true direction
            to check the ship's compass.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Celestial body

          <br><br>

          ↓ Calculate

          <br><br>

          True bearing Zn

          <br><br>

          ↓ Compare with

          <br><br>

          Observed bearing

          <br><br>

          ↓

          <br><br>

          Compass error

        </div>
      `
    },


    /* =====================================================
       PAGE 2 — TRUE BEARING
       ===================================================== */

    {
      title: "True Bearing — Zn",

      formula: [
        { key: "utc", label: "UTC" },
        "+",
        { key: "position", label: "Position" },
        "+",
        { key: "body", label: "Celestial Body" },
        "→",
        { key: "zn", label: "Zn" }
      ],

      formulaHint:
        "Zn is the calculated true bearing of the celestial body.",

      content: `

        <div
          class="theoryExplain"
          id="explain_utc"
          hidden>

          <h3>UTC</h3>

          <p>
            The exact UTC is required because the celestial body's
            position changes continuously.
          </p>

          <p>
            Even a small time error can change the calculated azimuth.
          </p>

          <div class="theoryRemember">
            Always record the bearing and UTC at the same moment.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_position"
          hidden>

          <h3>Observer's Position</h3>

          <p>
            Latitude and longitude define the observer's location
            on the Earth.
          </p>

          <p>
            The same celestial body has a different bearing when viewed
            from a different position.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_body"
          hidden>

          <h3>Celestial Body</h3>

          <p>
            The Sun, Moon, planets or selected stars can be used
            for a compass observation.
          </p>

          <p>
            The body must be clearly identified before the bearing
            is accepted.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_zn"
          hidden>

          <h3>True Azimuth — Zn</h3>

          <p>
            Zn is the true bearing of the celestial body measured
            clockwise from True North.
          </p>

          <p>
            Its values range from 000° to 360°.
          </p>

          <div class="theoryRemember">
            <b>Examples:</b><br>
            000° = North<br>
            090° = East<br>
            180° = South<br>
            270° = West
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>UTC</div>
            <div>10:23:18</div>

            <div>Latitude</div>
            <div>08° 43.5' N</div>

            <div>Longitude</div>
            <div>068° 31.6' E</div>

            <div>Object</div>
            <div>Sun</div>

            <div>Calculated Zn</div>
            <div>286.4°</div>

          </div>

          <p>
            The Sun should appear on a true bearing of 286.4°
            from the observer's position at that UTC.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          True North

          <br><br>

          000°

          <br><br>

          ↘ Zn 286.4°

          <br><br>

          ☀ Sun

        </div>
      `
    },


    /* =====================================================
       PAGE 3 — OBSERVED BEARING
       ===================================================== */

    {
      title: "Taking the Observed Bearing",

      formula: [
        { key: "body", label: "Body" },
        "→",
        { key: "bearingDevice", label: "Bearing Device" },
        "→",
        { key: "observedBearing", label: "Observed Bearing" }
      ],

      formulaHint:
        "The bearing must be taken carefully and matched with the exact observation time.",

      content: `

        <div
          class="theoryExplain"
          id="explain_body"
          hidden>

          <h3>Select the Correct Body</h3>

          <p>
            Confirm the identity of the Sun, Moon, planet or star
            before taking the bearing.
          </p>

          <p>
            Selecting the wrong star produces a completely incorrect
            compass error.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_bearingDevice"
          hidden>

          <h3>Bearing Device</h3>

          <p>
            The observation can be taken using a gyro repeater,
            azimuth mirror, pelorus or magnetic compass bearing device.
          </p>

          <p>
            The observer should check that the instrument is free,
            readable and correctly aligned.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_observedBearing"
          hidden>

          <h3>Observed Bearing</h3>

          <p>
            Read the bearing when the vertical sight line passes
            through the centre of the celestial body.
          </p>

          <p>
            Record the bearing and UTC immediately.
          </p>

          <div class="theoryRemember">
            Do not calculate first and try to remember the bearing later.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical sequence on the bridge</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Identify the celestial body</div>

            <div>2</div>
            <div>Prepare the bearing instrument</div>

            <div>3</div>
            <div>Align the sight with the body</div>

            <div>4</div>
            <div>Read the bearing</div>

            <div>5</div>
            <div>Record exact UTC</div>

          </div>

          <h3>Example observation</h3>

          <div class="theoryTableExample">

            <div>Object</div>
            <div>Sun</div>

            <div>UTC</div>
            <div>10:23:18</div>

            <div>Gyro bearing</div>
            <div>285.2°</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Identify body

          <br><br>

          ↓

          <br><br>

          Align bearing sight

          <br><br>

          ↓

          <br><br>

          Read bearing

          <br><br>

          ↓

          <br><br>

          Record UTC

        </div>
      `
    },


    /* =====================================================
       PAGE 4 — GYRO ERROR
       ===================================================== */

    {
      title: "Gyro Error",

      formula: [
        { key: "trueBearing", label: "True Bearing" },
        "−",
        { key: "gyroBearing", label: "Gyro Bearing" },
        "=",
        { key: "gyroError", label: "Gyro Error" }
      ],

      formulaHint:
        "In Celestial Trainer, a positive result is East and a negative result is West.",

      content: `

        <div
          class="theoryExplain"
          id="explain_trueBearing"
          hidden>

          <h3>True Bearing</h3>

          <p>
            The true bearing is the calculated Zn of the celestial body.
          </p>

          <p>
            It is the correct geographical direction measured
            from True North.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_gyroBearing"
          hidden>

          <h3>Gyro Bearing</h3>

          <p>
            The gyro bearing is the direction shown by the gyro compass
            or gyro repeater.
          </p>

          <p>
            It may differ slightly from the true bearing because
            the gyro compass has an error.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_gyroError"
          hidden>

          <h3>Gyro Error</h3>

          <p>
            Gyro error is found by subtracting the gyro bearing
            from the true bearing.
          </p>

          <p>
            A positive result is expressed as East.
            A negative result is expressed as West.
          </p>

          <div class="theoryRemember">
            <b>Celestial Trainer convention:</b><br>
            True − Gyro = Gyro Error
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Example — East error</h3>

          <div class="theoryTableExample">

            <div>True bearing</div>
            <div>286.4°</div>

            <div>Gyro bearing</div>
            <div>285.2°</div>

            <div>Calculation</div>
            <div>286.4° − 285.2°</div>

            <div>Gyro error</div>
            <div>1.2° E</div>

          </div>

          <h3>Example — West error</h3>

          <div class="theoryTableExample">

            <div>True bearing</div>
            <div>142.3°</div>

            <div>Gyro bearing</div>
            <div>143.1°</div>

            <div>Calculation</div>
            <div>142.3° − 143.1°</div>

            <div>Gyro error</div>
            <div>0.8° W</div>

          </div>

          <p>
            The final result should always be reduced to the smallest
            angular difference.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          True bearing 286.4°

          <br><br>

          −

          <br><br>

          Gyro bearing 285.2°

          <br><br>

          =

          <br><br>

          Gyro error 1.2° E

        </div>
      `
    },


    /* =====================================================
       PAGE 5 — COMPASS ERROR, VARIATION, DEVIATION
       ===================================================== */

    {
      title: "Variation and Deviation",

      formula: [
        { key: "compassError", label: "Compass Error" },
        "=",
        { key: "variation", label: "Variation" },
        "+",
        { key: "deviation", label: "Deviation" }
      ],

      formulaHint:
        "Compass error contains both variation and deviation.",

      content: `

        <div
          class="theoryExplain"
          id="explain_compassError"
          hidden>

          <h3>Compass Error</h3>

          <p>
            Compass error is the total difference between
            Compass North and True North.
          </p>

          <p>
            It consists of variation and deviation.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_variation"
          hidden>

          <h3>Variation</h3>

          <p>
            Variation is the angle between True North
            and Magnetic North.
          </p>

          <p>
            It depends mainly on the ship's geographical position
            and changes slowly with time.
          </p>

          <p>
            The chart or electronic chart provides the local variation
            and its annual change.
          </p>

          <div class="theoryRemember">
            Variation belongs to the Earth.
          </div>

        </div>


        <div
          class="theoryExplain"
          id="explain_deviation"
          hidden>

          <h3>Deviation</h3>

          <p>
            Deviation is the angle between Magnetic North
            and the direction shown by the ship's magnetic compass.
          </p>

          <p>
            It is caused by the magnetic influence of the vessel,
            equipment and cargo.
          </p>

          <p>
            Deviation may change with the ship's heading.
          </p>

          <div class="theoryRemember">
            Deviation belongs to the ship.
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Relationship between the values</h3>

          <div class="theoryTableExample">

            <div>Compass error</div>
            <div>3.5° E</div>

            <div>Variation</div>
            <div>2.0° E</div>

            <div>Deviation</div>
            <div>1.5° E</div>

          </div>

          <p>
            In this example:
          </p>

          <div class="theoryRemember">
            2.0° E + 1.5° E = 3.5° E
          </div>

          <h3>Mixed East and West example</h3>

          <div class="theoryTableExample">

            <div>Compass error</div>
            <div>1.0° E</div>

            <div>Variation</div>
            <div>3.0° E</div>

            <div>Deviation</div>
            <div>2.0° W</div>

          </div>

          <div class="theoryRemember">
            3.0° E + 2.0° W = 1.0° E
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          True North

          <br><br>

          ↓ Variation

          <br><br>

          Magnetic North

          <br><br>

          ↓ Deviation

          <br><br>

          Compass North

        </div>
      `
    },


    /* =====================================================
       PAGE 6 — PRACTICAL WORKFLOW
       ===================================================== */

    {
      title: "Practical Observation Workflow",

      formula: [
        { key: "observe", label: "Observe" },
        "→",
        { key: "calculate", label: "Calculate" },
        "→",
        { key: "compare", label: "Compare" },
        "→",
        { key: "record", label: "Record" }
      ],

      formulaHint:
        "The result is reliable only when the bearing, UTC and calculation belong to the same observation.",

      content: `

        <div
          class="theoryExplain"
          id="explain_observe"
          hidden>

          <h3>Observe</h3>

          <p>
            Identify the body, take the gyro or compass bearing,
            and record the exact UTC.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_calculate"
          hidden>

          <h3>Calculate</h3>

          <p>
            Use the observer's position, UTC and celestial body
            to calculate the true bearing Zn.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_compare"
          hidden>

          <h3>Compare</h3>

          <p>
            Compare the calculated true bearing with the observed
            gyro or magnetic compass bearing.
          </p>

          <p>
            Determine the direction and value of the error.
          </p>

        </div>


        <div
          class="theoryExplain"
          id="explain_record"
          hidden>

          <h3>Record</h3>

          <p>
            Record the observation according to the vessel's procedures.
          </p>

          <p>
            The record should normally include the date, UTC,
            celestial body, ship's position, observed bearing,
            true bearing and calculated error.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Select and identify the celestial body</div>

            <div>2</div>
            <div>Take gyro or compass bearing</div>

            <div>3</div>
            <div>Record exact UTC</div>

            <div>4</div>
            <div>Confirm ship's position</div>

            <div>5</div>
            <div>Calculate true bearing Zn</div>

            <div>6</div>
            <div>Calculate compass or gyro error</div>

            <div>7</div>
            <div>Check the result for reasonableness</div>

            <div>8</div>
            <div>Enter the result in the appropriate record</div>

          </div>

          <h3>Example final record</h3>

          <div class="theoryTableExample">

            <div>Date</div>
            <div>15 July</div>

            <div>UTC</div>
            <div>10:23:18</div>

            <div>Position</div>
            <div>08° 43.5' N, 068° 31.6' E</div>

            <div>Object</div>
            <div>Sun</div>

            <div>True bearing</div>
            <div>286.4°</div>

            <div>Gyro bearing</div>
            <div>285.2°</div>

            <div>Gyro error</div>
            <div>1.2° E</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          1. Observe body

          <br><br>

          ↓

          <br><br>

          2. Record bearing and UTC

          <br><br>

          ↓

          <br><br>

          3. Calculate Zn

          <br><br>

          ↓

          <br><br>

          4. Calculate error

          <br><br>

          ↓

          <br><br>

          5. Check and record

        </div>
      `
    }
  ]
};