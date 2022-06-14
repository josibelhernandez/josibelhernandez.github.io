const ladoCuadrado = 5;

console.group('Cuadrados');

console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado es ${areaCuadrado}cm^2`);

//Con groupEnd cerramos el grupo de console log
console.groupEnd();

// Codigo del triangulo

console.group('Triangulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;



console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm , ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura del triangulo es ${alturaTriangulo}`);
console.log(`El perimetro del triangulo es ${perimetroTriangulo}`);
console.log(`El area del triangulo es ${areaTriangulo}cm^2`);

console.groupEnd();

// Codigo del circulo

console.group('Circulos');

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2 ;
// Valor de PI
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log(`EL radio del circulo es: ${radioCirculo}`);
console.log(`EL diametro del circulo es: ${diametroCirculo}`);
console.log(`El valor de PI es: ${pi}`);
console.log(`El perimetro del circulo es: ${perimetroCirculo}`);
console.log(`EL area del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

// Funcion declarativa

// Cuadrados

function perimetroCuadradoDeclarativa(lado){

    return lado * 4;
}

function areaCuadradoDeclarativa(lado){

    return lado * lado;

}

// Triangulos

function perimetroTrianguloDeclarita(lado1, lado2, base){

    return lado1 + lado2 + base

}

function areaTrianguloDeclarativa(base, altura){

    return (base * altura) / 2;

}

function alturaIsosceles (lados, base){

    var resultado= Math.sqrt((lados**2) - (base**2/4) )

    return resultado;
 }

//Circulos

function diametroCirculoDeclarativa(radio){
    return radio * 2 ;
}

function perimetroCirculoDeclarativa(radio){
    var diametro = diametroCirculoDeclarativa(radio)
    return diametro * pi;
}

function areaCirculoDeclarativa(radio){
    return (radio * radio) * pi;
}

// Funcion expresiva o anonima

var perimetroCuadradoArrow = (lado) => lado * 4;
var areaCuadradoArrow = (lado) => lado * lado;

// Triangulos

var perimetroTrianguloArrow = (lado1, lado2, base) => Number(lado1) + Number(lado2) + Number(base);
var baseTrianguloArrow = (base, altura) => (base * altura) / 2;


//Circulos

var diametroCirculoArrow = (radio) => radio * 2;
var perimetroCirculoArrow = (radio) =>
{
    var diametro = diametroCirculoDeclarativa(radio)
    return diametro * pi;
}
var areaCirculoArroe = (radio) => (radio * radio) * pi;

// Interactando con el formulario para realizar los calculos

// ---------- Cuadrados ---------- //

function calcularPerimetroCuadrado (){
    //Ubicamos el input que recibe el valor de los lados
    const input = document.getElementById('inputCuadrado');
    // Obtenemos su valor
    const value = input.value;
    //Calculamos el perimetro
    const perimetro = perimetroCuadradoArrow(value);
    //Insertamos resultado en el HTML
    document.getElementById('perimetroCuadradoR').innerHTML = perimetro;

    // ---- Area ---- //

    const area = areaCuadradoDeclarativa(value);
    //Insertamos resultado en el HTML
    document.getElementById('areaCuadradoR').innerHTML = area;

}



// ---------- Triangulos ---------- //

function calcularTriangulo(){
    //Ubicamos el input que recibe el valor del primer lado
    const lado1 = document.getElementById('inputLado1');
    // Obtenemos su valor
    const valorLado1 = lado1.value;
    //Ubicamos el input que recibe el valor del segundo lado
    const lado2 = document.getElementById('inputLado2');
    // Obtenemos su valor
    const valorLado2 = lado2.value;
    //Ubicamos el input que recibe el valor de su base
    const base = document.getElementById('inputBase');
    // Obtenemos su valor
    const valorBase = base.value;
    //Ubicamos el input que recibe el valor de su altura
    const altura = document.getElementById('inputAltura');
    // Obtenemos su valor
    const valorAltura = altura.value;
    //Calculamos el perimetro
    const perimetro = perimetroTrianguloArrow(valorLado1, valorLado2, valorBase);
    // Calculamos Area
    const area = areaTrianguloDeclarativa(valorBase, valorAltura)
    //Insertamos resultados en el HTML
    //Perimetro
    document.getElementById('perimetroTrianguloR').innerHTML = perimetro;
    //Area
    document.getElementById('areaTrianguloR').innerHTML = area;


}

// ---------- Triangulos Isosceles---------- //

function calcularTrianguloIsosceles(){
    //Ubicamos el input que recibe el valor del primer lado
    const lado1 = document.getElementById('inputLado11');
    // Obtenemos su valor
    const valorLado1 = lado1.value;
    //Ubicamos el input que recibe el valor del segundo lado
    const lado2 = document.getElementById('inputLado22');
    // Obtenemos su valor
    const valorLado2 = lado2.value;
    //Ubicamos el input que recibe el valor de su base
    const base = document.getElementById('inputBaseI');
    // Obtenemos su valor
    const valorBase = base.value;

    //Verificamos que sea una triangulo isosceles

    if((valorLado1 === valorLado2) && (valorLado1 != valorBase)){


        var alturaTriangulo = alturaIsosceles(valorLado1, valorBase);

    }else{
        alert('No es un triangulo isosceles')
    }

   document.getElementById('alturaTrianguloR').innerHTML = alturaTriangulo;



}

// ---------- Circlo ---------- //

function calcularCirculo(){
    //Ubicamos el input que recibe el valor del radio
    const radio = document.getElementById('inputRadio');
    // Obtenemos su valor
    const valorRadio = radio.value;

    //Calculamos el diametro
    const diametro = diametroCirculoDeclarativa(valorRadio)
    // Calculamos Area
    const area = areaCirculoDeclarativa(valorRadio)
     // Calculamos Perimetro
     const perimetro = perimetroCirculoDeclarativa(valorRadio)
    //Insertamos resultados en el HTML
    //Diametro
    document.getElementById('diametroCirculoR').innerHTML = diametro;
    //Perimetro
    document.getElementById('perimetroCirculoR').innerHTML = perimetro;
    //Area
    document.getElementById('areaCirculoR').innerHTML = area;


}


