/* Celestial Trainer - Sky View Constellations */

const CT_CONSTELLATIONS = {
  "Ursa Major": [
    ["Dubhe","Merak"],
    ["Merak","Phecda"],
    ["Phecda","Megrez"],
    ["Megrez","Dubhe"],
    ["Megrez","Alioth"],
    ["Alioth","Mizar"],
    ["Mizar","Alkaid"]
  ],

  "Ursa Minor": [
    ["Polaris","Kochab"],
    ["Kochab","Pherkad"]
  ],

  "Cassiopeia": [
    ["Caph","Schedar"],
    ["Schedar","Navi"],
    ["Navi","Ruchbah"],
    ["Ruchbah","Segin"]
  ],

  "Cygnus": [
    ["Deneb","Sadr"],
    ["Sadr","Albireo"],
    ["Sadr","Gienah Cygni"],
    ["Sadr","Delta Cygni"]
  ],

  "Lyra": [
    ["Vega","Sheliak"],
    ["Sheliak","Sulafat"],
    ["Sulafat","Vega"]
  ],

  "Aquila": [
    ["Altair","Tarazed"],
    ["Altair","Alshain"]
  ],

  "Orion": [
    ["Betelgeuse","Bellatrix"],
    ["Betelgeuse","Alnitak"],
    ["Bellatrix","Mintaka"],
    ["Alnitak","Alnilam"],
    ["Alnilam","Mintaka"],
    ["Alnitak","Saiph"],
    ["Mintaka","Rigel"],
    ["Saiph","Rigel"]
  ],

  "Taurus": [
    ["Aldebaran","Elnath"],
    ["Aldebaran","Alcyone"]
  ],

  "Gemini": [
    ["Castor","Pollux"],
    ["Pollux","Wasat"],
    ["Wasat","Alhena"]
  ],

  "Canis Major": [
    ["Sirius","Mirzam"],
    ["Sirius","Adhara"],
    ["Adhara","Wezen"],
    ["Wezen","Aludra"]
  ],

  "Leo": [
    ["Regulus","Algieba"],
    ["Algieba","Zosma"],
    ["Zosma","Denebola"],
    ["Regulus","Chertan"]
  ],

  "Boötes": [
    ["Arcturus","Muphrid"],
    ["Arcturus","Izar"],
    ["Izar","Nekkar"],
    ["Izar","Seginus"]
  ],

  "Virgo": [
    ["Spica","Porrima"],
    ["Porrima","Vindemiatrix"],
    ["Porrima","Zavijava"]
  ],

  "Scorpius": [
    ["Antares","Dschubba"],
    ["Antares","Shaula"],
    ["Shaula","Sargas"]
  ],

  "Sagittarius": [
    ["Kaus Australis","Kaus Media"],
    ["Kaus Media","Kaus Borealis"],
    ["Kaus Australis","Nunki"]
  ],

  "Pegasus": [
    ["Markab","Scheat"],
    ["Scheat","Alpheratz"],
    ["Alpheratz","Algenib"],
    ["Algenib","Markab"],
    ["Markab","Enif"]
  ],

  "Andromeda": [
    ["Alpheratz","Mirach"],
    ["Mirach","Almach"]
  ],

  "Perseus": [
    ["Mirfak","Algol"],
    ["Mirfak","Atik"],
    ["Atik","Menkib"]
  ],

  "Crux": [
    ["Acrux","Gacrux"],
    ["Mimosa","Imai"]
  ],

  "Centaurus": [
    ["Rigil Kentaurus","Hadar"],
    ["Hadar","Menkent"]
  ],

  "Carina": [
    ["Canopus","Miaplacidus"],
    ["Miaplacidus","Avior"],
    ["Avior","Aspidiske"]
  ]
};

const CT_CONSTELLATION_STARS = {
  Merak:{SHA:194.0,Dec:56.4},
  Phecda:{SHA:184.0,Dec:53.7},
  Megrez:{SHA:177.0,Dec:57.0},
  Mizar:{SHA:159.0,Dec:54.9},
  Pherkad:{SHA:130.0,Dec:71.8},

  Caph:{SHA:358.0,Dec:59.1},
  Navi:{SHA:347.0,Dec:60.7},
  Ruchbah:{SHA:352.0,Dec:60.2},
  Segin:{SHA:347.6,Dec:63.7},

  Sadr:{SHA:60.0,Dec:40.3},
  Albireo:{SHA:69.0,Dec:27.9},
  "Gienah Cygni":{SHA:56.0,Dec:33.9},
  "Delta Cygni":{SHA:67.0,Dec:45.1},

  Sheliak:{SHA:77.0,Dec:33.4},
  Sulafat:{SHA:76.0,Dec:32.7},

  Tarazed:{SHA:74.0,Dec:10.6},
  Alshain:{SHA:66.0,Dec:6.4},

  Mintaka:{SHA:276.0,Dec:-0.3},
  Alnitak:{SHA:275.0,Dec:-1.9},
  Saiph:{SHA:275.0,Dec:-9.7},

  Alcyone:{SHA:304.0,Dec:24.1},

  Wasat:{SHA:247.0,Dec:21.5},
  Alhena:{SHA:260.0,Dec:16.4},

  Mirzam:{SHA:257.0,Dec:-17.9},
  Wezen:{SHA:252.0,Dec:-26.4},
  Aludra:{SHA:244.0,Dec:-29.3},

  Algieba:{SHA:207.0,Dec:19.8},
  Zosma:{SHA:191.0,Dec:20.5},
  Chertan:{SHA:185.0,Dec:15.4},

  Muphrid:{SHA:145.0,Dec:18.0},
  Izar:{SHA:139.0,Dec:27.1},
  Nekkar:{SHA:119.0,Dec:40.4},
  Seginus:{SHA:128.0,Dec:38.3},

  Porrima:{SHA:170.0,Dec:-1.4},
  Vindemiatrix:{SHA:164.0,Dec:10.9},
  Zavijava:{SHA:171.0,Dec:1.8},

  Dschubba:{SHA:98.0,Dec:-22.6},
  Sargas:{SHA:96.0,Dec:-42.9},

  "Kaus Media":{SHA:84.0,Dec:-29.8},
  "Kaus Borealis":{SHA:86.0,Dec:-25.4},

  Scheat:{SHA:14.0,Dec:28.1},
  Algenib:{SHA:3.0,Dec:15.2},

  Mirach:{SHA:343.0,Dec:35.6},
  Almach:{SHA:329.0,Dec:42.3},

  Algol:{SHA:313.0,Dec:40.9},
  Atik:{SHA:303.0,Dec:32.3},
  Menkib:{SHA:296.0,Dec:35.8},

  Mimosa:{SHA:170.0,Dec:-59.7},
  Imai:{SHA:145.0,Dec:-59.7},

  Aspidiske:{SHA:223.0,Dec:-59.5}
};