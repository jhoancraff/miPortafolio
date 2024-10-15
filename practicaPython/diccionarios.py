import math

class Figura:
    # Metodo init es contrustor para resivir los atributos
    def __init__(self, nombre):
        self.nombre = nombre

    def obtener_nombre(self):
        return f'Esta figura es {self.nombre}'
    
class Rentangulo(Figura):
    def __init__(self, nombre,longitud,ancho):
        super().__init__(nombre)
        self.longitud = longitud
        self.ancho = ancho

    def calcular_area(self):
        return self.ancho * self.longitud
    
class Circulo(Figura):
    def __init__(self, nombre, radio):
        super().__init__(nombre)
        self.radio = radio

    def calcular_area(self):
        return math.pi * self.radio ** 2



data = """
        Hola soy un programa que te ayuda sacar el area de una figura geometrica.
        Elige una opcion:

        1- Circulo
        2- Rentangulo:
        
    """
opcion = int(input(data))

if opcion == 2:

    data1 = input('Cual es el ancho del Rectangulo: ')
    data2 = input('Cual es la longitud del Rectangulo: ')
    resultado = Rentangulo('rectangulo', int(data1),int(data2))
    print(f"{resultado.calcular_area()}")
elif opcion == 1:
        data1 = input('Cual es el radio del Circulo: ')
        resultado = Circulo('rectangulo', int(data1))
        print(f"{resultado.calcular_area()}")



    
