import json

data = [{"data":44302,"cliente":"A","uf":"Rio de Janeiro","cidade":"RJ","pacote":8,"peso":62,"frete":456},{"data":44312,"cliente":"A","uf":"Araçatuba","cidade":"SP","pacote":45,"peso":32,"frete":677},{"data":44312,"cliente":"A","uf":"São José do Rio Preto","cidade":"SP","pacote":82,"peso":47,"frete":538},{"data":44316,"cliente":"A","uf":"Araçatuba","cidade":"SP","pacote":95,"peso":57,"frete":352},{"data":44316,"cliente":"B","uf":"Rio de Janeiro","cidade":"RJ","pacote":64,"peso":83,"frete":103},{"data":44316,"cliente":"B","uf":"Rio de Janeiro","cidade":"RJ","pacote":51,"peso":33,"frete":81}]
sum = 0
for e in data:
    print(sum)
    sum = float(e['peso']) + sum

print(sum)