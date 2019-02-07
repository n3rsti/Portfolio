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