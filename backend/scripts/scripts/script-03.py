import numpy
import json

a = numpy.random.randn(25) #Cria um array com 25 valores aleatórios

print(json.dumps(f'{a}'))