function menuToggle() {
    if(document.getElementById("slides").style.left === "-520vw")
    {
    document.getElementById("slides").style.left = "0vw";
    } else {
    document.getElementById("slides").style.left = "-520vw";
    }
}

function menuClose() {
    if(document.getElementById("slides").style.left === "0vw") {
    document.getElementById("slides").style.left = "-520vw";
    }
}

document.addEventListener('DOMContentLoaded', function() { 
document.querySelector('span.menubutton').onclick = menuToggle;
});
