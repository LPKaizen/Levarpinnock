const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

//mobile about me section code//
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and content
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});


//animation code//
window.addEventListener("load", function() {
    const overlay = document.querySelector('.overlay');
    
// Add the fade-out class to trigger the transition
overlay.classList.add('fade-out');
    
// Remove the overlay after the animation is done
overlay.addEventListener('transitionend', function() {
    overlay.style.display = 'none';
    document.body.classList.add('fade-in');
});
});


function showDetails(index) {
    const details = document.querySelectorAll('.detail');
    details[index].classList.toggle('hidden');
}


//show and hide div elements on click

function SlideShow() {
    if(document.getElementById("slides").style.top == "0%")
    {
    document.getElementById("slides").style.top = "-100%";
    }
    else 
    {
    document.getElementById("slides").style.top = "0%";
    }
}

function UrlLinks() {
    document.getElementById("ch3").style.visibility = "hidden";
    document.getElementById("ch3").style.display = "none";

    document.getElementById("url-links").style.visibility = "visible";
    document.getElementById("url-links").style.display = "block";
}

function UrlLinks2() {
    document.getElementById("url-links").style.visibility = "hidden";
    document.getElementById("url-links").style.display = "none";

    document.getElementById("ch3").style.visibility = "visible";
    document.getElementById("ch3").style.display = "block";
}


function changeOne() {
    document.getElementById("chhome").style.visibility = "hidden";
    document.getElementById("chhome").style.display = "none";

    document.getElementById("ch1").style.visibility = "visible";
    document.getElementById("ch1").style.display = "block";


    document.getElementById("ch3").style.visibility = "hidden";
    document.getElementById("ch3").style.display = "none";

    document.getElementById("url-links").style.visibility = "hidden";
    document.getElementById("url-links").style.display = "none";
}


function changeThree() {
    document.getElementById("chhome").style.visibility = "hidden";
    document.getElementById("chhome").style.display = "none";

    document.getElementById("ch1").style.visibility = "hidden";
    document.getElementById("ch1").style.display = "none";

  

    document.getElementById("url-links").style.visibility = "visible";
    document.getElementById("url-links").style.display = "block";

    document.getElementById("ch3").style.visibility = "hidden";
    document.getElementById("ch3").style.display = "none";
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
}

