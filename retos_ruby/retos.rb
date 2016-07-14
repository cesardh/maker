#Reto 1: Suma
def suma a , b
  a + b
end

#Reto 2: Saludar
def saluda nombre
  p "Hola #{nombre}"
end

#Reto 3: Longitud de cadena
def longitud cadena
  cadena.length
end

#Reto 4: Iterando sobre arreglo
def contar arreglo, num
  arreglo.keep_if { |n| n == num }
  arreglo.length
end

#Reto 5: FizzBuzz
def fizzbuzz num
  return "FizzBuzz" if num%3==0 && num%5==0
  return "Fizz" if num%3 == 0
  return "Buzz" if num%5 == 0
  return num
end

#Programa de entrada
mensaje = <<-MSG
Hola usuario
Ejecuta el metodo correspondiente al reto con los paremetros indicados

  Reto 1: Suma
    suma( valor1, valor2)

  Reto 2: Saludar
    saluda("tu nombre")

  Reto 3: Longitud de cadena
    longitud("cadena de texto")

  Reto 4: Iterando sobre arreglo
    contar( [arrego de números] , numero)

  Reto 5: FizzBuzz
    fizzbuzz(valor)

MSG

puts mensaje