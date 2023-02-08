import sys
import json
import smtplib

# ovcgvvyyoiimelgg

server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login("joao.denari.03@gmail.com", "gopwotjydymidzgb")
server.sendmail("joao.denari.03@gmail.com",f'{sys.argv[1]}',"Ola, eu sou o Goku!")
server.quit()

print(json.dumps('E-mail Enviado!'))