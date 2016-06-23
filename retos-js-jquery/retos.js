function suma(a,b) {
  return a + b
}

function longitud(s) {
  return s.length
}

function fizzbuzz(n) {
  if (n%3==0 && n%5==0) {return "fizzbuzz"}
  if (n%3==0) {return "fizz"}
  else if (n%5==0) {return "buzz"}

    else {return n}
}

function fibonacci(n) {

  var arr = [0,1];

  for (var i = 2; i <= n; i++) {
   arr[i] = arr[i-1] + arr[i-2]
  }

  return arr[n];
}

function multiplicar(a,b) {
  var arreglo = [];
  arreglo = a;

  return arreglo.map(b)
}