/* Celestial Trainer - Real Constellation Shapes */

const CT_CONSTELLATIONS = {
  "Cassiopeia":{
    stars:{
      Caph:{SHA:358.0,Dec:59.1},
      Schedar:{SHA:350.0,Dec:56.5},
      Navi:{SHA:347.0,Dec:60.7},
      Ruchbah:{SHA:352.0,Dec:60.2},
      Segin:{SHA:347.6,Dec:63.7}
    },
    lines:[
      ["Caph","Schedar"],
      ["Schedar","Navi"],
      ["Navi","Ruchbah"],
      ["Ruchbah","Segin"]
    ]
  },

  "Ursa Minor":{
    stars:{
      Polaris:{SHA:319.0,Dec:89.0},
      Yildun:{SHA:175.0,Dec:86.6},
      "Epsilon UMi":{SHA:124.0,Dec:82.0},
      "Zeta UMi":{SHA:124.0,Dec:77.8},
      Kochab:{SHA:137.0,Dec:74.0},
      Pherkad:{SHA:130.0,Dec:71.8}
    },
    lines:[
      ["Polaris","Yildun"],
      ["Yildun","Epsilon UMi"],
      ["Epsilon UMi","Zeta UMi"],
      ["Zeta UMi","Kochab"],
      ["Kochab","Pherkad"]
    ]
  },

  "Cygnus":{
    stars:{
      Deneb:{SHA:50.0,Dec:45.0},
      Sadr:{SHA:60.0,Dec:40.3},
      Albireo:{SHA:69.0,Dec:27.9},
      "Gienah Cygni":{SHA:56.0,Dec:33.9},
      "Delta Cygni":{SHA:67.0,Dec:45.1}
    },
    lines:[
      ["Deneb","Sadr"],
      ["Sadr","Albireo"],
      ["Sadr","Gienah Cygni"],
      ["Sadr","Delta Cygni"]
    ]
  },

  "Lyra":{
    stars:{
      Vega:{SHA:81.0,Dec:39.0},
      Sheliak:{SHA:77.0,Dec:33.4},
      Sulafat:{SHA:76.0,Dec:32.7}
    },
    lines:[
      ["Vega","Sheliak"],
      ["Sheliak","Sulafat"],
      ["Sulafat","Vega"]
    ]
  },

  "Aquila":{
    stars:{
      Altair:{SHA:62.0,Dec:9.0},
      Tarazed:{SHA:74.0,Dec:10.6},
      Alshain:{SHA:66.0,Dec:6.4}
    },
    lines:[
      ["Altair","Tarazed"],
      ["Altair","Alshain"]
    ]
  },

  "Pegasus":{
    stars:{
      Markab:{SHA:14.0,Dec:15.0},
      Scheat:{SHA:14.0,Dec:28.1},
      Alpheratz:{SHA:358.0,Dec:29.0},
      Algenib:{SHA:3.0,Dec:15.2},
      Enif:{SHA:34.0,Dec:10.0}
    },
    lines:[
      ["Markab","Scheat"],
      ["Scheat","Alpheratz"],
      ["Alpheratz","Algenib"],
      ["Algenib","Markab"],
      ["Markab","Enif"]
    ]
  },

  "Andromeda":{
    stars:{
      Alpheratz:{SHA:358.0,Dec:29.0},
      Mirach:{SHA:343.0,Dec:35.6},
      Almach:{SHA:329.0,Dec:42.3}
    },
    lines:[
      ["Alpheratz","Mirach"],
      ["Mirach","Almach"]
    ]
  },

  "Perseus":{
    stars:{
      Mirfak:{SHA:309.0,Dec:50.0},
      Algol:{SHA:313.0,Dec:40.9},
      Atik:{SHA:303.0,Dec:32.3},
      Menkib:{SHA:296.0,Dec:35.8}
    },
    lines:[
      ["Mirfak","Algol"],
      ["Mirfak","Atik"],
      ["Atik","Menkib"]
    ]
  },

  "Taurus":{
    stars:{
      Aldebaran:{SHA:291.0,Dec:16.0},
      Elnath:{SHA:279.0,Dec:29.0},
      Alcyone:{SHA:304.0,Dec:24.1}
    },
    lines:[
      ["Aldebaran","Elnath"],
      ["Aldebaran","Alcyone"]
    ]
  },

  "Auriga":{
    stars:{
      Capella:{SHA:281.0,Dec:46.0},
      Menkalinan:{SHA:280.0,Dec:44.9},
      Elnath:{SHA:279.0,Dec:29.0}
    },
    lines:[
      ["Capella","Menkalinan"],
      ["Menkalinan","Elnath"],
      ["Elnath","Capella"]
    ]
  },

  "Orion":{
    stars:{
      Betelgeuse:{SHA:271.0,Dec:7.0},
      Bellatrix:{SHA:279.0,Dec:6.0},
      Mintaka:{SHA:276.0,Dec:-0.3},
      Alnilam:{SHA:276.0,Dec:-1.2},
      Alnitak:{SHA:275.0,Dec:-1.9},
      Rigel:{SHA:282.0,Dec:-8.0},
      Saiph:{SHA:275.0,Dec:-9.7}
    },
    lines:[
      ["Betelgeuse","Bellatrix"],
      ["Betelgeuse","Alnitak"],
      ["Bellatrix","Mintaka"],
      ["Alnitak","Alnilam"],
      ["Alnilam","Mintaka"],
      ["Alnitak","Saiph"],
      ["Mintaka","Rigel"],
      ["Saiph","Rigel"]
    ]
  },

  "Canis Major":{
    stars:{
      Sirius:{SHA:259.0,Dec:-17.0},
      Mirzam:{SHA:257.0,Dec:-17.9},
      Adhara:{SHA:256.0,Dec:-29.0},
      Wezen:{SHA:252.0,Dec:-26.4},
      Aludra:{SHA:244.0,Dec:-29.3}
    },
    lines:[
      ["Sirius","Mirzam"],
      ["Sirius","Adhara"],
      ["Adhara","Wezen"],
      ["Wezen","Aludra"]
    ]
  },

  "Ursa Major":{
    stars:{
      Dubhe:{SHA:194.0,Dec:62.0},
      Merak:{SHA:194.0,Dec:56.4},
      Phecda:{SHA:184.0,Dec:53.7},
      Megrez:{SHA:177.0,Dec:57.0},
      Alioth:{SHA:167.0,Dec:56.0},
      Mizar:{SHA:159.0,Dec:54.9},
      Alkaid:{SHA:153.0,Dec:49.0}
    },
    lines:[
      ["Dubhe","Merak"],
      ["Merak","Phecda"],
      ["Phecda","Megrez"],
      ["Megrez","Dubhe"],
      ["Megrez","Alioth"],
      ["Alioth","Mizar"],
      ["Mizar","Alkaid"]
    ]
  },

  "Scorpius":{
    stars:{
      Antares:{SHA:113.0,Dec:-26.0},
      Dschubba:{SHA:98.0,Dec:-22.6},
      Shaula:{SHA:97.0,Dec:-37.0},
      Sargas:{SHA:96.0,Dec:-42.9}
    },
    lines:[
      ["Antares","Dschubba"],
      ["Antares","Shaula"],
      ["Shaula","Sargas"]
    ]
  }
};