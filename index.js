//tabbed menu

function openMenu(evt,menuName){
    
    
    var i ,x,tablinks;
    x=document.getElementByIdClassName("menu","join");
    for(i=0;i<x.length;i++){
        x[i].style.display = "none";
    }

    tablinks=document.getElementByIdClassName("tablink");
    for(i=0;i<x.length;i++){
        tablinks[i].cblinkslassName=ta[i].className.replace("w3-dark-grey","");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += "w3-dark-grey";

}

document.getElementById("mylink").click();