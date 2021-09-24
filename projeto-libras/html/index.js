/*Arrumar o JavaScript*/ 

function btnLogin(a)
{
    console.log(a);
    document.getElementById('painelLogin').style.display='block';
} 

/*SlideShow Icarly*/
/*Icarly ARRUMADO, ARRUMADO II,
wtf clique n funciona*/

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    /*erro do que senhor amado*/
    slides[slideIndex - 1].style.display = 'block';
}