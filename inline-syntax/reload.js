var btn = document.getElementById("change");

btn.addEventListener('click',(e)=>{
    colors.varFunction = "red";
    console.log(colors);
    let tasks = document.querySelectorAll('.task');
    //removeElements(tasks);
    let children = document.body.children;
    let arrChildren = Array.from(children)
    console.log(children);
    arrChildren.forEach((el)=>{
        console.log(el.attributes.src.nodeValue);
        
        if(el.attributes.nodeValue == "canvas.js") {
            console.log('evo ga');
            
        }
    })
});


function removeElements(arr){
    
   arr.forEach((el)=>{
        el.parentNode.removeChild(el);
    })
}
