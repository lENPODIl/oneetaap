/*Menu Hamburguesa*/
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;


const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true
    }else{
        abierto=false
    }
})

window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false
        }
    }
})

window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto=false;
        }
    }
})


/*Carrusel imagenes infinitas Albumnes */

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}


/*Categorias de sonido interfaz usuario*/

$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});



/*Lista para escuchar cada sonidos en las categorias de interfaz de usuario
var sound = new Audio();
sound.src = "assets/MalbecDuki.mp3";*/



/*Pausar y dar play en el mismo boton - Solo que se debe hacer uno por cada uno por que si no se reproduce en todos el mismo*/

var audio = document.getElementById('audio');
var playPauseP = document.getElementById('playPauseP');
var contador = 0;

function playPause(){
    if(contador == 0){
        contador = 1;
        audio.play();
        playPauseP.innerHTML = "Pausa";
    }else{
        contador = 0;
        audio.pause();
        playPauseP.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio.addEventListener("ended", function(){   
        playPauseP.innerHTML = "Play";
        contador = 0;
        audio.currentTime = 0;
    });

}

/* Inicia de 0 el sonido
function stop(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseP.innerHTML = "Play";
}

*/

/*etiquetasAudio= $('audio', 'audio1', 'audio2');

function pausarTodosLosAudios() {
   etiquetasAudio.each(function() {
      var a = $(this).get(0);
      a.pause();
   });
}*/


var audio1 = document.getElementById('audio1');
var playPauseP1 = document.getElementById('playPauseP1');
var contador1 = 0;

function playPause1(){
    if(contador1 == 0){
        contador1 = 1;
        audio1.play();
        playPauseP1.innerHTML = "Pausa";
    }else{
        contador1 = 0;
        audio1.pause();
        playPauseP1.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio1.addEventListener("ended", function(){   
        playPauseP1.innerHTML = "Play";
        contador1 = 0;
        audio1.currentTime = 0;
    });

}

var audio2 = document.getElementById('audio2');
var playPauseP2 = document.getElementById('playPauseP2');
var contador2 = 0;

function playPause2(){
    if(contador2 == 0){
        contador2 = 1;
        audio2.play();
        playPauseP2.innerHTML = "Pausa";
    }else{
        contador2 = 0;
        audio2.pause();
        playPauseP2.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio2.addEventListener("ended", function(){   
        playPauseP2.innerHTML = "Play";
        contador2 = 0;
        audio2.currentTime = 0;
    });

}

var audio3 = document.getElementById('audio3');
var playPauseP3 = document.getElementById('playPauseP3');
var contador3 = 0;

function playPause3(){
    if(contador3 == 0){
        contador3 = 1;
        audio3.play();
        playPauseP3.innerHTML = "Pausa";
    }else{
        contador3 = 0;
        audio3.pause();
        playPauseP3.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio3.addEventListener("ended", function(){   
        playPauseP3.innerHTML = "Play";
        contador3 = 0;
        audio3.currentTime = 0;
    });

}

var audio4 = document.getElementById('audio4');
var playPauseP4 = document.getElementById('playPauseP4');
var contador4 = 0;

function playPause4(){
    if(contador4 == 0){
        contador4 = 1;
        audio4.play();
        playPauseP4.innerHTML = "Pausa";
    }else{
        contador4 = 0;
        audio4.pause();
        playPauseP4.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio4.addEventListener("ended", function(){   
        playPauseP4.innerHTML = "Play";
        contador4 = 0;
        audio4.currentTime = 0;
    });

}

var audio5 = document.getElementById('audio5');
var playPauseP5 = document.getElementById('playPauseP5');
var contador5 = 0;

function playPause5(){
    if(contador5 == 0){
        contador5 = 1;
        audio5.play();
        playPauseP5.innerHTML = "Pausa";
    }else{
        contador5 = 0;
        audio5.pause();
        playPauseP5.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio5.addEventListener("ended", function(){   
        playPauseP5.innerHTML = "Play";
        contador5 = 0;
        audio5.currentTime = 0;
    });

}

var audio6 = document.getElementById('audio6');
var playPauseP6 = document.getElementById('playPauseP6');
var contador6 = 0;

function playPause6(){
    if(contador6 == 0){
        contador6 = 1;
        audio6.play();
        playPauseP6.innerHTML = "Pausa";
    }else{
        contador6 = 0;
        audio6.pause();
        playPauseP6.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio6.addEventListener("ended", function(){   
        playPauseP6.innerHTML = "Play";
        contador6 = 0;
        audio6.currentTime = 0;
    });

}

var audio7 = document.getElementById('audio7');
var playPauseP7 = document.getElementById('playPauseP7');
var contador7 = 0;

function playPause7(){
    if(contador7 == 0){
        contador7 = 1;
        audio7.play();
        playPauseP7.innerHTML = "Pausa";
    }else{
        contador7 = 0;
        audio7.pause();
        playPauseP7.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio7.addEventListener("ended", function(){   
        playPauseP7.innerHTML = "Play";
        contador7 = 0;
        audio7.currentTime = 0;
    });

}

var audio8 = document.getElementById('audio8');
var playPauseP8 = document.getElementById('playPauseP8');
var contador8 = 0;

function playPause8(){
    if(contador8 == 0){
        contador8 = 1;
        audio8.play();
        playPauseP8.innerHTML = "Pausa";
    }else{
        contador8 = 0;
        audio8.pause();
        playPauseP8.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio8.addEventListener("ended", function(){   
        playPauseP8.innerHTML = "Play";
        contador8 = 0;
        audio8.currentTime = 0;
    });

}

var audio9 = document.getElementById('audio9');
var playPauseP9 = document.getElementById('playPauseP9');
var contador9 = 0;

function playPause9(){
    if(contador9 == 0){
        contador9 = 1;
        audio9.play();
        playPauseP9.innerHTML = "Pausa";
    }else{
        contador9 = 0;
        audio9.pause();
        playPauseP9.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio9.addEventListener("ended", function(){   
        playPauseP9.innerHTML = "Play";
        contador9 = 0;
        audio9.currentTime = 0;
    });

}

var audio10 = document.getElementById('audio10');
var playPauseP10 = document.getElementById('playPauseP10');
var contador10 = 0;

function playPause10(){
    if(contador10 == 0){
        contador10 = 1;
        audio10.play();
        playPauseP10.innerHTML = "Pausa";
    }else{
        contador10 = 0;
        audio10.pause();
        playPauseP10.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio10.addEventListener("ended", function(){   
        playPauseP10.innerHTML = "Play";
        contador10 = 0;
        audio10.currentTime = 0;
    });

}

var audio11 = document.getElementById('audio11');
var playPauseP11 = document.getElementById('playPauseP11');
var contador11 = 0;

function playPause11(){
    if(contador11 == 0){
        contador11 = 1;
        audio11.play();
        playPauseP11.innerHTML = "Pausa";
    }else{
        contador11 = 0;
        audio11.pause();
        playPauseP11.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio11.addEventListener("ended", function(){   
        playPauseP11.innerHTML = "Play";
        contador11 = 0;
        audio11.currentTime = 0;
    });

}

var audio12 = document.getElementById('audio12');
var playPauseP12 = document.getElementById('playPauseP12');
var contador12 = 0;

function playPause12(){
    if(contador12 == 0){
        contador12 = 1;
        audio12.play();
        playPauseP12.innerHTML = "Pausa";
    }else{
        contador12 = 0;
        audio12.pause();
        playPauseP12.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio12.addEventListener("ended", function(){   
        playPauseP12.innerHTML = "Play";
        contador12 = 0;
        audio12.currentTime = 0;
    });

}

var audio13 = document.getElementById('audio13');
var playPauseP13 = document.getElementById('playPauseP13');
var contador13 = 0;

function playPause13(){
    if(contador13 == 0){
        contador13 = 1;
        audio13.play();
        playPauseP13.innerHTML = "Pausa";
    }else{
        contador13 = 0;
        audio13.pause();
        playPauseP13.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio13.addEventListener("ended", function(){   
        playPauseP13.innerHTML = "Play";
        contador13 = 0;
        audio13.currentTime = 0;
    });

}

var audio14 = document.getElementById('audio14');
var playPauseP14 = document.getElementById('playPauseP14');
var contador14 = 0;

function playPause14(){
    if(contador14 == 0){
        contador14 = 1;
        audio14.play();
        playPauseP14.innerHTML = "Pausa";
    }else{
        contador14 = 0;
        audio14.pause();
        playPauseP14.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio14.addEventListener("ended", function(){   
        playPauseP14.innerHTML = "Play";
        contador14 = 0;
        audio14.currentTime = 0;
    });

}

var audio15 = document.getElementById('audio15');
var playPauseP15 = document.getElementById('playPauseP15');
var contador15 = 0;

function playPause15(){
    if(contador15 == 0){
        contador15 = 1;
        audio15.play();
        playPauseP15.innerHTML = "Pausa";
    }else{
        contador15 = 0;
        audio15.pause();
        playPauseP15.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio15.addEventListener("ended", function(){   
        playPauseP15.innerHTML = "Play";
        contador15 = 0;
        audio15.currentTime = 0;
    });

}

var audio16 = document.getElementById('audio16');
var playPauseP16 = document.getElementById('playPauseP16');
var contador16 = 0;

function playPause16(){
    if(contador16 == 0){
        contador16 = 1;
        audio16.play();
        playPauseP16.innerHTML = "Pausa";
    }else{
        contador16 = 0;
        audio16.pause();
        playPauseP16.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio16.addEventListener("ended", function(){   
        playPauseP6.innerHTML = "Play";
        contador16 = 0;
        audio16.currentTime = 0;
    });

}

var audio17 = document.getElementById('audio17');
var playPauseP17 = document.getElementById('playPauseP17');
var contador17 = 0;

function playPause17(){
    if(contador17 == 0){
        contador17 = 1;
        audio17.play();
        playPauseP17.innerHTML = "Pausa";
    }else{
        contador17 = 0;
        audio17.pause();
        playPauseP17.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio17.addEventListener("ended", function(){   
        playPauseP17.innerHTML = "Play";
        contador17 = 0;
        audio17.currentTime = 0;
    });

}

var audio18 = document.getElementById('audio18');
var playPauseP18 = document.getElementById('playPauseP18');
var contador18 = 0;

function playPause18(){
    if(contador18 == 0){
        contador18 = 1;
        audio18.play();
        playPauseP18.innerHTML = "Pausa";
    }else{
        contador18 = 0;
        audio18.pause();
        playPauseP18.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio18.addEventListener("ended", function(){   
        playPauseP18.innerHTML = "Play";
        contador18 = 0;
        audio18.currentTime = 0;
    });

}

var audio19 = document.getElementById('audio19');
var playPauseP19 = document.getElementById('playPauseP19');
var contador19 = 0;

function playPause19(){
    if(contador19 == 0){
        contador19 = 1;
        audio19.play();
        playPauseP19.innerHTML = "Pausa";
    }else{
        contador19 = 0;
        audio19.pause();
        playPauseP19.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio19.addEventListener("ended", function(){   
        playPauseP19.innerHTML = "Play";
        contador19 = 0;
        audio19.currentTime = 0;
    });

}

var audio20 = document.getElementById('audio20');
var playPauseP20 = document.getElementById('playPauseP20');
var contador20 = 0;

function playPause20(){
    if(contador20 == 0){
        contador20 = 1;
        audio20.play();
        playPauseP20.innerHTML = "Pausa";
    }else{
        contador20 = 0;
        audio20.pause();
        playPauseP20.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio20.addEventListener("ended", function(){   
        playPauseP20.innerHTML = "Play";
        contador20 = 0;
        audio20.currentTime = 0;
    });

}

var audio21 = document.getElementById('audio21');
var playPauseP21 = document.getElementById('playPauseP21');
var contador21 = 0;

function playPause21(){
    if(contador21 == 0){
        contador21 = 1;
        audio21.play();
        playPauseP21.innerHTML = "Pausa";
    }else{
        contador21 = 0;
        audio21.pause();
        playPauseP21.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio21.addEventListener("ended", function(){   
        playPauseP21.innerHTML = "Play";
        contador21 = 0;
        audio21.currentTime = 0;
    });

}

var audio22 = document.getElementById('audio22');
var playPauseP22 = document.getElementById('playPauseP22');
var contador22 = 0;

function playPause22(){
    if(contador22 == 0){
        contador22 = 1;
        audio22.play();
        playPauseP22.innerHTML = "Pausa";
    }else{
        contador22 = 0;
        audio22.pause();
        playPauseP22.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio22.addEventListener("ended", function(){   
        playPauseP22.innerHTML = "Play";
        contador22 = 0;
        audio22.currentTime = 0;
    });

}

var audio23 = document.getElementById('audio23');
var playPauseP23 = document.getElementById('playPauseP23');
var contador23 = 0;

function playPause23(){
    if(contador23 == 0){
        contador23 = 1;
        audio23.play();
        playPauseP23.innerHTML = "Pausa";
    }else{
        contador23 = 0;
        audio23.pause();
        playPauseP23.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio23.addEventListener("ended", function(){   
        playPauseP23.innerHTML = "Play";
        contador23 = 0;
        audio23.currentTime = 0;
    });

}

var audio24 = document.getElementById('audio24');
var playPauseP24 = document.getElementById('playPauseP24');
var contador24 = 0;

function playPause24(){
    if(contador24 == 0){
        contador24 = 1;
        audio24.play();
        playPauseP24.innerHTML = "Pausa";
    }else{
        contador24 = 0;
        audio24.pause();
        playPauseP24.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio24.addEventListener("ended", function(){   
        playPauseP24.innerHTML = "Play";
        contador24 = 0;
        audio24.currentTime = 0;
    });

}

var audio25 = document.getElementById('audio25');
var playPauseP25 = document.getElementById('playPauseP25');
var contador25 = 0;

function playPause25(){
    if(contador25 == 0){
        contador25 = 1;
        audio25.play();
        playPauseP25.innerHTML = "Pausa";
    }else{
        contador25 = 0;
        audio25.pause();
        playPauseP25.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio25.addEventListener("ended", function(){   
        playPauseP25.innerHTML = "Play";
        contador25 = 0;
        audio25.currentTime = 0;
    });

}

var audio26 = document.getElementById('audio26');
var playPauseP26 = document.getElementById('playPauseP26');
var contador26 = 0;

function playPause26(){
    if(contador26 == 0){
        contador26 = 1;
        audio26.play();
        playPauseP26.innerHTML = "Pausa";
    }else{
        contador26 = 0;
        audio26.pause();
        playPauseP26.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio26.addEventListener("ended", function(){   
        playPauseP26.innerHTML = "Play";
        contador26 = 0;
        audio26.currentTime = 0;
    });

}

var audio27 = document.getElementById('audio27');
var playPauseP27 = document.getElementById('playPauseP27');
var contador27 = 0;

function playPause27(){
    if(contador27 == 0){
        contador27 = 1;
        audio27.play();
        playPauseP27.innerHTML = "Pausa";
    }else{
        contador27 = 0;
        audio27.pause();
        playPauseP27.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio27.addEventListener("ended", function(){   
        playPauseP27.innerHTML = "Play";
        contador27 = 0;
        audio27.currentTime = 0;
    });

}

var audio28 = document.getElementById('audio28');
var playPauseP28 = document.getElementById('playPauseP28');
var contador28 = 0;

function playPause28(){
    if(contador28 == 0){
        contador28 = 1;
        audio28.play();
        playPauseP28.innerHTML = "Pausa";
    }else{
        contador28 = 0;
        audio28.pause();
        playPauseP28.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio28.addEventListener("ended", function(){   
        playPauseP28.innerHTML = "Play";
        contador28 = 0;
        audio28.currentTime = 0;
    });

}

var audio29 = document.getElementById('audio29');
var playPauseP29 = document.getElementById('playPauseP29');
var contador29 = 0;

function playPause29(){
    if(contador29 == 0){
        contador29 = 1;
        audio29.play();
        playPauseP29.innerHTML = "Pausa";
    }else{
        contador29 = 0;
        audio29.pause();
        playPauseP29.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio29.addEventListener("ended", function(){   
        playPauseP29.innerHTML = "Play";
        contador29 = 0;
        audio29.currentTime = 0;
    });

}

var audio30 = document.getElementById('audio30');
var playPauseP30 = document.getElementById('playPauseP30');
var contador30 = 0;

function playPause30(){
    if(contador30 == 0){
        contador30 = 1;
        audio30.play();
        playPauseP30.innerHTML = "Pausa";
    }else{
        contador30 = 0;
        audio30.pause();
        playPauseP30.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio30.addEventListener("ended", function(){   
        playPauseP30.innerHTML = "Play";
        contador30 = 0;
        audio30.currentTime = 0;
    });

}

var audio31 = document.getElementById('audio31');
var playPauseP31 = document.getElementById('playPauseP31');
var contador31 = 0;

function playPause31(){
    if(contador31 == 0){
        contador31 = 1;
        audio31.play();
        playPauseP31.innerHTML = "Pausa";
    }else{
        contador31 = 0;
        audio31.pause();
        playPauseP31.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio31.addEventListener("ended", function(){   
        playPauseP31.innerHTML = "Play";
        contador31 = 0;
        audio31.currentTime = 0;
    });

}

var audio32 = document.getElementById('audio32');
var playPauseP32 = document.getElementById('playPauseP32');
var contador32 = 0;

function playPause32(){
    if(contador32 == 0){
        contador32 = 1;
        audio32.play();
        playPauseP32.innerHTML = "Pausa";
    }else{
        contador32 = 0;
        audio32.pause();
        playPauseP32.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio32.addEventListener("ended", function(){   
        playPauseP32.innerHTML = "Play";
        contador32 = 0;
        audio32.currentTime = 0;
    });

}

var audio33 = document.getElementById('audio33');
var playPauseP33 = document.getElementById('playPauseP33');
var contador33 = 0;

function playPause33(){
    if(contador33 == 0){
        contador33 = 1;
        audio33.play();
        playPauseP33.innerHTML = "Pausa";
    }else{
        contador33 = 0;
        audio33.pause();
        playPauseP33.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio33.addEventListener("ended", function(){   
        playPauseP33.innerHTML = "Play";
        contador33 = 0;
        audio33.currentTime = 0;
    });

}

var audio34 = document.getElementById('audio34');
var playPauseP34 = document.getElementById('playPauseP34');
var contador34 = 0;

function playPause34(){
    if(contador34 == 0){
        contador34 = 1;
        audio34.play();
        playPauseP34.innerHTML = "Pausa";
    }else{
        contador34 = 0;
        audio34.pause();
        playPauseP34.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio34.addEventListener("ended", function(){   
        playPauseP34.innerHTML = "Play";
        contador34 = 0;
        audio34.currentTime = 0;
    });

}

var audio35 = document.getElementById('audio35');
var playPauseP35 = document.getElementById('playPauseP35');
var contador35 = 0;

function playPause35(){
    if(contador35 == 0){
        contador35 = 1;
        audio35.play();
        playPauseP35.innerHTML = "Pausa";
    }else{
        contador35 = 0;
        audio35.pause();
        playPauseP35.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio35.addEventListener("ended", function(){   
        playPauseP35.innerHTML = "Play";
        contador35 = 0;
        audio35.currentTime = 0;
    });

}

var audio36 = document.getElementById('audio36');
var playPauseP36 = document.getElementById('playPauseP36');
var contador36 = 0;

function playPause36(){
    if(contador36 == 0){
        contador36 = 1;
        audio36.play();
        playPauseP36.innerHTML = "Pausa";
    }else{
        contador36 = 0;
        audio36.pause();
        playPauseP36.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio36.addEventListener("ended", function(){   
        playPauseP36.innerHTML = "Play";
        contador36 = 0;
        audio36.currentTime = 0;
    });

}

var audio37 = document.getElementById('audio37');
var playPauseP37 = document.getElementById('playPauseP37');
var contador37 = 0;

function playPause37(){
    if(contador37 == 0){
        contador37 = 1;
        audio37.play();
        playPauseP37.innerHTML = "Pausa";
    }else{
        contador37 = 0;
        audio37.pause();
        playPauseP37.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio37.addEventListener("ended", function(){   
        playPauseP37.innerHTML = "Play";
        contador37 = 0;
        audio37.currentTime = 0;
    });

}

var audio38 = document.getElementById('audio38');
var playPauseP38 = document.getElementById('playPauseP38');
var contador38 = 0;

function playPause38(){
    if(contador38 == 0){
        contador38 = 1;
        audio38.play();
        playPauseP38.innerHTML = "Pausa";
    }else{
        contador38 = 0;
        audio3.pause();
        playPauseP38.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio38.addEventListener("ended", function(){   
        playPauseP38.innerHTML = "Play";
        contador38 = 0;
        audio38.currentTime = 0;
    });

}

var audio39 = document.getElementById('audio39');
var playPauseP39 = document.getElementById('playPauseP39');
var contador39 = 0;

function playPause39(){
    if(contador39 == 0){
        contador39 = 1;
        audio39.play();
        playPauseP39.innerHTML = "Pausa";
    }else{
        contador39 = 0;
        audio39.pause();
        playPauseP39.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio39.addEventListener("ended", function(){   
        playPauseP39.innerHTML = "Play";
        contador39 = 0;
        audio39.currentTime = 0;
    });

}

var audio40 = document.getElementById('audio40');
var playPauseP40 = document.getElementById('playPauseP40');
var contador40 = 0;

function playPause40(){
    if(contador40 == 0){
        contador40 = 1;
        audio40.play();
        playPauseP40.innerHTML = "Pausa";
    }else{
        contador40 = 0;
        audio40.pause();
        playPauseP40.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio40.addEventListener("ended", function(){   
        playPauseP40.innerHTML = "Play";
        contador40 = 0;
        audio40.currentTime = 0;
    });

}

var audio41 = document.getElementById('audio41');
var playPauseP41 = document.getElementById('playPauseP41');
var contador41 = 0;

function playPause41(){
    if(contador41 == 0){
        contador41 = 1;
        audio41.play();
        playPauseP41.innerHTML = "Pausa";
    }else{
        contador41 = 0;
        audio41.pause();
        playPauseP41.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio41.addEventListener("ended", function(){   
        playPauseP41.innerHTML = "Play";
        contador41 = 0;
        audio41.currentTime = 0;
    });

}

var audio42 = document.getElementById('audio42');
var playPauseP42= document.getElementById('playPauseP42');
var contador42 = 0;

function playPause42(){
    if(contador42 == 0){
        contador42 = 1;
        audio42.play();
        playPauseP42.innerHTML = "Pausa";
    }else{
        contador42 = 0;
        audio42.pause();
        playPauseP42.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio42.addEventListener("ended", function(){   
        playPauseP42.innerHTML = "Play";
        contador42 = 0;
        audio42.currentTime = 0;
    });

}

var audio43 = document.getElementById('audio43');
var playPauseP43 = document.getElementById('playPauseP43');
var contador43 = 0;

function playPause43(){
    if(contador43 == 0){
        contador43 = 1;
        audio43.play();
        playPauseP43.innerHTML = "Pausa";
    }else{
        contador43 = 0;
        audio43.pause();
        playPauseP43.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio43.addEventListener("ended", function(){   
        playPauseP43.innerHTML = "Play";
        contador43 = 0;
        audio43.currentTime = 0;
    });

}

var audio44 = document.getElementById('audio44');
var playPauseP44 = document.getElementById('playPauseP44');
var contador44 = 0;

function playPause44(){
    if(contador44 == 0){
        contador44 = 1;
        audio44.play();
        playPauseP44.innerHTML = "Pausa";
    }else{
        contador44 = 0;
        audio44.pause();
        playPauseP44.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio44.addEventListener("ended", function(){   
        playPauseP44.innerHTML = "Play";
        contador44 = 0;
        audio44.currentTime = 0;
    });

}

var audio45 = document.getElementById('audio45');
var playPauseP45 = document.getElementById('playPauseP45');
var contador45 = 0;

function playPause45(){
    if(contador45 == 0){
        contador45 = 1;
        audio45.play();
        playPauseP45.innerHTML = "Pausa";
    }else{
        contador45 = 0;
        audio45.pause();
        playPauseP45.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio45.addEventListener("ended", function(){   
        playPauseP45.innerHTML = "Play";
        contador45 = 0;
        audio45.currentTime = 0;
    });

}

var audio46 = document.getElementById('audio46');
var playPauseP46 = document.getElementById('playPauseP46');
var contador46 = 0;

function playPause46(){
    if(contador46 == 0){
        contador46 = 1;
        audio46.play();
        playPauseP46.innerHTML = "Pausa";
    }else{
        contador46 = 0;
        audio46.pause();
        playPauseP46.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio46.addEventListener("ended", function(){   
        playPauseP46.innerHTML = "Play";
        contador46 = 0;
        audio46.currentTime = 0;
    });

}

var audio47 = document.getElementById('audio47');
var playPauseP47 = document.getElementById('playPauseP47');
var contador47 = 0;

function playPause47(){
    if(contador47 == 0){
        contador47 = 1;
        audio47.play();
        playPauseP47.innerHTML = "Pausa";
    }else{
        contador47 = 0;
        audio47.pause();
        playPauseP47.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio47.addEventListener("ended", function(){   
        playPauseP47.innerHTML = "Play";
        contador47 = 0;
        audio47.currentTime = 0;
    });

}

var audio48 = document.getElementById('audio48');
var playPauseP48 = document.getElementById('playPauseP48');
var contador48 = 0;

function playPause48(){
    if(contador48 == 0){
        contador48 = 1;
        audio48.play();
        playPauseP48.innerHTML = "Pausa";
    }else{
        contador48 = 0;
        audio48.pause();
        playPauseP48.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio48.addEventListener("ended", function(){   
        playPauseP48.innerHTML = "Play";
        contador48 = 0;
        audio48.currentTime = 0;
    });
}

var audio49 = document.getElementById('audio49');
var playPauseP49 = document.getElementById('playPauseP49');
var contador49 = 0;

function playPause49(){
    if(contador49 == 0){
        contador49 = 1;
        audio49.play();
        playPauseP49.innerHTML = "Pausa";
    }else{
        contador49 = 0;
        audio49.pause();
        playPauseP49.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio49.addEventListener("ended", function(){   
        playPauseP49.innerHTML = "Play";
        contador49 = 0;
        audio49.currentTime = 0;
    });

}

var audio50 = document.getElementById('audio50');
var playPauseP50 = document.getElementById('playPauseP50');
var contador50 = 0;

function playPause50(){
    if(contador50 == 0){
        contador50 = 1;
        audio50.play();
        playPauseP50.innerHTML = "Pausa";
    }else{
        contador50 = 0;
        audio50.pause();
        playPauseP50.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio50.addEventListener("ended", function(){   
        playPauseP50.innerHTML = "Play";
        contador50 = 0;
        audio50.currentTime = 0;
    });

}

var audio51 = document.getElementById('audio51');
var playPauseP51 = document.getElementById('playPauseP51');
var contador51 = 0;

function playPause51(){
    if(contador51 == 0){
        contador51 = 1;
        audio51.play();
        playPauseP51.innerHTML = "Pausa";
    }else{
        contador51 = 0;
        audio51.pause();
        playPauseP51.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio51.addEventListener("ended", function(){   
        playPauseP51.innerHTML = "Play";
        contador51 = 0;
        audio51.currentTime = 0;
    });

}

var audio52 = document.getElementById('audio52');
var playPauseP52 = document.getElementById('playPauseP52');
var contador52 = 0;

function playPause52(){
    if(contador52 == 0){
        contador52 = 1;
        audio52.play();
        playPauseP52.innerHTML = "Pausa";
    }else{
        contador52 = 0;
        audio52.pause();
        playPauseP52.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio52.addEventListener("ended", function(){   
        playPauseP52.innerHTML = "Play";
        contador52 = 0;
        audio52.currentTime = 0;
    });

}

var audio53 = document.getElementById('audio53');
var playPauseP53 = document.getElementById('playPauseP53');
var contador53 = 0;

function playPause53(){
    if(contador53 == 0){
        contador53 = 1;
        audio53.play();
        playPauseP53.innerHTML = "Pausa";
    }else{
        contador53 = 0;
        audio53.pause();
        playPauseP53.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio53.addEventListener("ended", function(){   
        playPauseP53.innerHTML = "Play";
        contador53 = 0;
        audio53.currentTime = 0;
    });

}

var audio54 = document.getElementById('audio54');
var playPauseP54 = document.getElementById('playPauseP54');
var contador54 = 0;

function playPause54(){
    if(contador54 == 0){
        contador54 = 1;
        audio54.play();
        playPauseP54.innerHTML = "Pausa";
    }else{
        contador54 = 0;
        audio54.pause();
        playPauseP54.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio54.addEventListener("ended", function(){   
        playPauseP54.innerHTML = "Play";
        contador54 = 0;
        audio54.currentTime = 0;
    });

}

var audio55 = document.getElementById('audio55');
var playPauseP55 = document.getElementById('playPauseP55');
var contador55 = 0;

function playPause55(){
    if(contador55 == 0){
        contador55 = 1;
        audio55.play();
        playPauseP55.innerHTML = "Pausa";
    }else{
        contador55 = 0;
        audio55.pause();
        playPauseP55.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio55.addEventListener("ended", function(){   
        playPauseP55.innerHTML = "Play";
        contador55 = 0;
        audio55.currentTime = 0;
    });

}

var audio56 = document.getElementById('audio56');
var playPauseP56 = document.getElementById('playPauseP56');
var contador56 = 0;

function playPause56(){
    if(contador56 == 0){
        contador56 = 1;
        audio56.play();
        playPauseP56.innerHTML = "Pausa";
    }else{
        contador56 = 0;
        audio56.pause();
        playPauseP56.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio56.addEventListener("ended", function(){   
        playPauseP56.innerHTML = "Play";
        contador56 = 0;
        audio56.currentTime = 0;
    });

}

var audio57 = document.getElementById('audio57');
var playPauseP57 = document.getElementById('playPauseP57');
var contador57 = 0;

function playPause57(){
    if(contador57 == 0){
        contador57 = 1;
        audio57.play();
        playPauseP57.innerHTML = "Pausa";
    }else{
        contador57 = 0;
        audio57.pause();
        playPauseP57.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio57.addEventListener("ended", function(){   
        playPauseP57.innerHTML = "Play";
        contador57 = 0;
        audio57.currentTime = 0;
    });

}

var audio58 = document.getElementById('audio58');
var playPauseP58 = document.getElementById('playPauseP58');
var contador58 = 0;

function playPause58(){
    if(contador58 == 0){
        contador58 = 1;
        audio58.play();
        playPauseP58.innerHTML = "Pausa";
    }else{
        contador58 = 0;
        audio58.pause();
        playPauseP58.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio58.addEventListener("ended", function(){   
        playPauseP58.innerHTML = "Play";
        contador58 = 0;
        audio58.currentTime = 0;
    });

}

var audio59 = document.getElementById('audio59');
var playPauseP59 = document.getElementById('playPauseP59');
var contador59 = 0;

function playPause59(){
    if(contador59 == 0){
        contador59 = 1;
        audio59.play();
        playPauseP59.innerHTML = "Pausa";
    }else{
        contador59 = 0;
        audio59.pause();
        playPauseP59.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio59.addEventListener("ended", function(){   
        playPauseP59.innerHTML = "Play";
        contador59 = 0;
        audio59.currentTime = 0;
    });

}

var audio60 = document.getElementById('audio60');
var playPauseP60 = document.getElementById('playPauseP60');
var contador60 = 0;

function playPause60(){
    if(contador60 == 0){
        contador60 = 1;
        audio60.play();
        playPauseP60.innerHTML = "Pausa";
    }else{
        contador60 = 0;
        audio60.pause();
        playPauseP60.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio60.addEventListener("ended", function(){   
        playPauseP60.innerHTML = "Play";
        contador60 = 0;
        audio60.currentTime = 0;
    });

}

var audio61 = document.getElementById('audio61');
var playPauseP61 = document.getElementById('playPauseP61');
var contador61 = 0;

function playPause61(){
    if(contador61 == 0){
        contador61 = 1;
        audio61.play();
        playPauseP61.innerHTML = "Pausa";
    }else{
        contador61 = 0;
        audio61.pause();
        playPauseP61.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio61.addEventListener("ended", function(){   
        playPauseP61.innerHTML = "Play";
        contador61 = 0;
        audio61.currentTime = 0;
    });

}

var audio62 = document.getElementById('audio62');
var playPauseP62 = document.getElementById('playPauseP62');
var contador62 = 0;

function playPause62(){
    if(contador62 == 0){
        contador62 = 1;
        audio62.play();
        playPauseP62.innerHTML = "Pausa";
    }else{
        contador62 = 0;
        audio62.pause();
        playPauseP62.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio62.addEventListener("ended", function(){   
        playPauseP62.innerHTML = "Play";
        contador62 = 0;
        audio62.currentTime = 0;
    });

}

var audio63 = document.getElementById('audio63');
var playPauseP63 = document.getElementById('playPauseP63');
var contador63 = 0;

function playPause63(){
    if(contador63 == 0){
        contador63 = 1;
        audio63.play();
        playPauseP63.innerHTML = "Pausa";
    }else{
        contador63 = 0;
        audio63.pause();
        playPauseP63.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio63.addEventListener("ended", function(){   
        playPauseP63.innerHTML = "Play";
        contador63 = 0;
        audio63.currentTime = 0;
    });

}

var audio64 = document.getElementById('audio64');
var playPauseP64 = document.getElementById('playPauseP64');
var contador64 = 0;

function playPause64(){
    if(contador64 == 0){
        contador64 = 1;
        audio64.play();
        playPauseP64.innerHTML = "Pausa";
    }else{
        contador64 = 0;
        audio64.pause();
        playPauseP64.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio64.addEventListener("ended", function(){   
        playPauseP64.innerHTML = "Play";
        contador64 = 0;
        audio64.currentTime = 0;
    });

}

var audio65 = document.getElementById('audio65');
var playPauseP65 = document.getElementById('playPauseP65');
var contador65 = 0;

function playPause65(){
    if(contador65 == 0){
        contador65 = 1;
        audio65.play();
        playPauseP65.innerHTML = "Pausa";
    }else{
        contador65 = 0;
        audio65.pause();
        playPauseP65.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio65.addEventListener("ended", function(){   
        playPauseP65.innerHTML = "Play";
        contador65 = 0;
        audio65.currentTime = 0;
    });

}

var audio66 = document.getElementById('audio66');
var playPauseP66 = document.getElementById('playPauseP66');
var contador66 = 0;

function playPause66(){
    if(contador66 == 0){
        contador66 = 1;
        audio66.play();
        playPauseP66.innerHTML = "Pausa";
    }else{
        contador66 = 0;
        audio66.pause();
        playPauseP66.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio66.addEventListener("ended", function(){   
        playPauseP66.innerHTML = "Play";
        contador66 = 0;
        audio66.currentTime = 0;
    });

}

var audio67 = document.getElementById('audio67');
var playPauseP67 = document.getElementById('playPauseP67');
var contador67 = 0;

function playPause67(){
    if(contador67 == 0){
        contador67 = 1;
        audio67.play();
        playPauseP67.innerHTML = "Pausa";
    }else{
        contador67 = 0;
        audio67.pause();
        playPauseP67.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio67.addEventListener("ended", function(){   
        playPauseP67.innerHTML = "Play";
        contador67 = 0;
        audio67.currentTime = 0;
    });

}

var audio68 = document.getElementById('audio68');
var playPauseP68 = document.getElementById('playPauseP68');
var contador68 = 0;

function playPause68(){
    if(contador68 == 0){
        contador68 = 1;
        audio68.play();
        playPauseP68.innerHTML = "Pausa";
    }else{
        contador68 = 0;
        audio68.pause();
        playPauseP68.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio68.addEventListener("ended", function(){   
        playPauseP68.innerHTML = "Play";
        contador68 = 0;
        audio68.currentTime = 0;
    });

}

var audio69 = document.getElementById('audio69');
var playPauseP69 = document.getElementById('playPauseP69');
var contador69 = 0;

function playPause69(){
    if(contador69 == 0){
        contador69 = 1;
        audio69.play();
        playPauseP69.innerHTML = "Pausa";
    }else{
        contador69 = 0;
        audio69.pause();
        playPauseP69.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio69.addEventListener("ended", function(){   
        playPauseP69.innerHTML = "Play";
        contador69 = 0;
        audio69.currentTime = 0;
    });

}

var audio70 = document.getElementById('audio70');
var playPauseP70 = document.getElementById('playPauseP70');
var contador70 = 0;

function playPause70(){
    if(contador70 == 0){
        contador70 = 1;
        audio70.play();
        playPauseP70.innerHTML = "Pausa";
    }else{
        contador70 = 0;
        audio70.pause();
        playPauseP70.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio70.addEventListener("ended", function(){   
        playPauseP70.innerHTML = "Play";
        contador70 = 0;
        audio70.currentTime = 0;
    });

}

var audio71 = document.getElementById('audio71');
var playPauseP71 = document.getElementById('playPauseP71');
var contador71 = 0;

function playPause71(){
    if(contador71 == 0){
        contador71 = 1;
        audio71.play();
        playPauseP71.innerHTML = "Pausa";
    }else{
        contador71 = 0;
        audio71.pause();
        playPauseP71.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio71.addEventListener("ended", function(){   
        playPauseP71.innerHTML = "Play";
        contador71 = 0;
        audio71.currentTime = 0;
    });

}

var audio72 = document.getElementById('audio72');
var playPauseP72 = document.getElementById('playPauseP72');
var contador72 = 0;

function playPause72(){
    if(contador72 == 0){
        contador72 = 1;
        audio72.play();
        playPauseP72.innerHTML = "Pausa";
    }else{
        contador72 = 0;
        audio72.pause();
        playPauseP72.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio72.addEventListener("ended", function(){   
        playPauseP72.innerHTML = "Play";
        contador72 = 0;
        audio72.currentTime = 0;
    });

}

var audio73 = document.getElementById('audio73');
var playPauseP73 = document.getElementById('playPauseP73');
var contador73 = 0;

function playPause73(){
    if(contador73 == 0){
        contador73 = 1;
        audio73.play();
        playPauseP73.innerHTML = "Pausa";
    }else{
        contador73 = 0;
        audio73.pause();
        playPauseP73.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio73.addEventListener("ended", function(){   
        playPauseP73.innerHTML = "Play";
        contador73 = 0;
        audio73.currentTime = 0;
    });

}

var audio74 = document.getElementById('audio74');
var playPauseP74 = document.getElementById('playPauseP74');
var contador74 = 0;

function playPause74(){
    if(contador74 == 0){
        contador74 = 1;
        audio74.play();
        playPauseP74.innerHTML = "Pausa";
    }else{
        contador74 = 0;
        audio74.pause();
        playPauseP74.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio74.addEventListener("ended", function(){   
        playPauseP74.innerHTML = "Play";
        contador74 = 0;
        audio74.currentTime = 0;
    });

}

var audio75 = document.getElementById('audio75');
var playPauseP75 = document.getElementById('playPauseP75');
var contador75 = 0;

function playPause75(){
    if(contador75 == 0){
        contador75 = 1;
        audio75.play();
        playPauseP7.innerHTML = "Pausa";
    }else{
        contador75 = 0;
        audio75.pause();
        playPauseP75.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio75.addEventListener("ended", function(){   
        playPauseP75.innerHTML = "Play";
        contador75 = 0;
        audio75.currentTime = 0;
    });

}

var audio76 = document.getElementById('audio76');
var playPauseP76 = document.getElementById('playPauseP76');
var contador76 = 0;

function playPause76(){
    if(contador76 == 0){
        contador76 = 1;
        audio76.play();
        playPauseP76.innerHTML = "Pausa";
    }else{
        contador76 = 0;
        audio76.pause();
        playPauseP76.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio76.addEventListener("ended", function(){   
        playPauseP76.innerHTML = "Play";
        contador76 = 0;
        audio76.currentTime = 0;
    });

}

var audio77 = document.getElementById('audio77');
var playPauseP77 = document.getElementById('playPauseP77');
var contador77 = 0;

function playPause77(){
    if(contador77 == 0){
        contador77 = 1;
        audio77.play();
        playPauseP77.innerHTML = "Pausa";
    }else{
        contador77 = 0;
        audio77.pause();
        playPauseP77.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio77.addEventListener("ended", function(){   
        playPauseP77.innerHTML = "Play";
        contador77 = 0;
        audio77.currentTime = 0;
    });

}

var audio78 = document.getElementById('audio78');
var playPauseP78 = document.getElementById('playPauseP78');
var contador78 = 0;

function playPause78(){
    if(contador78 == 0){
        contador78 = 1;
        audio78.play();
        playPauseP78.innerHTML = "Pausa";
    }else{
        contador78 = 0;
        audio78.pause();
        playPauseP78.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio78.addEventListener("ended", function(){   
        playPauseP78.innerHTML = "Play";
        contador78 = 0;
        audio78.currentTime = 0;
    });

}

var audio79 = document.getElementById('audio79');
var playPauseP79 = document.getElementById('playPauseP79');
var contador79 = 0;

function playPause79(){
    if(contador79 == 0){
        contador79 = 1;
        audio79.play();
        playPauseP79.innerHTML = "Pausa";
    }else{
        contador79 = 0;
        audio79.pause();
        playPauseP79.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio79.addEventListener("ended", function(){   
        playPauseP79.innerHTML = "Play";
        contador79 = 0;
        audio79.currentTime = 0;
    });

}

var audio80 = document.getElementById('audio80');
var playPauseP80 = document.getElementById('playPauseP80');
var contador80 = 0;

function playPause80(){
    if(contador80 == 0){
        contador80 = 1;
        audio80.play();
        playPauseP80.innerHTML = "Pausa";
    }else{
        contador80 = 0;
        audio80.pause();
        playPauseP80.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio80.addEventListener("ended", function(){   
        playPauseP80.innerHTML = "Play";
        contador80 = 0;
        audio80.currentTime = 0;
    });

}

var audio81 = document.getElementById('audio81');
var playPauseP81 = document.getElementById('playPauseP81');
var contador81 = 0;

function playPause81(){
    if(contador81 == 0){
        contador81 = 1;
        audio81.play();
        playPauseP81.innerHTML = "Pausa";
    }else{
        contador81 = 0;
        audio81.pause();
        playPauseP81.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio81.addEventListener("ended", function(){   
        playPauseP81.innerHTML = "Play";
        contador81 = 0;
        audio81.currentTime = 0;
    });

}

var audio82 = document.getElementById('audio82');
var playPauseP82 = document.getElementById('playPauseP82');
var contador82 = 0;

function playPause82(){
    if(contador82 == 0){
        contador82 = 1;
        audio82.play();
        playPauseP82.innerHTML = "Pausa";
    }else{
        contador82 = 0;
        audio82.pause();
        playPauseP82.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio82.addEventListener("ended", function(){   
        playPauseP82.innerHTML = "Play";
        contador82 = 0;
        audio82.currentTime = 0;
    });

}

var audio83 = document.getElementById('audio83');
var playPauseP83 = document.getElementById('playPauseP83');
var contador83 = 0;

function playPause83(){
    if(contador83 == 0){
        contador83 = 1;
        audio83.play();
        playPauseP83.innerHTML = "Pausa";
    }else{
        contador83 = 0;
        audio83.pause();
        playPauseP83.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio83.addEventListener("ended", function(){   
        playPauseP83.innerHTML = "Play";
        contador83 = 0;
        audio83.currentTime = 0;
    });

}

var audio84 = document.getElementById('audio84');
var playPauseP84 = document.getElementById('playPauseP84');
var contador84 = 0;

function playPause84(){
    if(contador84 == 0){
        contador84 = 1;
        audio84.play();
        playPauseP84.innerHTML = "Pausa";
    }else{
        contador84 = 0;
        audio84.pause();
        playPauseP84.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio84.addEventListener("ended", function(){   
        playPauseP84.innerHTML = "Play";
        contador84 = 0;
        audio84.currentTime = 0;
    });

}

var audio85 = document.getElementById('audio85');
var playPauseP85 = document.getElementById('playPauseP85');
var contador85 = 0;

function playPause85(){
    if(contador85 == 0){
        contador85 = 1;
        audio85.play();
        playPauseP85.innerHTML = "Pausa";
    }else{
        contador85 = 0;
        audio85.pause();
        playPauseP85.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio85.addEventListener("ended", function(){   
        playPauseP85.innerHTML = "Play";
        contador85 = 0;
        audio85.currentTime = 0;
    });

}

var audio86 = document.getElementById('audio86');
var playPauseP86 = document.getElementById('playPauseP86');
var contador86 = 0;

function playPause86(){
    if(contador86 == 0){
        contador86 = 1;
        audio86.play();
        playPauseP86.innerHTML = "Pausa";
    }else{
        contador86 = 0;
        audio86.pause();
        playPauseP86.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio86.addEventListener("ended", function(){   
        playPauseP86.innerHTML = "Play";
        contador86 = 0;
        audio86.currentTime = 0;
    });

}

var audio87 = document.getElementById('audio87');
var playPauseP87 = document.getElementById('playPauseP87');
var contador87 = 0;

function playPause87(){
    if(contador87 == 0){
        contador87 = 1;
        audio87.play();
        playPauseP87.innerHTML = "Pausa";
    }else{
        contador87 = 0;
        audio87.pause();
        playPauseP87.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio87.addEventListener("ended", function(){   
        playPauseP87.innerHTML = "Play";
        contador87 = 0;
        audio87.currentTime = 0;
    });

}

var audio88 = document.getElementById('audio88');
var playPauseP88 = document.getElementById('playPauseP88');
var contador88 = 0;

function playPause88(){
    if(contador88 == 0){
        contador88 = 1;
        audio88.play();
        playPauseP88.innerHTML = "Pausa";
    }else{
        contador88 = 0;
        audio88.pause();
        playPauseP88.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio88.addEventListener("ended", function(){   
        playPauseP88.innerHTML = "Play";
        contador88 = 0;
        audio88.currentTime = 0;
    });

}

var audio89 = document.getElementById('audio89');
var playPauseP89 = document.getElementById('playPauseP89');
var contador89 = 0;

function playPause89(){
    if(contador89 == 0){
        contador89 = 1;
        audio89.play();
        playPauseP89.innerHTML = "Pausa";
    }else{
        contador89 = 0;
        audio89.pause();
        playPauseP89.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio89.addEventListener("ended", function(){   
        playPauseP89.innerHTML = "Play";
        contador89 = 0;
        audio89.currentTime = 0;
    });

}

var audio90 = document.getElementById('audio90');
var playPauseP90 = document.getElementById('playPauseP90');
var contador90 = 0;

function playPause90(){
    if(contador90 == 0){
        contador90 = 1;
        audio90.play();
        playPauseP90.innerHTML = "Pausa";
    }else{
        contador90 = 0;
        audio90.pause();
        playPauseP90.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio90.addEventListener("ended", function(){   
        playPauseP90.innerHTML = "Play";
        contador90 = 0;
        audio90.currentTime = 0;
    });

}

var audio91 = document.getElementById('audio91');
var playPauseP91 = document.getElementById('playPauseP91');
var contador91 = 0;

function playPause91(){
    if(contador91 == 0){
        contador91 = 1;
        audio91.play();
        playPauseP91.innerHTML = "Pausa";
    }else{
        contador91 = 0;
        audio91.pause();
        playPauseP91.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio91.addEventListener("ended", function(){   
        playPauseP91.innerHTML = "Play";
        contador91 = 0;
        audio91.currentTime = 0;
    });

}

var audio92 = document.getElementById('audio92');
var playPauseP92 = document.getElementById('playPauseP92');
var contador92 = 0;

function playPause92(){
    if(contador92 == 0){
        contador92 = 1;
        audio92.play();
        playPauseP92.innerHTML = "Pausa";
    }else{
        contador92 = 0;
        audio92.pause();
        playPauseP92.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio92.addEventListener("ended", function(){   
        playPauseP92.innerHTML = "Play";
        contador92 = 0;
        audio92.currentTime = 0;
    });

}

var audio93 = document.getElementById('audio93');
var playPauseP93 = document.getElementById('playPauseP93');
var contador93 = 0;

function playPause93(){
    if(contador93 == 0){
        contador93 = 1;
        audio93.play();
        playPauseP93.innerHTML = "Pausa";
    }else{
        contador93 = 0;
        audio93.pause();
        playPauseP93.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio93.addEventListener("ended", function(){   
        playPauseP93.innerHTML = "Play";
        contador93 = 0;
        audio93.currentTime = 0;
    });

}

var audio94 = document.getElementById('audio94');
var playPauseP94 = document.getElementById('playPauseP94');
var contador94 = 0;

function playPause94(){
    if(contador94 == 0){
        contador94 = 1;
        audio94.play();
        playPauseP94.innerHTML = "Pausa";
    }else{
        contador94 = 0;
        audio94.pause();
        playPauseP94.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio94.addEventListener("ended", function(){   
        playPauseP94.innerHTML = "Play";
        contador94 = 0;
        audio94.currentTime = 0;
    });

}

var audio95 = document.getElementById('audio95');
var playPauseP95 = document.getElementById('playPauseP95');
var contador95 = 0;

function playPause95(){
    if(contador95 == 0){
        contador95 = 1;
        audio95.play();
        playPauseP95.innerHTML = "Pausa";
    }else{
        contador95 = 0;
        audio95.pause();
        playPauseP95.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio95.addEventListener("ended", function(){   
        playPauseP95.innerHTML = "Play";
        contador95 = 0;
        audio95.currentTime = 0;
    });

}

var audio96 = document.getElementById('audio96');
var playPauseP96 = document.getElementById('playPauseP96');
var contador96 = 0;

function playPause96(){
    if(contador96 == 0){
        contador96 = 1;
        audio96.play();
        playPauseP96.innerHTML = "Pausa";
    }else{
        contador96 = 0;
        audio96.pause();
        playPauseP96.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio96.addEventListener("ended", function(){   
        playPauseP96.innerHTML = "Play";
        contador96 = 0;
        audio96.currentTime = 0;
    });

}

var audio97 = document.getElementById('audio97');
var playPauseP97 = document.getElementById('playPauseP97');
var contador97 = 0;

function playPause97(){
    if(contador97 == 0){
        contador97 = 1;
        audio97.play();
        playPauseP97.innerHTML = "Pausa";
    }else{
        contador97 = 0;
        audio97.pause();
        playPauseP97.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio97.addEventListener("ended", function(){   
        playPauseP97.innerHTML = "Play";
        contador97 = 0;
        audio97.currentTime = 0;
    });

}

var audio98 = document.getElementById('audio98');
var playPauseP98 = document.getElementById('playPauseP98');
var contador98 = 0;

function playPause98(){
    if(contador98 == 0){
        contador98 = 1;
        audio98.play();
        playPauseP98.innerHTML = "Pausa";
    }else{
        contador98 = 0;
        audio98.pause();
        playPauseP98.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio98.addEventListener("ended", function(){   
        playPauseP98.innerHTML = "Play";
        contador98 = 0;
        audio98.currentTime = 0;
    });

}

var audio99 = document.getElementById('audio99');
var playPauseP99 = document.getElementById('playPauseP99');
var contador99 = 0;

function playPause99(){
    if(contador99 == 0){
        contador99 = 1;
        audio99.play();
        playPauseP99.innerHTML = "Pausa";
    }else{
        contador99 = 0;
        audio99.pause();
        playPauseP99.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio99.addEventListener("ended", function(){   
        playPauseP99.innerHTML = "Play";
        contador99 = 0;
        audio99.currentTime = 0;
    });

}

var audio100 = document.getElementById('audio100');
var playPauseP100 = document.getElementById('playPauseP100');
var contador100 = 0;

function playPause100(){
    if(contador100 == 0){
        contador100 = 1;
        audio100.play();
        playPauseP100.innerHTML = "Pausa";
    }else{
        contador100 = 0;
        audio100.pause();
        playPauseP100.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio100.addEventListener("ended", function(){   
        playPauseP100.innerHTML = "Play";
        contador100 = 0;
        audio100.currentTime = 0;
    });

}


var audio101 = document.getElementById('audio101');
var playPauseP101 = document.getElementById('playPauseP101');
var contador101 = 0;

function playPause101(){
    if(contador101 == 0){
        contador101 = 1;
        audio101.play();
        playPauseP101.innerHTML = "Pausa";
    }else{
        contador101 = 0;
        audio101.pause();
        playPauseP101.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio101.addEventListener("ended", function(){   
        playPauseP101.innerHTML = "Play";
        contador101 = 0;
        audio101.currentTime = 0;
    });

}

var audio102 = document.getElementById('audio102');
var playPauseP102 = document.getElementById('playPauseP102');
var contador102 = 0;

function playPause102(){
    if(contador102 == 0){
        contador102 = 1;
        audio102.play();
        playPauseP102.innerHTML = "Pausa";
    }else{
        contador102 = 0;
        audio102.pause();
        playPauseP102.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio102.addEventListener("ended", function(){   
        playPauseP102.innerHTML = "Play";
        contador102 = 0;
        audio102.currentTime = 0;
    });

}

var audio103 = document.getElementById('audio103');
var playPauseP103 = document.getElementById('playPauseP103');
var contador103 = 0;

function playPause103(){
    if(contador103 == 0){
        contador103 = 1;
        audio103.play();
        playPauseP103.innerHTML = "Pausa";
    }else{
        contador103 = 0;
        audio103.pause();
        playPauseP103.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio103.addEventListener("ended", function(){   
        playPauseP103.innerHTML = "Play";
        contador103 = 0;
        audio103.currentTime = 0;
    });

}

var audio104 = document.getElementById('audio104');
var playPauseP104 = document.getElementById('playPauseP104');
var contador104 = 0;

function playPause104(){
    if(contador104 == 0){
        contador104 = 1;
        audio104.play();
        playPauseP104.innerHTML = "Pausa";
    }else{
        contador104 = 0;
        audio104.pause();
        playPauseP104.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio104.addEventListener("ended", function(){   
        playPauseP104.innerHTML = "Play";
        contador104 = 0;
        audio104.currentTime = 0;
    });

}

var audio105 = document.getElementById('audio105');
var playPauseP105 = document.getElementById('playPauseP105');
var contador105 = 0;

function playPause105(){
    if(contador105 == 0){
        contador105 = 1;
        audio105.play();
        playPauseP105.innerHTML = "Pausa";
    }else{
        contador105 = 0;
        audio105.pause();
        playPauseP105.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio105.addEventListener("ended", function(){   
        playPauseP105.innerHTML = "Play";
        contador105 = 0;
        audio105.currentTime = 0;
    });

}

var audio1006 = document.getElementById('audio106');
var playPauseP106 = document.getElementById('playPauseP106');
var contador106 = 0;

function playPause106(){
    if(contador106 == 0){
        contador106 = 1;
        audio106.play();
        playPauseP106.innerHTML = "Pausa";
    }else{
        contador106 = 0;
        audio106.pause();
        playPauseP106.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio106.addEventListener("ended", function(){   
        playPauseP106.innerHTML = "Play";
        contador106 = 0;
        audio106.currentTime = 0;
    });

}

var audio107 = document.getElementById('audio107');
var playPauseP107 = document.getElementById('playPauseP107');
var contador107 = 0;

function playPause107(){
    if(contador107 == 0){
        contador107 = 1;
        audio107.play();
        playPauseP107.innerHTML = "Pausa";
    }else{
        contador107 = 0;
        audio107.pause();
        playPauseP107.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio107.addEventListener("ended", function(){   
        playPauseP107.innerHTML = "Play";
        contador107 = 0;
        audio107.currentTime = 0;
    });

}

var audio108 = document.getElementById('audio108');
var playPauseP108 = document.getElementById('playPauseP108');
var contador108 = 0;

function playPause108(){
    if(contador108 == 0){
        contador108 = 1;
        audio108.play();
        playPauseP108.innerHTML = "Pausa";
    }else{
        contador108 = 0;
        audio108.pause();
        playPauseP108.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio108.addEventListener("ended", function(){   
        playPauseP108.innerHTML = "Play";
        contador108 = 0;
        audio108.currentTime = 0;
    });

}

var audio109 = document.getElementById('audio109');
var playPauseP109 = document.getElementById('playPauseP109');
var contador109 = 0;

function playPause109(){
    if(contador109 == 0){
        contador109 = 1;
        audio109.play();
        playPauseP109.innerHTML = "Pausa";
    }else{
        contador109 = 0;
        audio109.pause();
        playPauseP109.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio109.addEventListener("ended", function(){   
        playPauseP109.innerHTML = "Play";
        contador109 = 0;
        audio109.currentTime = 0;
    });

}

var audio110 = document.getElementById('audio110');
var playPauseP110 = document.getElementById('playPauseP110');
var contador110 = 0;

function playPause110(){
    if(contador110 == 0){
        contador110 = 1;
        audio110.play();
        playPauseP110.innerHTML = "Pausa";
    }else{
        contador110 = 0;
        audio110.pause();
        playPauseP110.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio110.addEventListener("ended", function(){   
        playPauseP110.innerHTML = "Play";
        contador110 = 0;
        audio110.currentTime = 0;
    });

}

var audio111 = document.getElementById('audio111');
var playPauseP111 = document.getElementById('playPauseP111');
var contador111 = 0;

function playPause111(){
    if(contador111 == 0){
        contador111 = 1;
        audio111.play();
        playPauseP111.innerHTML = "Pausa";
    }else{
        contador111 = 0;
        audio111.pause();
        playPauseP111.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio111.addEventListener("ended", function(){   
        playPauseP111.innerHTML = "Play";
        contador111 = 0;
        audio111.currentTime = 0;
    });

}

var audio112 = document.getElementById('audio112');
var playPauseP112 = document.getElementById('playPauseP112');
var contador112 = 0;

function playPause112(){
    if(contador112 == 0){
        contador112 = 1;
        audio112.play();
        playPauseP112.innerHTML = "Pausa";
    }else{
        contador112 = 0;
        audio112.pause();
        playPauseP112.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio112.addEventListener("ended", function(){   
        playPauseP112.innerHTML = "Play";
        contador112 = 0;
        audio112.currentTime = 0;
    });

}

var audio113 = document.getElementById('audio113');
var playPauseP113 = document.getElementById('playPauseP113');
var contador113 = 0;

function playPause113(){
    if(contador113 == 0){
        contador113 = 1;
        audio113.play();
        playPauseP113.innerHTML = "Pausa";
    }else{
        contador113 = 0;
        audio113.pause();
        playPauseP113.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio113.addEventListener("ended", function(){   
        playPauseP113.innerHTML = "Play";
        contador113 = 0;
        audio113.currentTime = 0;
    });

}

var audio114 = document.getElementById('audio114');
var playPauseP114 = document.getElementById('playPauseP114');
var contador114 = 0;

function playPause114(){
    if(contador114 == 0){
        contador114 = 1;
        audio114.play();
        playPauseP114.innerHTML = "Pausa";
    }else{
        contador114 = 0;
        audio114.pause();
        playPauseP114.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio114.addEventListener("ended", function(){   
        playPauseP114.innerHTML = "Play";
        contador114 = 0;
        audio114.currentTime = 0;
    });

}














