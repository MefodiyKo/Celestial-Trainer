/* =========================================================
   CELESTIAL TRAINER — THEORY: 3-LOP FIX
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.lopfix = {
  title: "3-LOP Fix",

  pages: [

    {
      title: "What Is a 3-LOP Fix?",

      formula: [
        { key: "lop1", label: "LOP 1" },
        "+",
        { key: "lop2", label: "LOP 2" },
        "+",
        { key: "lop3", label: "LOP 3" },
        "→",
        { key: "fix", label: "Fix" }
      ],

      formulaHint:
        "Three independent celestial lines of position are combined to determine the vessel's position.",

      content: `

        <div class="theoryExplain" id="explain_lop1" hidden>
          <h3>LOP 1</h3>

          <p>
            The first celestial sight produces the first line of position.
          </p>

          <p>
            The vessel is somewhere on this line at the observation time.
          </p>
        </div>

        <div class="theoryExplain" id="explain_lop2" hidden>
          <h3>LOP 2</h3>

          <p>
            A second observation provides another independent line.
          </p>

          <p>
            The second line should ideally cross the first at a useful angle.
          </p>
        </div>

        <div class="theoryExplain" id="explain_lop3" hidden>
          <h3>LOP 3</h3>

          <p>
            The third line provides an additional check on the position.
          </p>

          <p>
            It also helps reveal observation or plotting errors.
          </p>
        </div>

        <div class="theoryExplain" id="explain_fix" hidden>
          <h3>Fix</h3>

          <p>
            Ideally, all three LOPs intersect at one point.
          </p>

          <p>
            That point is the celestial fix.
          </p>

          <div class="theoryRemember">
            <b>Main idea:</b><br>
            One sight gives a line.<br>
            Several lines give a position.
          </div>
        </div>

        <div class="theoryBookIntro">

          <h3>What the navigator normally sees</h3>

          <div class="theoryTableExample">

            <div>Object 1</div>
            <div>Sun</div>

            <div>Object 2</div>
            <div>Venus</div>

            <div>Object 3</div>
            <div>Jupiter</div>

            <div>Result</div>
            <div>Celestial Fix</div>

          </div>

          <p>
            Each celestial body gives a different azimuth and therefore
            a differently oriented line of position.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          LOP 1 ╲

          <br><br>

          LOP 2 ─── ● FIX

          <br><br>

          LOP 3 ╱

        </div>
      `
    },


    {
      title: "From Sight to LOP",

      formula: [
        { key: "hs", label: "Hs" },
        "→",
        { key: "ho", label: "Ho" },
        "→",
        { key: "hc", label: "Hc" },
        "+",
        { key: "zn", label: "Zn" },
        "→",
        { key: "lop", label: "LOP" }
      ],

      formulaHint:
        "Each of the three observations is reduced separately before the lines are combined.",

      content: `

        <div class="theoryExplain" id="explain_hs" hidden>
          <h3>Hs</h3>

          <p>
            Hs is the raw sextant altitude for one celestial body.
          </p>
        </div>

        <div class="theoryExplain" id="explain_ho" hidden>
          <h3>Ho</h3>

          <p>
            Apply all necessary sight corrections to obtain Ho.
          </p>
        </div>

        <div class="theoryExplain" id="explain_hc" hidden>
          <h3>Hc</h3>

          <p>
            Hc is the calculated altitude of the body from the assumed position.
          </p>
        </div>

        <div class="theoryExplain" id="explain_zn" hidden>
          <h3>Zn</h3>

          <p>
            Zn gives the true direction toward the geographical
            position of the celestial body.
          </p>
        </div>

        <div class="theoryExplain" id="explain_lop" hidden>
          <h3>Line of Position</h3>

          <p>
            The intercept is plotted along Zn and the LOP is drawn
            perpendicular to the azimuth direction.
          </p>
        </div>

        <div class="theoryBookIntro">

          <h3>Repeat for all three bodies</h3>

          <div class="theoryTableExample">

            <div>Sight 1</div>
            <div>Ho₁, Hc₁, Zn₁</div>

            <div>Sight 2</div>
            <div>Ho₂, Hc₂, Zn₂</div>

            <div>Sight 3</div>
            <div>Ho₃, Hc₃, Zn₃</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Sight

          <br><br>

          ↓

          <br><br>

          Corrections

          <br><br>

          ↓

          <br><br>

          Ho − Hc

          <br><br>

          ↓

          <br><br>

          Intercept + Zn

          <br><br>

          ↓

          <br><br>

          LOP

        </div>
      `
    },


    {
      title: "Azimuth Spread",

      formula: [
        { key: "zn1", label: "Zn 1" },
        "+",
        { key: "zn2", label: "Zn 2" },
        "+",
        { key: "zn3", label: "Zn 3" },
        "→",
        { key: "geometry", label: "Fix Geometry" }
      ],

      formulaHint:
        "The quality of the fix depends strongly on the angles between the lines of position.",

      content: `

        <div class="theoryExplain" id="explain_zn1" hidden>
          <h3>First Azimuth</h3>

          <p>
            The first body's azimuth controls the orientation of LOP 1.
          </p>
        </div>

        <div class="theoryExplain" id="explain_zn2" hidden>
          <h3>Second Azimuth</h3>

          <p>
            The second body should ideally have a substantially different azimuth.
          </p>
        </div>

        <div class="theoryExplain" id="explain_zn3" hidden>
          <h3>Third Azimuth</h3>

          <p>
            A third well-separated azimuth improves the geometry
            and provides a better cross-check.
          </p>
        </div>

        <div class="theoryExplain" id="explain_geometry" hidden>
          <h3>Fix Geometry</h3>

          <p>
            LOPs that cross at useful angles produce a stronger position fix.
          </p>

          <p>
            Nearly parallel LOPs provide poor positional information.
          </p>

          <div class="theoryRemember">
            Good azimuth spread is usually more important than
            simply choosing the three brightest bodies.
          </div>
        </div>

        <div class="theoryBookIntro">

          <h3>Comparison</h3>

          <div class="theoryTableExample">

            <div>Poor geometry</div>
            <div>Zn 080°, 095°, 110°</div>

            <div>Better geometry</div>
            <div>Zn 020°, 145°, 265°</div>

          </div>

          <p>
            With good geometry, small observational errors have less
            influence on the final position.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          GOOD

          <br><br>

          ↖  ↑  ↗

          <br><br>

          Wide azimuth spread

          <br><br><br>

          POOR

          <br><br>

          ↗ ↗ ↗

          <br><br>

          Nearly same direction

        </div>
      `
    },


    {
      title: "The Cocked Hat",

      formula: [
        { key: "lop1", label: "LOP 1" },
        "+",
        { key: "lop2", label: "LOP 2" },
        "+",
        { key: "lop3", label: "LOP 3" },
        "→",
        { key: "triangle", label: "Cocked Hat" }
      ],

      formulaHint:
        "In real observations the three LOPs usually form a small triangle instead of meeting at exactly one point.",

      content: `

        <div class="theoryExplain" id="explain_lop1" hidden>
          <h3>LOP 1</h3>

          <p>
            Every observed LOP contains small errors.
          </p>
        </div>

        <div class="theoryExplain" id="explain_lop2" hidden>
          <h3>LOP 2</h3>

          <p>
            The second line will normally not pass through exactly
            the same point as the first and third.
          </p>
        </div>

        <div class="theoryExplain" id="explain_lop3" hidden>
          <h3>LOP 3</h3>

          <p>
            The third line completes the small triangle formed
            by the three observations.
          </p>
        </div>

        <div class="theoryExplain" id="explain_triangle" hidden>
          <h3>Cocked Hat</h3>

          <p>
            The small triangle between three LOPs is commonly called
            a cocked hat.
          </p>

          <p>
            It results from combined observational, timing,
            calculation and plotting errors.
          </p>

          <div class="theoryRemember">
            A small cocked hat is normal.
            A large one should be investigated.
          </div>
        </div>

        <div class="theoryBookIntro">

          <h3>Possible causes</h3>

          <div class="theoryTableExample">

            <div>Sextant</div>
            <div>Observation error</div>

            <div>UTC</div>
            <div>Timing error</div>

            <div>Almanac</div>
            <div>Wrong data</div>

            <div>Plot</div>
            <div>Plotting error</div>

            <div>DR/AP</div>
            <div>Incorrect assumed data</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

              ╲

          <br>

            ╱ △ ╲

          <br>

          ─────────

          <br><br>

          Small triangle = Cocked Hat

        </div>
      `
    },


    {
      title: "Choosing the Fix Position",

      formula: [
        { key: "triangle", label: "Cocked Hat" },
        "→",
        { key: "assessment", label: "Assess Errors" },
        "→",
        { key: "position", label: "Adopt Position" }
      ],

      formulaHint:
        "Do not automatically assume that one mathematical point is always the correct answer.",

      content: `

        <div class="theoryExplain" id="explain_triangle" hidden>
          <h3>Size and Shape</h3>

          <p>
            First examine the size and shape of the cocked hat.
          </p>

          <p>
            A small, compact triangle generally indicates mutually
            consistent observations.
          </p>
        </div>

        <div class="theoryExplain" id="explain_assessment" hidden>
          <h3>Assess the Errors</h3>

          <p>
            Consider whether one sight was weaker than the others.
          </p>

          <p>
            Check horizon quality, body altitude, timing, identification
            and azimuth spread.
          </p>
        </div>

        <div class="theoryExplain" id="explain_position" hidden>
          <h3>Adopted Position</h3>

          <p>
            For training purposes, the centre of a small cocked hat
            is a useful practical estimate.
          </p>

          <p>
            In real navigation, the navigator should also consider
            known systematic errors and the surrounding navigational situation.
          </p>
        </div>

        <div class="theoryBookIntro">

          <h3>Do not use the triangle blindly</h3>

          <p>
            The safest interpretation depends on the type of errors present
            and the navigational circumstances.
          </p>

          <div class="theoryRemember">
            Always compare the celestial fix with DR, GNSS and other
            available navigation information.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Cocked Hat

          <br><br>

          △

          <br><br>

          ↓ inspect

          <br><br>

          size + shape + sight quality

          <br><br>

          ↓

          <br><br>

          Adopted Fix

        </div>
      `
    },


    {
      title: "Simultaneous vs Non-Simultaneous Sights",

      formula: [
        { key: "time1", label: "UTC 1" },
        "≈",
        { key: "time2", label: "UTC 2" },
        "≈",
        { key: "time3", label: "UTC 3" },
        "→",
        { key: "fix", label: "Common Fix Time" }
      ],

      formulaHint:
        "If the vessel moves significantly between sights, the observations must be brought to a common time.",

      content: `

        <div class="theoryExplain" id="explain_time1" hidden>
          <h3>First Sight Time</h3>

          <p>
            Record the exact UTC of every sight.
          </p>
        </div>

        <div class="theoryExplain" id="explain_time2" hidden>
          <h3>Second Sight Time</h3>

          <p>
            Even a few minutes can matter on a fast-moving vessel.
          </p>
        </div>

        <div class="theoryExplain" id="explain_time3" hidden>
          <h3>Third Sight Time</h3>

          <p>
            The third observation may belong to a noticeably different
            ship position if the sight sequence takes too long.
          </p>
        </div>

        <div class="theoryExplain" id="explain_fix" hidden>
          <h3>Common Fix Time</h3>

          <p>
            When necessary, earlier LOPs are advanced to the time
            of the final observation.
          </p>

          <p>
            This uses the same basic logic as a running fix.
          </p>

          <div class="theoryRemember">
            A 3-LOP fix should represent one common time.
          </div>
        </div>

        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Sight 1</div>
            <div>18:42 UTC</div>

            <div>Sight 2</div>
            <div>18:45 UTC</div>

            <div>Sight 3</div>
            <div>18:48 UTC</div>

            <div>Fix time</div>
            <div>18:48 UTC</div>

          </div>

          <p>
            If ship movement during those six minutes is significant,
            the earlier LOPs should be advanced appropriately.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          LOP 1 @ 18:42

          <br><br>

          ↓ advance

          <br><br>

          LOP 2 @ 18:45

          <br><br>

          ↓ advance

          <br><br>

          LOP 3 @ 18:48

          <br><br>

          ↓

          <br><br>

          Common fix @ 18:48

        </div>
      `
    },


    {
      title: "Checking the Result",

      formula: [
        { key: "celestial", label: "Celestial Fix" },
        "↔",
        { key: "dr", label: "DR" },
        "↔",
        { key: "gnss", label: "GNSS" },
        "→",
        { key: "check", label: "Reasonableness Check" }
      ],

      formulaHint:
        "A celestial fix should always be checked against other available navigation information.",

      content: `

        <div class="theoryExplain" id="explain_celestial" hidden>
          <h3>Celestial Fix</h3>

          <p>
            The result should be treated as an independent navigation position.
          </p>
        </div>

        <div class="theoryExplain" id="explain_dr" hidden>
          <h3>Dead Reckoning</h3>

          <p>
            Compare the fix with the expected DR position.
          </p>

          <p>
            A large unexplained difference should be investigated.
          </p>
        </div>

        <div class="theoryExplain" id="explain_gnss" hidden>
          <h3>GNSS Position</h3>

          <p>
            In normal operations GNSS provides another useful comparison.
          </p>

          <p>
            Celestial navigation is valuable precisely because it is
            independent of satellite positioning.
          </p>
        </div>

        <div class="theoryExplain" id="explain_check" hidden>
          <h3>Reasonableness Check</h3>

          <p>
            Check whether the final position makes sense considering
            course, speed, previous fixes and surrounding hazards.
          </p>
        </div>

        <div class="theoryBookIntro">

          <h3>Investigate if:</h3>

          <div class="theoryTableExample">

            <div>Large cocked hat</div>
            <div>Recheck observations</div>

            <div>Large DR difference</div>
            <div>Check run / calculations</div>

            <div>One LOP unusual</div>
            <div>Recheck that sight</div>

            <div>Wrong geometry</div>
            <div>Choose better bodies</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Celestial Fix

          <br><br>

          ↕ compare

          <br><br>

          DR

          <br><br>

          ↕ compare

          <br><br>

          GNSS

          <br><br>

          ↓

          <br><br>

          Is the result reasonable?

        </div>
      `
    },


    {
      title: "Practical 3-LOP Workflow",

      formula: [
        { key: "select", label: "Select Bodies" },
        "→",
        { key: "observe", label: "Observe" },
        "→",
        { key: "reduce", label: "Reduce" },
        "→",
        { key: "plot", label: "Plot" },
        "→",
        { key: "assess", label: "Assess Fix" }
      ],

      formulaHint:
        "Good preparation, good azimuth spread and consistent observations are the keys to a strong celestial fix.",

      content: `

        <div class="theoryExplain" id="explain_select" hidden>
          <h3>Select Bodies</h3>

          <p>
            Choose clearly identifiable celestial bodies with useful
            azimuth separation.
          </p>
        </div>

        <div class="theoryExplain" id="explain_observe" hidden>
          <h3>Observe</h3>

          <p>
            Take accurate sextant altitudes and record exact UTC
            for all three sights.
          </p>
        </div>

        <div class="theoryExplain" id="explain_reduce" hidden>
          <h3>Reduce</h3>

          <p>
            Calculate Ho, Hc, Zn and the intercept for each sight.
          </p>
        </div>

        <div class="theoryExplain" id="explain_plot" hidden>
          <h3>Plot</h3>

          <p>
            Plot all three LOPs at a common observation time.
          </p>
        </div>

        <div class="theoryExplain" id="explain_assess" hidden>
          <h3>Assess the Fix</h3>

          <p>
            Examine the intersection or cocked hat and compare
            the result with DR and other position information.
          </p>
        </div>

        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Select three suitable bodies</div>

            <div>2</div>
            <div>Check azimuth spread</div>

            <div>3</div>
            <div>Take Sight 1 and UTC</div>

            <div>4</div>
            <div>Take Sight 2 and UTC</div>

            <div>5</div>
            <div>Take Sight 3 and UTC</div>

            <div>6</div>
            <div>Correct all Hs to Ho</div>

            <div>7</div>
            <div>Calculate Hc and Zn</div>

            <div>8</div>
            <div>Calculate all intercepts</div>

            <div>9</div>
            <div>Bring LOPs to common time if needed</div>

            <div>10</div>
            <div>Plot the three LOPs</div>

            <div>11</div>
            <div>Assess cocked hat</div>

            <div>12</div>
            <div>Compare with DR / GNSS</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            Three independent observations<br>
            ↓<br>
            Three intercepts and azimuths<br>
            ↓<br>
            Three lines of position<br>
            ↓<br>
            Celestial Fix
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Select 3 bodies

          <br><br>

          ↓

          <br><br>

          Take 3 sights

          <br><br>

          ↓

          <br><br>

          Reduce 3 sights

          <br><br>

          ↓

          <br><br>

          Plot 3 LOPs

          <br><br>

          ↓

          <br><br>

          FIX

        </div>
      `
    }

  ]
};