 const STAR_CATALOG={
Alpheratz:{SHA:358,Dec:29,Mag:2.1,Con:"Andromeda"},
Ankaa:{SHA:354,Dec:-42,Mag:2.4,Con:"Phoenix"},
Schedar:{SHA:350,Dec:56,Mag:2.2,Con:"Cassiopeia"},
Diphda:{SHA:349,Dec:-18,Mag:2.0,Con:"Cetus"},
Achernar:{SHA:336,Dec:-57,Mag:0.5,Con:"Eridanus"},
Hamal:{SHA:328,Dec:23,Mag:2.0,Con:"Aries"},
Acamar:{SHA:316,Dec:-40,Mag:3.2,Con:"Eridanus"},
Menkar:{SHA:315,Dec:4,Mag:2.5,Con:"Cetus"},
Mirfak:{SHA:309,Dec:50,Mag:1.8,Con:"Perseus"},
Aldebaran:{SHA:291,Dec:16,Mag:0.9,Con:"Taurus"},
Rigel:{SHA:282,Dec:-8,Mag:0.1,Con:"Orion"},
Capella:{SHA:281,Dec:46,Mag:0.1,Con:"Auriga"},
Bellatrix:{SHA:279,Dec:6,Mag:1.6,Con:"Orion"},
Elnath:{SHA:279,Dec:29,Mag:1.7,Con:"Taurus"},
Alnilam:{SHA:276,Dec:-1,Mag:1.7,Con:"Orion"},
Betelgeuse:{SHA:271,Dec:7,Mag:0.5,Con:"Orion"},
Canopus:{SHA:264,Dec:-53,Mag:-0.7,Con:"Carina"},
Sirius:{SHA:259,Dec:-17,Mag:-1.5,Con:"Canis Major"},
Adhara:{SHA:256,Dec:-29,Mag:1.5,Con:"Canis Major"},
Procyon:{SHA:245,Dec:5,Mag:0.4,Con:"Canis Minor"},
Pollux:{SHA:244,Dec:28,Mag:1.1,Con:"Gemini"},
Avior:{SHA:234,Dec:-59,Mag:1.9,Con:"Carina"},
Suhail:{SHA:223,Dec:-43,Mag:2.2,Con:"Vela"},
Miaplacidus:{SHA:222,Dec:-70,Mag:1.7,Con:"Carina"},
Alphard:{SHA:218,Dec:-8,Mag:2.0,Con:"Hydra"},
Regulus:{SHA:208,Dec:12,Mag:1.4,Con:"Leo"},
Dubhe:{SHA:194,Dec:62,Mag:1.8,Con:"Ursa Major"},
Denebola:{SHA:183,Dec:15,Mag:2.1,Con:"Leo"},
Gienah:{SHA:176,Dec:-17,Mag:2.6,Con:"Corvus"},
Acrux:{SHA:174,Dec:-63,Mag:0.8,Con:"Crux"},
Gacrux:{SHA:172,Dec:-57,Mag:1.6,Con:"Crux"},
Alioth:{SHA:167,Dec:56,Mag:1.8,Con:"Ursa Major"},
Spica:{SHA:159,Dec:-11,Mag:1.0,Con:"Virgo"},
Alkaid:{SHA:153,Dec:49,Mag:1.9,Con:"Ursa Major"},
Hadar:{SHA:149,Dec:-60,Mag:0.6,Con:"Centaurus"},
Menkent:{SHA:149,Dec:-36,Mag:2.1,Con:"Centaurus"},
Arcturus:{SHA:146,Dec:19,Mag:-0.1,Con:"Boötes"},
"Rigil Kentaurus":{SHA:140,Dec:-61,Mag:-0.3,Con:"Centaurus"},
Zubenelgenubi:{SHA:138,Dec:-16,Mag:2.8,Con:"Libra"},
Kochab:{SHA:137,Dec:74,Mag:2.1,Con:"Ursa Minor"},
Alphecca:{SHA:126,Dec:27,Mag:2.2,Con:"Corona Borealis"},
Antares:{SHA:113,Dec:-26,Mag:1.1,Con:"Scorpius"},
Atria:{SHA:108,Dec:-69,Mag:1.9,Con:"Triangulum Australe"},
Sabik:{SHA:102,Dec:-16,Mag:2.4,Con:"Ophiuchus"},
Shaula:{SHA:97,Dec:-37,Mag:1.6,Con:"Scorpius"},
Rasalhague:{SHA:96,Dec:13,Mag:2.1,Con:"Ophiuchus"},
Eltanin:{SHA:91,Dec:51,Mag:2.2,Con:"Draco"},
"Kaus Australis":{SHA:84,Dec:-34,Mag:1.8,Con:"Sagittarius"},
Vega:{SHA:81,Dec:39,Mag:0.0,Con:"Lyra"},
Nunki:{SHA:76,Dec:-26,Mag:2.0,Con:"Sagittarius"},
Altair:{SHA:62,Dec:9,Mag:0.8,Con:"Aquila"},
Peacock:{SHA:54,Dec:-57,Mag:1.9,Con:"Pavo"},
Deneb:{SHA:50,Dec:45,Mag:1.3,Con:"Cygnus"},
Enif:{SHA:34,Dec:10,Mag:2.4,Con:"Pegasus"},
Alnair:{SHA:28,Dec:-47,Mag:1.7,Con:"Grus"},
Fomalhaut:{SHA:16,Dec:-30,Mag:1.2,Con:"Piscis Austrinus"},
Markab:{SHA:14,Dec:15,Mag:2.5,Con:"Pegasus"},
Polaris:{SHA:319,Dec:89,Mag:2.0,Con:"Ursa Minor"}
};
const SKY_CONSTELLATIONS = {
  "Ursa Major":[
    ["Dubhe","Merak"],
    ["Merak","Phecda"],
    ["Phecda","Megrez"],
    ["Megrez","Dubhe"],
    ["Megrez","Alioth"],
    ["Alioth","Mizar"],
    ["Mizar","Alkaid"]
  ],

  "Ursa Minor":[
    ["Polaris","Yildun"],
    ["Yildun","Epsilon UMi"],
    ["Epsilon UMi","Zeta UMi"],
    ["Zeta UMi","Kochab"],
    ["Kochab","Pherkad"],
    ["Pherkad","Eta UMi"],
    ["Eta UMi","Zeta UMi"]
  ],

  "Cassiopeia":[
    ["Caph","Schedar"],
    ["Schedar","Navi"],
    ["Navi","Ruchbah"],
    ["Ruchbah","Segin"]
  ],

  "Cygnus":[
    ["Deneb","Sadr"],
    ["Sadr","Albireo"],
    ["Sadr","Gienah Cygni"],
    ["Sadr","Delta Cygni"]
  ],

  "Lyra":[
    ["Vega","Sheliak"],
    ["Sheliak","Sulafat"],
    ["Sulafat","Vega"]
  ],

  "Aquila":[
    ["Altair","Tarazed"],
    ["Altair","Alshain"]
  ],

  "Orion":[
    ["Betelgeuse","Bellatrix"],
    ["Betelgeuse","Alnitak"],
    ["Bellatrix","Mintaka"],
    ["Alnitak","Alnilam"],
    ["Alnilam","Mintaka"],
    ["Alnitak","Saiph"],
    ["Mintaka","Rigel"],
    ["Saiph","Rigel"]
  ],

  "Taurus":[
    ["Aldebaran","Elnath"],
    ["Aldebaran","Alcyone"]
  ],

  "Gemini":[
    ["Castor","Pollux"],
    ["Pollux","Wasat"],
    ["Wasat","Alhena"]
  ],

  "Canis Major":[
    ["Sirius","Mirzam"],
    ["Sirius","Adhara"],
    ["Adhara","Wezen"],
    ["Wezen","Aludra"]
  ],

  "Canis Minor":[
    ["Procyon","Gomeisa"]
  ],

  "Leo":[
    ["Regulus","Algieba"],
    ["Algieba","Zosma"],
    ["Zosma","Denebola"],
    ["Regulus","Chertan"],
    ["Chertan","Denebola"]
  ],

  "Boötes":[
    ["Arcturus","Muphrid"],
    ["Arcturus","Izar"],
    ["Izar","Nekkar"],
    ["Izar","Seginus"]
  ],

  "Virgo":[
    ["Spica","Porrima"],
    ["Porrima","Vindemiatrix"],
    ["Porrima","Zavijava"]
  ],

  "Scorpius":[
    ["Antares","Dschubba"],
    ["Antares","Shaula"],
    ["Shaula","Sargas"]
  ],

  "Sagittarius":[
    ["Kaus Australis","Kaus Media"],
    ["Kaus Media","Kaus Borealis"],
    ["Kaus Australis","Nunki"]
  ],

  "Pegasus":[
    ["Markab","Scheat"],
    ["Scheat","Alpheratz"],
    ["Alpheratz","Algenib"],
    ["Algenib","Markab"],
    ["Markab","Enif"]
  ],

  "Andromeda":[
    ["Alpheratz","Mirach"],
    ["Mirach","Almach"]
  ],

  "Perseus":[
    ["Mirfak","Algol"],
    ["Mirfak","Atik"],
    ["Atik","Menkib"]
  ],

  "Crux":[
    ["Acrux","Gacrux"],
    ["Mimosa","Imai"]
  ],

  "Centaurus":[
    ["Rigil Kentaurus","Hadar"],
    ["Hadar","Menkent"]
  ],

  "Carina":[
    ["Canopus","Miaplacidus"],
    ["Miaplacidus","Avior"],
    ["Avior","Aspidiske"]
  ]
};