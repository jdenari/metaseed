import sys
import json

dic_res = json.loads(sys.argv[1])
sum = 0
for e in dic_res:
    sum = float(e['pacote']) + sum

print(sum)