console.log("Funciona");


function calculo(){
   
    var costo = parseInt(document.getElementById("input--costo").value);
    console.log(costo);
    var atencion = parseFloat(document.getElementById("select--atencion").value);
    console.log(atencion);
    var personas = parseInt(document.getElementById("input--personas").value);
    console.log(personas);
    var resultadovar = costo*atencion/personas;
    console.log(resultadovar);
    document.getElementById("resultado").innerHTML = "Cada uno debe pagar: $"+resultadovar;
}

document.getElementById("calcular").addEventListener("click",calculo,false);
