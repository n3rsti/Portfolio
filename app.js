var typed = new Typed('.hello', {
    strings: ["Hi,^300 I'm"],
    typeSpeed: 60,
    showCursor: false
});
var typed = new Typed('.type', {
    strings: ["^600 <p class=\"letter-k\">K</p>rzysztof"],
    typeSpeed: 60,
    showCursor: false
});
var typed = new Typed('.languages', {
    strings: ["HTML", "CSS", "Javascript", "Vue.JS", "GIT^1000"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 800,
    loop: true
});

var screenHeight = window.innerHeight;

function appear() {
    var aboutMe = document.querySelector('.about-me');
    var aboutMe_position = aboutMe.getBoundingClientRect().top;
    
    if(aboutMe_position < screenHeight / 1.4){
        aboutMe.classList.add('about-me-appear');
    }
    else {
        aboutMe.classList.remove('about-me-appear');
    }
}
window.addEventListener('scroll', appear);