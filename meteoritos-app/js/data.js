const SAMPLES = [
  {c:"Exp19-01",n:"Catalina 1",lc:5.285,pW:2,ir:"sí",t:"H",shk:"S5",loc:"Catalina",nota:"H5 S5; ringwoodite, maskelynite, PDFs, fizzed troilite"},
  {c:"Exp19-02",n:"Catalina 2",lc:null,pW:null,ir:"sí",t:"??",loc:"Catalina",nota:"pendiente clasificación"},
  {c:"Exp19-03",n:"Catalina 3",lc:4.581,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; preservar"},
  {c:"Exp19-04",n:"Catalina 4",lc:4.740,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; par con 32"},
  {c:"Exp19-05",n:"Catalina 5",lc:4.654,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; Caída 2"},
  {c:"Exp19-06",n:"Catalina 6",lc:4.837,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo; f2 a SD"},
  {c:"Exp19-07",n:"Catalina 7",lc:4.991,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L→H?; borde H"},
  {c:"Exp19-08",n:"Catalina 8",lc:4.686,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-09",n:"Catalina 9",lc:4.882,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L→H?; borde H"},
  {c:"Exp19-10",n:"Catalina10",lc:4.652,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR listo"},
    {c:"Exp19-11",n:"Catalina11",lc:4.971,pW:1,ir:"sí",t:"H",shk:"S6",loc:"Catalina",nota:"H6 S6; ringwoodite in olivine, mosaicism S5–S6"},
  {c:"Exp19-12",n:"Catalina12",lc:4.851,pW:null,eW:0,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR listo"},
  {c:"Exp19-13",n:"Catalina13",lc:5.166,pW:null,eW:1,ir:"sí",t:"H",loc:"Catalina",nota:"H; IR: diferente a todos"},
  {c:"Exp19-14",n:"Catalina14",lc:5.348,pW:3,ir:"sí",t:"H",loc:"Catalina",shk:"S5",nota:"H4 S5; petro H4"},
  {c:"Exp19-15",n:"Catalina15",lc:null,pW:2,ir:"no",t:"LL",loc:"Catalina",shk:"S5",nota:"LL4 S5; solo briqueta"},
  {c:"Exp19-17",n:"Catalina17",lc:4.817,pW:null,eW:1,ir:"no",t:"L",loc:"Catalina",nota:"L; Caída 1"},
  {c:"Exp19-18",n:"Catalina18",lc:null,pW:2,ir:"sí",t:"LL",loc:"Catalina",shk:"S5",nota:"LL5 S5; pendiente KLY5"},
  {c:"Exp19-19",n:"Catalina19",lc:4.694,pW:null,eW:1,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 12/08"},
  {c:"Exp19-20",n:"Catalina20",lc:null,pW:null,ir:"no",t:"??",loc:"Catalina",nota:"¿?; pendiente"},
  {c:"Exp19-21",n:"Catalina21",lc:5.118,pW:3,ir:"sí",t:"H",loc:"Catalina",nota:"H4; petro H4"},
  {c:"Exp19-22",n:"Catalina22",lc:4.521,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 08"},
  {c:"Exp19-23",n:"Catalina23",lc:4.505,pW:null,eW:0,ir:"no",t:"LL",loc:"Catalina",nota:"LL; χ diagnóstico"},
  {c:"Exp19-24",n:"Catalina24",lc:4.589,pW:null,eW:2,ir:"sí",t:"LL",loc:"Catalina",nota:"LL; IR: parece 04 y 08"},
  {c:"Exp19-25",n:"Catalina25",lc:5.252,pW:null,eW:0,ir:"no",t:"H",loc:"Catalina",nota:"H; χ diagnóstico"},
  {c:"Exp19-26",n:"Catalina26",lc:4.655,pW:null,eW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL; pareada con 10"},
  {c:"Exp19-27",n:"Catalina27",lc:null,pW:2,ir:"no",t:"LL",loc:"Catalina",nota:"LL5; clasif. por sección"},
  {c:"Exp19-29",n:"Catalina29",lc:4.959,pW:null,eW:0,ir:"no",t:"L",loc:"Catalina",nota:"L; parte Caída 1"},
  {c:"Exp19-30",n:"Catalina30",lc:5.274,pW:3,ir:"sí",t:"H",loc:"Catalina",nota:"H5; petro H5"},
  {c:"Exp19-31",n:"Catalina31",lc:4.201,pW:null,eW:2,ir:"sí",t:"??",loc:"Catalina",nota:"sub-LL; posible CC"},
  {c:"Exp19-32",n:"Catalina32",lc:4.762,pW:null,eW:2,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR: parece 04"},
  {c:"Exp19-33",n:"Catalina33",lc:4.834,pW:null,eW:1,ir:"no",t:"L",loc:"Catalina",nota:"L; pareada con 06"},
  {c:"Exp19-34",n:"Catalina34",lc:4.728,pW:null,eW:1,ir:"sí",t:"L",loc:"Catalina",nota:"L; IR: parece 10"},
  {c:"Exp19-40",n:"Médano 5",lc:5.112,pW:null,eW:0,ir:"disp",t:"H",loc:"Médano",nota:"H"},
  {c:"Exp19-41",n:"Médano 6",lc:5.117,pW:2,ir:"sí",t:"H",loc:"Médano",nota:"H4; petro H4"},
  {c:"Exp19-42",n:"Médano 7",lc:5.091,pW:2,ir:"sí",t:"H",loc:"Médano",nota:"H4; petro H4"},
  {c:"Exp19-43",n:"Médano 8",lc:4.965,pW:null,eW:0,ir:"sí",t:"L",loc:"Médano",nota:"L; par con 56"},
  {c:"Exp19-44",n:"Médano 9",lc:4.640,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; IR único"},
  {c:"Exp19-45",n:"Médano10",lc:4.611,pW:null,eW:0,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-46",n:"Médano11",lc:4.336,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-47",n:"Médano12",lc:5.168,pW:null,eW:1,ir:"sí",t:"H",loc:"Médano",nota:"H"},
  {c:"Exp19-48",n:"Médano13",lc:4.550,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; IR: parece 44"},
  {c:"Exp19-49",n:"Médano14",lc:4.631,pW:5,ir:"sí",t:"H",loc:"Médano",nota:"H5; W5 — KLY5 unreliable (W\u22653)"},
  {c:"Exp19-50",n:"Médano15",lc:4.750,pW:null,eW:2,ir:"sí",t:"L",loc:"Médano",nota:"L"},
  {c:"Exp19-51",n:"Médano16",lc:4.464,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL"},
  {c:"Exp19-52",n:"Médano17",lc:4.443,pW:null,eW:1,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-53",n:"Médano18",lc:4.924,pW:2,ir:"sí",t:"H",loc:"Médano",nota:"H; KLY5→H (Raman Fo-rich olivine, not bulk LL)"},
  {c:"Exp19-54",n:"Médano19",lc:4.294,pW:null,eW:2,ir:"sí",t:"LL",loc:"Médano",nota:"LL; Caída 1"},
  {c:"Exp19-56",n:"Médano21",lc:4.966,pW:null,eW:0,ir:"sí",t:"L",loc:"Médano",nota:"L; par con 43"},
  {c:"Exp19-58",n:"San Juan 1",lc:null,pW:null,ir:"no",t:"??",loc:"San Juan",nota:"?"},
  {c:"Exp19-59",n:"V1",lc:null,pW:null,ir:"sí",t:"??",loc:"Los Vientos",nota:"?"},
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
    {name:"Cluster 6",type:"H4",count:4,range:"5.091–5.168",delta:"0.077",tc:"#27ae60",
     samples:["Exp19-42","Exp19-40","Exp19-41","Exp19-47"]},
    {name:"Cluster 11",type:"L",count:2,range:"4.550–4.611",delta:"0.061",tc:"#e67e22",
     samples:["Exp19-48","Exp19-45"]},
    {name:"Cluster 12",type:"L",count:2,range:"4.294–4.336",delta:"0.042",tc:"#e67e22",
     samples:["Exp19-54","Exp19-46"]}
  ]},
  {locality:"Catalina",color:"#1a2a3a",falls:[
    {name:"Cluster 4",type:"L",count:5,range:"4.686–4.762",delta:"0.076",tc:"#e67e22",
     samples:["Exp19-08","Exp19-19","Exp19-34","Exp19-04","Exp19-32"]},
    {name:"Cluster 5",type:"H",count:4,range:"4.834–4.882",delta:"0.048",tc:"#27ae60",
     samples:["Exp19-33","Exp19-06","Exp19-12","Exp19-09"]},
    {name:"Cluster 7",type:"H5",count:3,range:"5.252–5.285",delta:"0.033",tc:"#27ae60",
     samples:["Exp19-25","Exp19-30","Exp19-01"]},
    {name:"Cluster 8",type:"L",count:4,range:"4.589–4.655",delta:"0.066",tc:"#e67e22",
     samples:["Exp19-24","Exp19-10","Exp19-05","Exp19-26"]},
    {name:"Cluster 10",type:"L",count:3,range:"4.505–4.581",delta:"0.076",tc:"#e67e22",
     samples:["Exp19-23","Exp19-22","Exp19-03"]}
  ]}
];

// Sample → cluster type lookup (cluster-estimated classification when petrography unavailable)
const CLUSTER_TYPE_MAP = {};
(function() {
  PAIR_GROUPS.forEach(g => g.falls.forEach(f => {
    f.samples.forEach(c => { CLUSTER_TYPE_MAP[c] = f.type; });
  }));
})();

function sampleLookup(code) {
  return SAMPLES.find(s => s.c === code);
}

const TYPE_COLORS = {H:'#27ae60',L:'#e67e22',LL:'#b8860b',C:'#8e44ad','??':'#999'};

// Initial mass (grams) from Repositorio Meteoritos.xlsx catalog — total specimen mass (sum of all fragments)
const MASS_MAP = {
  "Exp19-01":4.9,"Exp19-02":14.0,"Exp19-03":1.7,"Exp19-04":3.8,"Exp19-05":3.5,"Exp19-06":3.9,
  "Exp19-07":71.4,"Exp19-08":5.97,"Exp19-09":8.9,"Exp19-10":1.6,"Exp19-11":12.9,"Exp19-12":3,
  "Exp19-13":2.4,"Exp19-14":14.9,"Exp19-15":1.1,"Exp19-17":2.7,"Exp19-18":8.8,"Exp19-19":0.8,"Exp19-20":2.3,"Exp19-27":2.5,
  "Exp19-21":5.4,"Exp19-22":1.7,"Exp19-23":1.1,"Exp19-24":5.9,"Exp19-25":1.9,
  "Exp19-26":1.9,"Exp19-29":1,"Exp19-30":28.4,"Exp19-31":13,"Exp19-32":2.3,
  "Exp19-33":1.6,"Exp19-34":1.2,"Exp19-40":260.8,"Exp19-41":113.5,"Exp19-42":26.4,
  "Exp19-43":52.7,"Exp19-44":24,"Exp19-45":55.3,"Exp19-46":36.8,"Exp19-47":38.9,
  "Exp19-48":3.7,"Exp19-49":26.1,"Exp19-50":29.8,"Exp19-51":32.1,"Exp19-52":297.5,
  "Exp19-53":8.7,"Exp19-54":80.1,"Exp19-56":178.2,"Exp19-58":4.8,"Exp19-59":23.2
};

// Petrologic grade (3–7) and type (H/L/LL) from thin-section petrography
// Only for samples with both thin-section classification AND KLY5 data
const PETRO_MAP = {
  "Exp19-01":{type:"H",grade:5,note:"H5"},     // reclassified H5 (KLY5 + petro)
    "Exp19-11":{type:"H",grade:6,note:"H6"},
  "Exp19-14":{type:"H",grade:4,note:"H4"},
  "Exp19-21":{type:"H",grade:4,note:"H4"},
  "Exp19-30":{type:"H",grade:5,note:"H5"},
  "Exp19-41":{type:"H",grade:4,note:"H4"},        // reclassified H4 (KLY5→H)
  "Exp19-42":{type:"H",grade:4,note:"H4"},        // reclassified H4 (KLY5→H)
  "Exp19-49":{type:"H",grade:5,note:"H5"},        // petro H5 in DETAILS
  "Exp19-53":{type:"H",grade:4,note:"H4"}         // petro H4 in DETAILS
};

// Discoverer(s) from Fichas de clasificacion.xlsx (column P)
const DISCOVERER_MAP = {
  "Exp19-01":"Alfonso Mohor","Exp19-02":"Unknown","Exp19-03":"Daniel Moncada","Exp19-04":"Daniel Moncada","Exp19-05":"Grace Batalla",
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
  "Exp19-58":"Samanta Aravena","Exp19-59":"Samanta Aravena"
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
  "Exp19-56":3.293, "Exp19-59":2.226
};

// Coordinates map: Northing N, Easting E format
// Fragments map: numeric count or "Briquette" (compressed pellet)
const FRAGMENTS_MAP = {
  "Exp19-01":1,"Exp19-03":1,"Exp19-04":1,"Exp19-05":1,"Exp19-06":2,
  "Exp19-07":1,"Exp19-08":1,"Exp19-09":2,"Exp19-10":1,"Exp19-11":1,
  "Exp19-12":1,"Exp19-13":1,"Exp19-14":1,"Exp19-15":"Briquette","Exp19-16":1,
  "Exp19-17":1,"Exp19-18":"Briquette","Exp19-19":1,"Exp19-20":"Briquette","Exp19-21":1,
  "Exp19-22":1,"Exp19-23":1,"Exp19-24":2,"Exp19-25":1,"Exp19-26":1,
  "Exp19-27":"Briquette","Exp19-29":1,"Exp19-30":2,"Exp19-31":1,"Exp19-32":1,
  "Exp19-33":1,"Exp19-34":1,"Exp19-40":1,"Exp19-41":1,"Exp19-42":1,
  "Exp19-43":1,"Exp19-44":1,"Exp19-45":3,"Exp19-46":2,"Exp19-47":3,
  "Exp19-48":1,"Exp19-49":2,"Exp19-50":1,"Exp19-51":2,"Exp19-52":23,
  "Exp19-53":1,"Exp19-54":1,"Exp19-56":3,"Exp19-58":"Briquette","Exp19-59":1
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
      description: "Figueroa (2023) classified Médano 7 as type 4 due to well-defined chondrules, nearly absent glass, and a matrix with clastic-looking coarsening. Reclassified as H-group based on KLY5 magnetic susceptibility (log χ = 5.091, consistent with H field of Rochette et al., 2003)."
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
      description: "Figueroa (2023) classified the sample as type 4, with mostly well-defined chondrules and, to a lesser extent, delineated chondrules within a clastic, coarsened matrix. Reclassified as H-group based on KLY5 magnetic susceptibility (log χ = 5.117, consistent with H field of Rochette et al., 2003)."
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
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Médano 14 contains 14 wt% Fe, classifying it as an H-group ordinary chondrite with an average crystal size of 0.08 mm. It is classified as type 5 due to chondrules with defined boundaries but well integrated into a recrystallized, coarsened matrix."
    },
    weathering: {
      grade: "W5",
      description: "Classified as W5 due to nearly complete oxidation of metals and troilite, with incipient oxidation of silicates, especially toward the sample edges."
    },
    petrology: {
      mineralogy: "Chondritic texture with irregular fracturing overall and planar fracturing in crystals. Main mineralogy: olivine (35%), pyroxene (25%), opaques (40%), and 3% porosity.",
      matrix: "Coarse-grained granoblastic texture with high recrystallization degree and brown colors. Constitutes 43% of the sample with crystal size < 0.13 mm.",
      chondrules: "Boundaries are definable but well integrated into the matrix, representing 40% of the sample with an average size of 0.21 mm. Chondrule types in order of abundance: POP, PP, CP, OB.",
      chemicalGroup: "Médano 14 contains 14 wt% Fe with an average crystal size of 0.08 mm, composed of kamacite (7%), troilite (3%), and oxides (90%). Minerals occur massively, and in this sample a great abundance of oxides replacing the original minerals and forming veins can be observed."
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
      description: "Contains 14 wt% Fe, classifying it as H-group. Classified as type 4 due to well-defined chondrules with good matrix integration and a minor proportion of delineated chondrules, within a less opaque recrystallized matrix. It also presents minor glass in chondrules and the presence of kamacite."
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
      class: "H4",
      shock: "S5",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Classified as petrologic type 4 due to mostly well-defined chondrules, some delineated within a less opaque clastic matrix. Catalina 14 contains 15 wt% Fe, classifying it as H-group. The sample shows evidence of advanced shock metamorphism, characterized by mosaicism and planar fractures in olivine, abundant maskelynite, and shock vein development. Opaque phases are mainly kamacite, taenite, plessite, and troilite, preferentially distributed in interchondrule positions. The presence of maskelynite, together with the deformation textures observed in silicates, is consistent with shock stage S5 (Stöffler et al., 1991), indicating a significant impact overprint after the thermal metamorphism recorded by the metal mineralogy."
    },
    weathering: {
      grade: "W3",
      description: "Classified as W3 due to moderate to strong oxidation of metals and troilite with approximately 60% replacement. Incipient silicate alteration is also observed."
    },
    petrology: {
      mineralogy: "Chondritic texture with moderate linear fracturing mainly affecting crystals. Olivine (55%), pyroxene (35%), opaques (10%), and 12% porosity.",
      matrix: "33% of sample. Clastic and fine- to medium-grained granoblastic texture with moderate recrystallization. Orange coloration indicates oxidation near metal areas.",
      chondrules: "40% of sample. Boundaries range from well to poorly defined. Identified chondrule types: POP, GOP, PR, CP, PO, OB.",
      chemicalGroup: "15 wt% Fe, composed of kamacite (85%, avg. 0.18 mm), taenite + plessite, troilite (10%, avg. 0.065 mm), and oxides (5%, avg. 0.14 mm) which mainly affect other minerals."
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
      class: "LL4",
      shock: "S5",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "After plotting mass-normalized magnetic susceptibility against weathering stage (W2) on the Rochette et al. (2012) diagram, the sample falls in the LL ordinary chondrite field. Chondrules are well defined; clinopyroxene is more abundant than orthopyroxene. Secondary feldspar occurs predominantly as microcrystalline aggregates. Petrologic type 4 per Van Schmus & Wood (1967). The sample shows evidence of shock metamorphism expressed by undulose extinction, fracturing and local mosaicism in olivine, planar deformation and reduced birefringence in pyroxenes, as well as abundant maskelynite and shock veins. Pyroxenes also show an optically heterogeneous or 'dirty' appearance, consistent with impact deformation. Opaque phases are dominated by relatively coarse-grained kamacite, while troilite is frequently fragmented and altered. Together, these features are consistent with shock stage S5 (Stöffler et al., 1991), indicating a significant impact overprint after thermal metamorphism."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~30% with minor oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with well-defined chondrules. Limonite patina. Oxide-filled veinlets ~1 mm. Olivine (~29%, ~0.1–0.5 mm), pyroxene (~21%, ~0.2–0.4 mm), feldspar (~20%, ~0.2 mm), kamacite (~21%, <0.6 mm), troilite (~9%, <0.4 mm). Olivine and pyroxene are prismatic and subhedral; kamacite and troilite are anhedral. Olivine: ~71% in chondrules, ~29% in matrix. Pyroxene: ~50% in chondrules, ~50% in matrix. Feldspar: ~29% in chondrules, ~71% in matrix. Kamacite: ~5% in chondrules, ~95% in matrix. Troilite: ~10% in chondrules, ~90% in matrix.",
      matrix: "~30% volume. Inequigranular granoblastic texture with limonite patina. Feldspar: ~50%, cryptocrystalline. Olivine subhedral–anhedral: ~20%, ~0.2–0.3 mm. Pyroxene subhedral–anhedral: ~30%, ~0.2–0.3 mm. Oxidized opaques around chondrules.",
      chondrules: "~70% of total volume, rounded to subrounded, well defined, radii ~0.1–0.8 mm. Types: PO (~12%, ~0.3–0.8 mm), PP (~4%, ~0.2 mm), POP (~24%, ~0.2–0.5 mm), BO (~20%, ~0.2–0.25 mm), RP (~10%, ~0.5 mm), G (~20%, ~0.1 mm), C (~10%, ~0.2 mm).",
      chemicalGroup: "LL — magnetic susceptibility (log χ) = 4.01"
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
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Classified as type 4, with predominantly delineated chondrules within a generally recrystallized matrix. Glass present inside chondrules. Contains 12 wt% Fe, classifying Catalina 21 as H-group."
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
      class: "LL5",
      classifier: "M. E. Parra, D. Moncada, L. Cieza, R. Lavín (2023) & C. S. Aravena (2026)",
      description: "After plotting mass-normalized magnetic susceptibility against weathering stage (W2) on the Rochette et al. (2012) diagram, the sample falls in the LL ordinary chondrite field. Chondrule textures are discernible but not clearly delineated. Matrix is recrystallized. Orthopyroxene predominates over clinopyroxene with absence of well-developed plagioclase. Secondary feldspar occurs predominantly as microcrystalline aggregates. Petrologic type 5 per Van Schmus & Wood (1967)."
    },
    weathering: {
      grade: "W2",
      description: "Transmitted light reveals a limonite patina; reflected light shows kamacite and troilite oxidized ~40% with oxidized veinlets. Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Chondritic texture with discernible but not clearly delineated chondrules. Oxide-filled veinlets ~0.5–3 mm. Limonite patina. Olivine (~25%, ~0.1–0.3 mm), pyroxene (~29%, ~0.2–0.3 mm), feldspar (~16%), kamacite (~21%, <0.6 mm), troilite (~9%, <0.5 mm). Olivine and pyroxene are subhedral and prismatic; kamacite and troilite are anhedral. Olivine: ~100% in chondrules. Pyroxene: ~30% in chondrules, ~70% in matrix. Feldspar: ~40% in chondrules, ~60% in matrix. Kamacite: ~5% in chondrules, ~95% in matrix. Troilite: ~5% in chondrules, ~95% in matrix.",
      matrix: "~30% volume. Inequigranular granoblastic texture with limonite patina. Feldspar (~30%, cryptocrystalline) and pyroxene subhedral–anhedral (~70%, ~0.2–0.3 mm). Opaques (kamacite and troilite) in matrix and around chondrules. Oxide-filled veinlets in matrix.",
      chondrules: "~70% of total volume, radii 0.1–0.3 mm, rounded to subrounded, defined to irregularly defined. Types: PO (~10%, ~0.2–0.3 mm), PP (~30%, ~0.2–0.5 mm), POP (~60%, ~0.2–1 mm), BO (~20%, ~0.2–0.3 mm), RP (~30%, ~0.3 mm).",
      chemicalGroup: "LL — magnetic susceptibility (log χ) = 3.72"
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
      class: "H5",
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023) & C. S. Aravena (2026)",
      description: "Classified as type 5, with delineated to probably defined chondrules within a less opaque clastic matrix. Catalina 30 contains 19 wt% Fe, classifying it as H-group, with an average crystal size of 0.013 mm."
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
      classifier: "M. J. Figueroa, M. Peña, D. Moncada (2023)",
      description: "Abundant shock veins crosscut the sample. Silicates show undulose extinction, mosaicism and planar deformation features in olivine, as well as glassy sectors associated with this mineral. Pyroxenes are scarce and show low birefringence. Opaque phases are mainly kamacite and troilite, frequently separated but spatially associated; taenite grains with troilite lamellae are also observed. The coexistence of intracrystalline deformation in silicates, shock glass, and impact veins suggests a significant shock overprint, consistent with shock stage S5 (Stöffler et al., 1991)."
    },
    weathering: {
      grade: "W2",
      description: "Weathering stage W2 per Wlotzka (1993)."
    },
    petrology: {
      mineralogy: "Olivine, pyroxene, maskelynite, kamacite, troilite, taenite.",
      matrix: "Recrystallized matrix with shock vein network.",
      chondrules: "Moderately delineated chondrules.",
      chemicalGroup: "LL — magnetic susceptibility (KLY5) pending."
    },
    location: {
      coordinates: "7224872 N, 409184 E",
      mainMass: "Universidad de Chile",
      finder: "Sebastián Gatica",
      state: "Antofagasta"
    }
  }
};

const IR_DIR = location.href.substring(0, location.href.lastIndexOf('/') + 1);

const IR_FILES = {
  "Exp19-01":"Exp19-01f2_60m_604_0.5.txt",
  "Exp19-02":"Exp19-02f2_60m_400_0.5.txt",
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
