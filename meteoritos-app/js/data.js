const SAMPLES = [
  {c:"Exp19-01",n:"Catalina 1",lc:5.285,pW:2,ir:"sí",t:"H",shk:"S5",loc:"Catalina",nota:"H5 S5; ringwoodite, maskelynite, PDFs, fizzed troilite"},
  {c:"Exp19-03",n:"Catalina 3",lc:4.581,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; preservar"},
  {c:"Exp19-04",n:"Catalina 4",lc:4.740,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; par con 32"},
  {c:"Exp19-05",n:"Catalina 5",lc:4.654,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; Caída 2"},
  {c:"Exp19-06",n:"Catalina 6",lc:4.837,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; f2 a SD"},
  {c:"Exp19-07",n:"Catalina 7",lc:4.991,pW:null,eW:1,ir:"sí",t:"H",loc:"Catalina",nota:"KLY5 H; no petrography"},
  {c:"Exp19-08",n:"Catalina 8",lc:4.686,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-09",n:"Catalina 9",lc:4.882,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L→H?; borde H"},
  {c:"Exp19-10",n:"Catalina10",lc:4.652,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR listo"},
    {c:"Exp19-11",n:"Catalina11",lc:4.971,pW:1,ir:"sí",t:"H",shk:"S6",loc:"Catalina",nota:"H6 S6; ringwoodite in olivine, mosaicism S5–S6"},
   {c:"Exp19-12",n:"Catalina12",lc:4.851,pW:null,eW:0,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-13",n:"Catalina13",lc:5.166,pW:null,eW:1,ir:"sí",t:"H",loc:"Catalina",nota:"H; IR: diferente a todos"},
   {c:"Exp19-14",n:"Catalina14",lc:5.348,pW:2,ir:"sí",t:"H",loc:"Catalina",shk:"S1",nota:"H3.8 S1 W2; cóndrulos bien definidos, metales pequeños en cóndrulos, matriz oscura"},
   {c:"Exp19-15",n:"Catalina15",lc:null,pW:2,ir:"no",t:"L",loc:"Catalina",shk:"S6",nota:"L4 S6; cóndrulos bien definidos, troilita con Ni, fizzed, melt veins"},
  {c:"Exp19-17",n:"Catalina17",lc:4.817,pW:null,eW:1,ir:"no",t:"L",loc:"Catalina",nota:"L; Caída 1"},
   {c:"Exp19-18",n:"Catalina18",lc:null,pW:3,ir:"sí",t:"LL",loc:"Catalina",shk:"S5",nota:"LL5 S5 W3; troilita+kamacita oxidadas ~75–80%"},
  {c:"Exp19-19",n:"Catalina19",lc:4.694,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 12/08"},
   {c:"Exp19-20",n:"Catalina20",lc:null,pW:4,ir:"no",t:"LL",shk:"S5",loc:"Catalina",nota:"LL6 W4 S5; kamacita ~2%, troilita ~1%, opacos ~7%, PDFs, plessita, shock veins, alteración silicatos"},
   {c:"Exp19-21",n:"Catalina21",lc:5.118,pW:3,ir:"sí",t:"H",shk:"S4",loc:"Catalina",nota:"H4 S4 W3; shock veins, troilita en contacto con kamacita"},
  {c:"Exp19-22",n:"Catalina22",lc:4.521,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 08"},
  {c:"Exp19-23",n:"Catalina23",lc:4.505,pW:null,eW:0,ir:"no",t:"LL",loc:"Catalina",nota:"LL; χ diagnóstico"},
  {c:"Exp19-24",n:"Catalina24",lc:4.589,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR: parece 04 y 08"},
  {c:"Exp19-25",n:"Catalina25",lc:5.252,pW:null,eW:0,ir:"no",t:"H",loc:"Catalina",nota:"H; χ diagnóstico"},
  {c:"Exp19-26",n:"Catalina26",lc:4.655,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 10"},
    {c:"Exp19-27",n:"Catalina27",lc:null,pW:3,ir:"no",t:"L",shk:"S5",loc:"Catalina",nota:"L5 W3 S5; kamacita ~7%, troilita ~3% (fizzed), remplazo 10–60%, shock veins"},
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
     samples:["Exp19-54","Exp19-46"]}
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
  "DM055-A2":22.1
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
  "DM055-A2":"Nicolás Amengual Mondaca"
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
  "DM055-A2":null
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
  "DM055-A2":1
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
      shock: "S5",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Magnetic susceptibility (KLY5, log χ = 5.285) falls within the H field of Rochette et al. (2003). Petrography confirms petrologic type 5: chondrule textures are discernible but not clearly delineated, matrix is recrystallized with orthopyroxene predominating over clinopyroxene, secondary feldspar occurs as microcrystalline aggregates, and opaque minerals (kamacite ~28%, troilite ~12%) are well-preserved with low weathering (W2). Shock indicators include ringwoodite in some olivine grains, common maskelynite (plagioclase → glass), planar deformation features (PDFs) with local blackening in olivine, and fizzed troilite, consistent with shock stage S5 (Stöffler et al., 1991). Classified as H5 S5 ordinary chondrite."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~30% with minor oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with limonite patina. Small fractures (~0.2–3 mm) and minor oxide-filled veinlets (~0.2–3 mm). Olivine (~21%, ~0.1–0.7 mm), pyroxene (~20%, ~1 mm to cryptocrystalline), feldspar (~20%), kamacite (~28%, ~0.5–0.1 mm), troilite (~12%, ~0.25–0.5 mm). Olivine and pyroxene are subhedral; kamacite and troilite are anhedral. Olivine: ~100% of chondrules. Pyroxene: ~43% in chondrules, ~57% in matrix. Kamacite: ~10% in chondrules, ~90% in matrix. Troilite: ~10% in chondrules, ~90% in matrix.",
      matrix: "~30% volume. Feldspar: ~60%, cryptocrystalline. Pyroxene: ~40%, cryptocrystalline. Presence of oxide- and opaque-filled veinlets (kamacite and troilite).",
      chondrules: "~70% of total volume, radii 0.1–0.3 mm. Defined to irregularly defined, subrounded. Types: PO (~12%, ~0.3 mm), PP (~6%, ~0.1–0.2 mm), POP (~12%, ~0.2–0.3 mm), BO (~40%, ~0.1–0.3 mm), RP (~50%, ~0.3 mm), G (~5%, ~0.1 mm), C (~20%, ~0.3 mm).",
      chemicalGroup: "H — magnetic susceptibility (log χ) = 5.285"
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
      classifier: "C. S. Aravena (2026)",
      description: "Reclassified as H based on abundant opaques and metals (kamacite ~9%, troilite ~9%), consistent with H-group ordinary chondrite. Extensive obliteration of primary textures with recrystallized matrix and interstitial secondary feldspar grains indicate petrologic type 6 (Van Schmus & Wood, 1967). Olivine shows pervasive mosaicism indicative of shock S5–S6, with localized ringwoodite in olivine confirming S6 shock stage (Stöffler et al., 1991). KLY5 magnetic susceptibility (log χ = 4.971) is consistent with H classification."
    },
    weathering: {
      grade: "W1",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ≤20% with minor oxidized veinlets. Weathering stage W1 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with extensive obliteration of primary textures and recrystallized matrix. Fractures, veinlets, and limonite patina. Oxide-filled veinlets ~0.25–12 mm. Olivine (~21%, ~0.1–0.4 mm), pyroxene (~14%, <0.2 mm), feldspar (~21%), kamacite (~9%, <0.7 mm), troilite (~9%, <0.4 mm). Olivine and pyroxene are prismatic and subhedral; kamacite and troilite are anhedral. Olivine: ~50% in chondrules, ~50% in matrix. Pyroxene: ~50% in chondrules, ~50% in matrix. Feldspar: ~20% in chondrules, ~80% in matrix. Kamacite: ~5% in chondrules, ~95% in matrix. Troilite: ~5% in chondrules, ~95% in matrix.",
      matrix: "~40% volume. Almost entirely covered by limonite patina. Feldspar: ~50%, cryptocrystalline. Olivine subhedral: ~30%, ~0.1–0.4 mm. Pyroxene subhedral: ~20%, <0.3 mm. Troilite observed around chondrules.",
      chondrules: "~60% of total volume, rounded to subrounded, radii 0.1–0.3 mm. Defined to irregularly defined. Types: PO (~29%, ~0.1–0.3 mm), PP (~67%, ~0.1–0.3 mm), BO (~5%, ~0.1 mm).",
      chemicalGroup: "H — KLY5 log χ = 4.971; abundant opaques and metals confirm H group"
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
      shock: "S6",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Reclassified as L4 S6 based on new petrographic observations. Chondrules are well defined but show incipient matrix integration, consistent with petrologic type 4 (Van Schmus & Wood, 1967). The sample exhibits the highest shock overprint in the collection: nearly all troilite grains are vesiculated ('fizzed') or completely destroyed, polymineralic melt veins crosscut kamacite, and troilite grains contain Ni-rich domains indicative of high-temperature melting and metal-sulfide mixing during impact. The opaque fraction is lower than H-chondrite standards and visually intermediate between LL and H, consistent with L-group ordinary chondrite metal abundance. Sample appears orange due to limonite patina."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~30% with minor oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with well-defined chondrules. Limonite patina. Oxide-filled veinlets ~1 mm. Olivine, pyroxene, feldspar, kamacite, troilite. Olivine and pyroxene are prismatic and subhedral; kamacite and troilite are anhedral. Troilite frequently shows vesiculated ('fizzed') textures. Polymineralic melt veins present in kamacite. Troilite grains locally contain Ni-rich domains.",
      matrix: "~30% volume. Inequigranular granoblastic texture with limonite patina.",
      chondrules: "~70% of total volume, rounded to subrounded, well defined, radii ~0.1–0.8 mm. Types: PO, PP, POP, BO, RP, G, C.",
      chemicalGroup: "L — metal content intermediate between LL and H; reclassified from H based on new observations"
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
      shock: "S5",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "Reclassified as L5 based on new petrographic observations: kamacite ~7%, troilite ~3%, total opaque fraction ~10%, consistent with L-group ordinary chondrite. Chondrule textures are discernible but not clearly delineated. Matrix is recrystallized. Orthopyroxene predominates over clinopyroxene with absence of well-developed plagioclase. Secondary feldspar occurs predominantly as microcrystalline aggregates. Petrologic type 5 per Van Schmus & Wood (1967). Extensive fracturing and shock veins filled with opaques. Troilite is typically fizzed, indicative of high shock. Shock stage S5 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W3",
      description: "Kamacite grains show variable replacement by oxides (10–60%). Shock veins filled with opaques. Weathering stage W3 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with discernible but not clearly delineated chondrules. Extensive fracturing. Shock veins filled with opaques. Olivine, pyroxene, feldspar, kamacite (~7%, 10–60% replaced), troilite (~3%, smaller than kamacite, in contact or isolated).",
      matrix: "~30% volume. Inequigranular granoblastic texture.",
      chondrules: "~70% of total volume, radii 0.1–0.3 mm, rounded to subrounded, defined to irregularly defined. Types: PO, PP, POP, BO, RP.",
      chemicalGroup: "L — kamacite ~7%, troilite ~3%, total opaques ~10%"
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
      shock: "S5",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Abundant shock veins crosscut the sample. Silicates show undulose extinction, mosaicism and planar deformation features in olivine, as well as glassy sectors associated with this mineral. Pyroxenes are scarce and show low birefringence. Troilite and kamacite are heavily replaced by oxides (~75–80%). Opaque phases are mainly kamacite, troilite, and taenite. The coexistence of intracrystalline deformation in silicates, shock glass, and impact veins suggests a significant shock overprint, consistent with shock stage S5 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W3",
      description: "Troilite and kamacite are heavily replaced by oxides (~75–80%). Weathering stage W3 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Olivine, pyroxene, maskelynite, kamacite, troilite, taenite.",
      matrix: "Recrystallized matrix with abundant shock vein network.",
      chondrules: "Moderately delineated chondrules.",
      chemicalGroup: "LL — magnetic susceptibility (KLY5) pending."
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
      classifier: "D. N. Luna Vega (2022)",
      description: "Fe-Ni metal content estimated at 15% (not accounting for oxidized metal). Chondrule contours are moderately affected by high matrix recrystallization. Approximately 20% of chondrules are well-defined. Matrix is translucent over at least 50%, with recrystallization degree ranging from moderate to high (highly recrystallized predominant). Plagioclase crystals up to ~100 μm, averaging ~50 μm. Orthopyroxene content estimated higher than clinopyroxene. Chondrule mesostasis is mostly crystalline or devitrified. Chemical group H, petrologic type 5."
    },
    weathering: {
      grade: "W1",
      description: "Reflected light microscopy was used to estimate replacement of troilite and kamacite by Fe oxides. Luna (2022) reports estimated average replacement of ~18% for kamacite and ~13% for troilite, both below the 20% threshold. Borderline W1–W2 (upper W1)."
    },
    petrology: {
      mineralogy: "Olivine (~40%, ~600 μm in chondrules), pyroxene (~30%, ≤400 μm), kamacite (~15%, <2.5 mm and >50 μm), troilite (~7%, <0.5 mm), chromite (~1%, ~50 μm), plagioclase (<1%, ~50 μm).",
      matrix: "~35% volume. Subhedral to euhedral olivine (150–500 μm) and pyroxene crystals. Total olivine+pyroxene fragments ~25% of matrix volume. Plagioclase grains (<100 μm) ~1% of matrix.",
      chondrules: "~50% volume. Size range 150 μm to 1.3 mm, moderately defined borders. Most abundant types: PO, POP, cryptocrystalline (mostly low to moderate recrystallization). Less abundant: OB, RP, PP. Some cryptocrystalline and PO chondrules contain small, semicircular metal droplets and minor troilite.",
      texture: "Chondritic and granoblastic texture. High degree of fracturing at both individual crystal and whole-sample scale. Crosscut by veins of varying thickness, generally short-range."
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Problematic classification: olivine compositional homogeneity suggests type 4 (transition from 3), pyroxene closer to type 5 (low std dev), plagioclase microcrystalline aggregate inconex and small (type 4). Chondrules: some with clear boundaries and sharp edges, others with diffuse limits (type 4, near type 5 boundary). Matrix: opaque zones (type 3) and microcrystalline zones (type 4). Opaque crystallinity shows large crystals with 'octopus' morphology and irregular extensions, suggesting incomplete recrystallization — attributed to high type 4 or low type 5."
    },
    weathering: {
      grade: "W1",
      description: "No specific details provided in Amengual (2019)."
    },
    petrology: {
      mineralogy: "Kamacite (~4%, <0.3 mm), troilite (~3%, 0.2–0.4 mm). Important kamacite–troilite contact throughout the section. Small carbon aggregates in olivine Fo87-89, with Ca (<20 wt% oxide) and variable Si and Mg. Possible S-rich internal crystals not associated with troilite.",
      matrix: "Composed mainly of olivine and glass, very little pyroxene (most matrix is recrystallized mesostasis). Glass-rich chondrules are Si- and Mg-rich with some Al spots.",
      chondrules: "~45% of section area. Considerable glass portion, olivine dominates. Diameters 0.2–1 mm (avg ~0.5 mm). PO: 90% of chondrules, mesostasis always <20%. PP: 10% with internal cleavage, very little mesostasis (<5%). Two glass-rich chondrules (~0.4 mm), nearly perfectly rounded, with noticeable recrystallization (possible pyroxene microcrystals)."
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Olivine and pyroxene values suggest type 4 (or even 3 considering outliers), but these estimates may be biased as only better-preserved chondrules were analyzed due to high opaque content in matrix. Matrix recrystallization, relict chondrules, and notable plagioclase development are consistent with petrologic type 6."
    },
    weathering: {
      grade: "W2",
      description: "No specific details provided in Amengual (2019)."
    },
    petrology: {
      mineralogy: "Kamacite (large crystals, mean 0.3–0.4 mm, some near 1 mm; 1.8% of section). Troilite ('secondary', weathered with holes but little replacement; mean ~0.1 mm with common 0.5–0.6 mm; 1.6% of section). Both phases concentrated in matrix, nearly absent in chondrules. Disseminated crystals within impact veins filled with opaques. Matrix mineralogy dominated by roughly equal olivine and pyroxene; pyroxene shows Ca- and/or Na-enriched zones and Si→Al replacement. Plagioclase present in both identifiable chondrules and matrix, with connected crystals of considerable size.",
      matrix: "Brecciated appearance from shock and cutting/polishing. Fine granoblastic texture, low glass content, nearly homogeneous grain size. High percentage of impact veins filled with oxides and troilite microcrystals (~15% of section, 0.5–2 mm wide). Microscopic unfilled veins (0.1–0.4 mm) along edges. Porosity <1%, associated with weathering and fracturing near veins.",
      chondrules: "Relict chondrules, very difficult to identify (nearly total loss of borders). Two initial phases proposed based on color and texture. Identifiable chondrules 0.5–1 mm diameter (likely merged from two bodies that lost boundaries). Mean diameter ~0.9 mm, covering 13% of area. No internal glass — advanced recrystallization. Types: PO (85%), PP (15%) with cleavage fractures.",
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Difficult analysis due to high density of oxide-filled veins and glass sectors causing contamination. Fayalite and ferrosilite std dev 3.48 and 1.89 respectively (anomalous olivine with incoherent SiO₂ and MgO excluded). Pyroxene variability suggests type 4→5, but significant plagioclase development (crystals mostly connected, up to 0.1 mm), almost completely recrystallized matrix, and poorly defined chondrules indicate evolution toward type 6."
    },
    weathering: {
      grade: "W3",
      description: "No specific details provided in Amengual (2019)."
    },
    petrology: {
      mineralogy: "Troilite with very weak pleochroism, difficult to recognize due to high replacement and small crystal size. Normative olivine shows slightly higher SiO₂ (~2 wt% oxide above expected) but within acceptable range. Pyroxenes show no Si→Al replacement; Ca-rich pyroxenes are small fragments surrounded by thick oxide veins (almost negligible presence). Pyroxene Fe content ranges 10–15% Fs with low dispersion. Olivine shows complex behavior with high Fe dispersion. Cr-rich opaques appear to have nucleated on vein walls; S-rich opaques may be immiscibility products (centralized, with Si and Al content not suggesting previous troilite).",
      matrix: "Almost completely recrystallized, no opaque sectors beyond oxide veins. Contains crystalline fragments of various sizes.",
      chondrules: "Poorly defined, barely recognizable. Borders almost completely lost, low glass content.",
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
      classifier: "D. N. Luna Vega (2022)",
      description: "Mean chondrule size ~600 μm (similar to L range 600–800 μm). Metal content (~10%) exceeds H average (8%) and far surpasses L (3%) and LL (1.5%). Considering ~40% metal oxidation, original Fe-Ni estimated at ~14%, excluding L and LL groups and consistent with H. Most chondrules are well-defined. ~73% of matrix is fine-grained (excluding olivine/pyroxene fragments), only ~27% shows low-grade recrystallization. No plagioclase crystals observed. Mesostasis shows low to moderate recrystallization or devitrification. Matrix not 100% recrystallized — excludes type 4 or higher."
    },
    weathering: {
      grade: "W2",
      description: "Reflected light microscopy was used to estimate replacement of troilite and kamacite by Fe oxides. Parra (2022) reports 40% replacement for kamacite and 60% for troilite. Borderline W2–W3."
    },
    petrology: {
      mineralogy: "Olivine (~30%, <0.4 mm in chondrules, subhedral in matrix), pyroxene (~18%, ≤0.2 mm in chondrules, subhedral in matrix), kamacite (~10%, <0.6 mm to ~25 μm, avg ~0.2 mm, also present as ~1 μm droplets in chondrules and small grains in matrix), troilite (~1%, ≤0.1 mm, porous appearance, moderate to high Fe-Ni contact), chromite (~1%, ~25 μm, associated with troilite and kamacite in oxidized zones).",
      matrix: "~40% of sample volume. Fine granoblastic texture, poorly recrystallized. 55% of matrix is opaque material (fine-grained, metal/sulfide droplets <25 μm, Fe oxides). 20% with low recrystallization. Remaining 25% is mineral fragments (olivine and pyroxene, subhedral, olivine <0.3 mm, pyroxene <0.2 mm). Crosscut by numerous veins filled with opaques and a few porous veins.",
      chondrules: "~45% of sample volume. Generally well-rounded, well to very well defined. Size range 0.2–1.7 mm (avg ~0.6 mm). Types: PO (55%), POP (30%), cryptocrystalline (10%), PP (5%). PO easily identified by good olivine crystallinity in glassy mesostasis (10–35% of chondrule). POP show slightly larger olivine than pyroxene. Cryptocrystalline vary in size and recrystallization degree (low to moderate). PP have <30% mesostasis, subhedral pyroxene crystals. Metal droplets (few μm to <1 μm) inside chondrules. Thick Fe-oxide veins surround chondrules, with microcrystalline material and silicate grains in the thickest veins.",
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Fayalite std dev 2.26, ferrosilite std dev 4.47. Lowest metamorphism shown by feldspar development (type 4 present but low development). Compositional homogeneity and matrix state closer to type 5. Chondrule and opaques state indicates highest metamorphism: chondrules still recognizable but with diffuse/lost boundaries (high type 5), opaques with few irregular extensions and some massive grains (early type 6 recrystallization). Final classification H6."
    },
    weathering: {
      grade: "W2",
      description: "DM053 A1 and A2 belong to the same meteorite. Weighted average calculated by area: DM053 A2 is ~0.3× total area of DM053 A1. Combined replacement ~62%, corresponding to W2."
    },
    petrology: {
      mineralogy: "90% olivine and pyroxene, remaining 10% covered by glass, metals, minor sulfides, and plagioclase. Kamacite ~3% of total area, Fe-oxide replacement at edges (almost completely replacing smaller crystals). Troilite ~1.5% of area. Low chromite, small crystals.",
      matrix: "60% of thin section. Porphyroblastic texture given by chondrules mostly >0.3 mm diameter. Matrix in initial recrystallization stage, few distinguishable silicates with faint boundaries (no equilibrium contacts observed). Internally each crystal appears homogeneous. Kamacite and troilite show advanced oxide replacement at section edges.",
      chondrules: "25% of total area. Sizes 0.3–0.6 mm diameter. Larger bodies well-rounded, smaller ones irregular and slightly elongated. Low glass/mesostasis content, mostly in olivine chondrules. Types: PO (70%, well-rounded, highly fractured), PP (30%, square with notable cleavage), BO (2 found).",
      texture: "Chondritic texture. DM053 A1 and A2 are paired fragments of the same meteorite."
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Paired with DM053 A1 (same meteorite). Fayalite std dev reduced from 10.02 to 3.64 after removing two outliers. Ferrosilite std dev 4.99. Chondrules with moderately diffuse boundaries, fragmented. Matrix heterogeneous, mostly microcrystalline, low feldspar development (type 4). Pyroxene compositional homogeneity (5%) and olivine clarity suggest transition to type 5. Opaque recrystallization indicates high type 5 to low type 6. Overall findings consistent with DM053 A1."
    },
    weathering: {
      grade: "W3",
      description: "No specific details provided in Amengual (2019). Despite being from the same meteorite as DM053 A1 (W2), this fragment shows more advanced weathering."
    },
    petrology: {
      mineralogy: "More balanced olivine/pyroxene ratio than DM053 A1, highlighted by POP chondrules. Ca-rich pyroxenes increased in larger chondrules but still less abundant than low-Ca pyroxenes. High Cr abundance in well-preserved POP chondrules (absent in matrix/olivine chondrules), suggesting a contemporaneous phase. No exotic fragments outside normative mineralogy. Kamacite (2.5%) near larger chondrules. Fayalite/ferrosilite Fe range wider than DM053 A1 (~10% variation, influenced by two outliers).",
      matrix: "55% of total area. Porphyroblastic texture from well-delimited chondrules. Low recrystallization, small crystals (<0.1 mm) and silicates associated with veinlets suggesting a second shock event. Low porosity (<1%), small irregular holes (<0.1 mm) from shock/ stress. Plagioclase scarce (<1%, disconnected crystals <0.02 mm). Brecciated matrix with ferromagnesian fragments, no exotic components, low glass (<10%). Troilite significant, homogeneous but largely replaced. Few thin veins (<80 μm), opacite-filled, some with hollow indentations.",
      chondrules: "35% of total area. Conspicuous and easily recognizable with well-marked boundaries and silhouettes defined by metal sulfides. Diameters 0.2–0.5 mm, well-rounded. All show internal fractures (pyroxene cleavage pattern or irregular olivine fractures). Many affected by preparation damage. Mesostasis <5%. Types: PO (80%, smaller, fragmented), PP (15%, slightly larger, better rounded), POP (only 1 found).",
      texture: "Chondritic. Chondrule fragments larger and more abundant than in DM053 A1. Predominance of ferromagnesian minerals in matrix and chondrules."
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
      classifier: "N. Amengual Mondaca (2019)",
      description: "Low std dev for fayalite (3.26) and ferrosilite (4.15). Plagioclase in advanced stage, with crystals present in matrix and chondrules. Chondrules lack defined borders and have lost internal glass, hindering delineation. Matrix completely recrystallized with homogeneous crystals and no mesostasis. High-intensity metamorphism, type 6."
    },
    weathering: {
      grade: "W4",
      description: "No specific details provided in Amengual (2019)."
    },
    petrology: {
      mineralogy: "Olivine 25-45 wt% SiO₂, Fa 20-25%. Low-Ca pyroxene 49-61 wt% SiO₂ with ferromagnesian pyroxenes showing local Ca, Na, Al enrichments. Plagioclase significant in certain sectors (high Al and Si content). Petrographically difficult to differentiate due to high recrystallization, metamorphism, and weathering.",
      matrix: ">65% of total section. Granoblastic texture, high percentage of opaques from oxides, high density of veins. Recrystallization advanced, no mesostasis. Composed mainly of silicates and oxides that replaced metals and filled veinlets.",
      chondrules: "Difficult to identify, borders almost indistinguishable, slightly oval shape. Distinguishable ones outlined by opaque phases. Many crossed by filled veins. No glass or mesostasis. Most chondrules appear as single bodies without independent crystals (advanced recrystallization). Types: PO (<90%), PP (<10%). Oxidation and replacement very advanced — at least 80% of sulfide and metallic Fe phases replaced.",
      texture: "Highly recrystallized granoblastic texture. High weathering overprint."
    },
    location: {
      coordinates: "N/A",
      mainMass: "Universidad de Chile",
      finder: "Universidad de Chile",
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
