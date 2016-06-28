
//reto 1
function suma(a,b) {
  return a + b
}

//reto 2
function longitud(s) {
  return s.length
}

//reto 3
function fizzbuzz(n) {
  if (n%3==0 && n%5==0) {return "fizzbuzz"}
  if (n%3==0) {return "fizz"}
  else if (n%5==0) {return "buzz"}

    else {return n}
}

//reto 4
function fibonacci(n) {

  var arr = [0,1];

  for (var i = 2; i <= n; i++) {
   arr[i] = arr[i-1] + arr[i-2]
  }

  return arr[n]
}

//reto 5
function multiplicar( a , b ) {
  var r = a.map(function(num) {return num * b});
  return r;
}

//reto 6
function ciclo20 () {
  var cond = ["es par","es impar"];

  for (var i = 0; i <= 20; i++) {
    console.log( i + " " + cond[i%2] )
  }
}

//reto 7
function tabla9 () {
  for (var i = 1; i < 10; i++) {
    console.log(i + " x 9 =" + " " + (i*9))
  }
}

//BONUS
function tabla1_10() {

  for (var i = 0; i < 10; i++) {
    console.log("Tabla del " + (i+1));
    var num = i + 1;

    for (var j = 1; j < 10; j++) {
    console.log(num + " x " + j + " = " + (j*num));
    }

    console.log(".............");
  }
}

//reto 8
function sumame(a){
  var resultado = a.reduce(function(anterior, actual, indice, vector){
    return anterior + actual;
  });
  return resultado;
}

//reto 9
function promediame(a){
  var suma = a.reduce(function(anterior, actual, indice, vector){
    return anterior + actual;
  });
  return suma / a.length;
}

//reto 10
function typeExtractor(a){
  var bool = new Array();
  var strng = new Array();
  var numb = new Array();
  var undef = new Array();
  var obj = new Array();
  var funct = new Array();

  for (var i = 0; i < a.length; i++) {
    switch(typeof a[i]){
      case "boolean":
        bool.push(a[i]);
        break;
      case "string":
        strng.push(a[i]);
        break;
      case "number":
        numb.push(a[i]);
        break;
      case "function":
        funct.push(a[i]);
        break;
      case "undefined":
        undef.push(a[i]);
        break;
      case "object":
        obj.push(a[i]);
        break;
    }
  }
  console.log("Este array contiene los siguietes datos:");
  console.log("   Number: " + numb);
  console.log("   String: " + strng);
  console.log("   Function: " + funct);
  console.log("   Object: " + obj);
  console.log("   Boolean: " + bool);
  console.log("   Undefined: " + undef);
}