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
def count_matches arreglo, num
  arreglo.keep_if { |n| n == num }
  arreglo.length
end

#Reto 5: FizzBuzz
def fizzbuzz num
  return "Fizz" if num%3 == 0
  return "Buzz" if num%5 == 0
  return "FizzBuzz" if num%3==0 && num%5==0
  return num
end