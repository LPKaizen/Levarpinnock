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

///////////////////////////////////////////

/* function SlideShow() {
    if(document.getElementById("slides").style.top == "0%")
    {
    document.getElementById("slides").style.top = "-100%";
    }
    else 
    {
    document.getElementById("slides").style.top = "0%";
    }
}

function changePage() {
    if(document.getElementById("pageone").style.display == "block")
    {
    document.getElementById("pagetwo").style.display = "block";
    document.getElementById("pagetwo").style.visibility = "visible";
    document.getElementById("pageone").style.display = "none";
    document.getElementById("pageone").style.visibility = "hidden";
    }
    else
    {
    document.getElementById("pageone").style.display = "block";
    document.getElementById("pageone").style.visibility = "visible";
    document.getElementById("pagetwo").style.display = "none";
    document.getElementById("pagetwo").style.visibility = "hidden";
    }
} */