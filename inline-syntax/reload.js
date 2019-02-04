var select = document.getElementById("themer");
var tasksHolder = document.getElementById("js-tasks");
themer.addEventListener("change", e => {
  removeScript()
  tasksHolder.innerHTML = "";
  var selectedOption = themer.options[themer.selectedIndex].text;
  if(selectedOption == "light"){
    tasksHolder.style.backgroundColor = "white";
  } else {
    //changeProp("--bg-color", "#292929");
    tasksHolder.style.backgroundColor = "#292929";
  }
  tasksHolder.style
  loadTheme(selectedOption);
  loader();
  setTimeout(()=>{
    addScript();
  },500)
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
  },500)
  
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
