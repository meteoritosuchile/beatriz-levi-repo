const SAMPLES = [
  {c:"Exp19-01",n:"Catalina 1",lc:5.285,pW:2,ir:"sí",t:"H",shk:"S4",loc:"Catalina",nota:"H5 S4; PDFs, undulatory extinction, maskelynite, ringwoodite, fizzed troilite"},
  {c:"Exp19-03",n:"Catalina 3",lc:4.581,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; preservar"},
  {c:"Exp19-04",n:"Catalina 4",lc:4.740,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; par con 32"},
  {c:"Exp19-05",n:"Catalina 5",lc:4.654,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; Caída 2"},
  {c:"Exp19-06",n:"Catalina 6",lc:4.837,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; f2 a SD"},
  {c:"Exp19-07",n:"Catalina 7",lc:4.991,pW:null,eW:1,ir:"sí",t:"H",loc:"Catalina",nota:"KLY5 H; no petrography"},
  {c:"Exp19-08",n:"Catalina 8",lc:4.686,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-09",n:"Catalina 9",lc:4.882,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L→H?; borde H"},
  {c:"Exp19-10",n:"Catalina10",lc:4.652,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR listo"},
    {c:"Exp19-11",n:"Catalina11",lc:4.971,pW:1,ir:"sí",t:"H",shk:"S6",loc:"Catalina",nota:"H6 S6; ringwoodite in olivine, mosaicism S5–S6; LL (Parra 2023, field χ=4.29)"},
   {c:"Exp19-12",n:"Catalina12",lc:4.851,pW:null,eW:0,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-13",n:"Catalina13",lc:5.166,pW:null,eW:1,ir:"sí",t:"H",loc:"Catalina",nota:"H; IR: diferente a todos"},
   {c:"Exp19-14",n:"Catalina14",lc:5.348,pW:2,ir:"sí",t:"H",loc:"Catalina",shk:"S1",nota:"H3.8 S1 W2; cóndrulos bien definidos, metales pequeños en cóndrulos, matriz oscura"},
   {c:"Exp19-15",n:"Catalina15",lc:null,pW:2,ir:"no",t:"L",loc:"Catalina",shk:"S5",nota:"L4 S5; cóndrulos bien definidos, troilita fizzed, melt veins, dominios Ni; fracturas planares (Parra)"},
  {c:"Exp19-17",n:"Catalina17",lc:4.817,pW:null,eW:1,ir:"no",t:"L",loc:"Catalina",nota:"L; Caída 1"},
   {c:"Exp19-18",n:"Catalina18",lc:null,pW:3,ir:"sí",t:"LL",loc:"Catalina",shk:"S4",nota:"LL5 S4 W3; shock veins, PDFs, glassy sectors; planar fractures (Parra)"},
  {c:"Exp19-19",n:"Catalina19",lc:4.694,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 12/08"},
   {c:"Exp19-20",n:"Catalina20",lc:null,pW:4,ir:"no",t:"LL",shk:"S5",loc:"Catalina",nota:"LL6 W4 S5; kamacita ~2%, troilita ~1%, opacos ~7%, PDFs, plessita, shock veins, alteración silicatos"},
   {c:"Exp19-21",n:"Catalina21",lc:5.118,pW:3,ir:"sí",t:"H",shk:"S4",loc:"Catalina",nota:"H4 S4 W3; shock veins, troilita en contacto con kamacita"},
  {c:"Exp19-22",n:"Catalina22",lc:4.521,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 08"},
  {c:"Exp19-23",n:"Catalina23",lc:4.505,pW:null,eW:0,ir:"no",t:"LL",loc:"Catalina",nota:"LL; χ diagnóstico"},
  {c:"Exp19-24",n:"Catalina24",lc:4.589,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR: parece 04 y 08"},
  {c:"Exp19-25",n:"Catalina25",lc:5.252,pW:null,eW:0,ir:"no",t:"H",loc:"Catalina",nota:"H; χ diagnóstico"},
  {c:"Exp19-26",n:"Catalina26",lc:4.655,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 10"},
    {c:"Exp19-27",n:"Catalina27",lc:null,pW:2,ir:"no",t:"L",shk:"S4",loc:"Catalina",nota:"L5 S4 W2; kamacita ~7%, troilita ~3% (fizzed), shock veins; fracturas planares (Parra)"},
  {c:"Exp19-29",n:"Catalina29",lc:4.959,pW:null,eW:0,ir:"no",t:"L",loc:"Catalina",nota:"L; parte Caída 1"},
  {c:"Exp19-30",n:"Catalina30",lc:5.274,pW:3,ir:"sí",t:"H",shk:"S6",loc:"Catalina",nota:"H6 S6; ringwoodite, maskelynite, mosaicism, PDFs"},
  {c:"Exp19-31",n:"Catalina31",lc:4.201,pW:null,eW:2,ir:"sí",t:"??",loc:"Catalina",nota:"sub-LL; posible CC"},
  {c:"Exp19-32",n:"Catalina32",lc:4.762,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR: parece 04"},
  {c:"Exp19-33",n:"Catalina33",lc:4.834,pW:null,eW:1,ir:"no",t:"L",loc:"Catalina",nota:"L; pareada con 06"},
  {c:"Exp19-34",n:"Catalina34",lc:4.728,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR: parece 10"},
  {c:"Exp19-40",n:"Médano 5",lc:5.112,pW:null,eW:0,ir:"disp",t:"H",loc:"Médano",nota:"H"},
   {c:"Exp19-41",n:"Médano 6",lc:5.117,pW:2,ir:"sí",t:"H",shk:"S3",loc:"Médano",nota:"H4 S3 W2; limonita, fracturas irregulares, ext. ondulosa en olivino"},
   {c:"Exp19-42",n:"Médano 7",lc:5.091,pW:2,ir:"sí",t:"H",shk:"S4",loc:"Médano",nota:"H4 S4 W2; troilita+kamacita preservadas, oxidación ≤20%, mosaiquismo local, limonita"},
  {c:"Exp19-43",n:"Médano 8",lc:4.965,pW:null,eW:0,ir:"sí",t:"L",loc:"Médano",nota:"L; par con 56"},
  {c:"Exp19-44",n:"Médano 9",lc:4.640,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; IR único"},
  {c:"Exp19-45",n:"Médano10",lc:4.611,pW:null,eW:0,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-46",n:"Médano11",lc:4.336,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-47",n:"Médano12",lc:5.168,pW:null,eW:1,ir:"sí",t:"H",loc:"Médano",nota:"H"},
  {c:"Exp19-48",n:"Médano13",lc:4.550,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; IR: parece 44"},
   {c:"Exp19-49",n:"Médano14",lc:4.631,pW:5,ir:"sí",t:"H",shk:"S3",loc:"Médano",nota:"H5 S3 W5; kamacita ~1%, troilita ~1%, venas choque con opacos, limonita"},
  {c:"Exp19-50",n:"Médano15",lc:4.750,pW:null,eW:2,ir:"sí",t:"L",loc:"Médano",nota:"L"},
  {c:"Exp19-51",n:"Médano16",lc:4.464,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL"},
  {c:"Exp19-52",n:"Médano17",lc:4.443,pW:null,eW:1,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
   {c:"Exp19-53",n:"Médano18",lc:4.924,pW:2,ir:"sí",t:"H",shk:"S4",loc:"Médano",nota:"H4 S4 W2; fracturamiento intenso, venas choque, kamacita colindante troilita"},
  {c:"Exp19-54",n:"Médano19",lc:4.294,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-56",n:"Médano21",lc:4.966,pW:null,eW:0,ir:"sí",t:"L",loc:"Médano",nota:"L; par con 43"},
  {c:"Exp19-58",n:"San Juan 1",lc:null,pW:null,ir:"no",t:"??",loc:"San Juan",nota:"?"},
  {c:"Exp19-59",n:"V1",lc:null,pW:null,ir:"sí",t:"??",loc:"Los Vientos",nota:"?"},
  {c:"JG124",n:"JG124",lc:null,pW:1,ir:"no",t:"H",loc:"Antofagasta",nota:"H5 W1; Luna (2022)"},
  {c:"JG143",n:"JG143",lc:null,pW:1,ir:"no",t:"H",loc:"Antofagasta",nota:"H5 W1; Amengual (2019)"},
  {c:"JG151",n:"JG151",lc:null,pW:2,ir:"no",t:"L",loc:"Antofagasta",nota:"L6 W2; Amengual (2019)"},
  {c:"MV023",n:"MV023",lc:null,pW:3,ir:"no",t:"H",loc:"Antofagasta",nota:"H6 W3; Amengual (2019)"},
  {c:"MV025",n:"MV025",lc:null,pW:2,ir:"no",t:"H",loc:"Antofagasta",nota:"H3 W2; Luna (2022)"},
  {c:"MV088",n:"MV088",lc:null,pW:3,ir:"no",t:"H",loc:"Antofagasta",nota:"H6 W3; Luna (2022)"},
  {c:"DM053",n:"DM053",lc:null,pW:2,ir:"no",t:"H",loc:"Antofagasta",nota:"H6 W2; Amengual (2019)"},
  {c:"DM053-A2",n:"DM053-A2",lc:null,pW:3,ir:"no",t:"H",loc:"Antofagasta",nota:"H6 W3; Amengual (2019); par con DM053 A1"},
  {c:"DM055-A2",n:"DM055-A2",lc:null,pW:4,ir:"no",t:"L",loc:"Antofagasta",nota:"L6 W4; Amengual (2019)"},
  {c:"Catalina 008",n:"Catalina 008",lc:4.05,pW:2,ir:"no",t:"C",loc:"Catalina",nota:"CO3; CAI-rich, fluid inclusions in olivine, PAH; Aravena (2019)"},
  {c:"El Médano 216",n:"El Médano 216",lc:4.49,pW:1,ir:"no",t:"C",loc:"Médano",nota:"CO3; paired with RM 567/568/569; Aravena (2019)"},
  {c:"Los Vientos 123",n:"Los Vientos 123",lc:4.74,pW:2,ir:"no",t:"C",loc:"Los Vientos",nota:"CO3.1; pristine; magnetite (aqueous alteration); Aravena (2019)"},
  {c:"RM 567",n:"RM 567",lc:4.49,pW:3,ir:"no",t:"C",loc:"Médano",shk:"S1",nota:"CO3; pair of El Médano 216; Aravena (2019)"},
  {c:"RM 568",n:"RM 568",lc:4.44,pW:1,ir:"no",t:"C",loc:"Médano",shk:"S1-2",nota:"CO3; pair of El Médano 216; Aravena (2019)"},
  {c:"RM 569",n:"RM 569",lc:4.45,pW:2,ir:"no",t:"C",loc:"Médano",shk:"S1-2",nota:"CO3; pair of El Médano 216; Aravena (2019)"},
  ];
const FIELD_DATA = {
  "Catalina 1":[79.13,79.62],"Catalina 2":[14.04,14.05],"Catalina 3":[5.809,5.807],
  "Catalina 4":[19.04,19.01],"Catalina 5":[17.86,17.85],"Catalina 6 f1":[10.81,10.8],
  "Catalina 6 f2":[12.97,13.66,14.87,12.17],"Catalina 6 f3":[5.257,5.353],
  "Catalina 7":[],"Catalina 8":[],"Catalina 9":[65.02,65.08],
  "Catalina 10":[5.782,5.845],"Catalina 11":[115,115],"Catalina 12":[20.14,20.15],
  "Catalina 13":[33.55,33.56],"Catalina 14":[],"Catalina 15":[15.34,15.37],
  "Catalina 16":[15.18,15.2],"Catalina 17":[],"Catalina 18":[3.434,3.428],
  "Catalina 19":[],"Catalina 20":[],"Catalina 21":[62.32,72.92,70.79],
  "Catalina 22":[6.027,5.769,5.758],"Catalina 23":[3.209,3.206],
  "Catalina 24 f3":[4.374,4.356],"Catalina 24 f2":[6.293,6.263],"Catalina 24 f1":[12.19,12.2],
  "Catalina 25":[29.85,31.89,30.05],"Catalina 26":[7.188,7.11],"Catalina 27":[],
  "Catalina 28":[22.12,22.12],"Catalina 29":[9.644,9.638],"Catalina 30":[],
  "Catalina 31":[23.21,22.95],"Catalina 32":[11.14,11.12],"Catalina 33":[9.327,9.412],
  "Catalina 34 f1":[2.768,2.737],"Catalina 34 f2":[3.629,3.588],
  "Médano 1":[15.19,15.03],"Médano 2 f2":[],"Médano 3":[10.79,10.78],"Médano 4":[],
  "Médano 5":[],"Médano 6":[],"Médano 7":[],"Médano 8":[],"Médano 9":[101.9,101.9],
  "Médano 10 F3":[7.794,7.792],"Médano 11 f1":[40.97,41.02],"Médano 11 f2":[35.53,35.55],
  "Médano 12 f3":[27.92,27.84],"Médano 13":[12.1,12.12],"Médano 14 f1":[58.28,58.31],
  "Médano 14 f2":[27.07,27.15],"Médano 15":[97.75,97.77],"Médano 16":[94.74,94.49],
  "Médano 17":[],"Médano 18":[71.45,70.65],"Médano 19":[],"Médano 20":[],
  "Médano 21 f2":[92.22,92.26],"Médano 21 f3":[27.75,27.79],"Médano 21 f4":[4.758,4.755],
  "Mutante 1":[46.58,46.66]
};
const PAIR_GROUPS = [
  {locality:"Médano",color:"#1a2a3a",falls:[
    {name:"Cluster 1",type:"L",count:2,range:"4.631–4.640",delta:"0.009",tc:"#e67e22",
     samples:["Exp19-49","Exp19-44"]},
    {name:"Cluster 2",type:"H",count:3,range:"4.924–4.966",delta:"0.042",tc:"#27ae60",
     samples:["Exp19-53","Exp19-43","Exp19-56"]},
    {name:"Cluster 3",type:"L",count:2,range:"4.443–4.464",delta:"0.021",tc:"#e67e22",
     samples:["Exp19-52","Exp19-51"]},
    {name:"Cluster 4",type:"H4",count:4,range:"5.091–5.168",delta:"0.077",tc:"#27ae60",
     samples:["Exp19-42","Exp19-40","Exp19-41","Exp19-47"]},
    {name:"Cluster 5",type:"L",count:2,range:"4.550–4.611",delta:"0.061",tc:"#e67e22",
     samples:["Exp19-48","Exp19-45"]},
    {name:"Cluster 6",type:"L",count:2,range:"4.294–4.336",delta:"0.042",tc:"#e67e22",
     samples:["Exp19-54","Exp19-46"]},
    {name:"Cluster 12",type:"CO",count:4,range:"4.44–4.49",delta:"0.05",tc:"#8e44ad",
     samples:["RM 568","RM 569","El Médano 216","RM 567"]}
  ]},
  {locality:"Catalina",color:"#1a2a3a",falls:[
    {name:"Cluster 7",type:"L",count:5,range:"4.686–4.762",delta:"0.076",tc:"#e67e22",
     samples:["Exp19-08","Exp19-19","Exp19-34","Exp19-04","Exp19-32"]},
    {name:"Cluster 8",type:"H",count:4,range:"4.834–4.882",delta:"0.048",tc:"#27ae60",
     samples:["Exp19-33","Exp19-06","Exp19-12","Exp19-09"]},
    {name:"Cluster 9",type:"H5",count:2,range:"5.252–5.285",delta:"0.033",tc:"#27ae60",
      samples:["Exp19-25","Exp19-01"]},
    {name:"Cluster 10",type:"L",count:4,range:"4.589–4.655",delta:"0.066",tc:"#e67e22",
     samples:["Exp19-24","Exp19-10","Exp19-05","Exp19-26"]},
    {name:"Cluster 11",type:"L",count:3,range:"4.505–4.581",delta:"0.076",tc:"#e67e22",
     samples:["Exp19-23","Exp19-22","Exp19-03"]}
  ]}
];

// Sample → cluster type & name lookup (cluster-estimated classification when petrography unavailable)
const CLUSTER_TYPE_MAP = {};
(function() {
  PAIR_GROUPS.forEach(g => g.falls.forEach(f => {
    f.samples.forEach(c => { CLUSTER_TYPE_MAP[c] = { type: f.type, name: f.name }; });
  }));
})();

function sampleLookup(code) {
  return SAMPLES.find(s => s.c === code);
}

const TYPE_COLORS = {H:'#27ae60',L:'#e67e22',LL:'#b8860b',C:'#8e44ad','??':'#999'};

// Initial mass (grams) from Repositorio Meteoritos.xlsx catalog — total specimen mass (sum of all fragments)
const MASS_MAP = {
  "Exp19-01":4.9,"Exp19-03":1.7,"Exp19-04":3.8,"Exp19-05":3.5,"Exp19-06":3.9,
  "Exp19-07":71.4,"Exp19-08":5.97,"Exp19-09":8.9,"Exp19-10":1.6,"Exp19-11":12.9,"Exp19-12":3,
  "Exp19-13":2.4,"Exp19-14":14.9,"Exp19-15":1.1,"Exp19-17":2.7,"Exp19-18":8.8,"Exp19-19":0.8,"Exp19-20":2.3,"Exp19-27":2.5,
  "Exp19-21":5.4,"Exp19-22":1.7,"Exp19-23":1.1,"Exp19-24":5.9,"Exp19-25":1.9,
  "Exp19-26":1.9,"Exp19-29":1,"Exp19-30":28.4,"Exp19-31":13,"Exp19-32":2.3,
  "Exp19-33":1.6,"Exp19-34":1.2,"Exp19-40":260.8,"Exp19-41":113.5,"Exp19-42":26.4,
  "Exp19-43":52.7,"Exp19-44":24,"Exp19-45":55.3,"Exp19-46":36.8,"Exp19-47":38.9,
  "Exp19-48":3.7,"Exp19-49":26.1,"Exp19-50":29.8,"Exp19-51":32.1,"Exp19-52":297.5,
  "Exp19-53":8.7,"Exp19-54":80.1,"Exp19-56":178.2,"Exp19-58":4.8,  "Exp19-59":23.2,
  "JG124":null,
  "JG143":45.9,
  "JG151":390,
  "MV023":90,
  "MV025":null,
  "MV088":null,
  "DM053":72.7,
  "DM053-A2":63.5,
  "DM055-A2":22.1,
  "Catalina 008":98,
  "El Médano 216":1323,
  "Los Vientos 123":575,
  "RM 567":1186,
  "RM 568":3071,
  "RM 569":1242
};

// Petrologic grade (3–7) and type (H/L/LL) from thin-section petrography
// Only for samples with both thin-section classification AND KLY5 data
const PETRO_MAP = {
  "Exp19-01":{type:"H",grade:5,note:"H5"},     // reclassified H5 (KLY5 + petro)
    "Exp19-11":{type:"H",grade:6,note:"H6"},
  "Exp19-14":{type:"H",grade:4,note:"H4"},
  "Exp19-21":{type:"H",grade:4,note:"H4"},
  "Exp19-30":{type:"H",grade:6,note:"H6"},
  "Exp19-41":{type:"H",grade:4,note:"H4"},        // reclassified H4 (KLY5→H)
  "Exp19-42":{type:"H",grade:4,note:"H4"},        // reclassified H4 (KLY5→H)
  "Exp19-49":{type:"H",grade:5,note:"H5"},        // petro H5 in DETAILS
  "Exp19-53":{type:"H",grade:4,note:"H4"}         // petro H4 in DETAILS
};

// Discoverer(s) from Fichas de clasificacion.xlsx (column P)
const DISCOVERER_MAP = {
  "Exp19-01":"Alfonso Mohor","Exp19-03":"Daniel Moncada","Exp19-04":"Daniel Moncada","Exp19-05":"Grace Batalla",
  "Exp19-06":"Samanta Aravena, Roberto Valles","Exp19-07":"Alfonso Mohor","Exp19-08":"Diego Castañeda","Exp19-09":"Roberto Valles",
  "Exp19-10":"Diego Castañeda","Exp19-11":"Alfonso Mohor","Exp19-12":"Grace Batalla","Exp19-13":"Alfonso Mohor",
  "Exp19-14":"Víctor Cárcamo","Exp19-15":"Grace Batalla","Exp19-17":"Diego Castañeda","Exp19-18":"Sebastián Gatica",
  "Exp19-19":"Alfonso Mohor","Exp19-20":"Víctor Cárcamo","Exp19-21":"Diego Castañeda","Exp19-22":"Samanta Aravena",
  "Exp19-23":"Diego Castañeda","Exp19-24":"Roberto Valles, Sebastián Gatica","Exp19-25":"Roberto Valles","Exp19-26":"Samanta Aravena",
  "Exp19-27":"Lorena Olivares","Exp19-29":"Alfonso Mohor","Exp19-30":"Daniel Moncada","Exp19-31":"Sebastián Gatica",
  "Exp19-32":"Roberto Valles","Exp19-33":"Sebastián Gatica","Exp19-34":"Alfonso Mohor","Exp19-40":"Diego Castañeda",
  "Exp19-41":"Samanta Aravena","Exp19-42":"Lorena Olivares","Exp19-43":"Daniel Moncada","Exp19-44":"Sebastián Gatica",
  "Exp19-45":"Alfonso Mohor, Samanta Aravena","Exp19-46":"Samanta Aravena, Alfonso Mohor","Exp19-47":"Sebastián Gatica, Daniel Moncada",
  "Exp19-48":"Víctor Cárcamo","Exp19-49":"Daniel Moncada, Diego Castañeda","Exp19-50":"Alfonso Mohor","Exp19-51":"Lorena Olivares",
  "Exp19-52":"Samanta Aravena","Exp19-53":"Sebastián Gatica","Exp19-54":"Víctor Cárcamo","Exp19-56":"Diego Castañeda",
  "Exp19-58":"Samanta Aravena",  "Exp19-59":"Samanta Aravena",
  "JG124":"Diego Nicolás Luna Vega (UChile, guiado por D. Moncada)",
  "JG143":"Nicolás Amengual Mondaca",
  "JG151":"Nicolás Amengual Mondaca",
  "MV023":"Nicolás Amengual Mondaca",
  "MV025":"Diego Nicolás Luna Vega (UChile, guiado por D. Moncada)",
  "MV088":"Diego Nicolás Luna Vega (UChile, guiado por D. Moncada)",
  "DM053":"Nicolás Amengual Mondaca",
  "DM053-A2":"Nicolás Amengual Mondaca",
  "DM055-A2":"Nicolás Amengual Mondaca",
  "Catalina 008":"Museo del Meteorito, San Pedro de Atacama",
  "El Médano 216":"Museo del Meteorito, San Pedro de Atacama",
  "Los Vientos 123":"Museo del Meteorito, San Pedro de Atacama",
  "RM 567":"Museo del Meteorito, San Pedro de Atacama",
  "RM 568":"Museo del Meteorito, San Pedro de Atacama",
  "RM 569":"Museo del Meteorito, San Pedro de Atacama"
};

// Bulk density (g/cm³) from the collection catalog (average of all fragments)
const DENSITY_MAP = {
  "Exp19-01":2.240,"Exp19-03":2.338,"Exp19-04":2.850,"Exp19-05":2.880,
  "Exp19-06":1.513,"Exp19-07":2.850,"Exp19-08":2.805,"Exp19-09":2.532,"Exp19-10":2.200,
  "Exp19-11":3.548,"Exp19-12":2.250,"Exp19-13":2.475,"Exp19-14":2.927,
  "Exp19-17":2.228,"Exp19-19":2.200,"Exp19-21":2.621,"Exp19-22":2.004,
  "Exp19-23":1.815,"Exp19-24":2.004,"Exp19-25":1.959,"Exp19-26":2.239,
  "Exp19-29":2.063,"Exp19-30":2.947,"Exp19-31":2.332,"Exp19-32":2.108,
  "Exp19-33":2.640,"Exp19-34":1.650,"Exp19-40":2.927,"Exp19-41":3.050,
  "Exp19-42":3.068,"Exp19-43":3.106,"Exp19-44":3.194,"Exp19-45":1.590,
  "Exp19-46":2.444,"Exp19-47":2.344,"Exp19-48":2.775,"Exp19-49":2.377,
  "Exp19-50":2.962,"Exp19-51":2.622,"Exp19-52":2.365,"Exp19-53":2.563,"Exp19-54":3.017,
  "Exp19-56":3.293,   "Exp19-59":2.226,
  "JG124":null,
  "JG143":null,
  "JG151":null,
  "MV023":null,
  "MV025":null,
  "MV088":null,
  "DM053":null,
  "DM053-A2":null,
  "DM055-A2":null,
  "Catalina 008":null,
  "El Médano 216":3.37,
  "Los Vientos 123":null,
  "RM 567":3.37,
  "RM 568":3.37,
  "RM 569":3.36
};

// Coordinates map: Northing N, Easting E format
// Fragments map: numeric count or "Briquette" (compressed pellet)
const FRAGMENTS_MAP = {
  "Exp19-01":1,"Exp19-03":1,"Exp19-04":1,"Exp19-05":1,"Exp19-06":2,
  "Exp19-07":1,"Exp19-08":1,"Exp19-09":2,"Exp19-10":1,"Exp19-11":1,
  "Exp19-12":1,"Exp19-13":1,"Exp19-14":1,"Exp19-15":"Briquette",
  "Exp19-17":1,"Exp19-18":"Briquette","Exp19-19":1,"Exp19-20":"Briquette","Exp19-21":1,
  "Exp19-22":1,"Exp19-23":1,"Exp19-24":2,"Exp19-25":1,"Exp19-26":1,
  "Exp19-27":"Briquette","Exp19-29":1,"Exp19-30":2,"Exp19-31":1,"Exp19-32":1,
  "Exp19-33":1,"Exp19-34":1,"Exp19-40":1,"Exp19-41":1,"Exp19-42":1,
  "Exp19-43":1,"Exp19-44":1,"Exp19-45":3,"Exp19-46":2,"Exp19-47":3,
  "Exp19-48":1,"Exp19-49":2,"Exp19-50":1,"Exp19-51":2,"Exp19-52":23,
  "Exp19-53":1,"Exp19-54":1,"Exp19-56":3,"Exp19-58":"Briquette",  "Exp19-59":1,
  "JG124":1,
  "JG143":1,
  "JG151":1,
  "MV023":1,
  "MV025":1,
  "MV088":1,
  "DM053":2,
  "DM053-A2":1,
  "DM055-A2":1,
  "Catalina 008":1,
  "El Médano 216":1,
  "Los Vientos 123":1,
  "RM 567":1,
  "RM 568":1,
  "RM 569":1
};

const COORDS_MAP = {
  "Exp19-01":"7225074 N, 410890 E","Exp19-03":"7225111 N, 410588 E","Exp19-04":"7225098 N, 410477 E",
  "Exp19-05":"7225090 N, 410389 E","Exp19-06":"7225089 N, 410389 E","Exp19-07":"7225089 N, 410389 E",
  "Exp19-08":"7225089 N, 410389 E","Exp19-09":"7225089 N, 410389 E","Exp19-10":"7224901 N, 409418 E",
  "Exp19-11":"7224994 N, 409437 E","Exp19-12":"7224994 N, 409448 E","Exp19-13":"7225001 N, 409426 E",
  "Exp19-14":"7224869 N, 409425 E","Exp19-15":"7224868 N, 409407 E","Exp19-17":"7224851 N, 409279 E",
  "Exp19-18":"7224872 N, 409184 E","Exp19-19":"7224894 N, 409216 E","Exp19-20":"7224947 N, 409212 E",
  "Exp19-21":"7224908 N, 409231 E","Exp19-22":"7224942 N, 409212 E","Exp19-23":"7224938 N, 409213 E",
  "Exp19-24":"7224942 N, 409216 E","Exp19-25":"7224949 N, 409217 E","Exp19-26":"7224924 N, 409228 E",
  "Exp19-27":"7224932 N, 409248 E","Exp19-29":"7224930 N, 409273 E","Exp19-30":"7224986 N, 409273 E",
  "Exp19-31":"7224980 N, 409291 E","Exp19-32":"7224988 N, 409313 E","Exp19-33":"7225017 N, 409434 E",
  "Exp19-34":"7225036 N, 409448 E","Exp19-40":"7268160 N, 363588 E","Exp19-41":"7268192 N, 363544 E",
  "Exp19-42":"7268171 N, 363453 E","Exp19-43":"7268102 N, 363159 E","Exp19-44":"7265322 N, 363203 E",
  "Exp19-45":"7265225 N, 362948 E","Exp19-46":"7265280 N, 362968 E","Exp19-47":"7265291 N, 362944 E",
  "Exp19-48":"7265301 N, 362934 E","Exp19-49":"7265296 N, 362940 E","Exp19-50":"7265270 N, 362980 E",
  "Exp19-51":"7265291 N, 362959 E","Exp19-52":"7265285 N, 362966 E","Exp19-53":"7265323 N, 362933 E",
  "Exp19-54":"7265812 N, 363197 E","Exp19-56":"7265191 N, 364518 E","Exp19-58":"7187733 N, 404955 E",
  "Exp19-59":"7266426 N, 406086 E"
};

function typeTag(t) {
  const cls = {'H':'tag-h','L':'tag-l','LL':'tag-ll','C':'tag-c'};
  return `<span class="${cls[t]||'tag-q'}">${t||'?'}</span>`;
}

const SAMPLE_DETAILS = {
  "Exp19-42": {
    basic: {
      name: "Exp19-42 f2",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "26.4 g",
      pieces: 1
    },
    classification: {
      class: "H4",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Figueroa (2023) classified Médano 7 as type 4 due to well-defined chondrules, nearly absent glass, and a matrix with clastic-looking coarsening. Reclassified as H-group based on KLY5 magnetic susceptibility (log χ = 5.091, consistent with H field of Rochette et al., 2003). Chondrules are visible. Troilite and kamacite occur both separated and in contact, relatively well preserved with ~20% maximum oxidation. Minor shock veins, irregular fractures in olivine, and localized mosaicism. Limonite patina present (reddish appearance). Shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Classified as W2 due to moderate oxidation of metals and troilite affecting approximately 50% of the sample, with minor sectors where oxidation reaches up to 80%."
    },
    petrology: {
      mineralogy: "Chondritic texture with irregular fracturing. The main mineralogy consists of olivine (60%), pyroxene (30%), opaques (10%), and 4% porosity. Mineral crystals tend to occur massively, with smaller grain sizes making them appear more numerous and granular.",
      matrix: "Fine-grained granoblastic texture with medium recrystallization degree. Constitutes 35% of the sample with crystal size < 0.11 mm.",
      chondrules: "Well-defined boundaries, representing 52% of the sample with an average size of 0.363 mm. Chondrule types in order of abundance: POP, GOP, PO, PP, CP.",
      chemicalGroup: "H — magnetic susceptibility (log χ) = 5.091"
    },
    location: {
      coordinates: "7268171 N, 363453 E",
      mainMass: "Universidad de Chile",
      finder: "Lorena Olivares",
      state: "Antofagasta"
    }
  },
  "Exp19-41": {
    basic: {
      name: "Exp19-41 f2",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "113.5 g",
      pieces: 1
    },
    classification: {
      class: "H4",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Figueroa (2023) classified the sample as type 4, with mostly well-defined chondrules and, to a lesser extent, delineated chondrules within a clastic, coarsened matrix. Reclassified as H-group based on KLY5 magnetic susceptibility (log χ = 5.117, consistent with H field of Rochette et al., 2003). Abundant limonite. Irregular fractures and undulose extinction in olivine. Scarce minor shock veins. Opaques show minimal replacement; kamacite adjacent to troilite. Abundant microcrystalline troilite. Shock stage S3 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Classified as W2 due to minor to moderate oxidation of metals and troilite, with approximately 45% replacement, and sectors near edges where oxidation is higher."
    },
    petrology: {
      mineralogy: "The predominant dark brown color throughout the section is most noticeable in matrix areas. Chondritic texture with low linear fracturing. Main mineralogy: olivine (50%), pyroxene (40%), opaques (10%), and 2% porosity. Mineral crystals tend to occur massively.",
      matrix: "Fine-grained granoblastic texture with high recrystallization degree and dark brown color. Constitutes 38% of the sample with crystal size < 0.15 mm.",
      chondrules: "Well to moderately defined boundaries, representing 50% of the sample with an average size of 0.33 mm. Chondrule types in order of abundance: POP, CP, PO, PR.",
      chemicalGroup: "H — magnetic susceptibility (log χ) = 5.117"
    },
    location: {
      coordinates: "7268192 N, 363544 E",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile"
    }
  },
  "Exp19-49": {
    basic: {
      name: "Exp19-49 F3",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "18.6 g",
      pieces: 2
    },
    classification: {
      class: "H5",
      shock: "S3",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Médano 14 contains 14 wt% Fe, classifying it as an H-group ordinary chondrite. Type 5: chondrules are not identifiable, matrix fully recrystallized. Abundant limonite. Shock veins filled with opaques (oxides). Undulose extinction in olivine. Shock stage S3 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W5",
      description: "Nearly complete oxidation of metals and troilite. Most opaques are oxides replacing original metal and filling shock veins. Incipient silicate oxidation toward edges. Limonite present. Weathering stage W5 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Olivine, pyroxene, feldspar, kamacite (~1%, almost entirely replaced), troilite (~1%, in contact with kamacite), oxides (~90% of opaques). Abundant oxide-filled shock veins.",
      matrix: "Coarse-grained granoblastic texture with high recrystallization. Brown coloration from limonite.",
      chondrules: "Not identifiable — fully integrated into recrystallized matrix.",
      chemicalGroup: "14 wt% Fe, H-group ordinary chondrite. KLY5 log χ = 4.631 unreliable due to high weathering (W≥3)."
    },
    location: {
      coordinates: "7265296 N, 362940 E",
      mainMass: "Universidad de Chile",
      finder: "Lorena Olivares",
      state: "Antofagasta"
    }
  },
  "Exp19-53": {
    basic: {
      name: "Exp19-53 F2",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "8.7 g",
      pieces: 1
    },
    classification: {
      class: "H4",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Contains 14 wt% Fe, classifying it as H-group. Classified as type 4 due to well-defined chondrules with good matrix integration and a minor proportion of delineated chondrules, within a less opaque recrystallized matrix. It also presents minor glass in chondrules and the presence of kamacite. Intense planar and irregular fracturing in olivine and pyroxene, undulose extinction in olivine, shock veins, kamacite adjacent to troilite. Shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Classified as W2 due to moderate oxidation of metals and troilite with approximately 30% replacement, and incipient silicate alteration with minor oxide veinlets along edge sectors."
    },
    petrology: {
      mineralogy: "Chondritic texture with irregular and planar fracturing in larger crystals. Main mineralogy: olivine (40%), pyroxene (35%), opaques (25%), and 3% porosity.",
      matrix: "Granoblastic texture with medium recrystallization degree. Constitutes 33% of the sample with crystal size < 0.1 mm.",
      chondrules: "Boundaries delineated by good matrix integration, representing 50% of the sample with sizes ranging from 0.09 to 0.4 mm (average ~0.2 mm). Chondrule types in order of abundance: POP, CP, OB, GOP. This sample also exhibits a PR-type chondrule that is not fully defined, showing anhedral crystals that do not appear to disperse fully radially. Additionally, a compound chondrule is observed with two different chondrule halves: one PR and one PP.",
      chemicalGroup: "Médano 18 contains 14 wt% Fe, composed of kamacite (80%, avg. 0.14 mm), troilite (15%, avg. 0.07 mm), and oxides (25%, avg. 0.09 mm)."
    },
    location: {
      coordinates: "7265323 N, 362933 E",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "Exp19-01": {
    basic: {
      name: "Exp19-01",
      abbrev: "Catalina 1",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "4.9 g",
      pieces: 1
    },
    classification: {
      class: "H5",
      shock: "S4",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Magnetic susceptibility (KLY5, log χ = 5.285) falls within the H field of Rochette et al. (2003); Parra (2023) reported a mass-normalized field susceptibilimeter value (log χ = 4.73) that plots on the H/L boundary of Rochette et al. (2012), and the KLY5 laboratory measurement confirms the H group. Petrography confirms petrologic type 5: chondrule textures are discernible but not clearly delineated, matrix is recrystallized with orthopyroxene predominating over clinopyroxene, secondary feldspar occurs as microcrystalline aggregates, and opaque minerals (kamacite ~28%, troilite ~12%) are well-preserved with low weathering (W2). Shock stage reconciled to S4 (Stöffler et al., 1991). Parra (2023) observed olivine with irregular and planar fractures and undulatory extinction, consistent with shock stage S3; a later re-evaluation identified planar deformation features (PDFs) with local blackening in olivine, maskelynite (plagioclase → glass), fizzed troilite, and ringwoodite in some olivine grains. The combined evidence from both assessments is consistent with shock stage S4 (Stöffler et al., 1991). Classified as H5 S4 ordinary chondrite."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~30% with minor oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with limonite patina. Small fractures (~0.2–3 mm) and minor oxide-filled veinlets (~0.2–3 mm). Olivine (~21%, ~0.1–0.7 mm), pyroxene (~20%, ~1 mm to cryptocrystalline), feldspar (~20%), kamacite (~28%, ~0.5–0.1 mm), troilite (~12%, ~0.25–0.5 mm). Olivine and pyroxene are subhedral; kamacite and troilite are anhedral. Olivine: ~100% of chondrules. Pyroxene: ~43% in chondrules, ~57% in matrix. Kamacite: ~10% in chondrules, ~90% in matrix. Troilite: ~10% in chondrules, ~90% in matrix.",
      matrix: "~30% volume. Feldspar: ~60%, cryptocrystalline. Pyroxene: ~40%, cryptocrystalline. Presence of oxide- and opaque-filled veinlets (kamacite and troilite).",
      chondrules: "~70% of total volume, radii 0.1–0.3 mm. Defined to irregularly defined, subrounded. Types: PO (~12%, ~0.3 mm), PP (~6%, ~0.1–0.2 mm), POP (~12%, ~0.2–0.3 mm), BO (~40%, ~0.1–0.3 mm), RP (~50%, ~0.3 mm), G (~5%, ~0.1 mm), C (~20%, ~0.3 mm).",
      chemicalGroup: "H — KLY5 log χ = 5.285 (H field); Parra (2023) field log χ = 4.73 (H/L boundary)"
    },
    location: {
      coordinates: "7225074 N, 410890 E",
      mainMass: "Universidad de Chile",
      finder: "Alfonso Mohor",
      state: "Antofagasta"
    }
  },
  "Exp19-11": {
    basic: {
      name: "Exp19-11",
      abbrev: "Catalina 11",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "12.9 g",
      pieces: 1
    },
    classification: {
      class: "H6",
      shock: "S6",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Reclassified as H based on abundant opaques and metals (kamacite ~9%, troilite ~9%), consistent with H-group ordinary chondrite; Parra (2023) classified this sample as LL from her field susceptibilimeter value (log χ = 4.29, LL field of Rochette et al., 2012), while the KLY5 laboratory measurement (log χ = 4.971) falls within the H field. Extensive obliteration of primary textures with recrystallized matrix and interstitial secondary feldspar grains indicate petrologic type 6 (Van Schmus & Wood, 1967). Shock stage S6 (Stöffler et al., 1991) is confirmed by pervasive mosaicism in olivine with localized ringwoodite; Parra (2023) described mostly irregular fractures with a few small planar fractures in olivine, consistent with her S2 assessment. KLY5 magnetic susceptibility (log χ = 4.971) is consistent with H classification. Classified as H6 S6 ordinary chondrite."
    },
    weathering: {
      grade: "W1",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ≤20% with minor oxidized veinlets. Weathering stage W1 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with extensive obliteration of primary textures and recrystallized matrix. Fractures, veinlets, and limonite patina. Oxide-filled veinlets ~0.25–12 mm. Olivine (~21%, ~0.1–0.4 mm), pyroxene (~14%, <0.2 mm), feldspar (~21%), kamacite (~9%, <0.7 mm), troilite (~9%, <0.4 mm). Olivine and pyroxene are prismatic and subhedral; kamacite and troilite are anhedral. Olivine: ~50% in chondrules, ~50% in matrix. Pyroxene: ~50% in chondrules, ~50% in matrix. Feldspar: ~20% in chondrules, ~80% in matrix. Kamacite: ~5% in chondrules, ~95% in matrix. Troilite: ~5% in chondrules, ~95% in matrix.",
      matrix: "~40% volume. Almost entirely covered by limonite patina. Feldspar: ~50%, cryptocrystalline. Olivine subhedral: ~30%, ~0.1–0.4 mm. Pyroxene subhedral: ~20%, <0.3 mm. Troilite observed around chondrules.",
      chondrules: "~60% of total volume, rounded to subrounded, radii 0.1–0.3 mm. Defined to irregularly defined. Types: PO (~29%, ~0.1–0.3 mm), PP (~67%, ~0.1–0.3 mm), BO (~5%, ~0.1 mm).",
      chemicalGroup: "H — KLY5 log χ = 4.971 (H field); abundant opaques and metals confirm H group; Parra (2023) field log χ = 4.29 (LL field)"
    },
    location: {
      coordinates: "7224994 N, 409437 E",
      mainMass: "Universidad de Chile",
      finder: "Alfonso Mohor",
      state: "Antofagasta"
    }
  },
  "Exp19-14": {

    basic: {
      name: "Catalina 14 f2",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "14.9 g",
      pieces: 1
    },
    classification: {
      class: "H3.8",
      shock: "S1",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Reclassified as H3.8 based on new observations: well-defined chondrules with small metal grains inside, typical of unequilibrated ordinary chondrites (Van Schmus & Wood, 1967). Contains 15 wt% Fe, consistent with H-group. Dark matrix with minor limonite. Straight extinction in olivine, minor irregular fractures. Minimal shock deformation. Shock stage S1 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Dark matrix with minor limonite. Limited oxidation of metals and troilite. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with well-defined chondrules. Small metal grains inside chondrules. Olivine (55%), pyroxene (35%), opaques (10%), and 12% porosity.",
      matrix: "33% of sample. Dark, fine-grained clastic matrix. Minor limonite.",
      chondrules: "Well-defined chondrule boundaries. Identified chondrule types: POP, GOP, PR, CP, PO, OB.",
      chemicalGroup: "15 wt% Fe, H-group ordinary chondrite."
    },
    location: {
      coordinates: "7224869 N, 409425 E",
      mainMass: "Universidad de Chile",
      finder: "Víctor Cárcamo",
      state: "Antofagasta"
    }
  },
  "Exp19-15": {
    basic: {
      name: "Exp19-15",
      abbrev: "Catalina 15",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "1.1 g",
      pieces: 4
    },
    classification: {
      class: "L4",
      shock: "S5",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Reclassified as L4 S5 based on new petrographic observations. Chondrules are well defined but show incipient matrix integration, consistent with petrologic type 4 (Van Schmus & Wood, 1967); Parra (2023) also assigned type 4 (well-defined chondrules, clinopyroxene more abundant than orthopyroxene, secondary feldspar as microcrystalline aggregates). Parra (2023) classified the sample as LL from her field susceptibilimeter value (log χ = 4.01, LL field of Rochette et al., 2012); the opaque fraction is lower than H-chondrite standards and visually intermediate between LL and H, consistent with L-group ordinary chondrite metal abundance. Shock stage reconciled to S5 (Stöffler et al., 1991): Parra (2023) observed olivine with irregular and planar fractures, while the later re-evaluation found the highest shock overprint in the collection — nearly all troilite grains are vesiculated ('fizzed') or completely destroyed, polymineralic melt veins crosscut kamacite, and troilite grains contain Ni-rich domains indicative of high-temperature melting and metal–sulfide mixing during impact. The combined evidence is consistent with shock stage S5 (Stöffler et al., 1991). Sample appears orange due to limonite patina."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~30% with minor oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with well-defined chondrules. Limonite patina. Oxide-filled veinlets ~1 mm. Olivine, pyroxene, feldspar, kamacite, troilite. Olivine and pyroxene are prismatic and subhedral; kamacite and troilite are anhedral. Troilite frequently shows vesiculated ('fizzed') textures. Polymineralic melt veins present in kamacite. Troilite grains locally contain Ni-rich domains.",
      matrix: "~30% volume. Inequigranular granoblastic texture with limonite patina.",
      chondrules: "~70% of total volume, rounded to subrounded, well defined, radii ~0.1–0.8 mm. Types: PO, PP, POP, BO, RP, G, C.",
      chemicalGroup: "L — metal content intermediate between LL and H; reclassified from H; Parra (2023) field log χ = 4.01 (LL field)"
    },
    location: {
      coordinates: "7224868 N, 409407 E",
      mainMass: "Universidad de Chile",
      finder: "Grace Batalla",
      state: "Antofagasta"
    }
  },
  "Exp19-21": {
    basic: {
      name: "Exp19-21 F2",
      abbrev: "Catalina 21",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "5.4 g",
      pieces: 1
    },
    classification: {
      class: "H4",
      shock: "S4",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Classified as type 4, with predominantly delineated chondrules within a generally recrystallized matrix. Glass present inside chondrules. Contains 12 wt% Fe, classifying Catalina 21 as H-group. Minor shock veins observed; nearly all troilite grains are in contact with kamacite. Undulose extinction in pyroxene and irregular fractures. Shock stage S4 (Stöffler et al., 1991). Sample appears reddish due to oxidation."
    },
    weathering: {
      grade: "W3",
      description: "Classified as W3 due to moderate to strong oxidation of metals and troilite with approximately 65% metal replacement. Incipient silicate alteration also observed."
    },
    petrology: {
      mineralogy: "Olivine (45%), pyroxene (35%), opaques (20%), and 2% porosity.",
      matrix: "Fine-grained granoblastic texture with high recrystallization degree. Constitutes 45% of the sample with crystal size < 0.11 mm.",
      chondrules: "Well to moderately defined boundaries, representing ~41% of the sample with an average size of 0.38 mm. Recognized chondrule types in order of abundance: POP, CP, GOP.",
      chemicalGroup: "12 wt% Fe, composed of kamacite (80%, avg. 0.21 mm), troilite (15%, avg. 0.51 mm), and oxides (5%, avg. 0.2 mm). Oxide size increases toward edges, indicating replacement progresses from edges toward the center."
    },
    location: {
      coordinates: "7224908 N, 409231 E",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "Exp19-27": {
    basic: {
      name: "Exp19-27",
      abbrev: "Catalina 27",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "2.5 g",
      pieces: 1
    },
    classification: {
      class: "L5",
      shock: "S4",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Reclassified as L5 based on new petrographic observations: kamacite ~7%, troilite ~3%, total opaque fraction ~10%, consistent with L-group ordinary chondrite; Parra (2023) classified the sample as LL from her field susceptibilimeter value (log χ = 3.72, LL field of Rochette et al., 2012). Chondrule textures are discernible but not clearly delineated. Matrix is recrystallized. Orthopyroxene predominates over clinopyroxene with absence of well-developed plagioclase. Secondary feldspar occurs predominantly as microcrystalline aggregates. Petrologic type 5 per Van Schmus & Wood (1967). Shock stage reconciled to S4 (Stöffler et al., 1991): Parra (2023) observed olivine with planar fractures and undulatory extinction, while extensive fracturing and shock veins filled with opaques, and typically fizzed troilite, indicate a significant shock overprint. The combined evidence is consistent with shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Kamacite grains show variable replacement by oxides (~40% average, 10–60% range); shock veins filled with opaques. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with discernible but not clearly delineated chondrules. Extensive fracturing. Shock veins filled with opaques. Olivine, pyroxene, feldspar, kamacite (~7%, 10–60% replaced), troilite (~3%, smaller than kamacite, in contact or isolated).",
      matrix: "~30% volume. Inequigranular granoblastic texture.",
      chondrules: "~70% of total volume, radii 0.1–0.3 mm, rounded to subrounded, defined to irregularly defined. Types: PO, PP, POP, BO, RP.",
      chemicalGroup: "L — kamacite ~7%, troilite ~3%, total opaques ~10%; Parra (2023) field log χ = 3.72 (LL field)"
    },
    location: {
      coordinates: "7224932 N, 409248 E",
      mainMass: "Universidad de Chile",
      finder: "Lorena Olivares",
      state: "Antofagasta"
    }
  },
  "Exp19-30": {
    basic: {
      name: "Exp19-30 F1-2",
      abbrev: "Catalina 30",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "20.8 g",
      pieces: 2
    },
    classification: {
      class: "H6",
      shock: "S6",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Classified as type 6, with poorly defined to absent chondrules within a recrystallized, less opaque clastic matrix. Catalina 30 contains 19 wt% Fe, classifying it as H-group, with an average crystal size of 0.013 mm. The sample is the most strongly shocked in the collection: planar deformation features (PDFs) affect olivine and pyroxene throughout the sample edge, olivine shows extensive mosaicism, ringwoodite is present, maskelynite is abundant, and plessite (fine-grained intergrowth of kamacite and taenite) indicates high-shock transformation of metal. Polymineral melt veins crosscut the sample, and troilite is sheared along fracture planes. Together, these features indicate shock stage S6 (Stöffler et al., 1991), representing a significant impact overprint near the solidus temperature."
    },
    weathering: {
      grade: "W3",
      description: "Classified as W3 due to moderate metal oxidation affecting approximately 60%, along with incipient alteration of silicates such as olivine."
    },
    petrology: {
      mineralogy: "Chondritic texture with irregular and linear fracturing at edges. Main mineralogy: olivine (40%), pyroxene (35%), opaques (25%), and 4% porosity.",
      matrix: "Fine-grained granoblastic texture with low recrystallization degree, increasing toward edges. Represents 42% of the sample with crystal size < 0.13 mm.",
      chondrules: "Moderately defined boundaries, representing ~35% of the sample with an average size of 0.46 mm. Chondrule types in order of abundance: POP, PR, GOP.",
      chemicalGroup: "19 wt% Fe total, composed of kamacite (85%, avg. 0.16 mm), troilite (10%, avg. 0.088 mm), and oxides (5%, avg. ~1.14 mm). Minerals generally occur massively; in this sample, troilite and kamacite occasionally appear granular."
    },
    location: {
      coordinates: "7224986 N, 409273 E",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "Exp19-18": {
    basic: {
      name: "Exp19-18",
      abbrev: "Catalina 18",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "8.8 g",
      pieces: 1
    },
    classification: {
      class: "LL5",
      shock: "S4",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023); M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Abundant shock veins crosscut the sample. Silicates show undulose extinction, mosaicism and planar deformation features in olivine, as well as glassy sectors associated with this mineral. Pyroxenes are scarce and show low birefringence. Troilite and kamacite are heavily replaced by oxides (~75–80%). Opaque phases are mainly kamacite, troilite, and taenite. Parra (2023) classified the sample as LL from her field susceptibilimeter value (log χ = 3.94, LL field of Rochette et al., 2012) and assigned petrologic type 5. Shock stage reconciled to S4 (Stöffler et al., 1991): Parra (2023) observed olivine with mostly planar fractures, some irregular fractures, undulatory extinction, and mosaicism in a few crystals, while the coexistence of intracrystalline deformation in silicates, shock glass, and impact veins indicates a significant shock overprint. The combined evidence is consistent with shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W3",
      description: "Troilite and kamacite are heavily replaced by oxides (~75–80%); Parra (2023) estimated ~40% oxidation (W2) from light microscopy. Weathering stage W3 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Olivine, pyroxene, maskelynite, kamacite, troilite, taenite.",
      matrix: "Recrystallized matrix with abundant shock vein network.",
      chondrules: "Moderately delineated chondrules.",
      chemicalGroup: "LL — KLY5 pending; Parra (2023) field log χ = 3.94 (LL field)"
    },
    location: {
      coordinates: "7224872 N, 409184 E",
      mainMass: "Universidad de Chile",
      finder: "Sebastián Gatica",
      state: "Antofagasta"
    }
  },
  "Exp19-20": {
    basic: {
      name: "Exp19-20",
      abbrev: "Catalina 20",
      observedFall: "No",
      yearFound: 2019,
      country: "Chile",
      mass: "2.3 g",
      pieces: 1
    },
    classification: {
      class: "LL6",
      shock: "S5",
      classifier: "C. S. Aravena (2026)",
      description: "Macroscopic petrographic observation. Low metal content: kamacite ~2%, troilite ~1%, other opaques ~4% (oxides), for a total opaque fraction of ~7%, consistent with LL-group ordinary chondrite. Abundant olivine and pyroxene. Recrystallized matrix with no well-defined chondrules; one large pyroxene chondrule with a prominent rim is observed. Interstitial feldspar present, consistent with petrologic type 6 (Van Schmus & Wood, 1967). Planar deformation features in olivine, undulose extinction in olivine and pyroxene, irregular fractures, plessite, and shock veins. Deformation also observed in kamacite and adjacent troilite. Pervasive silicate alteration, most metals replaced by oxides. Shock stage S5 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W4",
      description: "Most metals replaced by oxides (~4% out of ~7% total opaques). Pervasive silicate alteration. Weathering stage W4 per Wlotzka (1993)."
    },
    location: {
      coordinates: "7224947 N, 409212 E",
      mainMass: "Universidad de Chile",
      finder: "Víctor Cárcamo",
      state: "Antofagasta"
    }
  },
  "JG124": {
    basic: {
      name: "JG124",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "N/A",
      pieces: 1
    },
    classification: {
      class: "H5",
      shock: "S4",
      classifier: "D. N. Luna Vega (2022), guided by D. Moncada; N. Amengual Mondaca (2019), guided by D. Moncada; integrated by C. S. Aravena (2026)",
      description: "Fe-Ni metal content estimated at 15% (not accounting for oxidized metal). Chondrule contours are moderately affected by high matrix recrystallization. Approximately 20% of chondrules are well-defined. Matrix is translucent over at least 50%, with recrystallization degree ranging from moderate to high (highly recrystallized predominant). Plagioclase crystals up to ~100 μm, averaging ~50 μm. Orthopyroxene content estimated higher than clinopyroxene. Chondrule mesostasis is mostly crystalline or devitrified. Chemical group H, petrologic type 5. Shock evidence is very subtle but identifiable with relative ease. Almost all of the best-preserved troilite crystals show a faint pleochroism in reflected light, more noticeable near the edges. Near these pleochroic grains, in certain sectors of large kamacite crystals, troilite has penetrated appearing as an intergrowth (associated with the thermal history of the sample). Shock veins are scarce and very thin (<10 μm), with well-preserved troilite inside immersed in silicate glass, accompanied in some points by small kamacite grains; despite their low quantity, they are of great extent, exceeding 1 mm in length. Shock effects are almost entirely restricted to the edges, where irregular fractures dominate. Luna (2022) reports two sets of planar fractures in olivine, undulatory extinction, and melt pockets (veins up to ~100 μm), while Amengual's evidence is more subtle (thin <10 μm shock veins, pleochroic troilite) — together consistent with shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W1",
      description: "Reflected light microscopy estimates of kamacite and troilite replacement by Fe oxides: Luna (2022) reports ~18% for kamacite and ~13% for troilite; Amengual (2019) reports few veins, mostly at the edges, generally ≤20 μm thick but reaching ~80 μm at some points (the ones without fill); edge veins are filled with Fe oxides while those more central also contain subordinate troilite with oxidation signs and, to a much lesser extent, kamacite. Replacement occurs as oxide halos, even in troilite, given the large crystal size and continuity; small opaques at the edges are fully replaced, but the thickest halos in central sectors do not exceed ~10–15% of the total crystal. All estimates remain below the 20% threshold. Borderline W1–W2 (upper W1)."
    },
    petrology: {
      mineralogy: "Olivine (~40% of sample, ~600 μm in chondrules; Luna 2022), orthopyroxene (~30%, ≤400 μm; Luna 2022), kamacite (~5–15% depending on estimation method: ~5% of section area per Amengual 2019 vs ~15% of sample volume not accounting for oxidized metal per Luna 2022; grains 0.1–0.3 mm along longest axis, mean surface ~5×10⁻⁴ mm², subhedral, slightly anhedral with increasing size, with a proportional tendency to enclose silicates), troilite (~3–7%: ~3% of section area per Amengual 2019 vs ~7% per Luna 2022; grains 0.1–0.2 mm, mean surface ~2.2×10⁻⁴ mm², subhedral; a low but evident pleochroism in larger grains and many internal silicate microcrystals; kamacite–troilite contact is frequent, including troilite grains entirely surrounded by kamacite), chromite (~1%, ~50 μm; Luna 2022), plagioclase (<1%: up to ~100 μm averaging ~50 μm per Luna 2022, but mostly disconnected crystals ≤20 μm at the section edges per Amengual 2019).",
      matrix: "~35% of sample volume (Luna 2022). Porphyroblastic texture with vitreous sectors (Amengual 2019); recrystallization reported from none evident in the glassy sectors (no devitrification; Amengual 2019) to moderate–high, with predominantly highly recrystallized matrix (Luna 2022). Aggregates of troilite and minor kamacite <50 μm, plus small irregular crystalline fragments mainly of olivine. Few veins (~80 μm average opening, reaching ~0.1 mm at some points and near ~50 μm at others; mostly hollow, the oxide-filled parts being the thinnest). Very low porosity (~0.1 mm average, up to ~0.2 mm, near fracture zones); veins plus porosity total <1% of section area.",
      chondrules: "~45–50% of sample (45% of section area per Amengual 2019; ~50% of volume per Luna 2022). Diameters ~0.15–1.3 mm (mean ~0.6 mm; range 0.3–1 mm per Amengual 2019). Well-rounded with well-marked borders, outlined by metal phases that barely enter the bodies; occur in clusters (pairs or groups of 3–4 adjacent chondrules). Notoriously elongated bodies correspond to fragments accreted immediately, with no evidence of recrystallization or secondary processes. Mesostasis variable, from ~5% to ~25% in porphyritic chondrules (Amengual 2019); Luna (2022) reports mesostasis mostly crystalline or devitrified. Types: PO (dominant, ~80% of chondrules per Amengual 2019; the most irregular surface), PP (~10%, slightly 'dirtier' aspect, occurring near but never in contact), POP (<5–10%, least rounded, identifiable only in transmitted light), glass-rich (~5%, best rounding and sharpest borders, the most recrystallized with microcrystals), RP (minor, slightly larger and more oval), BO (≤1%, as fragments with well-preserved texture), plus minor OB (Luna 2022). Some cryptocrystalline and PO chondrules contain small semicircular metal droplets and minor troilite.",
      texture: "Chondritic texture with porphyroblastic matrix and granoblastic sectors. High degree of fracturing at both individual crystal and whole-sample scale. Crosscut by veins of varying thickness (generally short-range; ~80 μm average opening). Shock evidence (Luna 2022): two sets of planar fractures in olivine, undulatory extinction, melt pockets (veins up to ~100 μm), shock veins ~40 μm wide with oxides, silicate crystals and minor metal, polymineral melt veins (Bennett & McSween 1996), and metal droplets throughout the matrix."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "JG143": {
    basic: {
      name: "JG143",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "45.9 g",
      pieces: 1
    },
    classification: {
      class: "H5",
      shock: "S2",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Problematic classification: olivine compositional homogeneity suggests type 4 (transition from 3), pyroxene closer to type 5 (low std dev), plagioclase microcrystalline aggregate inconex and small (type 4). Chondrules: some with clear boundaries and sharp edges, others with diffuse limits (type 4, near type 5 boundary). Matrix: opaque zones (type 3) and microcrystalline zones (type 4). Opaque crystallinity shows large crystals with 'octopus' morphology and irregular extensions, suggesting incomplete recrystallization — attributed to high type 4 or low type 5. Shock evidence is scarce in this section: no plessite textures nor polycrystalline or pleochroic troilite were found. The veinlets are filled by oxides and their irregular shape suggests their development is more the product of weathering than of prior shocks or opaques injected as melt. Shock veins are few, being more frequent in chondrules than in the matrix. The olivines show a high density of irregular fractures, mostly limited to the chondrule contour of the crystalline fragment, without any fill. Troilites are almost pristine and occur in seriated sizes, sometimes confusable with melt droplets if inspected carelessly. The sample seems to have suffered few and weak impacts. Shock stage S2 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W1",
      description: "Very few veins, almost all parallel to and attached to the edges along the longest axis of the sample. They are almost completely hollow, with few signs of Fe-oxide fill on the walls of the openings, and are thicker than in the other samples, with a thickness of 50–80 μm. Replacement occurs mainly through oxide halos, although at the kamacite–troilite contacts a thin oxide line is easy to find and identify, evidencing intramineral replacement — not in kamacite grains, but in many troilite ones. This intramineral replacement is initial, only a couple of microns thick, without extending notably toward the edges; the replacement halos are more irregular and rarely surround the whole crystal, entering from a single side and taking between 10 and 20% of the total crystal. Despite its good preservation, near the fractures there are fully replaced opaques, mostly those that came into contact with them, but since these zones are very small they are not significant. Weathering effects are very low and on average replacement barely exceeds 15% of opaques."
    },
    petrology: {
      mineralogy: "Kamacite ~4% of total area (large grains, ≥0.3 mm along longest axis, some reaching ~1 mm; mean surface ~0.001 mm²; subhedral, mostly continuous, a small portion ≤30% containing silicates; homogeneous distribution except one corner with a denser chondrule cluster; oxide replacement limited to the edges — thin halos on grains >0.4 mm, small grains almost fully replaced, nearly null toward the section center). Troilite <3% of section (noticeably smaller, up to 0.2–0.4 mm along longest axis, mean surface ~2.8×10⁻³ mm²; subhedral, fewer silicates than kamacite but more discontinuous due to fractures; oxide replacement shows the scratched texture at the edges). Kamacite–troilite contact is considerable, with coexistence almost everywhere — troilite contained in kamacite and, for the largest continuous troilite grains, kamacite in troilite. Small carbon aggregates in olivine Fo87-89 (Ca <20 wt% oxide, variable Si and Mg). Possible S-rich internal crystals not associated with troilite.",
      matrix: "Porphyroblastic texture dominated by the chondrules, with initial recrystallization evidenced by the dominance of vitreous and opaque zones of little homogeneity that in places mix with the borders of the smallest chondrules. Very little matrix kamacite; troilite dominates, with grains near ~80 μm concentrated along chondrule contours. Impact veins are not relevant, limited to the edges, almost without oxide fill, mean thickness ~70 μm. Porosity is almost entirely primary (original to the meteorite): holes mostly ~50 μm near the chondrules, with some impact- or dissolution-related holes up to ~0.1 mm contiguous to fractures. Veins plus porosity total <0.5% of the section area. Plagioclase minimal (≤30 μm), evident but at an initial stage, heterogeneous distribution with disconnected crystals.",
      chondrules: "~45% of total section area. Easy to distinguish by their good rounding despite unclear borders, highlighted by the outline formed by the metals. Diameters 0.2–1 mm (mean ~0.5 mm). Little internal fracturing and a low glass proportion (<15%). Few internal opaques, mostly troilite grains <0.1 mm. Recrystallization at an initial stage, with independent crystals still distinguishable, but uneven between chondrules. Many clusters with little matrix separation between them, though never in contact. Types: PO ~90% (variable mesostasis, always <20%), PP ~10% (some with internal cleavage, very little mesostasis <5%, at or above average size), glass-rich (2 found, similar ~0.4 mm size, almost perfect rounding, the most evident recrystallization with microcrystals possibly of pyroxene).",
      texture: "Chondritic, porphyroblastic texture dominated by well-rounded chondrules. Low weathering overprint; impact veining limited to the edges."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "JG151": {
    basic: {
      name: "JG151",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "390 g",
      pieces: 1
    },
    classification: {
      class: "L6",
      shock: "S5",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Olivine and pyroxene values suggest type 4 (or even 3 considering outliers), but these estimates may be biased as only better-preserved chondrules were analyzed due to high opaque content in matrix. Matrix recrystallization, relict chondrules, and notable plagioclase development are consistent with petrologic type 6. Shock effects are notable throughout the sample, mainly the melt veins, which are even visible in hand sample as dark veins giving a brecciated aspect, and through troilite melt droplets. The melt veins are wide, between 0.2 and 0.8 mm thick, completely filled with silicate glass along with disseminated troilite microdroplets and small kamacite grains closer to the walls; they are extensive, with two preferential directions: one parallel to an edge of the section and another perpendicular that crosses the whole area. Previous troilite crystals near these veins show a porous texture, while kamacite shows no significant change and there is no evidence of plessite texture. The development of melt pockets is notable, with numerous groups and droplets of ~10 μm in diameter, mainly of troilite but some of kamacite; most are located in the larger opaque veins, but some melt droplets develop in the original matrix zones. Fractures near the melt pockets are filled with troilite. The large amount of opaques associated with these features generates blackening when viewed in transmitted light. All troilites show a bubbly aspect, and very few crystals outside the shock veins show pleochroism. Shock stage S5 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Despite its worn appearance, weathering has not affected this sample much. Even though it is full of discontinuous fractures, with lengths from 0.5 mm to half of the section in some cases, these are almost hollow, with only small traces of Fe oxides on their walls. The veins that go toward the center have sinuous shapes and variable thicknesses of ~10–70 μm, while those along the edges are semi-straight and do not exceed ~40 μm. Few kamacite crystals show appreciable or important halos, the smallest ones evidencing that weathering has begun with thin halos. Troilite, on the other hand, shows greater effects with intramineral replacement initiating mostly in the porosities of its crystals, although it does not take great relevance over the total area of the crystals. Fully replaced opaques exist in the areas of highest vein density, but they are crystals below the mean size and in very localized zones. Total replacement of the opaque area does not exceed 30%, a proportion that does not vary significantly when considering the melt pockets present in some sectors."
    },
    petrology: {
      mineralogy: "Kamacite (large crystals, mean 0.3–0.4 mm with many near 1 mm along longest axis; mean surface ~6.4×10⁻⁴ mm²; 1.8% of section; mostly subhedral, the smallest tending to be euhedral; generally continuous, with very few cracks or holes). Troilite ('secondary', more weathered with many holes but very little replacement; mean ~0.1 mm — a product of many grains of ~0.02–0.05 mm, since grains of 0.5–0.6 mm are also common; mean surface ~1.7×10⁻⁴ mm²; 1.6% of section). Occurrence of both phases is erratic, concentrated much more in the matrix and almost absent in chondrules. Whether the troilite is truly secondary is uncertain: it is found in some fractures and sometimes surrounding kamacite, indicating it postdates the metal, and the most disseminated crystals sit inside impact cracks filled with opaques. Matrix mineralogy dominated by roughly equal olivine and pyroxene; pyroxene shows Ca- and/or Na-enriched zones and Si→Al replacement. Plagioclase relatively abundant, present in both identifiable chondrules and matrix nearly homogeneously — probably a recrystallization product; mean crystal size 0.04–0.05 mm, some up to 0.1 mm, with great connectivity between small precursor crystals.",
      matrix: "Brecciated appearance from shock and from crystal rupture during cutting/polishing. Fine granoblastic texture, low glass content, nearly homogeneous grain size. High percentage of impact veins filled with oxides and troilite microcrystals (~15% of section, 0.5–2 mm wide, best appreciated macroscopically). Microscopic unfilled veins (0.1–0.4 mm) follow the section shape along the edges, sometimes branching toward the center — unlike the transverse filled ones. Porosity <1%, holes ~0.2 mm, associated with weathering and fracturing as it concentrates near the veins.",
      chondrules: "Only relicts remain, very difficult to identify. Borders almost totally lost, leaving only the internal fractures and some 'shadows' left by the metals as evidence of their presence. Despite advanced recrystallization, two initial phases can be proposed based on color and texture. Some particular bodies allow independent identification of their internal crystals. The still-identifiable chondrules have diameters of 0.5–1 mm, but these may have been much smaller since they are probably the product of two merged bodies that lost their borders; under this criterion the mean diameter would be ~0.9 mm, covering ~13% of the area. No internal glass — evidence of advanced recrystallization. Types: PO (~85%), PP (~15%, identified by the dirtier aspect and some cleavage fractures).",
      texture: "Brecciated, highly recrystallized with fine granoblastic texture. Abundant impact veining (~15% of section)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "MV023": {
    basic: {
      name: "MV023",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "90 g",
      pieces: 1
    },
    classification: {
      class: "H6",
      shock: "S4",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Difficult analysis due to high density of oxide-filled veins and glass sectors causing contamination. Fayalite and ferrosilite std dev 3.48 and 1.89 respectively (anomalous olivine with incoherent SiO₂ and MgO excluded). Pyroxene variability suggests type 4→5, but significant plagioclase development (crystals mostly connected, up to 0.1 mm), almost completely recrystallized matrix, and poorly defined chondrules indicate evolution toward type 6. Shock evidence in opaques is difficult to identify due to the advanced weathering, and few sectors are well preserved. Shock veins are present throughout the whole area, aligned parallel to the longest axis of the section, filled mostly by oxides while other points remain hollow; the contained troilite and kamacite are almost totally replaced by oxide. Thicknesses vary from ~10 to ~80 μm, with the thickest filled with oxide. Troilite shows a very faint pleochroism, difficult to recognize due to the high replacement and the small size of the crystals. Shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W3",
      description: "The particularity of this sample is that all the stages and forms of the weathering process can be appreciated. Starting with the veins, they occur in varied shapes, with thicknesses from 10 μm to almost 80 μm and different fill levels — the thickest being partially filled or almost hollow and the thinnest completely filled, all with Fe oxide. The smallest veins (<40 μm wide) are semi-parallel to the longest axis of the section, while the largest show no preferential direction. Kamacite crystals are replaced through oxide halos and troilite mostly as intramineral replacement. Given the high density of veins, there is no zone that preserves opaques better than another, weathering being a homogeneous process across the whole area. In some points of complete opaque replacement there is secondary porosity from dissolution, although this is not common and is restricted to zones near the thickest, partially filled veins. Weathering is in an advanced stage, in which troilite crystals seem to have greater survival, already covering at least 80% of the total opaque area; even though many veins cross chondrules, no silicate alteration is observed."
    },
    petrology: {
      mineralogy: "Replacement of both metals and sulfides is advanced. Of the non-replaced portions, kamacite and troilite have similar sizes (0.1–0.2 mm, the sulfide being more common with larger crystals), covering ~0.8% and ~0.9% of the section respectively, with mean surfaces of ~1.94×10⁻⁴ and ~2.44×10⁻⁴ mm² in the same order (sulfide more abundant). Considering original crystals, kamacite may have ranged 0.1–0.4 mm and troilite 0.1–0.3 mm along longest axes, and kamacite may have been the more abundant. Preserved crystals are subhedral with thick replacement halos. Both phases concentrate more in the matrix, but it is the smallest crystals that outline the chondrule silhouettes. Troilite with very weak pleochroism, difficult to recognize due to high replacement and small crystal size. Normative olivine shows slightly higher SiO₂ (~2 wt% oxide above expected) but within acceptable range. Pyroxenes show no Si→Al replacement; Ca-rich pyroxenes are small fragments surrounded by thick oxide veins (almost negligible presence). Pyroxene Fe content ranges 10–15% Fs with low dispersion. Olivine shows complex behavior with high Fe dispersion. Cr-rich opaques appear to have nucleated on vein walls; S-rich opaques may be immiscibility products (centralized, with Si and Al content not suggesting previous troilite).",
      matrix: "Almost entirely recrystallized, but retains certain irregular fragments and textural heterogeneity, so it is assigned as medium-grained granoblastic. This recrystallization is uneven, with glass-rich zones and other more crystal-dense zones that are difficult to identify individually. Impact veins are considerable, both in width (0.1–0.3 mm) and in distribution across the whole section. The main domain runs along the longest axis of the section, crossing between 1/4 and 1/2 of the total length until abruptly interrupted by chondrule relicts (though at times it also crosses them). At least 70% are filled with Fe oxides; the unfilled ones tend to be the thickest. Both primary porosity (mainly inside chondrules) and secondary porosity (near fractures and in the larger oxidized metals) are present, with openings of 0.08–0.15 mm, homogeneously distributed. Plagioclase is difficult to discern because the color of the abundant oxides distracts, yet it shows developmental progress with mean crystal size near ~50 μm, some reaching almost 0.1 mm; few disconnected crystals <20 μm, the larger ones near the densest oxide-filled vein zones.",
      chondrules: "Poorly defined borders, some almost entirely lost, but identifiable by the silhouette formed by the metals. Many are crossed by small oxide veinlets and the few internal metals are replaced. Despite losing borders, internal recrystallization is not very advanced, though noticeable, with few recognizable individual crystals and a low glass portion (<5%). Best-preserved chondrules 0.2–0.5 mm in diameter (mean ~0.4 mm), covering ~30% of the section area. A ~1 mm chondrule was found, but given its low rounding it may be a cluster with more advanced recrystallization. Slightly oval fragments, still out of equilibrium, are the easiest to recognize. Types: PO (~95% of identifiable chondrules; very low glass <5%, usually few but large olivine crystals; commonly fractured or fragments of a previous body), PP (remaining ~5%; recrystallization more evident, no igneous glass, large visually homogeneous crystals).",
      texture: "High density of oxide-filled veins and glass sectors. Plagioclase well-developed with mostly connected crystals up to 0.1 mm."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "MV025": {
    basic: {
      name: "MV025",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "N/A",
      pieces: 1
    },
    classification: {
      class: "H3",
      shock: "S3",
      classifier: "D. N. Luna Vega (2022), guided by D. Moncada; N. Amengual Mondaca (2019), guided by D. Moncada; integrated by C. S. Aravena (2026)",
      description: "Mean chondrule size ~600 μm (similar to L range 600–800 μm). Metal content (~10%) exceeds H average (8%) and far surpasses L (3%) and LL (1.5%). Considering ~40% metal oxidation, original Fe-Ni estimated at ~14%, excluding L and LL groups and consistent with H. Most chondrules are well-defined. ~73% of matrix is fine-grained (excluding olivine/pyroxene fragments), only ~27% shows low-grade recrystallization. No plagioclase crystals observed. Mesostasis shows low to moderate recrystallization or devitrification. Matrix not 100% recrystallized — excludes type 4 or higher. Shock evidence: Luna (2022) reports one set of planar fractures in olivine. Amengual (2019) reports few shock effects, practically only shock veins, many empty and slightly filled by oxides. The shock veins, with thicknesses from 20 to 50 μm, are mostly present in the chondrules but extend far into the matrix, generally truncating at the border of another chondrule, though sometimes they also enter the new crystal; the swarms are heterogeneously distributed across the section but their overall presence is considerable. The great majority of the few troilite crystals present show a 'bubbly' texture and the pleochroism is noticeable. The planar fractures (Luna) and thin shock veins with local development (Amengual) reconcile at a moderate shock level; the bubbly troilite is isolated and less pervasive than in strongly shocked samples. Shock stage S3 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Reflected light microscopy estimates of kamacite and troilite replacement by Fe oxides. Luna (2022) reports 40% replacement for kamacite and 60% for troilite. Amengual (2019) describes an initial weathering stage with a low portion of Fe oxides: no important veins, since the main fractures of the section are internal chondrule fractures that do not pass more than 1 mm into the matrix; some fractures exploited weak points at the matrix–chondrule interface, reaching thicknesses of 30–40 μm, with only some partially filled and the rest almost completely hollow. Despite the low fracturing, weathering is homogeneously distributed across the section but very unequal in the degree of affection of each grain — an opaque almost without an oxide halo can be easily surrounded by completely replaced opaques. Almost all opaques are replaced by Fe-oxide halos, except a few troilite crystals that do so by intramineral replacement, though hard to determine given their small sizes. Silicates are unaffected; oxide covers between 50 and 60% of the total opaque area. Borderline W2–W3 (upper W2)."
    },
    petrology: {
      mineralogy: "Olivine (~30%, <0.4 mm in chondrules, subhedral in matrix), pyroxene (~18%, ≤0.2 mm in chondrules, subhedral in matrix), kamacite (~3–10% depending on estimation method: ~3% of section area per Amengual 2019 vs ~10% of sample volume per Luna 2022; grains <0.6 mm to ~25 μm, avg ~0.2 mm, subhedral, 0.2–0.5 mm per Amengual 2019, also present as ~1 μm droplets in chondrules and small grains in matrix), troilite (~0.3–1%: ~0.3% of section area per Amengual 2019 vs ~1% per Luna 2022; ≤0.1 mm, porous appearance, moderate to high Fe-Ni contact), chromite (~1%, ~25 μm, associated with troilite and kamacite in oxidized zones), plagioclase (<1%: none observed per Luna 2022; disconnected crystals ≤50 μm, mean ~30 μm, more abundant at the edges, per Amengual 2019).",
      matrix: "~40% of sample volume. Fine granoblastic texture, poorly recrystallized (Luna 2022), with mostly vitreous, porphyroblastic sectors showing few distinguishable crystalline fragments (Amengual 2019). 55% of matrix is opaque material (fine-grained, metal/sulfide droplets <25 μm, Fe oxides); 20% with low recrystallization; remaining 25% is mineral fragments (olivine and pyroxene, subhedral, olivine <0.3 mm, pyroxene <0.2 mm). Veinlets do not cross the whole section, interrupted at chondrule limits; width ~0.1 mm (range ~70 μm to 0.1 mm), only ~30% filled with oxides and not completely (Amengual 2019). Porosity: primary ~15%, ~85% from fracturing, holes 0.05–0.1 mm and 0.05–0.2 mm; hollow veins, filled veins, and porosity total ~0.5% of the section (Amengual 2019).",
      chondrules: "~40–45% of sample (40% of section area per Amengual 2019; ~45% of volume per Luna 2022). Generally well-rounded with clear limits, easy to distinguish. Size range 0.1–1.7 mm (avg ~0.6–0.7 mm). Low internal recrystallization, with glassy mesostasis up to ~30% in some cases. Types: PO (~50–55%; good olivine crystallinity in glassy mesostasis occupying 10–35% of the chondrule; the most porous), PP (~5–40% depending on source — ~5% per Luna 2022 vs ~40% per Amengual 2019; some with pyroxene cleavage, others with a dirtier aspect; less rounded, more oval), POP (~30% per Luna 2022), cryptocrystalline (~10% per Luna 2022), glass-rich and BO (~10% per Amengual 2019, with the clearest limits; a notable darker body with a pyroxene halo and internal microlites). Metal droplets (few μm to <1 μm) inside chondrules. Thick Fe-oxide veins surround chondrules, with microcrystalline material and silicate grains in the thickest veins.",
      texture: "Chondritic texture. Moderate to intense fracturing. Crosscut by veins of varying thickness, some of the thickest traverse the entire sample."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "MV088": {
    basic: {
      name: "MV088",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "N/A",
      pieces: 1
    },
    classification: {
      class: "H6",
      shock: "S5",
      classifier: "D. N. Luna Vega (2022)",
      description: "Chondrule size irrelevant due to extreme thermal metamorphism — almost no trace of chondrule families remains. Metal ~7% (slightly below H average 8%, but considering ~60% alteration, original points to H). Olivine ~40%, orthopyroxene ~30% confirm H group. Very few recognizable chondrules (poorly defined). Coarse granoblastic matrix with plagioclase crystals up to ~250 μm. Most pyroxenes are orthopyroxene. Mesostasis completely crystalline, fine to coarse grained. Type 6 with extreme thermal metamorphism."
    },
    weathering: {
      grade: "W3",
      description: "Both kamacite and troilite ~60% replacement. The abundant oxide 'pockets' in the sample contribute to the high replacement percentage (Luna 2022)."
    },
    petrology: {
      mineralogy: "Olivine (~40%, <0.6 mm in chondrules, subhedral in matrix), pyroxene (~30%, ≤0.1 mm in chondrules, subhedral in matrix), kamacite (~7%, grains ~0.6 mm to ~25 μm, avg ~100 μm, in matrix and as independent component), troilite (~7%, grains ~0.6 mm to <1 μm, avg ~150 μm, moderate metal-sulfide contact), plagioclase (~1%, subhedral, ≤250 μm, only in matrix as recrystallization product).",
      matrix: "~75% of sample volume. Coarse granoblastic texture, very high recrystallization. Composed mainly of olivine and pyroxene crystals, very few small (<25 μm) Fe-Ni metal and troilite grains. Olivine fragments: 0.6 mm to 150 μm, subhedral to euhedral. Recrystallized olivine: anhedral to euhedral, <150 μm. Pyroxene fragments: subhedral to euhedral, 0.7 mm to 200 μm. Recrystallized pyroxene ≤200 μm. Plagioclase present (largest ~250 μm). Crosscut by many oxide-filled veins.",
      chondrules: "~15% of sample volume (unreliable due to poor definition). Recognizable objects are sub-spherical heterogeneities: POP, PO, and cryptocrystalline types with moderate to high recrystallization. Diameters 0.4–1 mm (smaller chondrules completely diffused into matrix). Rare smaller sub-spherical objects (0.2–0.3 mm) partially surrounded by metal, which helped preserve their shape. A well-recognizable PO chondrule (~1 mm) in central zone shows two perpendicular fracture sets.",
      texture: "Primarily coarse granoblastic texture; chondritic texture not very representative. Highly fractured with many oxide-filled veins."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "DM053": {
    basic: {
      name: "DM053 A1",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "72.7 g",
      pieces: 1
    },
    classification: {
      class: "H6",
      shock: "S3",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Fayalite std dev 2.26, ferrosilite std dev 4.47. Lowest metamorphism shown by feldspar development (type 4 present but low development). Compositional homogeneity and matrix state closer to type 5. Chondrule and opaques state indicates highest metamorphism: chondrules still recognizable but with diffuse/lost boundaries (high type 5), opaques with few irregular extensions and some massive grains (early type 6 recrystallization). Final classification H6. Shock metamorphism evidenced mainly by melt veins, which are of micrometric thickness (<10 μm) and filled mainly by silicate glass and troilite in lesser quantity, the latter lost in many points due to advanced oxidation; the veinlets are semi-straight and surround the chondrules (rarely crossing them). Fracturing of crystalline fragments is completely irregular. Some opaque clusters could be mistaken for melt pockets, but their irregular shapes and lack of accumulation or direction pattern identify them as matrix opaques. Troilite shows no polycrystallinity nor pleochroism. Shock stage S3 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Weathering veins are present throughout the section, with an approximately constant thickness not exceeding ~50 μm at their thickest. The vast majority are filled, entirely with Fe oxides; only one family of thicker veins (~50 μm along their entire extent) remains empty, crossing the section longitudinally almost perpendicular to the edges. Replacement of metals and sulfides by oxides occurs as halos in kamacite and intramineral in most troilite. Fully replaced metals are mostly located near filled veins, being even more abundant than at the section edges. Weathering is heterogeneous: the most oxidized zones are near the edges and veins, with a mean of ~80% of total opaques replaced, but these areas are small; toward the center the mean drops to ~30%, while silicates are unaffected — total replacement estimated at ~60%. DM053 A1 and A2 belong to the same meteorite; weighted average by area (A2 ~0.3× total area of A1) gives combined replacement ~62%, corresponding to W2."
    },
    petrology: {
      mineralogy: "Kamacite ~3% of total area (grains mostly 0.2–0.5 mm along longest axis, mean surface ~4.3×10⁻⁴ mm²; subhedral, larger grains nearly euhedral; considerable Fe-oxide replacement at section edges — smallest crystals <0.3 mm almost fully replaced, larger grains deformed with halos <20% of crystal area; minimal replacement toward section center). Troilite ~1.5% of area (grains ≤0.2 mm along longest axis, mean area ~1.21×10⁻⁴ mm²; subhedral, more abundant toward the center than at the edges; many porous from small silicates <0.1 mm inside; grains beginning to be replaced show the typical scratch texture following crystallographic axes). Chromite <1% (≤0.1 mm, often in contact with kamacite). Metal–sulfide contact is rare, with no petrographic correlation. Plagioclase <1%, difficult to distinguish, many disconnected crystals <30 μm concentrated mainly toward the edges.",
      matrix: "60% of thin section. Porphyroblastic texture given by chondrules mostly >0.3 mm diameter. Initial but evident recrystallization stage: few well-distinguished silicates, ≤0.1 mm along longest axis, anhedral, with tenuous boundaries to their surroundings and no equilibrium contacts; internally each crystal appears homogeneous. Kamacite and troilite occur similarly in the matrix, mostly ≤70 μm, with advanced oxide replacement at the section edges. Matrix troilite concentrates mainly around chondrule contours and loses concentration toward the edges; kamacite is more homogeneous. Veinlets are minor, mostly opacite-filled, almost crossing the section longitudinally and not exceeding ~50 μm at their thickest. Porosity averages ~0.1 mm width, more abundant in the most oxidized zones, yet <1% of section area.",
      chondrules: "25% of total area. Diameters 0.3–0.6 mm (mean ~0.5 mm), with two particular ~1 mm bodies and a small group ≤0.2 mm that appear to be fragments of earlier bodies. Larger bodies well-rounded; smaller ones slightly irregular and elongated. Some chondrules have lost their borders and are distinguished by the silhouette formed by adjacent metal. Chondrules >0.5 mm show a distinctive fracture pattern resembling pyroxene cleavage. Low internal glass/mesostasis content (<10% per body), mostly in olivine chondrules. Recrystallization is at an initial stage: some crystals within a chondrule have lost their individuality and some sectors already appear as a single phase, yet bodies remain distinguishable from the matrix despite weak boundaries. Types: PO ~70% (near-average sizes, well-rounded, almost all with mesostasis — those without or with <1% are highly fractured; many occur in clusters; the largest chondrule is PO, with multiple crystals immersed in glass), PP ~30% (the largest chondrules apart from one; slightly square appearance with notable cleavage; no mesostasis), BO (only 2 found, adjacent to each other, ~0.3 mm).",
      texture: "Chondritic texture with porphyroblastic matrix. DM053 A1 and A2 are paired fragments of the same meteorite."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "DM053-A2": {
    basic: {
      name: "DM053 A2",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "63.5 g",
      pieces: 1
    },
    classification: {
      class: "H6",
      shock: "S3",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Paired with DM053 A1 (same meteorite). Fayalite std dev reduced from 10.02 to 3.64 after removing two outliers. Ferrosilite std dev 4.99. Chondrules with moderately diffuse boundaries, fragmented. Matrix heterogeneous, mostly microcrystalline, low feldspar development (type 4). Pyroxene compositional homogeneity (5%) and olivine clarity suggest transition to type 5. Opaque recrystallization indicates high type 5 to low type 6. Overall findings consistent with DM053 A1. Shock effects are very similar to DM053 A1, as expected for the same meteorite, indicating the process affected a large part of the body at similar intensities. Melt veins take greater relevance, as does their troilite fill, which is better preserved and more important within the silicate glass mass. Some large troilite crystals show a faint pleochroism that is difficult to recognize. Shock veins are distributed throughout the section, many taking advantage of weak zones such as chondrule edges, and preserve a large amount of their opaques; the vein swarms are smaller and less numerous than in DM053 A1. Shock stage S3 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W3",
      description: "Although from the same meteorite body as DM053 A1, the weathering effects differ slightly. The number of fully filled veins decreases and hollows are slightly more noticeable, though sealed veins still predominate. Troilite replacement remains predominantly intramineral, while fully replaced crystals begin to show dissolution. Vein thickness ranges from 10 to 60 μm, the thinnest being the most filled. Weathering effects are more homogeneous than in DM053 A1, mainly due to the greater number of fractures, replacing ~70% of total opaques at the edges and ~50% toward the center."
    },
    petrology: {
      mineralogy: "Kamacite ~2.5% of total area (subhedral, 0.1–0.3 mm along longest axis, mean surface ~4.3×10⁻⁴ mm²; mostly present near the larger chondrules, where it also reaches its largest dimensions; notable homogeneous oxide replacement — smallest grains ≤0.1 mm completely replaced, larger grains with halos inversely proportional to grain size, mean replacement 10–15% of total grain area). Troilite homogeneously distributed (subhedral, mean ~0.1 mm along longest axis, mean surface ~1.3×10⁻⁴ mm²; more advanced weathering — many grains almost fully replaced, evidenced by the ragged texture with ~80% of some crystals occupied by this opaque phase; well-preserved grains keep a small porous aspect from internal silicates). No petrographic metal–sulfide relationship is observed; contact between them is only occasional. Plagioclase <1%, disconnected crystals ≤0.02 mm.",
      matrix: "55% of total area. Porphyroblastic texture from the well-delimited chondrules. Recrystallization is little advanced: some small crystals <0.1 mm are still individually recognizable and many amorphous silicates between 0.1 and 0.2 mm. Brecciated appearance, with many fragments corresponding to ferromagnesian phases (no exotic additions) — relics of earlier fragmented bodies. Glass <10% of the matrix. Troilite is the second most relevant matrix component, homogeneously distributed but with a large portion replaced. Veinlets are few, entirely opacite-filled, not exceeding ~80 μm at their thickest; some filled veinlets become hollow again, the indentation branching off the main veinlet and suggesting a second shock/rupture process that took advantage of weak points. Porosity is low (<1% of area), holes ≤0.1 mm — the more regular ones possibly from dissolution, but mostly irregular, from shock or applied stress.",
      chondrules: "35% of total area. Conspicuous and easily recognizable given their well-marked borders and silhouettes formed by metals–sulfides. Diameters 0.2–0.5 mm (mean ~0.4 mm), including well-preserved fragments that lost their spherical shape. One particular ~1 mm chondrule with clear limits and good rounding stands out. All show internal fractures — some with the pyroxene cleavage pattern, but mostly irregular as typical of olivine; many affected by preparation damage. Mesostasis <5% in all chondrules, with almost no glass in the smallest (0.2–0.3 mm). A ~0.5 mm chondrule shows a border apparently distinct from its core. Types: PO ~80% (the most common but among the smallest, below average; clear limits but rounding slightly lost by fractures, appearing more as fragments than original bodies), PP ~15% (the largest chondrule of the section belongs to this type; slightly above average size, more elongated, mostly recognized by internal cleavage; better limits and rounding than PO), POP (only 1 found, ~0.3 mm; two large pyroxene crystals occupying just under 30% of the chondrule, 65% small olivine crystals, the rest glass).",
      texture: "Chondritic, with porphyroblastic matrix from the well-delimited chondrules. Chondrule fragments larger and more abundant than in DM053 A1. Predominance of ferromagnesian minerals in matrix and chondrules. Hollow veinlets branching off filled ones suggest a second shock event."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "DM055-A2": {
    basic: {
      name: "DM055 A2",
      observedFall: "No",
      yearFound: 2017,
      country: "Chile",
      mass: "22.1 g",
      pieces: 1
    },
    classification: {
      class: "L6",
      shock: "S4",
      classifier: "N. Amengual Mondaca (2019)",
      description: "Low std dev for fayalite (3.26) and ferrosilite (4.15). Plagioclase in advanced stage, with crystals present in matrix and chondrules. Chondrules lack defined borders and have lost internal glass, hindering delineation. Matrix completely recrystallized with homogeneous crystals and no mesostasis. High-intensity metamorphism, type 6. Given the high weathering level, melt droplets and polycrystalline or pleochroic troilite cannot be identified, leaving only the shock veinlets as evidence. These are of considerable thickness, between 20 and 50 μm, filled with oxides, reaching up to ~80% fill in certain sectors or sometimes hollow by dissolution, generating secondary porosity. The veins are largely interconnected, reaching lengths that cross almost the whole area. Recognizable olivine chondrules show mosaicism at an initial stage of development. Shock stage S4 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W4",
      description: "The most weathered sample in the collection. Almost the totality of opaques is replaced. Vein thickness ranges from 10 to 80 μm, entirely filled with Fe oxides. Surviving opaques have thick oxide halos and most also show intramineral replacement, while some already fully replaced crystals begin to undergo dissolution, generating secondary porosity. Effects are homogeneous across the whole area, attributed to the high vein density of this meteorite. The recognizable olivine crystals show sets of planar and irregular fractures."
    },
    petrology: {
      mineralogy: "Olivine 25-45 wt% SiO₂, Fa 20-25%. Low-Ca pyroxene 49-61 wt% SiO₂ with ferromagnesian pyroxenes showing local Ca, Na, Al enrichments. Oxidation and replacement very advanced — at least 80% of sulfide and metallic Fe phases replaced. Surviving grains ≤0.1 mm along longest axis, mostly troilite with its typical replacement texture; silhouettes suggest anhedral to subhedral crystals that may reach ~0.5 mm. Metal and sulfide phases homogeneously distributed in the matrix but absent in chondrules; together they cover no more than 0.5% of the section (troilite mean surface estimated at ~0.2 mm²; kamacite too small and scarce to measure). Plagioclase has considerable presence, though difficult to differentiate initially: many disconnected crystals ~0.01 mm, with some bodies ~0.05–0.06 mm — the larger crystals located at more fractured points and tending toward the edges.",
      matrix: ">65% of total section. Medium to fine granoblastic texture, with crystals averaging ~0.08 mm in diameter, high percentage of opaques from oxides, and a high density of veins that characterizes it. Advanced recrystallization, no mesostasis. Composed mainly of silicates (presumably ferromagnesian) and oxides that replaced metals, filled veins, and concentrate around them. Porosity is notable, mostly attributable to dissolution, heterogeneously distributed, covering just under 1% of total area with holes near ~0.1 mm in diameter.",
      chondrules: "Difficult to identify, borders almost indistinguishable, slightly oval shape. Distinguishable ones outlined by opaque phases. Many crossed by filled veins. No glass or mesostasis; most chondrules appear as a single body without independent crystals, evidencing advanced recrystallization. Original sizes estimated at 0.2–0.6 mm (mean ~0.4 mm), the largest having lost their roundness by merging with an adjacent body or part of the matrix. No fracturing or internal cleavage. Types: PO (≥90% of chondrules, distinguished by certain irregular fractures and a flatter gray tone than the surroundings), PP (≤10%, identified by a dirtier surface than the other chondrules).",
      texture: "Highly recrystallized granoblastic texture. High weathering overprint."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
      state: "Antofagasta"
    }
  },
  "Catalina 008": {
    basic: {
      name: "Catalina 008",
      observedFall: "No",
      yearFound: 2011,
      country: "Chile",
      mass: "98 g",
      pieces: 1
    },
    classification: {
      class: "CO3",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3 (Meteoritical Bulletin 102). The most primitive specimen of the study: notably CAI-rich, with XRD identifying gehlenite-rich (type A) and melilite-bearing (type B) CAIs, plus anorthite and fassaite. Four types of glass inclusions documented (type 1: glass+crystal+bubble; type 2: glass+bubble; type 3: glass only; type 4: glass+crystals). A glass-inclusion family in olivine with large bubbles (>80 vol%) suggests fluid inclusions in a high-temperature mineral — uncommon, proposed for future study. Raman detected polyaromatic organic matter (PAH). LA-ICP-MS Al/Ca ≈ 1.0 (CI-like) with enriched MIA3/MIA4 families. Oxygen isotopes Δ¹⁷O = −4.84‰."
    },
    weathering: {
      grade: "W2",
      description: "Moderate weathering (W mod.) as reported in Meteoritical Bulletin 102."
    },
    petrology: {
      mineralogy: "XRD normalized wt%: akermanite 30, gehlenite 27, enstatite 20, forsterite 21, magnetite 18, melilite 15, kamacite 14, chromite 9, fassaite 5, troilite 4, anorthite 3. High gehlenite is indicative of type A CAIs; subordinate melilite of type B CAIs.",
      matrix: "Carbonaceous matrix hosting abundant CAIs; organic matter (PAH) detected by Raman in the sample, not in the glass-inclusion families.",
      chondrules: "Glass inclusions of four types (type 1: glass+crystal+bubble; type 2: glass+bubble; type 3: glass only; type 4: glass+crystals). A family with large bubbles (>80 vol%) in an olivine crystal suggests fluid inclusions.",
      chemicalGroup: "CO3 (carbonaceous, CO type, petrologic type 3)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  },
  "El Médano 216": {
    basic: {
      name: "El Médano 216",
      observedFall: "No",
      yearFound: 2011,
      country: "Chile",
      mass: "1323 g",
      pieces: 1
    },
    classification: {
      class: "CO3",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3 (Meteoritical Bulletin 103). Paired with RM 567, RM 568 and RM 569 on the basis of CO textural characteristics, glass-inclusion families, LA-ICP-MS concentrations, forsterite identified by Raman, and density and magnetic susceptibility measurements performed at the Universidad de Atacama (ρ 3.37 g/cm³, log χ 4.49)."
    },
    weathering: {
      grade: "W1",
      description: "Minimal weathering (W mín.) as reported in Meteoritical Bulletin 103."
    },
    petrology: {
      mineralogy: "XRD normalized wt%: forsterite 12, enstatite 8, kamacite 7, chromite 4, troilite 4. No magnetite detected, consistent with limited aqueous alteration.",
      matrix: "~47.1% of the sample.",
      chondrules: "~32.2% of the sample, mean diameter ~0.15 mm (CP 27.5%, CAIs 3.7%). Modal analysis (Table 4.5): opaques 6.0%, porosity 2.4%.",
      chemicalGroup: "CO3 (carbonaceous, CO type, petrologic type 3)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  },
  "Los Vientos 123": {
    basic: {
      name: "Los Vientos 123",
      observedFall: "No",
      yearFound: 2015,
      country: "Chile",
      mass: "575 g",
      pieces: 1
    },
    classification: {
      class: "CO3.1",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3.1 (Meteoritical Bulletin 105; subtype after Bonal et al. 2016). Pristine specimen (log χ 4.74, Δ¹⁷O = +5.04‰). Organic matter detected by Raman in matrix grains; not detected in the glass-inclusion families (cannot be ruled out)."
    },
    weathering: {
      grade: "W2",
      description: "Low weathering (W bajo) as reported in Meteoritical Bulletin 105."
    },
    petrology: {
      mineralogy: "XRD normalized wt%: magnetite 28, clinoenstatite 22, chromite 20, forsterite 20, kamacite 8, troilite 8. Magnetite is associated with aqueous alteration of the chondrite.",
      matrix: "Carbonaceous matrix; organic matter (PAH) detected by Raman in matrix grains.",
      chondrules: "CO3.1 subtype after Bonal et al. (2016); glass inclusions of types 2 and 4 reported; Fe/Ni depletion in the studied inclusions.",
      chemicalGroup: "CO3.1 (carbonaceous, CO type, petrologic subtype 3.1)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  },
  "RM 567": {
    basic: {
      name: "RM 567",
      observedFall: "No",
      yearFound: 2011,
      country: "Chile",
      mass: "1186 g",
      pieces: 1
    },
    classification: {
      class: "CO3",
      shock: "S1",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3 with textural characteristics typical of the CO type. Final classification S1, W2–3; excellent pairing candidate with El Médano 216. Olivine (~20%) with igneous zoning and planar fractures; pyroxene <20%; polycrystalline troilite <2%; kamacite ~3% with 20–60% replacement."
    },
    weathering: {
      grade: "W2–3",
      description: "Kamacite ~3% with 20–60% oxide replacement (W2); weathering grade W2–3."
    },
    petrology: {
      mineralogy: "Olivine ~20% with igneous zoning and planar fractures; pyroxene <20%; troilite <2% polycrystalline; kamacite ~3% replaced 20–60% (W2). Smectite and serpentine present.",
      matrix: "Granoblastic, ~44.3% of the sample.",
      chondrules: "~32.9% of the sample, mean diameter ~0.145 mm (CP 28.8%, CAIs 3.3%). Modal analysis (Table 4.5): opaques 3.7%, porosity 13.0%.",
      chemicalGroup: "CO3 (carbonaceous, CO type, petrologic type 3)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  },
  "RM 568": {
    basic: {
      name: "RM 568",
      observedFall: "No",
      yearFound: 2011,
      country: "Chile",
      mass: "3071 g",
      pieces: 1
    },
    classification: {
      class: "CO3",
      shock: "S1-2",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3. Final classification W0–1, S1–2; possible pairing candidate with El Médano 216. Olivine ~20%; pyroxene ~30% with planar fracture; kamacite <2% (W0–1); troilite <1% polycrystalline with pleochroism; possible maskelynite. Higher chondrule proportion (~51%) than the other candidates."
    },
    weathering: {
      grade: "W0–1",
      description: "Very fresh; kamacite <2% with negligible replacement (W0–1)."
    },
    petrology: {
      mineralogy: "Olivine ~20%; pyroxene ~30% with planar fracture; kamacite <2% (W0–1); troilite <1% polycrystalline with pleochroism; possible maskelynite.",
      matrix: "~33.5% of the sample.",
      chondrules: "~50.7% of the sample, mean diameter ~0.126 mm (CP 45.0%, CAIs 2.6%). Modal analysis (Table 4.5): opaques 3.0%, porosity 8.3%.",
      chemicalGroup: "CO3 (carbonaceous, CO type, petrologic type 3)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  },
  "RM 569": {
    basic: {
      name: "RM 569",
      observedFall: "No",
      yearFound: 2011,
      country: "Chile",
      mass: "1242 g",
      pieces: 1
    },
    classification: {
      class: "CO3",
      shock: "S1-2",
      classifier: "C. S. Aravena (2019), guided by D. Moncada, Universidad de Chile",
      description: "Carbonaceous chondrite CO3. Final classification S1–2, W<2; possible pairing candidate with El Médano 216. Olivine ~15%; pyroxene ~10% with planar fracture; fine kamacite/troilite (~10 μm); oxides replacing 20–60% (W2); microveins (S2–3). Smectite and serpentine present."
    },
    weathering: {
      grade: "W1–2",
      description: "Oxides replacing kamacite/troilite 20–60% (W2); weathering below W2 (W<2)."
    },
    petrology: {
      mineralogy: "Olivine ~15%; pyroxene ~10% with planar fracture; fine kamacite and troilite grains ~10 μm; oxides replacing 20–60% (W2); microveins (S2–3). Smectite and serpentine present.",
      matrix: "~50.8% of the sample.",
      chondrules: "~29.0% of the sample, mean diameter ~0.14 mm (CP 24.5%, CAIs 3.2%). Modal analysis (Table 4.5): opaques 3.2%, porosity 9.0%.",
      chemicalGroup: "CO3 (carbonaceous, CO type, petrologic type 3)."
    },
    location: {
      coordinates: "N/A",
      mainMass: "SERNAGEOMIN",
      finder: "Museo del Meteorito, San Pedro de Atacama",
      state: "Antofagasta"
    }
  }
};

const IR_FILES = {
  "Exp19-01":"Exp19-01f2_60m_604_0.5.txt",
  "Exp19-04":"Exp19-04f2_60m_537_0.5.txt",
  "Exp19-06":"Exp19-06f3_60m_674_0.5.txt",
  "Exp19-07":"Exp19-07_60m_727_0.5.txt",
  "Exp19-08":"Exp19-08f2_60m_718_0.5.txt",
  "Exp19-09":"Exp19-09_60m_667_0.5.txt",
  "Exp19-10":"Exp19-10f2_60m_571_0.5.txt",
  "Exp19-11":"Exp19-11f2_60m_668_0.5.txt",
  "Exp19-12":"Exp19-12f2_60m_737_0.5.txt",
  "Exp19-13":"Exp19-13f2_60m_783_0.5.txt",
  "Exp19-14":"Exp19-14f3_60m_594_0.5.txt",
  "Exp19-18":"Exp19-18_60m_920_0.5.txt",
  "Exp19-21":"Exp19-21f3_60m_730_0.5.txt",
  "Exp19-24":"Exp19-24f3_60m_725_0.5.txt",
  "Exp19-30":"Exp19-30f1-3_60m_774_0.5.txt",
  "Exp19-31":"Exp19-31_60m_874_0.5.txt",
  "Exp19-32":"Exp19-32f2_60m_702_0.5.txt",
  "Exp19-34":"Exp19-34f2_60m_772_0.5.txt",
  "Exp19-41":"Exp19-41f3_60m_802_0.5.txt",
  "Exp19-42":"Exp19-42f3_60m_773_0.5.txt",
  "Exp19-43":"Exp19-43_60m_818_0.5.txt",
  "Exp19-44":"Exp19-44f2_60m_748_0.5.txt",
  "Exp19-45":"Exp19-45_60m_945_0.5.txt",
  "Exp19-46":"Exp19-46f2-2_60m_914_0.5.txt",
  "Exp19-47":"Exp19-47f3_60m_769_0.5.txt",
  "Exp19-48":"Exp19-48f2_60m_732_0.5.txt",
  "Exp19-49":"Exp19-49f2-3_60m_752_0.5.txt",
  "Exp19-50":"Exp19-50f2_60m_845_0.5.txt",
  "Exp19-51":"Exp19-51f2_60m_659_0.5.txt",
  "Exp19-52":"Exp19-52f25-26_60m_639_0.5.txt",
  "Exp19-53":"Exp19-53f3_60m_962_0.5.txt",
  "Exp19-54":"Exp19-54_60m_936_0.5.txt",
  "Exp19-56":"Exp19-56f4_60m_836_0.5.txt",
  "Exp19-59":"Exp19-59_60m_837_0.5.txt"
};

const IR_DIR = location.href.substring(0, location.href.lastIndexOf('/') + 1);
