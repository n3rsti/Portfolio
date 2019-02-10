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


function appear() {
    var aboutMe = document.querySelector('.about-me');
    var aboutMe_position = aboutMe.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    
    if(aboutMe_position < screenHeight / 1.4){
        aboutMe.classList.add('about-me-appear');
    }
    else {
        aboutMe.classList.remove('about-me-appear');
    }
}
window.addEventListener('scroll', appear);


$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

});