/*Arrumar o JavaScript*/ 

function btnLogin(a)
{
    console.log(a);
    document.getElementById('painelLogin').style.display='block';
} 

/*SlideShow*/

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 0) {slideIndex = slides.length}

    for (i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = 'block';
}