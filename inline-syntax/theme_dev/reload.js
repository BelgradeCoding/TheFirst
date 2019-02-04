var select = document.getElementById("themer");
var tasksHolder = document.getElementById("js-tasks");
themer.addEventListener("change", e => {
  removeScript()
  tasksHolder.innerHTML = "";
  
  var selectedOption = themer.options[themer.selectedIndex].text;
  if(selectedOption == "light"){
    changeProp("--bg-color", "white");
    changeProp("--txt-color","#222")
  } else {
    changeProp("--bg-color", "#292929");
    changeProp("--txt-color","#f1f1f1")
  }
  
  loadTheme(selectedOption);
  loader();
  setTimeout(()=>{
    addScript();
  },400)
});

function addScript(scriptName) {
  var script = document.createElement("script");
  script.src = "canvas.js";
  document.body.appendChild(script);
}

var changeProp = (prop, value) => {
  document.documentElement.style.setProperty(prop, value);
};
var loader = () => {
  var div=document.createElement("div");
  div.setAttribute("id","loader");
  div.textContent = "LOADING";
  tasksHolder.appendChild(div);
  setTimeout(()=>{
    tasksHolder.removeChild(div);
  },400)
  
}

window.addEventListener("load",removeScript);

function removeScript(e){
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf("canvas.js") !== -1) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
}

function removeElements(arr) {
  arr.forEach(el => {
    el.parentNode.removeChild(el);
  });
}
