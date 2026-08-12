/* =========================================================
   CELESTIAL TRAINER — THEORY: SKY VIEW
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.sky = {
  title: "Sky View",

  pages: [

    {
      title: "What Does Sky View Show?",

      formula: [
        { key: "utc", label: "UTC" },
        "+",
        { key: "position", label: "Position" },
        "+",
        { key: "bodyData", label: "Celestial Data" },
        "→",
        { key: "sky", label: "Visible Sky" }
      ],

      formulaHint:
        "Sky View converts celestial calculations into a visual representation of what should be visible from the observer's position.",

      content: `

        <div class="theoryExplain" id="explain_utc" hidden>
          <h3>UTC</h3>

          <p>
            The celestial sphere changes continuously as the Earth rotates.
          </p>

          <p>
            Exact UTC determines where the Sun, Moon, planets and stars
            are located at the selected moment.
          </p>
        </div>


        <div class="theoryExplain" id="explain_position" hidden>
          <h3>Observer Position</h3>

          <p>
            Latitude and longitude determine which part of the celestial
            sphere is above the observer's horizon.
          </p>

          <p>
            The same star can be high in the sky for one observer
            and below the horizon for another.
          </p>
        </div>


        <div class="theoryExplain" id="explain_bodyData" hidden>
          <h3>Celestial Data</h3>

          <p>
            Each body's GHA and declination are converted into local
            altitude and azimuth.
          </p>

          <p>
            For stars, SHA and declination are also used with GHA Aries.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sky" hidden>
          <h3>Visible Sky</h3>

          <p>
            Sky View shows the calculated direction and altitude
            of celestial objects relative to the observer.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            Numbers from the almanac become objects in the sky.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>What Sky View is for</h3>

          <div class="theoryTableExample">

            <div>Calculation</div>
            <div>Hc and Zn</div>

            <div>Visual result</div>
            <div>Altitude and direction on screen</div>

            <div>Navigator use</div>
            <div>Identify and understand celestial bodies</div>

          </div>

          <p>
            Sky View is a training aid. It helps connect celestial
            navigation calculations with the real sky.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          UTC + Position

          <br><br>

          ↓

          <br><br>

          Almanac data

          <br><br>

          ↓

          <br><br>

          Hc + Zn

          <br><br>

          ↓

          <br><br>

          SKY VIEW

        </div>
      `
    },


    {
      title: "Altitude — Hc",

      formula: [
        { key: "horizon", label: "Horizon" },
        "→",
        { key: "altitude", label: "Altitude Hc" },
        "→",
        { key: "zenith", label: "Zenith" }
      ],

      formulaHint:
        "Altitude tells how high a celestial body appears above the horizon.",

      content: `

        <div class="theoryExplain" id="explain_horizon" hidden>
          <h3>Horizon</h3>

          <p>
            The horizon is the reference level from which altitude
            is measured upward.
          </p>

          <p>
            A body exactly on the horizon has an altitude of 0°.
          </p>
        </div>


        <div class="theoryExplain" id="explain_altitude" hidden>
          <h3>Altitude Hc</h3>

          <p>
            Hc is the calculated altitude of the celestial body.
          </p>

          <p>
            A larger altitude means the body appears higher in the sky.
          </p>

          <div class="theoryRemember">
            Hc 0° = horizon<br>
            Hc 45° = halfway up the sky<br>
            Hc 90° = zenith
          </div>
        </div>


        <div class="theoryExplain" id="explain_zenith" hidden>
          <h3>Zenith</h3>

          <p>
            The zenith is the point directly above the observer.
          </p>

          <p>
            Its altitude is 90°.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Examples</h3>

          <div class="theoryTableExample">

            <div>Hc = 5°</div>
            <div>Very low above horizon</div>

            <div>Hc = 30°</div>
            <div>Low to medium altitude</div>

            <div>Hc = 60°</div>
            <div>High in sky</div>

            <div>Hc = 90°</div>
            <div>Directly overhead</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

                 Zenith 90°

          <br><br>

                 ●

          <br><br>

              ★ 60°

          <br><br>

           ★ 30°

          <br><br>

        ★ 5°

          <br><br>

          ───────── Horizon 0°

        </div>
      `
    },


    {
      title: "Azimuth — Zn",

      formula: [
        { key: "north", label: "True North" },
        "→",
        { key: "clockwise", label: "Clockwise" },
        "→",
        { key: "zn", label: "Zn" }
      ],

      formulaHint:
        "Zn tells the true direction of the celestial body around the horizon.",

      content: `

        <div class="theoryExplain" id="explain_north" hidden>
          <h3>True North</h3>

          <p>
            True North is the zero reference for azimuth.
          </p>

          <p>
            Zn begins at 000°.
          </p>
        </div>


        <div class="theoryExplain" id="explain_clockwise" hidden>
          <h3>Clockwise Measurement</h3>

          <p>
            Azimuth is measured clockwise around the horizon.
          </p>
        </div>


        <div class="theoryExplain" id="explain_zn" hidden>
          <h3>True Azimuth — Zn</h3>

          <p>
            Zn tells in which true direction the observer should look
            to find the celestial body.
          </p>

          <div class="theoryRemember">
            000° = North<br>
            090° = East<br>
            180° = South<br>
            270° = West
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Object</div>
            <div>Sun</div>

            <div>Hc</div>
            <div>24.6°</div>

            <div>Zn</div>
            <div>286.4°</div>

            <div>Meaning</div>
            <div>24.6° high, west-north-west direction</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

                 000° N

          <br><br>

          270° W   ●   090° E

          <br><br>

                 180° S

          <br><br>

          Zn is measured clockwise

        </div>
      `
    },


    {
      title: "Course-Centered View",

      formula: [
        { key: "course", label: "Ship Course" },
        "→",
        { key: "center", label: "Screen Centre" },
        "±",
        { key: "relativeBearing", label: "Relative Direction" }
      ],

      formulaHint:
        "In Course Centered mode, the direction straight ahead is placed in the centre of the display.",

      content: `

        <div class="theoryExplain" id="explain_course" hidden>
          <h3>Ship Course</h3>

          <p>
            The selected gyro course represents the vessel's heading
            used by Sky View.
          </p>
        </div>


        <div class="theoryExplain" id="explain_center" hidden>
          <h3>Centre of the Screen</h3>

          <p>
            The centre represents the direction directly ahead
            of the vessel.
          </p>

          <p>
            Objects to port appear left of centre.
            Objects to starboard appear right of centre.
          </p>
        </div>


        <div class="theoryExplain" id="explain_relativeBearing" hidden>
          <h3>Relative Direction</h3>

          <p>
            The object's true azimuth is compared with the ship's course.
          </p>

          <p>
            This produces its relative position around the vessel.
          </p>

          <div class="theoryRemember">
            Sky View answers:<br>
            Should I look ahead, to port, to starboard or astern?
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Course</div>
            <div>270°</div>

            <div>Star Zn</div>
            <div>300°</div>

            <div>Relative direction</div>
            <div>30° starboard</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          PORT

          <br><br>

          ←   AHEAD   →

          <br><br>

              Course

          <br><br>

          STBD

        </div>
      `
    },


    {
      title: "North-Up View",

      formula: [
        { key: "north", label: "North" },
        "=",
        { key: "fixed", label: "Fixed Reference" },
        "→",
        { key: "objects", label: "True Azimuth Positions" }
      ],

      formulaHint:
        "In North Up mode, the display behaves more like a compass rose.",

      content: `

        <div class="theoryExplain" id="explain_north" hidden>
          <h3>North</h3>

          <p>
            True North remains the fixed reference at 000°.
          </p>
        </div>


        <div class="theoryExplain" id="explain_fixed" hidden>
          <h3>Fixed Reference</h3>

          <p>
            The screen no longer rotates according to ship course.
          </p>

          <p>
            Celestial objects are displayed directly according
            to their true azimuth.
          </p>
        </div>


        <div class="theoryExplain" id="explain_objects" hidden>
          <h3>Object Positions</h3>

          <p>
            Each object appears at its true direction around
            the observer.
          </p>

          <p>
            This mode is useful for understanding the overall
            geometry of the sky.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Course Centered vs North Up</h3>

          <div class="theoryTableExample">

            <div>Course Centered</div>
            <div>What do I see relative to the bow?</div>

            <div>North Up</div>
            <div>Where is the body by true bearing?</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

               NORTH

          <br><br>

               000°

          <br><br>

          W 270° ● 090° E

          <br><br>

               180°

          <br><br>

               SOUTH

        </div>
      `
    },


    {
      title: "Why Some Objects Are Not Visible",

      formula: [
        { key: "hc", label: "Hc" },
        ">",
        { key: "horizon", label: "0°" },
        "→",
        { key: "visible", label: "Above Horizon" }
      ],

      formulaHint:
        "A celestial body must be above the observer's horizon to be visible geometrically.",

      content: `

        <div class="theoryExplain" id="explain_hc" hidden>
          <h3>Calculated Altitude</h3>

          <p>
            Hc determines whether the body is above or below
            the mathematical horizon.
          </p>
        </div>


        <div class="theoryExplain" id="explain_horizon" hidden>
          <h3>The 0° Boundary</h3>

          <p>
            Positive altitude means above the horizon.
          </p>

          <p>
            Negative altitude means below the horizon.
          </p>
        </div>


        <div class="theoryExplain" id="explain_visible" hidden>
          <h3>Geometrical Visibility</h3>

          <p>
            A positive Hc does not automatically mean the body
            will be easy to see.
          </p>

          <p>
            Sunlight, cloud, haze, atmospheric extinction and
            the brightness of the object also matter.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Examples</h3>

          <div class="theoryTableExample">

            <div>Hc = +35°</div>
            <div>Above horizon</div>

            <div>Hc = +3°</div>
            <div>Very low and difficult</div>

            <div>Hc = -8°</div>
            <div>Below horizon</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

            ★ Hc +30°

          <br><br>

          ───────── Horizon 0°

          <br><br>

            ★ Hc -10°

          <br><br>

          Below horizon

        </div>
      `
    },


    {
      title: "Stars and Twilight",

      formula: [
        { key: "sunAltitude", label: "Sun Altitude" },
        "→",
        { key: "twilight", label: "Twilight" },
        "→",
        { key: "stars", label: "Visible Stars" }
      ],

      formulaHint:
        "The Sun's altitude below the horizon strongly affects how many stars can be seen.",

      content: `

        <div class="theoryExplain" id="explain_sunAltitude" hidden>
          <h3>Sun Altitude</h3>

          <p>
            Even after sunset the Sun continues to illuminate the sky.
          </p>

          <p>
            As it moves farther below the horizon, the sky becomes darker.
          </p>
        </div>


        <div class="theoryExplain" id="explain_twilight" hidden>
          <h3>Twilight</h3>

          <p>
            Civil twilight ends when the Sun reaches approximately -6°.
          </p>

          <p>
            Nautical twilight extends until approximately -12°.
          </p>

          <p>
            This period is especially useful for celestial navigation
            because bright stars and the sea horizon may both be visible.
          </p>
        </div>


        <div class="theoryExplain" id="explain_stars" hidden>
          <h3>Navigation Stars</h3>

          <p>
            Sky View can show navigation stars that are geometrically
            above the horizon.
          </p>

          <p>
            Their real visibility depends on magnitude and sky brightness.
          </p>

          <div class="theoryRemember">
            Twilight is the navigator's transition between
            a visible horizon and a visible star field.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Useful Sun altitude ranges</h3>

          <div class="theoryTableExample">

            <div>0° to -6°</div>
            <div>Civil twilight</div>

            <div>-6° to -12°</div>
            <div>Nautical twilight</div>

            <div>-12° to -18°</div>
            <div>Astronomical twilight</div>

            <div>Below -18°</div>
            <div>Full astronomical night</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sunset

          <br><br>

          Sun 0°

          <br><br>

          ↓

          <br><br>

          -6° Civil

          <br><br>

          ↓

          <br><br>

          -12° Nautical

          <br><br>

          ↓

          <br><br>

          More stars visible

        </div>
      `
    },


    {
      title: "Constellations and Star Identification",

      formula: [
        { key: "brightStar", label: "Bright Star" },
        "→",
        { key: "pattern", label: "Pattern" },
        "→",
        { key: "constellation", label: "Constellation" },
        "→",
        { key: "identify", label: "Identify Star" }
      ],

      formulaHint:
        "Constellation patterns help the navigator identify individual navigation stars confidently.",

      content: `

        <div class="theoryExplain" id="explain_brightStar" hidden>
          <h3>Bright Star</h3>

          <p>
            A navigator often begins with an easy-to-recognise bright star.
          </p>

          <p>
            Examples include Sirius, Canopus, Vega and Arcturus.
          </p>
        </div>


        <div class="theoryExplain" id="explain_pattern" hidden>
          <h3>Star Pattern</h3>

          <p>
            Nearby stars form recognisable geometric patterns.
          </p>

          <p>
            These patterns are more reliable for identification
            than brightness alone.
          </p>
        </div>


        <div class="theoryExplain" id="explain_constellation" hidden>
          <h3>Constellation</h3>

          <p>
            Constellation lines in Sky View are training guides.
          </p>

          <p>
            The real sky does not contain these lines; they help
            the observer understand the star pattern.
          </p>
        </div>


        <div class="theoryExplain" id="explain_identify" hidden>
          <h3>Positive Identification</h3>

          <p>
            Before using a star for a celestial sight, confirm
            that the correct star has been selected.
          </p>

          <div class="theoryRemember">
            Never identify a star from brightness alone.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example star hopping</h3>

          <div class="theoryTableExample">

            <div>Start</div>
            <div>Orion's Belt</div>

            <div>Extend line</div>
            <div>Toward south-east</div>

            <div>Star reached</div>
            <div>Sirius</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          ★ ★ ★ Orion Belt

          <br><br>

          ↘ extend

          <br><br>

          ★ SIRIUS

          <br><br>

          Pattern → Identification

        </div>
      `
    },


    {
      title: "Using Sky View for Observation Planning",

      formula: [
        { key: "objects", label: "Visible Objects" },
        "+",
        { key: "altitudes", label: "Altitudes" },
        "+",
        { key: "azimuths", label: "Azimuth Spread" },
        "→",
        { key: "plan", label: "Observation Plan" }
      ],

      formulaHint:
        "Sky View can help select celestial bodies that are visible, well placed and geometrically useful.",

      content: `

        <div class="theoryExplain" id="explain_objects" hidden>
          <h3>Visible Objects</h3>

          <p>
            First identify which navigation bodies are above the horizon.
          </p>
        </div>


        <div class="theoryExplain" id="explain_altitudes" hidden>
          <h3>Useful Altitudes</h3>

          <p>
            Extremely low bodies are difficult because of horizon
            and atmospheric effects.
          </p>

          <p>
            Very high bodies can also produce less convenient
            observation geometry.
          </p>
        </div>


        <div class="theoryExplain" id="explain_azimuths" hidden>
          <h3>Azimuth Spread</h3>

          <p>
            For a multi-body fix, select bodies distributed around
            the horizon rather than concentrated in one direction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_plan" hidden>
          <h3>Observation Plan</h3>

          <p>
            A useful plan combines visibility, altitude,
            identification confidence and azimuth spread.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Example selection</h3>

          <div class="theoryTableExample">

            <div>Star A</div>
            <div>Hc 28°, Zn 045°</div>

            <div>Star B</div>
            <div>Hc 36°, Zn 165°</div>

            <div>Star C</div>
            <div>Hc 42°, Zn 285°</div>

            <div>Geometry</div>
            <div>Good spread</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

                 ★ A

          <br><br>

          ★ C      ● Observer      ★ B

          <br><br>

          Wide azimuth spread

          <br><br>

          ↓

          <br><br>

          Better fix geometry

        </div>
      `
    },


    {
      title: "Practical Sky View Workflow",

      formula: [
        { key: "enter", label: "Enter Data" },
        "→",
        { key: "calculate", label: "Calculate Sky" },
        "→",
        { key: "identify", label: "Identify Objects" },
        "→",
        { key: "observe", label: "Observe" }
      ],

      formulaHint:
        "Use Sky View to understand the calculated sky, then verify it against the real sky.",

      content: `

        <div class="theoryExplain" id="explain_enter" hidden>
          <h3>Enter Data</h3>

          <p>
            Enter correct UTC, latitude, longitude and ship course.
          </p>
        </div>


        <div class="theoryExplain" id="explain_calculate" hidden>
          <h3>Calculate the Sky</h3>

          <p>
            Celestial Trainer calculates altitude and azimuth
            for available celestial bodies.
          </p>
        </div>


        <div class="theoryExplain" id="explain_identify" hidden>
          <h3>Identify Objects</h3>

          <p>
            Compare calculated directions with known star
            and constellation patterns.
          </p>
        </div>


        <div class="theoryExplain" id="explain_observe" hidden>
          <h3>Observe the Real Sky</h3>

          <p>
            Look in the calculated direction and confirm the body's
            position visually.
          </p>

          <p>
            The training goal is to connect calculations with
            real celestial navigation practice.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Set correct UTC</div>

            <div>2</div>
            <div>Enter observer position</div>

            <div>3</div>
            <div>Enter vessel course</div>

            <div>4</div>
            <div>Select Course Centered or North Up</div>

            <div>5</div>
            <div>Check bodies above horizon</div>

            <div>6</div>
            <div>Check Hc and Zn</div>

            <div>7</div>
            <div>Identify stars and constellations</div>

            <div>8</div>
            <div>Select useful bodies</div>

            <div>9</div>
            <div>Compare with real sky</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            Almanac numbers<br>
            ↓<br>
            Altitude + Azimuth<br>
            ↓<br>
            Visual sky<br>
            ↓<br>
            Recognition and observation
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          UTC + Position + Course

          <br><br>

          ↓

          <br><br>

          Calculate Hc + Zn

          <br><br>

          ↓

          <br><br>

          Display Sky

          <br><br>

          ↓

          <br><br>

          Identify Bodies

          <br><br>

          ↓

          <br><br>

          Celestial Observation

        </div>
      `
    }

  ]
};