/* =========================================================
   CELESTIAL TRAINER — THEORY: STARS & CONSTELLATIONS
   ========================================================= */

window.THEORY_BOOK = window.THEORY_BOOK || {};

window.THEORY_BOOK.stars = {
  title: "Stars & Constellations",

  pages: [

    {
      title: "Why Navigators Use Stars",

      formula: [
        { key: "star", label: "Star" },
        "+",
        { key: "time", label: "UTC" },
        "+",
        { key: "position", label: "Position" },
        "→",
        { key: "sight", label: "Celestial Sight" }
      ],

      formulaHint:
        "A known star gives the navigator a known direction and altitude for celestial navigation.",

      content: `

        <div class="theoryExplain" id="explain_star" hidden>
          <h3>Navigation Star</h3>

          <p>
            A navigation star is a bright star whose celestial position
            is well known and suitable for practical observation.
          </p>

          <p>
            Traditional nautical almanacs list selected stars specifically
            for navigation.
          </p>
        </div>


        <div class="theoryExplain" id="explain_time" hidden>
          <h3>UTC</h3>

          <p>
            The apparent position of the stellar sky changes continuously
            because the Earth rotates.
          </p>

          <p>
            Exact UTC is therefore required for sight reduction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_position" hidden>
          <h3>Observer Position</h3>

          <p>
            Latitude and longitude determine which stars are above
            the horizon and where they appear.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sight" hidden>
          <h3>Celestial Sight</h3>

          <p>
            Once a star is positively identified, its altitude can be
            measured with the sextant and reduced in the same general
            way as other celestial bodies.
          </p>

          <div class="theoryRemember">
            <b>Main rule:</b><br>
            Identify the star first. Measure it second.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Why stars are useful</h3>

          <div class="theoryTableExample">

            <div>Brightness</div>
            <div>Many navigation stars are easy to see</div>

            <div>Known position</div>
            <div>SHA and Declination are tabulated</div>

            <div>Multiple directions</div>
            <div>Good geometry for fixes</div>

            <div>Twilight</div>
            <div>Stars and horizon may be visible together</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Known Star ★

          <br><br>

          ↓ identify

          <br><br>

          ↓ measure altitude

          <br><br>

          ↓ sight reduction

          <br><br>

          LOP

        </div>
      `
    },


    {
      title: "SHA and Declination",

      formula: [
        { key: "aries", label: "GHA Aries" },
        "+",
        { key: "sha", label: "SHA" },
        "→",
        { key: "ghaStar", label: "GHA Star" },
        "+",
        { key: "dec", label: "Declination" }
      ],

      formulaHint:
        "Stars are commonly referenced using Sidereal Hour Angle and Declination.",

      content: `

        <div class="theoryExplain" id="explain_aries" hidden>
          <h3>GHA Aries</h3>

          <p>
            GHA Aries provides the rotating reference for the stellar sky.
          </p>

          <p>
            It changes continuously with Earth's rotation.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sha" hidden>
          <h3>SHA — Sidereal Hour Angle</h3>

          <p>
            SHA is the angular distance of the star measured westward
            from the First Point of Aries.
          </p>

          <p>
            For navigation stars, SHA changes only slowly compared with
            the rapidly changing GHA Aries.
          </p>
        </div>


        <div class="theoryExplain" id="explain_ghaStar" hidden>
          <h3>GHA of the Star</h3>

          <p>
            The star's GHA is obtained by combining GHA Aries and SHA.
          </p>

          <div class="theoryRemember">
            GHA Star = GHA Aries + SHA
          </div>
        </div>


        <div class="theoryExplain" id="explain_dec" hidden>
          <h3>Declination</h3>

          <p>
            Declination gives the star's north-south position
            on the celestial sphere.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Example structure</h3>

          <div class="theoryTableExample">

            <div>GHA Aries</div>
            <div>120.0°</div>

            <div>SHA Star</div>
            <div>258.5°</div>

            <div>GHA Star</div>
            <div>018.5°</div>

            <div>Declination</div>
            <div>16.7° S</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Aries Reference

          <br><br>

          ↓ SHA

          <br><br>

          ★ Star

          <br><br>

          GHA Aries + SHA

          <br><br>

          ↓

          <br><br>

          GHA Star

        </div>
      `
    },


    {
      title: "Why Constellations Matter",

      formula: [
        { key: "stars", label: "Stars" },
        "→",
        { key: "pattern", label: "Pattern" },
        "→",
        { key: "constellation", label: "Constellation" },
        "→",
        { key: "identification", label: "Identification" }
      ],

      formulaHint:
        "Constellations are not navigation calculations; they are visual maps that help identify the correct star.",

      content: `

        <div class="theoryExplain" id="explain_stars" hidden>
          <h3>Individual Stars</h3>

          <p>
            A single bright point can be difficult to identify
            when several bright stars are visible.
          </p>
        </div>


        <div class="theoryExplain" id="explain_pattern" hidden>
          <h3>Pattern Recognition</h3>

          <p>
            Groups of stars form recognisable shapes and relationships.
          </p>

          <p>
            These patterns are much more reliable than brightness alone.
          </p>
        </div>


        <div class="theoryExplain" id="explain_constellation" hidden>
          <h3>Constellation</h3>

          <p>
            A constellation is a recognised region and star pattern
            in the sky.
          </p>

          <p>
            The connecting lines shown in training diagrams are imaginary.
          </p>
        </div>


        <div class="theoryExplain" id="explain_identification" hidden>
          <h3>Positive Identification</h3>

          <p>
            Before a star is used for navigation, the observer should
            confirm it through position, pattern and expected azimuth.
          </p>

          <div class="theoryRemember">
            Do not use a star because it merely looks bright enough.
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Pattern</div>
            <div>Orion's Belt</div>

            <div>Direction</div>
            <div>Extend downward</div>

            <div>Result</div>
            <div>Sirius</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          ★ ★ ★

          <br>

          Orion's Belt

          <br><br>

          ↘

          <br><br>

          ★ Sirius

        </div>
      `
    },


    {
      title: "Star Hopping",

      formula: [
        { key: "known", label: "Known Pattern" },
        "→",
        { key: "direction", label: "Extend / Arc" },
        "→",
        { key: "target", label: "Target Star" }
      ],

      formulaHint:
        "Star hopping uses an already recognised pattern to locate another star.",

      content: `

        <div class="theoryExplain" id="explain_known" hidden>
          <h3>Known Pattern</h3>

          <p>
            Start from a constellation or star group that you can
            identify confidently.
          </p>
        </div>


        <div class="theoryExplain" id="explain_direction" hidden>
          <h3>Extend or Arc</h3>

          <p>
            Follow a visual line, curve or triangle from the known pattern.
          </p>

          <p>
            Traditional star-finding rules are built around these relationships.
          </p>
        </div>


        <div class="theoryExplain" id="explain_target" hidden>
          <h3>Target Star</h3>

          <p>
            Confirm the target using brightness, colour, altitude and azimuth.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Classic examples</h3>

          <div class="theoryTableExample">

            <div>Orion Belt</div>
            <div>→ Sirius</div>

            <div>Big Dipper handle</div>
            <div>Arc to Arcturus</div>

            <div>Arcturus</div>
            <div>Speed to Spica</div>

            <div>Merak + Dubhe</div>
            <div>→ Polaris</div>

          </div>

          <div class="theoryRemember">
            Star hopping is a visual navigation skill,
            not just a memorisation exercise.
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          KNOWN STAR / PATTERN

          <br><br>

          ↓ follow guide

          <br><br>

          ↓

          <br><br>

          TARGET STAR

        </div>
      `
    },


    {
      title: "The Winter Sky",

      formula: [
        { key: "orion", label: "Orion" },
        "+",
        { key: "sirius", label: "Sirius" },
        "+",
        { key: "aldebaran", label: "Aldebaran" },
        "+",
        { key: "capella", label: "Capella" }
      ],

      formulaHint:
        "Orion is one of the best starting points for learning winter navigation stars.",

      content: `

        <div class="theoryExplain" id="explain_orion" hidden>
          <h3>Orion</h3>

          <p>
            Orion is easy to recognise from the three nearly aligned
            stars of Orion's Belt.
          </p>

          <p>
            Rigel and Betelgeuse are also important bright stars in the pattern.
          </p>
        </div>


        <div class="theoryExplain" id="explain_sirius" hidden>
          <h3>Sirius</h3>

          <p>
            Extend Orion's Belt in one direction to locate Sirius.
          </p>

          <p>
            Sirius is the brightest star in the night sky.
          </p>
        </div>


        <div class="theoryExplain" id="explain_aldebaran" hidden>
          <h3>Aldebaran</h3>

          <p>
            Extend Orion's Belt in the opposite direction toward Taurus
            to find Aldebaran.
          </p>
        </div>


        <div class="theoryExplain" id="explain_capella" hidden>
          <h3>Capella</h3>

          <p>
            Capella is a very bright northern star in Auriga,
            located beyond Taurus.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Winter navigation chain</h3>

          <div class="theoryTableExample">

            <div>Orion Belt</div>
            <div>Primary reference</div>

            <div>Sirius</div>
            <div>Brightest star</div>

            <div>Aldebaran</div>
            <div>Orange star in Taurus</div>

            <div>Capella</div>
            <div>Bright northern star</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Capella ★

          <br><br>

          Aldebaran ★

          <br><br>

          ★ ★ ★ Orion Belt

          <br><br>

          Sirius ★

        </div>
      `
    },


    {
      title: "The Summer Triangle",

      formula: [
        { key: "vega", label: "Vega" },
        "+",
        { key: "deneb", label: "Deneb" },
        "+",
        { key: "altair", label: "Altair" },
        "→",
        { key: "triangle", label: "Summer Triangle" }
      ],

      formulaHint:
        "Vega, Deneb and Altair form one of the easiest large star patterns in the northern summer sky.",

      content: `

        <div class="theoryExplain" id="explain_vega" hidden>
          <h3>Vega</h3>

          <p>
            Vega is a bright star in Lyra and is often the easiest
            member of the Summer Triangle to recognise.
          </p>
        </div>


        <div class="theoryExplain" id="explain_deneb" hidden>
          <h3>Deneb</h3>

          <p>
            Deneb marks part of Cygnus and forms another corner
            of the large triangle.
          </p>
        </div>


        <div class="theoryExplain" id="explain_altair" hidden>
          <h3>Altair</h3>

          <p>
            Altair lies in Aquila and forms the third corner.
          </p>
        </div>


        <div class="theoryExplain" id="explain_triangle" hidden>
          <h3>Summer Triangle</h3>

          <p>
            The large triangle is useful as a reference framework
            for finding several surrounding stars and constellations.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Three navigation stars</h3>

          <div class="theoryTableExample">

            <div>Vega</div>
            <div>Lyra</div>

            <div>Deneb</div>
            <div>Cygnus</div>

            <div>Altair</div>
            <div>Aquila</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

                ★ Vega

          <br><br>

          ★ Deneb       ★ Altair

          <br><br>

          SUMMER TRIANGLE

        </div>
      `
    },


    {
      title: "Finding Polaris",

      formula: [
        { key: "merak", label: "Merak" },
        "→",
        { key: "dubhe", label: "Dubhe" },
        "→",
        { key: "polaris", label: "Polaris" }
      ],

      formulaHint:
        "The two pointer stars in the Big Dipper provide a reliable route to Polaris.",

      content: `

        <div class="theoryExplain" id="explain_merak" hidden>
          <h3>Merak</h3>

          <p>
            Merak is one of the two outer stars of the Big Dipper's bowl.
          </p>
        </div>


        <div class="theoryExplain" id="explain_dubhe" hidden>
          <h3>Dubhe</h3>

          <p>
            Dubhe lies above Merak in the familiar Big Dipper pattern.
          </p>

          <p>
            Draw an imaginary line from Merak through Dubhe.
          </p>
        </div>


        <div class="theoryExplain" id="explain_polaris" hidden>
          <h3>Polaris</h3>

          <p>
            Extend the Merak-Dubhe line approximately five times
            their separation to reach Polaris.
          </p>

          <div class="theoryRemember">
            Merak → Dubhe → Polaris
          </div>
        </div>


        <div class="theoryBookIntro">

          <h3>Why this matters</h3>

          <p>
            Polaris is important not only for identification
            of north, but also for latitude observations.
          </p>

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

          ↑ about 5×

          <br><br>

          Polaris ★

        </div>
      `
    },


    {
      title: "Southern Navigation Stars",

      formula: [
        { key: "canopus", label: "Canopus" },
        "+",
        { key: "crux", label: "Crux" },
        "+",
        { key: "centaurus", label: "Centaurus" },
        "→",
        { key: "south", label: "Southern Sky" }
      ],

      formulaHint:
        "In southern and tropical latitudes, bright stars and the Southern Cross become important reference patterns.",

      content: `

        <div class="theoryExplain" id="explain_canopus" hidden>
          <h3>Canopus</h3>

          <p>
            Canopus is one of the brightest stars in the sky
            and a very useful southern navigation star.
          </p>
        </div>


        <div class="theoryExplain" id="explain_crux" hidden>
          <h3>Crux</h3>

          <p>
            The Southern Cross is one of the most recognisable
            star patterns in the southern sky.
          </p>

          <p>
            Acrux and Gacrux are navigation stars associated with Crux.
          </p>
        </div>


        <div class="theoryExplain" id="explain_centaurus" hidden>
          <h3>Centaurus</h3>

          <p>
            Rigil Kentaurus and Hadar are bright stars near Crux
            and are useful for southern-sky identification.
          </p>
        </div>


        <div class="theoryExplain" id="explain_south" hidden>
          <h3>Southern Sky Orientation</h3>

          <p>
            Unlike the northern sky, there is no bright star
            sitting close to the South Celestial Pole.
          </p>

          <p>
            Constellation patterns are therefore especially important.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Useful southern references</h3>

          <div class="theoryTableExample">

            <div>Canopus</div>
            <div>Very bright reference star</div>

            <div>Crux</div>
            <div>Southern Cross</div>

            <div>Rigil Kentaurus</div>
            <div>Centaurus</div>

            <div>Hadar</div>
            <div>Centaurus</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

             Gacrux ★

          <br><br>

          ★       ★

          <br><br>

             Acrux ★

          <br><br>

          CRUX

        </div>
      `
    },


    {
      title: "Choosing Stars for a Fix",

      formula: [
        { key: "visible", label: "Visible" },
        "+",
        { key: "identified", label: "Identified" },
        "+",
        { key: "altitude", label: "Good Altitude" },
        "+",
        { key: "azimuth", label: "Azimuth Spread" },
        "→",
        { key: "selection", label: "Good Selection" }
      ],

      formulaHint:
        "The best star is not automatically the brightest star.",

      content: `

        <div class="theoryExplain" id="explain_visible" hidden>
          <h3>Visible</h3>

          <p>
            The star must be above the horizon and visible through
            the actual weather and twilight conditions.
          </p>
        </div>


        <div class="theoryExplain" id="explain_identified" hidden>
          <h3>Positively Identified</h3>

          <p>
            Confidence in star identification is essential.
          </p>

          <p>
            A precise sextant sight of the wrong star is useless.
          </p>
        </div>


        <div class="theoryExplain" id="explain_altitude" hidden>
          <h3>Good Altitude</h3>

          <p>
            Very low stars are more affected by refraction,
            haze and horizon uncertainty.
          </p>
        </div>


        <div class="theoryExplain" id="explain_azimuth" hidden>
          <h3>Azimuth Spread</h3>

          <p>
            For a multi-star fix, stars distributed around the horizon
            give better geometry than stars clustered in one direction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_selection" hidden>
          <h3>Good Star Selection</h3>

          <p>
            A good selection balances visibility, identification,
            altitude and geometry.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Example</h3>

          <div class="theoryTableExample">

            <div>Star 1</div>
            <div>Zn 030°</div>

            <div>Star 2</div>
            <div>Zn 155°</div>

            <div>Star 3</div>
            <div>Zn 280°</div>

            <div>Result</div>
            <div>Good azimuth spread</div>

          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

                 ★

          <br><br>

          ★      ● Observer      ★

          <br><br>

          Good spread around horizon

        </div>
      `
    },


    {
      title: "Practical Star Identification Workflow",

      formula: [
        { key: "predict", label: "Predict" },
        "→",
        { key: "pattern", label: "Find Pattern" },
        "→",
        { key: "star", label: "Confirm Star" },
        "→",
        { key: "observe", label: "Observe" }
      ],

      formulaHint:
        "Use calculation and visual recognition together rather than relying on either one alone.",

      content: `

        <div class="theoryExplain" id="explain_predict" hidden>
          <h3>Predict</h3>

          <p>
            Use Sky View, almanac data or star planning to estimate
            the expected altitude and azimuth.
          </p>
        </div>


        <div class="theoryExplain" id="explain_pattern" hidden>
          <h3>Find the Pattern</h3>

          <p>
            Identify a familiar constellation or star group in
            the expected region of the sky.
          </p>
        </div>


        <div class="theoryExplain" id="explain_star" hidden>
          <h3>Confirm the Star</h3>

          <p>
            Check the star against surrounding stars, brightness,
            colour and expected direction.
          </p>
        </div>


        <div class="theoryExplain" id="explain_observe" hidden>
          <h3>Observe</h3>

          <p>
            Once identification is secure, take the sextant sight
            and record the UTC.
          </p>
        </div>


        <div class="theoryBookIntro">

          <h3>Bridge workflow</h3>

          <div class="theoryTableExample">

            <div>1</div>
            <div>Check expected visible stars</div>

            <div>2</div>
            <div>Check approximate Hc and Zn</div>

            <div>3</div>
            <div>Find a known constellation</div>

            <div>4</div>
            <div>Use star hopping if needed</div>

            <div>5</div>
            <div>Confirm the target star</div>

            <div>6</div>
            <div>Take sextant altitude</div>

            <div>7</div>
            <div>Record exact UTC</div>

            <div>8</div>
            <div>Reduce the sight</div>

          </div>

          <div class="theoryRemember">
            <b>Whole idea:</b><br><br>
            Calculate where to look<br>
            ↓<br>
            Recognise the pattern<br>
            ↓<br>
            Confirm the star<br>
            ↓<br>
            Take the sight
          </div>

        </div>
      `,

      diagram: `
        <div class="theoryDiagramPlaceholder">

          Expected Hc + Zn

          <br><br>

          ↓

          <br><br>

          Find constellation

          <br><br>

          ↓

          <br><br>

          Identify star

          <br><br>

          ↓

          <br><br>

          SEXTANT SIGHT

        </div>
      `
    }

  ]
};