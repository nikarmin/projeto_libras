/*Arrumar o JavaScript*/

/*Emails teste forms*/

const form = document.getElementById("form-contato");
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
});

const sendMail = (mail) => {
    fetch("http://localhost:8080/send",{
        method: "post",
        body: mail,
    }).then((response) =>{
        return response.json();
    });
};


/*Aparecer caixa de login xd*/
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

/*Sistema de avaliação por comentário/estrela*/

function avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("about.html");
    url = url[0];
   
    var s1 = document.getElementById("starOne").src;
    var s2 = document.getElementById("starTwo").src;
    var s3 = document.getElementById("starThree").src;
    var s4 = document.getElementById("starFour").src;
    var s5 = document.getElementById("starFive").src;
   
   if (estrela == 5){ 
    if (s5 == url + "star_empty.png") {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_full.png";
    document.getElementById("starFour").src = "star_full.png";
    document.getElementById("starFive").src = "star_full.png";
    } else {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_full.png";
    document.getElementById("starFour").src = "star_full.png";
    document.getElementById("starFive").src = "star_empty.png";
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "star_empty.png") {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_full.png";
    document.getElementById("starFour").src = "star_full.png";
    document.getElementById("starFive").src = "star_empty.png";
    } else {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_full.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "star_empty.png") {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_full.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
    } else {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_empty.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "star_empty.png") {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_full.png";
    document.getElementById("starThree").src = "star_empty.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
    } else {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_empty.png";
    document.getElementById("starThree").src = "star_empty.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "star_empty.png") {
    document.getElementById("starOne").src = "star_full.png";
    document.getElementById("starTwo").src = "star_empty.png";
    document.getElementById("starThree").src = "star_empty.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
    } else {
    document.getElementById("starOne").src = "star_empty.png";
    document.getElementById("starTwo").src = "star_empty.png";
    document.getElementById("starThree").src = "star_empty.png";
    document.getElementById("starFour").src = "star_empty.png";
    document.getElementById("starFive").src = "star_empty.png";
   }}
    
}