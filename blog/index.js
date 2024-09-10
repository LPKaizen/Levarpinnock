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
