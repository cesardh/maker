class Person
  attr_accessor :calle, :carrera, :numero, :direccion
  attr_reader :direccion, :nombre, :apellido, :direccion
  attr_writer :dir


  def initialize nombre, apellido, edad, direccion
    @nombre = nombre
    @apellido = apellido
    @edad = edad
    @direccion = direccion
  end

  def nombre
    "tu nombre es #{@nombre}"
  end

  def union parametro
    self.direccion = parametro
  end

end

dir = {calle: "30", carrera: "70", numero: "19"}
x = Person.new("Cesar","Duarte", 21, "direccion")

p x
x.union(dir)
p x