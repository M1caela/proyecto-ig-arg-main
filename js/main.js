
// efecto parallax
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var parallaxImage = document.querySelector('.parallax-backg img');

    /* Se mueve más lento que el scroll para el efecto parallax */
    parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
});


/********  JQUERY *******
 
$("selector del elemento html").accion();

// nos aseguramos que se ejecute cuando terminó de cargar el documento
$(document).ready(function(){
});

// se pueden agregar ESTILOS
$("p").css({"background-color": "red"});

// EVENTOS
$("button").click(function(){
    alert("hola");
    $("#elemento").hide();   //// esconde el elemento
});

$("button").dblclick(function(){
    $(".elemento").show();  //// muestra el elemento
});

$(".elemento").mouseenter(function(){
    $("#elemento").slideUp(); /slideDown //// se esconde o sale para arriba o abajo /// ACORDEONES
});

$(".elemento").mouseleave(function(){
   $("#elemento").fadeOut(); / fadeIn //// se desvanece o aparece lentamenente
});

$("button").click(function(){
    $("h1").addClass("red");  //// añade un estio - previamente hay que crearlo en el style del html
});         removeClass

$("button").dblclick(function(){
    $("p").toggleClass();  //// función de ON/OFF, se agrega o quite alternadamente
});

$("#elemento").text("Hola"));     //// muestra un texto
$("elemento").html("Hola <strong> mundo </strong>");   //// muestra html

$("elemento").append("Hola");  //// añade  un texto al final
$("elemento").after("Hola");  //// añade  un elemento al final

$("elemento").prepend("Hola");  //// añade  un texto al principio
$("elemento").before("Hola");  //// añade  un elemento al principio

$("elemento").remove("");  //// elimina contenido
$("elemento").empty("");  //// vacia contenido (pero sigue estando ahi)

$("elemento").animate({width:"300px"});    //// animaciones css

alert($("#elemento").attr("title"));   //// obtener el valor de un atributo htnl



*********/