var muestraFoto = document.getElementById("visor");

document.getElementById("boton-angelica").addEventListener("click", function(){
    muestraFoto.src = "images/angelica-torres.jpg";
});

document.getElementById("boton-carla").addEventListener("click",function(){
    muestraFoto.src = "images/carla-aparicio.jpg";
});

document.getElementById("boton-diana").addEventListener("click", function(){
    muestraFoto.src = "images/diana-aguirre.jpg";
});

document.getElementById("boton-ivan").addEventListener("click", function(){
    muestraFoto.src = "images/ivan-montes.jpg";
});

document.getElementById("boton-juan").addEventListener("click", function(){
    muestraFoto.src = "images/juan-correa.jpeg";
});

/***********************************/

let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let Metodología = document.getElementById("nosotros");

bOscuro.addEventListener("click", function(){
    metodología.style.backgroundColor = "#000000";
    metodología.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    metodología.style.backgroundColor = "#F78B6D";
    metodología.style.color = "#333333";
});

let frases = [];
frases[0] = "Solo sé que nada sé";
frases[1] = "Vine ví y vencí";
frases[2] = "En tiempos de crisis, sólo la imaginación es mas importante que la inteligencia";
frases[3] = "Si quieres cambiar el mundo cambiate a ti mismo";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let fraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function(){
    fraseDia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    fraseDia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    fraseDia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    fraseDia.innerHTML = frases[3];
})

//NUMEROS ALEATORIOS
//console.log(Math.floor(Math.random() * 20 ));
let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "Ada Lovelaceim";
personajes[1] = "Marie Curie";
personajes[2] = "Lise Meitner";
personajes[3] = "Cecilia Payne-Gaposchkin";
personajes[4] = "Rachel Louis Carson"; 

let aleatorio = Math.floor(Math.random() * 5 )
nombrePersonaje.innerHTML = personajes[aleatorio];

//INTERVALOS DE TIEMPO - setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
    personajedia.style.backgroundColor = "#394651";
    personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje, 3000);

//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 5 )
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


//GALERIA con botones
let paisajes = [];
paisajes[0] = "images/ciencia.jpg";
paisajes[1] = "images/tecnologia.jpg";
paisajes[2] = "images/ingieneria.jpg";
paisajes[3] = "images/arte.jpg";
paisajes[4] = "images/matematicas.jpg";

let bRetroceder = document.getElementById("boton-retroceder");
let bAvanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = paisajes[posicion];
}

bAvanzar.addEventListener("click", function(){
        posicion++;
        if(posicion == 5){
            posicion = 0;
        }
        actualizarImagen();
}); 

bRetroceder.addEventListener("click", function(){
        posicion--;
        if(posicion == -1){
            posicion = 4;
        }
        actualizarImagen();
}); 


