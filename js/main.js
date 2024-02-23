function saludo(params) {
    alert("Hola mundo")
}
function suma() {
    //Explicacion algoritmo
    alert("Algoritmo que realiza una suma entre 2 valores ingresados por el usuario")
    //Declaracion de variables
    let A = 0;
    let B = 0;
    let S = 0;
    //Capturamos los datos
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));
    //Realizamos la operacion
    S = A+B;
    //Damos el resultado
alert("El resultado de la suma es "+ S)
}

function opBasicas() {
        //Explicacion algoritmo
        alert("Algoritmo que realiza una suma, resta, multiplicacion y division entre 2 valores ingresados por el usuario")
        //Declaracion de variables
        let A,B,S,R,M,D = 0;

        //Capturamos los datos
        A = parseInt(prompt("Ingrese el primer valor"));
        B = parseInt(prompt("Ingrese el segundo valor"));
        //Realizamos la operacion
        S = A+B;
        R = A-B;
        M = A*B;
        D = A/B;
        //Damos el resultado
    alert("El resultado de la suma es "+ S)
    alert("El resultado de la resta es "+ R)
    alert("El resultado de la multiplicion es "+ M)
    alert("El resultado de la division es "+ D)
}

function nCuadrado() {
    //Explicacion algoritmo
    alert("Algoritmo que calcula el cuadrado de un numero ingresado.")
    //Declaracion de variables
    let A = 0;
    let B = 0;
    //Capturamos los datos
    A = parseInt(prompt("Ingrese el valor"));
    
    //Realizamos la operacion
    B = A*A;
    //Damos el resultado
alert("El cuadrado del numero es: " + B) 

}

function aTriangulo() {
    //Explicacion algoritmo
    alert("Algoritmo que realiza el calculo del area de un triangulo")
    //Declaracion de variables
    let A,B,R = 0;
    //Capturamos los datos
    A = parseInt(prompt("Ingrese la base del triangulo"));
    B = parseInt(prompt("Ingrese la altura del triangulo"));
    //Realizamos la operacion
    R = (A*B)/2
    //Damos el resultado
alert("El area del area es: "+ R)
}
function cMedidas() {
    //Explicacion algoritmo
    alert("Algoritmo que determina las pulgadas, los kilometros y los milimetros de un valor dado en metros  ")
    //Declaracion de variables
    let M,P,K,MM = 0;
    //Capturamos los datos
    M = parseInt(prompt("Ingrese los metro: "));
    //Realizamos la operacion
    P = (M*39.37);
    K = M/1000;
    MM = M*1000;
    //Damos el resultado
alert("La conversion de metros a pulgadas es: "+ P);
alert("La conversion de metros a kilometros es: "+ K);
alert("La conversion de metros a milimetros es: "+ MM);
}
function mayor2() {
        //Explicacion algoritmo
        alert("Algoritmo que determina el numero mayor entre 2 numeros")
        //Declaracion de variables
        let A,B = 0;
        //Capturamos los datos
        A = parseInt(prompt("Ingrese el primer numero: "));
        B = parseInt(prompt("Ingrese el segundo numero: "));
        //Realizamos la operacion
        if (A<B) {
            alert("El numero "+ B +" es mayor que "+ A);
        } else if (A>B) {
            alert("El numero "+ A +" es mayor que "+ B);
        } else {
            alert("El numero "+ A +" es igual que "+ B);
        }
        //Damos el resultado
    alert("La conversion de metros a pulgadas es: "+ P);

}
function menor3() {
    //Explicacion algoritmo
    alert("Algoritmo que determina el numero menor entre 3 numeros")
    //Declaracion de variables
    let A,B,C = 0;
    //Capturamos los datos
    A = parseInt(prompt("Ingrese el primer numero: "));
    B = parseInt(prompt("Ingrese el segundo numero: "));
    C = parseInt(prompt("Ingrese el tercer numero: "));

    //Realizamos la operacion
    if (A<B && A<C) {
        //Damos el resultado
        alert("El numero "+ A +" es el numero menor.");
    } else if (B<A && B<C) {
        //Damos el resultado
        alert("El numero "+ B +" es el numero menor.");
    } else if (C<A && C<B){
        //Damos el resultado
        alert("El numero "+ C +" es el numero menor.");
    } else {
        //Damos el resultado
        alert("Los 3 numeros son iguales");
    }

}

function promedio() {
    //Explicacion algoritmo
    alert("Algoritmo que determina el promedio de notas")
    //Declaracion de variables
    let N1,N2,N3,N4,N5,N6,N7,R = 0;
    //Capturamos los datos
    N1 = parseFloat(prompt("Ingrese la primera nota: "));
    N2 = parseFloat(prompt("Ingrese la segunda nota: "));
    N3 = parseFloat(prompt("Ingrese la tercera nota: "));
    N4 = parseFloat(prompt("Ingrese la cuarta nota: "));
    N5 = parseFloat(prompt("Ingrese la quinta nota: "));
    N6 = parseFloat(prompt("Ingrese la sexta nota: "));
    N7 = parseFloat(prompt("Ingrese la septima nota: "));

    //Realizamos la operacion
    R = (N1 + N2 + N3 + N4 + N5 + N6 + N7)/7;
    //Damos el resultado
    if (R<6.1) {
        alert("Su promedio es de: " + R + " ¡Reprobo!");
    } else {
        alert("Su promedio es de: " + R + " ¡Aprobo!");
    }

}

function descuento() {
    //Explicacion algoritmo
    alert("Algoritmo que determina el descuento de compra")
    //Declaracion de variables
    let P,K,R = 0;
    //Capturamos los datos
    P = parseFloat(prompt("Ingrese el precio por kilo de las manzanas: "));
    K = parseFloat(prompt("Ingrese la cantidad de kilos a comprar: "));


    //Realizamos la operacion
    //Damos el resultado

    if (K<3) {
        R = P * K;
        alert("El valor de su compra es: "+ R + " su compra no tiene descuento");
    } else if (K<6 && K>2) {
        R = (P * K)-((P * K)*(10/100))
        alert("El valor de su compra es: " + R + " su compra tiene un descuento de 10%");
    } else if (K<11 && K>5) {
        R = (P * K)-((P * K)*(15/100))
        alert("El valor de su compra es: " + R + " su compra tiene un descuento de 15%");
    } else if (K>10){
        R = (P * K)-((P * K)*(20/100))
        alert("El valor de su compra es: " + R + " su compra tiene un descuento de 20%");
    } 
}

function semanal() {
    //Explicacion algoritmo
    alert("Algoritmo que determina el salario semanal")
    //Declaracion de variables
    let H,R = 0;
    //Capturamos los datos
    H = parseFloat(prompt("Ingrese la cantidad horas trabajadas esta semana: "));

    //Realizamos la operacion
    //Damos el resultado

    if (H<40) {
        R = H * 12.500;
        alert("Su salario en esta semana es: "+ R);
    } else if (H>40) {
        R = 500000 + ((H-40)* 18000) 
        alert("Su salario en esta semana es: "+ R);
    } 
}
