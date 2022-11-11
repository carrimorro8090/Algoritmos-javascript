// Las funciones deben tener un parentesis junto al nombre //
//se conoce como un evento con lo que se puede invocar las funciones de java script //
// onload: CARGAR //
// onclick: Dar click y carga la funcion 
function OpBasicas(){

    alert ("El siguiente algoritmo muestra las oprecacion es básicas de la matemática...");
    var A
    var B
    var SUMA;
    var RESTA;
    var DIVISION;
    var MULTIPLICACION;

    A = parseInt(prompt("Ingrese el primer numero"));

    B = parseInt(prompt("Ingrese el segundo numero"));

    SUMA = A + B;

    RESTA = A - B;

    DIVISION = A / B;

    MULTIPLICACION = A * B;

    alert ("La suma es de:" + SUMA);
    alert ("La resta es de:" + RESTA);
    alert ("La division es de:" + DIVISION);
    alert ("La multiplicacion es de:" + MULTIPLICACION);

}

function cuadrado(){

    alert("El siguiente algoritmo muestra el cudrado de el número que quieras...");

    var A = 0;
    var C = 0;

    A = parseInt(prompt("Ingrese el número a calcular"));

    C = A * A;

    alert("El cuadrado del numero ingresado es:" + C );


}

function Areatring(){

    alert("El siguiente algoritmo muestra el resultado de el area de un triangulo...");
    var BASE;
    var ALTURA;
    var AREA;

    BASE = parseInt(prompt("Ingrese la base del triangulo"));

    ALTURA = parseInt(prompt("Ingrese la altura del triangulo"));

    AREA = (BASE * ALTURA)/2;

    alert( "El area del triangulo es de:" + AREA);

}

function conversion(){

    alert("El siguiente algoritmo es para saber la conversión de un número dado en pulgadas a centimetros y kilometros...");
    var NUMERO;
    var centimetros;
    var kilometros;

    NUMERO = parseInt(prompt("Ingree el numero a convertir"));

    centimetros = NUMERO * 2.54;

    kilometros = NUMERO / 39370;

    alert ( "La conversion a centimetros es de:" + centimetros);

    alert ("La conversion a kilomtros es de:" + kilometros);

}


function servicioM(){

    alert("Algoritmo para saber si soy apto para presentar el servicio militar obligatorio...");

    var edad = parseInt(prompt("Por favor ingrese su edad"));
    var genero = prompt("Por favor ingresar Masculino o Femenino");

    if (genero == "Femenino") {

        alert ("No eres apta para SMO");

    }else {
        if (edad>17 && edad <25){ 
            alert("Eres apto para prestar el servicio militar...");
        }else{ 
            alert("No eres aprto por edad");
        }
    }
}

// realizar un algoritmo que determine el año en que nacio el usuario ingresando su edad 

function añonacimiento(){

    alert ("El siguiente algoritmo es para saber en que año nacio dependiendo su edad...")
    var edad;
    var añoAct;
    var total;

    edad = parseInt(prompt("Ingrese su edad"));
    añoAct = parseInt(prompt("Ingresa el año actual"));

    total = añoAct - edad;

    alert("El año en que naciste es: " + total);

}

// un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganará después de n numero de años, 
// teniendo en cuenta que el banco paga un interes del 0.8 mensual 

function inversion(){

    alert ("El siguiente algoritmo es para saber cuanto dinero gana despues de una inversión");

    var capital=0;
    var años=0;
    var interes=9.6;
    var B;    
    var D;

    capital = parseInt(prompt("Por favor ingrese cuanto dinero va a invertir"));

    años = parseInt(prompt("Por favor ingresa durante cuantos años vas a invertir"));

    C = interes * años;
    B = C * capital/100;
    D = B + capital;

    alert("Lo que ganaria despues del tiempo acordado seria:" + B);
    alert("El total es de:" + D);

}
// el colegio abc requiere un sistema que le permita calcular el promedio de un almuno que tiene 7 calificaciones y estas son en escalas de 1 a 5 
// el estudiante reprueba con un promedio menor a 3

function promedio(){

    alert ("El siguiente algoritmo es para saber si el estudiante aprueba o no segun su promedio  ");
    var nt1;
    var nt2;
    var nt3;
    var nt4;
    var nt5;
    var nt6;
    var nt7;
    var suma; 
    var total;
    nt1 = parseInt(prompt("Ingrese la nota1"));
    nt2 = parseInt(prompt("Ingrese la nota2 "));
    nt3 = parseInt(prompt("Ingrese la nota3"));
    nt4 = parseInt(prompt("Ingrese la nota4"));
    nt5 = parseInt(prompt("Ingrese la nota5"));
    nt6 = parseInt(prompt("Ingrese la nota6"));
    nt7 = parseInt(prompt("Ingrese la nota7"));

     total = nt1+nt2+nt3+nt4+nt5+nt6+nt7;
     suma  = total/7;

     if (suma>2.9){
        alert("el estudiante aprobo la materia  con: " + suma);
     }
     else{
     alert(" el estudiante reprobo  la materia con: " + suma );

     }
    }


// Requiere un algoritmo que al ingresar un numero me indique la cantidad de digitos que tiene
function digitos() { 

alert ("El siguietne algoritmo premitirá saber que cantidad de dígitos tiene un número...")

 var numero;
 var contador=0;

    numero = prompt("Ingresa un número por favor")

    contador = parseInt(numero.length);
            alert("La cantidad de dígitos que tiene este número es de:" + contador);
        }

// salario semanal... en el grupo esta el ejercicio

function salarios(){

    alert("Este algoritmo permitirá saber cual es su salario semanal dependiendo sus horas trabajadas...")

    var horas = parseInt(prompt("Por favor ingresar cuantas horas trabajo en la semana"));
    var total;
    var total2; 
    var extras = parseInt(prompt("Por favor ingresar cuantas horas extras trabajo"));
if (horas<=40) {

    total=horas*10000
    alert("El salario de la semana es de: " + total);
}
else{

    extras= horas*10000;
    total2= extras+20000;

    alert("El salario de la semana más las horas extras es de: " + total2 );
}


}

// Algoritmo de descuento de fruteria...

function fruteria(){

    var kilos= parseInt(prompt("Por favor ingrese cuantos kilos de manzanas va a comprar"));
    var precio=4500;
    var total;
    var descuento1;
    var decuento2;
    var descuento3;
    var acumulado;
    var total2;
    var acumulado2;
    var acumulado3;
    var total3;
    var total4;

    if (kilos<=2) {
        total= precio*kilos
        alert("No tiene descuento, lo que debe pagar es: " + total);

    }
    else {
        if(kilos>2 && kilos <=5 ) {
            acumulado= kilos*precio;
            descuento1= 0.1*precio;
            total2= acumulado-descuento1;

            alert("El descuento que tiene es de  " + descuento1 + "  pesos, y el total a pagar es de: " + total2);
    } else {
        if(kilos>5 && kilos <=10) {
            acumulado2=kilos*precio;
            descuento2=0.15*precio;
            total3=acumulado2-descuento2;

            alert("El descuento que tiene es de: " + descuento2 + "  pesos, y el total a pagar es de:  " + total3);
        } else {
            if (kilos>10){
                acumulado3=kilos*precio;
                descuento3=0.2*precio;
                total4=acumulado3-descuento3;

                alert("El descuento que tiene es de: " + descuento3 + "  pesos, y el total a pagar es de: " + total4);
            }
        }
    } 


    }
}