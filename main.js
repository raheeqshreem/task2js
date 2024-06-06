var larg=document.querySelector(".button-larg");
var small=document.querySelector(".button-small");
var parent=document.querySelector("div");


function largFont(){
   parent.classList.add("large") ;
}

function smallFont(){
    parent.classList.remove("large") ;
}

larg.onclick = largFont;
small.onclick = smallFont;
