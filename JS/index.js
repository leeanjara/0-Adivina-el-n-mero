console.log("Todo en orden");
document.getElementById("play").addEventListener("click",intenta,false);
document.getElementById("btn--1").addEventListener("click",onoff,false);
document.getElementById("btn--2").addEventListener("click",dificultad,false);
document.getElementById("btn--3").addEventListener("click",play,false);

var numeroSecreto, mode, isOnOff, valorInput, numeroIntro, intentos;
isOnOff = true;
onoff();
intentos = 0;

function dificultad(){
    if(numeroSecreto === 0 && isOnOff === true){
    switch (mode.rango){
        case 10:
            mode= {rango:100, dificultad:"normal."};
            document.getElementById("difimg").src= "Imagenes/248-neutral.png";
            break;
        case 100:
            mode= {rango:1000, dificultad:"difícil."};
            document.getElementById("difimg").src= "Imagenes/258-crying.png";
            break;
        case 1000:
            mode= {rango:10, dificultad:"fácil."};
            document.getElementById("difimg").src= "Imagenes/224-happy.png";
            break;
        }
        document.getElementById("dificultadInner").innerHTML = "Modo "+mode.dificultad+" <img src='"+document.getElementById('difimg').src+"' style='height: 1em; width: 1em;'/> "+"(1"+" al "+mode.rango+")";
    }
}
function intenta(){

    if(numeroSecreto === 0 && isOnOff === true){
        document.getElementById("texto1--screen").style="font-size: 1rem;";
        document.getElementById("texto1--screen").innerHTML = "Dale al botón <img src='Imagenes/285-play4.png'/> <br><span style='margin-left: 0 5%; display: inline-block;'>para comenzar...</span>";
        document.getElementById("texto2--screen").innerHTML = " ";
    } 
    else if(document.getElementById("input").value != 0 && isOnOff === true){
        intentos++;
        valorInput = document.getElementById("input").value;
        numeroIntro = parseInt(valorInput);
        document.getElementById("texto2--screen").innerHTML ="#: "+numeroIntro+"<br>"+"N° de intentos: "+intentos; 
    
        if(numeroIntro === numeroSecreto){
            document.getElementById("texto1--screen").innerHTML = "¡Felicidades!<br>&nbsp;&nbsp;¡Ganaste!";
            numeroSecreto = 0;
        } else if (numeroIntro < numeroSecreto){
            document.getElementById("texto1--screen").style="font-size: 1rem;";
            document.getElementById("texto1--screen").innerHTML = "Pista: Intenta un<br>número más alto!";
        } else if(numeroIntro > numeroSecreto){
            document.getElementById("texto1--screen").style="font-size: 1rem;";
            document.getElementById("texto1--screen").innerHTML = "Pista: Intenta un<br>número más bajo!";
        }
        valorInput = document.getElementById("input").value = "";
    } else if(isOnOff === true){
        document.getElementById("texto1--screen").style="font-size: 1rem;";
        document.getElementById("texto1--screen").innerHTML = "Ingresa un número!";
    }
}

function onoff(){
    if(isOnOff === false){
        isOnOff = true;
        mode = {rango:10, dificultad:"fácil."};
        document.getElementById("dificultadInner").innerHTML = "Modo "+mode.dificultad+" <img src='"+document.getElementById('difimg').src+"' style='height: 1em; width: 1em;'/> "+"(1"+" al "+mode.rango+")";
        document.getElementById("difimg").src= "Imagenes/224-happy.png";
        numeroSecreto = 0;
        document.getElementById("texto1--screen").style="font-size: 1rem;";
        document.getElementById("texto1--screen").innerHTML = "Dale al botón <img src='Imagenes/285-play4.png'/> <br><span style='margin-left: 0 5%; display: inline-block;'>para comenzar...</span>";
        document.getElementById("texto2--screen").innerHTML = " ";
        document.getElementById("screen--id").style ="filter: brightness(100%);";
    } else {
        isOnOff = false;
        document.getElementById("screen--id").style ="filter: brightness(3.3%);";
        numeroSecreto = 0;
        valorInput = document.getElementById("input").value = "";
        document.getElementById("dificultadInner").innerHTML = "Dificultad";
        document.getElementById("difimg").src= "Imagenes/224-happy.png";
    }
}

function play(){
    if(isOnOff===true){
    document.getElementById("texto1--screen").style="font-size: 40px;";
    document.getElementById("texto1--screen").innerHTML = "¿?";
    intentos = 0;
    numeroSecreto = Math.ceil(Math.random()*mode.rango);
    console.log(numeroSecreto);
    }
}
