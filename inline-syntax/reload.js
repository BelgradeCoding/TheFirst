var btn = document.getElementById("change");
var select = document.getElementById("themer");
themer.addEventListener("change", e => {
  colors.varFunction = "red";
  colors.resOfStr = "white";
  console.log(colors);
  let tasks = document.querySelectorAll(".task");
  //removeElements(tasks);
  let children = document.body.children;
  let arrChildren = Array.from(children);
  var kme = document.getElementById("js-tasks");
  kme.innerHTML = "";
  addScript();
  changeProp("--main-bg-color", "black");
  var selectedOption = themer.options[themer.selectedIndex].text;
  if(selectedOption == "light"){
    changeProp("--main-bg-color", "white");
  } else {
    changeProp("--main-bg-color", "black");
  }
  loadTheme(selectedOption);
});

function addScript(scriptName) {
  var script = document.createElement("script");
  script.src = "canvas.js";
  document.body.appendChild(script);
}

var changeProp = (prop, value) => {
  document.documentElement.style.setProperty(prop, value);
};

// setTimeout((scriptName)=>{
//     var scripts = document.getElementsByTagName('script');
//     for(var i=0;i < scripts.length;i++){
//         console.log(scripts[i]);
//         if(scripts[i].src && (scripts[i].src.indexOf('canvas.js') !== -1)){
//             console.log(scripts[i]);

//             //scripts[i].parentNode.removeChild(scripts[i])
//         } else {
//             return false;
//         }
//     }
// },1000)

window.addEventListener("load", e => {
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    console.log(scripts[i]);
    if (scripts[i].src && scripts[i].src.indexOf("canvas.js") !== -1) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
});

function removeElements(arr) {
  arr.forEach(el => {
    el.parentNode.removeChild(el);
  });
}
