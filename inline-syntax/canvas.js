var PIXEL_RATIO = (function() {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();
createHiDPICanvas = function(w, h, ratio) {
  if (!ratio) {
    ratio = PIXEL_RATIO;
  }
  var can = document.createElement("canvas");
  can.setAttribute("id","canvas-result");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
};
var assigment = [
  `var alfa = 2; var delta varka kajvar dksaovarkd var()
    var beta = 3;
    var ajvar = 10;
    var sigma = 2;
    var test = "test";
    var jota = (function (){
            omega = 3;
            var beta = 6;
            console.log("alfa", alfa, "gama", gama);
            var teta = zeta()[0]();
            var sigma = 6;
            var omega = 5;
            console.log("alfa", alfa, "beta", beta);
              function zeta() {
                  var alfa = 0;
                  var beta = 1;
                  console.log("alfa", alfa, "beta", beta);
                  return [function(){
                      var alfa = 8;
                      beta = 5;
                      console.log("alfa", alfa, "beta", beta);
                  }]
              }
          return zeta();
      })();`,
  `var alpha = 23;varbetavargavarmefunction
      var sdavar dasvar varkfoavarvkdavar
      `
];
var str = `var kme = 23;var kme1 = 32;var kme2 = 12;
    var kme = 23;var kme1 = 32;var kme2 = 12;var kme = 23;var kme1 = 32;var kme2 = 12;
    var kme = 23;var kme1 = 32;var kme2 = 12;var kme = 23;var kme1 = 32;var kme2 = 12;
    var kme = 23;var kme1 = 32;var kme2 = 12;var kme = 23;var kme1 = 32;var kme2 = 12;
    var kme = 23;var kme1 = 32;var kme2 = 12;
    `;
var config = {
  searchTerms: ["var", "function", "=", "return", "console.log"]
};

// Objekat regExp izraza za razlicite keyworde

let regObj;

function buildObjFromArr(arr) {
  var tmpObj = {};
  arr.forEach(function(item) {
    tmpObj[item] = {};
  });
  return tmpObj;
}
function writeRegexes(obj) {
  for (const key in obj) {
    if (key == "var") {
      obj[key]["regExp"] = new RegExp("[\\W]?\\b(var)\\s\\b", "g");
    } else if (key == "function") {
      obj[key]["regExp"] = new RegExp("[\\W]?(function)\\b", "g");
    } else if (key == "return") {
      obj[key]["regExp"] = new RegExp("[\\W]?(return)\\b", "g");
    } else if (key == "=") {
      obj[key]["regExp"] = new RegExp("(=)", "g");
    } else if (key == "console.log") {
      obj[key]["regExp"] = new RegExp("[\\W]?\\b(console.log)\\b", "g");
    }
  }
}
function regObjInit() {
  regObj = buildObjFromArr(config.searchTerms);
  writeRegexes(regObj);
}
// Inicijacija objekta regularnih izraza
regObjInit();

function buildArrayFromObjKeys(obj) {
  var tmpArr = [];
  for (const key in obj) {
    tmpArr.push(obj[key]["regExp"]);
  }
  return tmpArr;
}

buildArrayFromObjKeys(regObj);
function getAllRegIndexes(str, regarr) {
  var tmpArr = [];
  for (var i = 0; i < regarr.length; i++) {
    var re = regarr[i],
      str = str;
    try {
      while ((match = re.exec(str)) != null) {
        var position = str.indexOf(match[1].trim());
        var obj = {
          name: match[1],
          index: position,
          len: match[1].length
        };
        tmpArr.push(obj);
      }
    } catch {}
  }

  return tmpArr;

  // To - do - Improve by returning all instances of a number,not just first.
}

var y = 0;
var yIndex = 18;
var ass = jScriptOriginal.split("\n");
var canvasHeight = ass.length * yIndex + 10;

// canvas init
var canvas = createHiDPICanvas(600, canvasHeight, 1);
document.body.appendChild(canvas);
var context = canvas.getContext("2d");
context.font = "1.1rem Georgia";
context.fillStyle = "blue";

function colorCanvas(task) {
  for (var k = 0; k < task.length; k++) {
    var line = task[k];

    y += yIndex;
    marker(line, 0, y);
  }
}


// Coloring init
colorCanvas(ass);


// Images made from canvas
var can = document.getElementById("canvas-result");
canvasToImage(can);


function marker(str, x, y) {
  var _arrayOfRegex = buildArrayFromObjKeys(regObj);
  var strInfo = getAllRegIndexes(str, _arrayOfRegex);


  var numbers = getAllNumbers(str);
  var strings = getAllStrings(str);

  if (numbers && strInfo) {
    strInfo = strInfo.concat(numbers);
  }
  if (strings && strInfo) {
    strInfo = strInfo.concat(strings);
  }

  var indexes = [];
  for (const key in strInfo) {
    if (strInfo.hasOwnProperty(key)) {
      const element = strInfo[key];
      indexes.push(element.index);
    }
  }

  for (var i = 0, z = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    var position = indexes.indexOf(i);
    if (position >= 0) {
      for (var j = 0; j < strInfo[position]["len"]; j++) {
        // vars and function
        ch = str.charAt(i + j);
        if (
          strInfo[position].name === "var" ||
          strInfo[position].name === "function"
        ) {
          colorFillChange(ch, x, y, "blue");
        } else if (strInfo[position].name === "return") {
          colorFillChange(ch, x, y, "#C586C0");
        } else if (strInfo[position].name === "=") {
          colorFillChange(ch, x, y, "gray");
        } else if (strInfo[position].name === "number") {
          colorFillChange(ch, x, y, "green");
        } else if (strInfo[position].name === "console.log") {
          colorFillChange(ch, x, y, "#4EC9B0");
        } else if (strInfo[position].name === "string") {
          colorFillChange(ch, x, y, "orange");
        }
        x += context.measureText(ch).width;
        z++;
        if (z == strInfo[position]["len"]) {
          z = 0;
          i += strInfo[position]["len"] - 1;
          break;
        }
      }
    } else {
      colorFillChange(ch, x, y, "black");
      x += context.measureText(ch).width;
    }
  }
}




function canvasToImage(canvas) {
	var image = new Image();
  image.src = canvas.toDataURL("image/png");
  document.body.appendChild(image);
}
function colorFillChange(char, x, y, color) {
  context.fillStyle = color;
  context.fillText(char, x, y);
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  for (var k = 0; k < val.length; k++) {
    while ((i = arr.indexOf(val[k], i + 1)) != -1) {
      indexes.push({
        name: val[k],
        index: i,
        len: val[k].length
      });
    }
  }
  if (indexes.length == 0) {
    return undefined;
  }
  return indexes;
}
function getAllNumbers(str) {
  var re = /\d+/g,
    str = str;
  tmpArr = [];
  while ((match = re.exec(str)) != null) {
    var obj = {
      name: "number",
      index: match["index"],
      len: match[0].length
    };
    tmpArr.push(obj);
  }
  return tmpArr;
  // To - do - Improve by returning all instances of a number,not just first.
}

function getAllStrings(str) {
  var re = /\".*?\"/g,
    str = str;
  tmpArr = [];
  while ((match = re.exec(str)) != null) {
    var obj = {
      name: "string",
      index: match["index"],
      len: match[0].length
    };

    tmpArr.push(obj);
  }
  return tmpArr;
}

function removeEmptyObj(arr) {
  if (arr != undefined) {
    var tmp = JSON.stringify(
      arr.filter(function(el) {
        return typeof el != "object" || Object.keys(el).length > 0;
      })
    );
    return JSON.parse(tmp);
  } else {
    return undefined;
  }
}
