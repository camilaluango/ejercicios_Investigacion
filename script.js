//ejercicio 1

//const frutas = ["pera","mango","manzana","lulo"];
//
//frutas.forEach(function(fruta, index){
//    console.log(`indice: ` + index + `, mayusculas: ` + fruta.toUpperCase() +`, valor: ` + fruta);
//    console.log(fruta)
//})


//https://www.freecodecamp.org/espanol/news/foreach-en-javascript-como-recorrer-un-arreglo-en-js/

//https://keepcoding.io/blog/metodo-foreach-en-javascript/


//ejercicio 2

//const numeros = [5,10,15,20];
//
//numeros.forEach(function(numero, index){
//    let cuadrado = Math.pow(numero, 2)
//    console.log(`el elemento en la posicion: `+ index + `tiene el valor: ` + numero + `.  Su valor al cuadrado es: ` + cuadrado);
//})

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

//ejercicio 3

let usuario = {
    nombre: "camila",
    edad: 21
};

console.log(usuario.hasOwnProperty(`nombre`));
console.log(usuario.hasOwnProperty(`pasatiempo`));

//https://aiweblearning.com/validar-si-un-objeto-tiene-un-elemento-en-javascript/

//ejercicio 4

//class animal {
//    constructor(nombre) {
//        this.nombre = nombre;
//    }
//
//    comunicacion() {
//        return this.nombre + `hace ruido`
//    }
//}
//
//class perro extends animal {
//    comunicacion(){
//        return this.nombre + ` ladra`
//    }
//}
//
//let bruno = new perro("Bruno")
//
//console.log(bruno.comunicacion())