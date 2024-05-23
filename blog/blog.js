//show and hide div elements on click
function Blogpost1() {
    document.getElementById("post1").style.visibility = "visible";
    document.getElementById("post1").style.display = "block";

    document.getElementById("post2").style.visibility = "hidden";
    document.getElementById("post2").style.display = "none";

    document.getElementById("post3").style.visibility = "hidden";
    document.getElementById("post3").style.display = "none";
}

function Blogpost2() {
    document.getElementById("post2").style.visibility = "visible";
    document.getElementById("post2").style.display = "block";

    document.getElementById("post1").style.visibility = "hidden";
    document.getElementById("post1").style.display = "none";

    document.getElementById("post3").style.visibility = "hidden";
    document.getElementById("post3").style.display = "none";
}

function Blogpost3() {
    document.getElementById("post3").style.visibility = "visible";
    document.getElementById("post3").style.display = "block";

    document.getElementById("post2").style.visibility = "hidden";
    document.getElementById("post2").style.display = "none";

    document.getElementById("post1").style.visibility = "hidden";
    document.getElementById("post1").style.display = "none";
}


function menuToggle() {
    if(document.getElementById("slides").style.left == "-520vw")
    {
    document.getElementById("slides").style.left = "0vw";
    }
    else 
    {
    document.getElementById("slides").style.left = "-520vw";
    }
}

function menuClose() {
    if(document.getElementById("slides").style.left == "0vw")
    {
    document.getElementById("slides").style.left = "-520vw";
    }
}

