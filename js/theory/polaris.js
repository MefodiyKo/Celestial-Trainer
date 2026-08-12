/* =========================================================
   CELESTIAL TRAINER — THEORY: POLARIS
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.polaris = {
  title: "Latitude by Polaris",

  pages: [

    /* =====================================================
       PAGE 1 — GENERAL IDEA
       ===================================================== */

    {
      title: "Why Polaris Gives Latitude",

      formula: [
        { key: "polaris", label: "Polaris" },
        "≈",
        { key: "pole", label: "North Celestial Pole" },
        "→",
        { key: "altitude", label: "Altitude" },
        "≈",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "Because Polaris lies close to the North Celestial Pole, its altitude is approximately equal to the observer's latitude.",

      content: `

        <div class="theoryExplain" id="explain_polaris" hidden>

          <h3>Polaris</h3>

          <p>
            Polaris is the navigation star located very close
            to the North Celestial Pole.
          </p>

          <p>
            It appears almost stationary while other stars seem
            to rotate around it during the night.
          </p>

          <div class="theoryRemember">
            Polaris is useful because its position is closely linked
            to the direction of True North.
          </div>

        </div>


        <div class="theoryExplain" id="explain_pole" hidden>

          <h3>North Celestial Pole</h3>

          <p>
            Imagine the Earth's rotational axis extended into the sky.
          </p>

          <p>
            The point where that axis reaches the northern celestial
            sphere is the North Celestial Pole.
          </p>

        </div>


        <div class="theoryExplain" id="explain_altitude" hidden>

          <h3>Altitude of Polaris</h3>

          <p>
            The angular height of the North Celestial Pole above
            the horizon is equal to the observer's latitude.
          </p>

          <p>
            Because Polaris is very close to that pole, its altitude
            gives an immediate approximation of latitude.
          </p>

        </div>


        <div class="theoryExplain" id="explain_latitude" hidden>

          <h3>Latitude</h3>

          <p>
            At latitude 40° N, the North Celestial Pole appears
            approximately 40° above the northern horizon.
          </p>

          <p>
            At latitude 60° N, it appears approximately 60° high.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Simple picture</h3>

          <div class="theoryTableExample">

            <div>Observer latitude</div>
            <div>40° N</div>

            <div>North Celestial Pole altitude</div>
            <div>40°</div>

            <div>Polaris altitude</div>
            <div>Approximately 40°</div>

          </div>

          <p>
            This is why Polaris provides one of the most intuitive
            methods of finding latitude.
          </p>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Polaris ★

          <br><br>

          ● North Celestial Pole

          <br><br>

          │

          <br><br>

          │ altitude ≈ latitude

          <br><br>

          │

          <br><br>

          ───────── North Horizon

        </div>
      `
    },


    /* =====================================================
       PAGE 2 — GEOMETRY
       ===================================================== */

    {
      title: "The Geometry Behind Polaris",

      formula: [
        { key: "axis", label: "Earth Axis" },
        "→",
        { key: "ncp", label: "NCP" },
        "→",
        { key: "angle", label: "Horizon Angle" },
        "=",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "The altitude of the celestial pole is a direct geometrical consequence of the observer's latitude.",

      content: `

        <div class="theoryExplain" id="explain_axis" hidden>

          <h3>Earth's Axis</h3>

          <p>
            The Earth rotates around an imaginary axis passing
            through the North and South Poles.
          </p>

          <p>
            Extend this axis outward into space.
          </p>

        </div>


        <div class="theoryExplain" id="explain_ncp" hidden>

          <h3>North Celestial Pole</h3>

          <p>
            The northern extension of the Earth's rotational axis
            points toward the North Celestial Pole.
          </p>

          <p>
            Polaris lies very close to this point.
          </p>

        </div>


        <div class="theoryExplain" id="explain_angle" hidden>

          <h3>Angle Above the Horizon</h3>

          <p>
            The angle between the northern horizon and the celestial
            pole increases as the observer moves north.
          </p>

          <p>
            At the equator it is 0°.
            At the North Pole it is 90°.
          </p>

        </div>


        <div class="theoryExplain" id="explain_latitude" hidden>

          <h3>Latitude Relationship</h3>

          <p>
            The angle of the celestial pole above the horizon
            is numerically equal to the observer's latitude.
          </p>

          <div class="theoryRemember">
            NCP altitude = Latitude
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Three useful cases</h3>

          <div class="theoryTableExample">

            <div>Equator</div>
            <div>NCP on horizon = 0°</div>

            <div>45° N</div>
            <div>NCP altitude = 45°</div>

            <div>North Pole</div>
            <div>NCP at zenith = 90°</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          North Pole

          <br><br>

          NCP altitude = 90°

          <br><br>

          ↓

          <br><br>

          45° N → NCP altitude = 45°

          <br><br>

          ↓

          <br><br>

          Equator → NCP altitude = 0°

        </div>
      `
    },


    /* =====================================================
       PAGE 3 — WHY CORRECTION IS NEEDED
       ===================================================== */

    {
      title: "Why Polaris Needs a Correction",

      formula: [
        { key: "ho", label: "Ho Polaris" },
        "+",
        { key: "correction", label: "Polaris Correction" },
        "=",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "Polaris is close to the celestial pole, but it is not exactly on it.",

      content: `

        <div class="theoryExplain" id="explain_ho" hidden>

          <h3>Observed Altitude — Ho</h3>

          <p>
            Ho is the corrected sextant altitude of Polaris.
          </p>

          <p>
            It is obtained after applying the normal sextant corrections.
          </p>

        </div>


        <div class="theoryExplain" id="explain_correction" hidden>

          <h3>Polaris Correction</h3>

          <p>
            Polaris is slightly displaced from the exact North
            Celestial Pole.
          </p>

          <p>
            As the Earth rotates, Polaris appears to describe
            a small circle around the pole.
          </p>

          <p>
            Therefore its altitude is sometimes slightly above
            and sometimes slightly below the true latitude.
          </p>

        </div>


        <div class="theoryExplain" id="explain_latitude" hidden>

          <h3>Corrected Latitude</h3>

          <p>
            The correction accounts for Polaris' small angular
            distance from the celestial pole.
          </p>

          <p>
            After applying the correction, the result gives
            the observer's latitude.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Approximation vs final result</h3>

          <div class="theoryTableExample">

            <div>Polaris Ho</div>
            <div>41° 12.4'</div>

            <div>Approximate latitude</div>
            <div>About 41° 12'</div>

            <div>Polaris correction</div>
            <div>+40.8'</div>

            <div>Latitude</div>
            <div>41° 53.2' N</div>

          </div>

          <div class="theoryRemember">
            Polaris altitude gives a quick approximation.
            The correction gives the navigational latitude.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

              ★ Polaris

          <br><br>

            small circle

          <br><br>

              ● NCP

          <br><br>

          ↓ correction

          <br><br>

          True Latitude

        </div>
      `
    },


    /* =====================================================
       PAGE 4 — SEXTANT CORRECTIONS
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
        "=",
        { key: "ho", label: "Ho" }
      ],

      formulaHint:
        "Polaris must first be reduced to a corrected observed altitude just like any other star.",

      content: `

        <div class="theoryExplain" id="explain_hs" hidden>

          <h3>Hs</h3>

          <p>
            Hs is the raw altitude measured with the sextant.
          </p>

        </div>


        <div class="theoryExplain" id="explain_ie" hidden>

          <h3>Index Correction</h3>

          <p>
            Apply the correction for the sextant's index error.
          </p>

        </div>


        <div class="theoryExplain" id="explain_dip" hidden>

          <h3>Dip</h3>

          <p>
            Dip corrects for the observer's height of eye
            above sea level.
          </p>

        </div>


        <div class="theoryExplain" id="explain_refraction" hidden>

          <h3>Refraction</h3>

          <p>
            Atmospheric refraction makes Polaris appear slightly
            higher than its geometrical altitude.
          </p>

          <p>
            The correction depends mainly on altitude.
          </p>

        </div>


        <div class="theoryExplain" id="explain_ho" hidden>

          <h3>Observed Altitude — Ho</h3>

          <p>
            Ho is the corrected altitude used for the Polaris
            latitude calculation.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Correction sequence</h3>

          <div class="theoryTableExample">

            <div>Hs</div>
            <div>41° 16.0'</div>

            <div>Index correction</div>
            <div>+0.3'</div>

            <div>Dip</div>
            <div>-3.0'</div>

            <div>Refraction</div>
            <div>-0.9'</div>

            <div>Ho</div>
            <div>41° 12.4'</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Hs Polaris

          <br><br>

          ↓

          <br><br>

          Index Correction

          <br><br>

          + Dip

          <br><br>

          + Refraction

          <br><br>

          ↓

          <br><br>

          Ho Polaris

        </div>
      `
    },


    /* =====================================================
       PAGE 5 — LHA ARIES
       ===================================================== */

    {
      title: "Why LHA Aries Is Used",

      formula: [
        { key: "ghaAries", label: "GHA Aries" },
        "+",
        { key: "longitude", label: "Longitude" },
        "=",
        { key: "lhaAries", label: "LHA Aries" },
        "→",
        { key: "correction", label: "Polaris Correction" }
      ],

      formulaHint:
        "LHA Aries tells where the stellar sky is rotated relative to the observer's meridian.",

      content: `

        <div class="theoryExplain" id="explain_ghaAries" hidden>

          <h3>GHA Aries</h3>

          <p>
            GHA Aries describes the rotation of the celestial sphere
            relative to Greenwich.
          </p>

          <p>
            It is the basic reference used for navigational stars.
          </p>

        </div>


        <div class="theoryExplain" id="explain_longitude" hidden>

          <h3>Observer Longitude</h3>

          <p>
            Longitude converts the Greenwich reference into
            the observer's local reference.
          </p>

        </div>


        <div class="theoryExplain" id="explain_lhaAries" hidden>

          <h3>LHA Aries</h3>

          <p>
            LHA Aries indicates the orientation of the star field
            around the observer.
          </p>

          <p>
            Because Polaris circles the celestial pole,
            its correction depends on this orientation.
          </p>

        </div>


        <div class="theoryExplain" id="explain_correction" hidden>

          <h3>Correction from the Polaris Table</h3>

          <p>
            The Nautical Almanac Polaris table uses LHA Aries
            to determine the appropriate correction.
          </p>

          <p>
            Additional small terms may also depend on latitude
            and date.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical flow</h3>

          <div class="theoryTableExample">

            <div>GHA Aries</div>
            <div>From Almanac</div>

            <div>Longitude</div>
            <div>Observer position</div>

            <div>LHA Aries</div>
            <div>Calculated</div>

            <div>Polaris correction</div>
            <div>From Polaris table</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          GHA Aries

          <br><br>

          + Longitude

          <br><br>

          ↓

          <br><br>

          LHA Aries

          <br><br>

          ↓

          <br><br>

          Polaris Table

          <br><br>

          ↓

          <br><br>

          Correction

        </div>
      `
    },


    /* =====================================================
       PAGE 6 — WORKED EXAMPLE
       ===================================================== */

    {
      title: "Worked Polaris Example",

      formula: [
        { key: "ho", label: "Ho" },
        "+",
        { key: "corr", label: "Correction" },
        "=",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "The final latitude is obtained by applying the Polaris correction to the corrected altitude.",

      content: `

        <div class="theoryExplain" id="explain_ho" hidden>

          <h3>Observed Altitude</h3>

          <p>
            Corrected Polaris altitude:
            <b>41° 12.4'</b>
          </p>

        </div>


        <div class="theoryExplain" id="explain_corr" hidden>

          <h3>Polaris Correction</h3>

          <p>
            From the Polaris correction data:
            <b>+40.8'</b>
          </p>

        </div>


        <div class="theoryExplain" id="explain_latitude" hidden>

          <h3>Latitude</h3>

          <p>
            41° 12.4' + 40.8'
          </p>

          <p>
            = <b>41° 53.2' N</b>
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Full calculation</h3>

          <div class="theoryTableExample">

            <div>Polaris Ho</div>
            <div>41° 12.4'</div>

            <div>LHA Aries</div>
            <div>Example value</div>

            <div>Polaris correction</div>
            <div>+40.8'</div>

            <div>Latitude</div>
            <div>41° 53.2' N</div>

          </div>

          <div class="theoryRemember">
            Ho tells approximately where you are.<br>
            The Polaris correction refines that latitude.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Ho = 41° 12.4'

          <br><br>

          +

          <br><br>

          Polaris Corr. = 40.8'

          <br><br>

          =

          <br><br>

          Latitude = 41° 53.2' N

        </div>
      `
    },


    /* =====================================================
       PAGE 7 — FINDING POLARIS
       ===================================================== */

    {
      title: "How to Find Polaris",

      formula: [
        { key: "ursaMajor", label: "Ursa Major" },
        "→",
        { key: "pointers", label: "Pointer Stars" },
        "→",
        { key: "polaris", label: "Polaris" }
      ],

      formulaHint:
        "The two outer stars of the Big Dipper are commonly used to locate Polaris.",

      content: `

        <div class="theoryExplain" id="explain_ursaMajor" hidden>

          <h3>Ursa Major</h3>

          <p>
            First identify the Big Dipper pattern in Ursa Major.
          </p>

          <p>
            Its bowl contains two useful pointer stars.
          </p>

        </div>


        <div class="theoryExplain" id="explain_pointers" hidden>

          <h3>Pointer Stars</h3>

          <p>
            Merak and Dubhe form the outer side of the Big Dipper's bowl.
          </p>

          <p>
            Extend a line from Merak through Dubhe approximately
            five times their separation.
          </p>

        </div>


        <div class="theoryExplain" id="explain_polaris" hidden>

          <h3>Polaris</h3>

          <p>
            The relatively bright star reached by that extended line
            is Polaris.
          </p>

          <p>
            It forms the end of the handle of Ursa Minor.
          </p>

          <div class="theoryRemember">
            Merak → Dubhe → Polaris
          </div>

        </div>


        <div class="theoryBookIntro">

          <h3>Navigator's sequence</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Find Big Dipper</div>

            <div>2</div>
            <div>Identify Merak and Dubhe</div>

            <div>3</div>
            <div>Extend their line</div>

            <div>4</div>
            <div>Locate Polaris</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Merak ★

          <br>

          │

          <br>

          Dubhe ★

          <br><br>

          ↑ extend about 5×

          <br><br>

          ★ Polaris

        </div>
      `
    },


    /* =====================================================
       PAGE 8 — LIMITATIONS
       ===================================================== */

    {
      title: "Limitations of Polaris",

      formula: [
        { key: "hemisphere", label: "Northern Hemisphere" },
        "+",
        { key: "horizon", label: "Clear Horizon" },
        "+",
        { key: "visibility", label: "Visible Polaris" },
        "→",
        { key: "usable", label: "Usable Observation" }
      ],

      formulaHint:
        "Polaris is extremely useful, but only under suitable observing conditions.",

      content: `

        <div class="theoryExplain" id="explain_hemisphere" hidden>

          <h3>Northern Hemisphere</h3>

          <p>
            Polaris is useful for latitude only in the Northern Hemisphere.
          </p>

          <p>
            South of the equator it lies below the horizon.
          </p>

        </div>


        <div class="theoryExplain" id="explain_horizon" hidden>

          <h3>Clear Horizon</h3>

          <p>
            A sextant observation requires a usable sea horizon.
          </p>

          <p>
            Haze, swell, darkness and poor visibility can reduce accuracy.
          </p>

        </div>


        <div class="theoryExplain" id="explain_visibility" hidden>

          <h3>Visible Polaris</h3>

          <p>
            Polaris must be clearly identified and visible.
          </p>

          <p>
            Twilight often provides a good balance between seeing
            the star and still having a visible horizon.
          </p>

        </div>


        <div class="theoryExplain" id="explain_usable" hidden>

          <h3>Usable Observation</h3>

          <p>
            A good Polaris latitude combines correct identification,
            accurate sextant work, exact UTC and the correct Polaris correction.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Practical limitations</h3>

          <div class="theoryTableExample">

            <div>Southern Hemisphere</div>
            <div>Not available</div>

            <div>Cloud</div>
            <div>Star may be hidden</div>

            <div>No horizon</div>
            <div>Sextant altitude difficult</div>

            <div>Wrong star</div>
            <div>Latitude invalid</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Polaris visible?

          <br><br>

          +

          <br><br>

          Horizon visible?

          <br><br>

          +

          <br><br>

          Northern Hemisphere?

          <br><br>

          ↓

          <br><br>

          Latitude by Polaris

        </div>
      `
    },


    /* =====================================================
       PAGE 9 — PRACTICAL WORKFLOW
       ===================================================== */

    {
      title: "Practical Polaris Workflow",

      formula: [
        { key: "identify", label: "Identify" },
        "→",
        { key: "observe", label: "Observe" },
        "→",
        { key: "correct", label: "Correct" },
        "→",
        { key: "lha", label: "LHA Aries" },
        "→",
        { key: "latitude", label: "Latitude" }
      ],

      formulaHint:
        "The complete process is simple once the geometry is understood.",

      content: `

        <div class="theoryExplain" id="explain_identify" hidden>

          <h3>Identify Polaris</h3>

          <p>
            Use Ursa Major or another known star pattern
            to positively identify Polaris.
          </p>

        </div>


        <div class="theoryExplain" id="explain_observe" hidden>

          <h3>Observe</h3>

          <p>
            Measure the altitude of Polaris with the sextant
            and record exact UTC.
          </p>

        </div>


        <div class="theoryExplain" id="explain_correct" hidden>

          <h3>Correct Hs to Ho</h3>

          <p>
            Apply index correction, dip and refraction.
          </p>

        </div>


        <div class="theoryExplain" id="explain_lha" hidden>

          <h3>Calculate LHA Aries</h3>

          <p>
            Use GHA Aries and longitude to obtain LHA Aries.
          </p>

          <p>
            Use it to determine the Polaris correction.
          </p>

        </div>


        <div class="theoryExplain" id="explain_latitude" hidden>

          <h3>Calculate Latitude</h3>

          <p>
            Apply the Polaris correction to Ho.
          </p>

          <p>
            The result is latitude North.
          </p>

        </div>


        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Identify Polaris</div>

            <div>2</div>
            <div>Take sextant altitude Hs</div>

            <div>3</div>
            <div>Record exact UTC</div>

            <div>4</div>
            <div>Apply IE, Dip and Refraction</div>

            <div>5</div>
            <div>Obtain Ho</div>

            <div>6</div>
            <div>Obtain GHA Aries</div>

            <div>7</div>
            <div>Calculate LHA Aries</div>

            <div>8</div>
            <div>Find Polaris correction</div>

            <div>9</div>
            <div>Apply correction to Ho</div>

            <div>10</div>
            <div>Record latitude</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            Polaris almost shows latitude directly<br>
            ↓<br>
            Correct the sextant altitude<br>
            ↓<br>
            Correct for Polaris not being exactly at the pole<br>
            ↓<br>
            Latitude
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Find Polaris

          <br><br>

          ↓

          <br><br>

          Measure Hs

          <br><br>

          ↓

          <br><br>

          Correct to Ho

          <br><br>

          ↓

          <br><br>

          LHA Aries

          <br><br>

          ↓

          <br><br>

          Polaris Correction

          <br><br>

          ↓

          <br><br>

          LATITUDE

        </div>
      `
    }

  ]
};