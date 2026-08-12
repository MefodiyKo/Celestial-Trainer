/* =========================================================
   CELESTIAL TRAINER — THEORY: RUNNING FIX
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.runningfix = {
  title: "Running Fix",

  pages: [

    {
      title: "What Is a Running Fix?",

      formula: [
        { key: "lop1", label: "LOP 1" },
        "+",
        { key: "run", label: "Ship's Run" },
        "+",
        { key: "lop2", label: "LOP 2" },
        "→",
        { key: "rfix", label: "Running Fix" }
      ],

      formulaHint:
        "A running fix uses two lines of position taken at different times and accounts for the ship's movement between them.",

      content: `

        <div class="theoryExplain" id="explain_lop1" hidden>
          <h3>First Line of Position</h3>

          <p>
            The first celestial observation gives the first line of position.
          </p>

          <p>
            At that moment the vessel is somewhere on LOP 1.
          </p>
        </div>


        <div class="theoryExplain" id="explain_run" hidden>
          <h3>Ship's Run</h3>

          <p>
            Between the two observations the vessel moves.
          </p>

          <p>
            The first LOP must therefore be advanced by the distance
            and direction travelled by the ship.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            We move the first LOP with the ship.
          </div>
        </div>


        <div class="theoryExplain" id="explain_lop2" hidden>
          <h3>Second Line of Position</h3>

          <p>
            A second observation taken later produces LOP 2.
          </p>

          <p>
            This line belongs to the later observation time.
          </p>
        </div>


        <div class="theoryExplain" id="explain_rfix" hidden>
          <h3>Running Fix</h3>

          <p>
            The intersection of the advanced first LOP and the second LOP
            gives the running fix.
          </p>

          <p>
            It is the estimated vessel position at the time
            of the second observation.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Practical idea</h3>

          <div class="theoryTableExample">

            <div>08:00</div>
            <div>Take first sight</div>

            <div>08:00–09:00</div>
            <div>Ship moves on course</div>

            <div>09:00</div>
            <div>Take second sight</div>

            <div>Result</div>
            <div>Running Fix</div>

          </div>

          <p>
            The running fix is useful when only one celestial body
            is available over a period of time.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          LOP 1

          <br><br>

          ↓ advance by ship's run

          <br><br>

          Advanced LOP 1

          <br><br>

          intersects

          <br><br>

          LOP 2

          <br><br>

          ↓

          <br><br>

          RUNNING FIX

        </div>
      `
    },


    {
      title: "Distance Run",

      formula: [
        { key: "speed", label: "Speed" },
        "×",
        { key: "time", label: "Time" },
        "=",
        { key: "distance", label: "Distance Run" }
      ],

      formulaHint:
        "The distance travelled between the two observations is calculated from speed and elapsed time.",

      content: `

        <div class="theoryExplain" id="explain_speed" hidden>
          <h3>Speed</h3>

          <p>
            Use the vessel's appropriate speed for the interval
            between observations.
          </p>

          <p>
            In simple training problems this is usually a constant speed in knots.
          </p>
        </div>


        <div class="theoryExplain" id="explain_time" hidden>
          <h3>Elapsed Time</h3>

          <p>
            The elapsed time is the interval between LOP 1 and LOP 2.
          </p>

          <p>
            Convert minutes to hours before multiplying by speed.
          </p>
        </div>


        <div class="theoryExplain" id="explain_distance" hidden>
          <h3>Distance Run</h3>

          <p>
            Because one knot equals one nautical mile per hour,
            the calculation is straightforward.
          </p>

          <div class="theoryRemember">
            Distance = Speed × Time
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Speed</div>
            <div>12 kn</div>

            <div>Interval</div>
            <div>1 hour</div>

            <div>Distance</div>
            <div>12 NM</div>

          </div>

          <h3>Second example</h3>

          <div class="theoryTableExample">

            <div>Speed</div>
            <div>15 kn</div>

            <div>Interval</div>
            <div>40 min = 0.667 h</div>

            <div>Distance</div>
            <div>10 NM</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Speed

          <br><br>

          ×

          <br><br>

          Time

          <br><br>

          =

          <br><br>

          Distance travelled

        </div>
      `
    },


    {
      title: "Advance the First LOP",

      formula: [
        { key: "lop1", label: "LOP 1" },
        "+",
        { key: "course", label: "Course" },
        "+",
        { key: "distance", label: "Distance Run" },
        "→",
        { key: "advanced", label: "Advanced LOP 1" }
      ],

      formulaHint:
        "The first LOP is shifted in the same direction and by the same distance as the vessel's run.",

      content: `

        <div class="theoryExplain" id="explain_lop1" hidden>
          <h3>Original LOP 1</h3>

          <p>
            The first line belongs to the position situation
            at the time of the first observation.
          </p>
        </div>


        <div class="theoryExplain" id="explain_course" hidden>
          <h3>Course</h3>

          <p>
            The course defines the direction in which the vessel moved.
          </p>

          <p>
            The first LOP must be translated parallel to itself
            in that same direction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_distance" hidden>
          <h3>Distance Run</h3>

          <p>
            The amount of shift equals the vessel's distance run
            between observations.
          </p>
        </div>


        <div class="theoryExplain" id="explain_advanced" hidden>
          <h3>Advanced LOP 1</h3>

          <p>
            The advanced line represents where the vessel would now be
            relative to the original observation.
          </p>

          <p>
            It keeps the same orientation as the original LOP.
          </p>

          <div class="theoryRemember">
            Never rotate the LOP when advancing it.
            Shift it parallel to itself.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Original LOP</div>
            <div>08:00</div>

            <div>Course</div>
            <div>090°</div>

            <div>Distance run</div>
            <div>12 NM</div>

            <div>Action</div>
            <div>Shift LOP 12 NM east</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Original LOP

          <br><br>

          │

          <br><br>

          → 12 NM on course 090°

          <br><br>

          │

          <br><br>

          Advanced LOP

        </div>
      `
    },


    {
      title: "Second Observation",

      formula: [
        { key: "secondSight", label: "Second Sight" },
        "→",
        { key: "secondIntercept", label: "Intercept" },
        "→",
        { key: "lop2", label: "LOP 2" }
      ],

      formulaHint:
        "The second sight is reduced normally and produces a fresh line of position.",

      content: `

        <div class="theoryExplain" id="explain_secondSight" hidden>
          <h3>Second Sight</h3>

          <p>
            At the later time, take another sextant observation.
          </p>

          <p>
            Record its UTC accurately.
          </p>
        </div>


        <div class="theoryExplain" id="explain_secondIntercept" hidden>
          <h3>Second Intercept</h3>

          <p>
            Reduce the second sight in the normal way.
          </p>

          <p>
            Determine Ho, Hc, Zn and the Toward or Away intercept.
          </p>
        </div>


        <div class="theoryExplain" id="explain_lop2" hidden>
          <h3>Second LOP</h3>

          <p>
            Plot the second line of position at the second observation time.
          </p>

          <p>
            This line is not advanced because it already belongs
            to the final time of the running fix.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Important</h3>

          <p>
            The first LOP is moved forward in time.
            The second LOP stays where it is plotted.
          </p>

          <div class="theoryRemember">
            Advanced LOP 1 + LOP 2 = Running Fix
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Second sight

          <br><br>

          ↓

          <br><br>

          Sight reduction

          <br><br>

          ↓

          <br><br>

          LOP 2

        </div>
      `
    },


    {
      title: "Finding the Running Fix",

      formula: [
        { key: "advanced", label: "Advanced LOP 1" },
        "∩",
        { key: "lop2", label: "LOP 2" },
        "=",
        { key: "rfix", label: "Running Fix" }
      ],

      formulaHint:
        "The intersection gives the vessel's estimated position at the time of the second observation.",

      content: `

        <div class="theoryExplain" id="explain_advanced" hidden>
          <h3>Advanced LOP 1</h3>

          <p>
            This line represents the first observation moved forward
            by the ship's estimated motion.
          </p>
        </div>


        <div class="theoryExplain" id="explain_lop2" hidden>
          <h3>LOP 2</h3>

          <p>
            This is the fresh line obtained from the second observation.
          </p>
        </div>


        <div class="theoryExplain" id="explain_rfix" hidden>
          <h3>Running Fix Position</h3>

          <p>
            Where the two lines cross is the running fix.
          </p>

          <p>
            This fix belongs to the second observation time.
          </p>

          <div class="theoryRemember">
            The quality of the running fix depends both on celestial
            observations and on the accuracy of the DR run.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Worked example</h3>

          <div class="theoryTableExample">

            <div>LOP 1</div>
            <div>08:00</div>

            <div>Course</div>
            <div>090°</div>

            <div>Speed</div>
            <div>12 kn</div>

            <div>LOP 2</div>
            <div>09:00</div>

            <div>Distance run</div>
            <div>12 NM</div>

            <div>Fix time</div>
            <div>09:00</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Advanced LOP 1

          <br><br>

          ╲

          <br><br>

          ● Running Fix

          <br><br>

          ╱

          <br><br>

          LOP 2

        </div>
      `
    },


    {
      title: "Sources of Error",

      formula: [
        { key: "sightError", label: "Sight Error" },
        "+",
        { key: "courseError", label: "Course Error" },
        "+",
        { key: "speedError", label: "Speed Error" },
        "+",
        { key: "timeError", label: "Time Error" }
      ],

      formulaHint:
        "A running fix combines observation errors with dead-reckoning errors.",

      content: `

        <div class="theoryExplain" id="explain_sightError" hidden>
          <h3>Sight Error</h3>

          <p>
            Sextant, timing or sight-reduction errors affect each LOP.
          </p>
        </div>


        <div class="theoryExplain" id="explain_courseError" hidden>
          <h3>Course Error</h3>

          <p>
            If the vessel's actual track differs from the course used,
            the advanced first LOP will be shifted incorrectly.
          </p>
        </div>


        <div class="theoryExplain" id="explain_speedError" hidden>
          <h3>Speed Error</h3>

          <p>
            An incorrect speed gives an incorrect distance run.
          </p>
        </div>


        <div class="theoryExplain" id="explain_timeError" hidden>
          <h3>Time Error</h3>

          <p>
            The interval between observations must be correct.
          </p>

          <p>
            Errors in UTC also directly affect celestial calculations.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Practical checks</h3>

          <div class="theoryTableExample">

            <div>Course</div>
            <div>Check gyro / track used</div>

            <div>Speed</div>
            <div>Use representative speed</div>

            <div>Time</div>
            <div>Check exact UTC</div>

            <div>LOPs</div>
            <div>Check plotting orientation</div>

          </div>

          <div class="theoryRemember">
            The longer the interval between observations,
            the more important DR accuracy becomes.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sight errors

          <br><br>

          +

          <br><br>

          DR errors

          <br><br>

          ↓

          <br><br>

          Running Fix accuracy

        </div>
      `
    },


    {
      title: "Practical Running Fix Workflow",

      formula: [
        { key: "first", label: "First Sight" },
        "→",
        { key: "run", label: "Run" },
        "→",
        { key: "advance", label: "Advance LOP" },
        "→",
        { key: "second", label: "Second Sight" },
        "→",
        { key: "fix", label: "Fix" }
      ],

      formulaHint:
        "The running fix is a time-linked plotting process.",

      content: `

        <div class="theoryExplain" id="explain_first" hidden>
          <h3>First Sight</h3>

          <p>
            Take and reduce the first celestial observation.
          </p>

          <p>
            Plot LOP 1.
          </p>
        </div>


        <div class="theoryExplain" id="explain_run" hidden>
          <h3>Run</h3>

          <p>
            Record course, speed and elapsed time between observations.
          </p>
        </div>


        <div class="theoryExplain" id="explain_advance" hidden>
          <h3>Advance LOP 1</h3>

          <p>
            Shift LOP 1 parallel to itself by the vessel's run.
          </p>
        </div>


        <div class="theoryExplain" id="explain_second" hidden>
          <h3>Second Sight</h3>

          <p>
            Take and reduce the second observation.
          </p>

          <p>
            Plot LOP 2.
          </p>
        </div>


        <div class="theoryExplain" id="explain_fix" hidden>
          <h3>Fix</h3>

          <p>
            The intersection of advanced LOP 1 and LOP 2
            gives the running fix.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Take first sight</div>

            <div>2</div>
            <div>Reduce and plot LOP 1</div>

            <div>3</div>
            <div>Record course and speed</div>

            <div>4</div>
            <div>Calculate distance run</div>

            <div>5</div>
            <div>Advance LOP 1</div>

            <div>6</div>
            <div>Take second sight</div>

            <div>7</div>
            <div>Reduce and plot LOP 2</div>

            <div>8</div>
            <div>Mark intersection</div>

            <div>9</div>
            <div>Label position and second-sight time</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            First observation<br>
            ↓<br>
            Move it with the ship<br>
            ↓<br>
            Compare with second observation<br>
            ↓<br>
            Running Fix
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          LOP 1

          <br><br>

          ↓

          <br><br>

          Ship's run

          <br><br>

          ↓

          <br><br>

          Advanced LOP 1

          <br><br>

          +

          <br><br>

          LOP 2

          <br><br>

          ↓

          <br><br>

          RUNNING FIX

        </div>
      `
    }

  ]
};