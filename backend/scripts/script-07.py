import json
import sys
from datetime import datetime

data = json.loads(sys.argv[1])

# atualizar valores das colunas 'Vídeo assistido até 25%', 'Vídeo assistido até 50%', 'Vídeo assistido até 75%', 'Vídeo assistido até 100%'
for obj in data:
    
    if obj['Vídeo assistido até 25%'] != '':
        obj['Vídeo assistido até 25%'] = round(float(obj['Vídeo assistido até 25%'].replace('%', '').replace(',', '.'))/100 * float(obj['Visualizações']), 0)
    if obj['Vídeo assistido até 50%'] != '':
        obj['Vídeo assistido até 50%'] = round(float(obj['Vídeo assistido até 50%'].replace('%', '').replace(',', '.'))/100 * float(obj['Visualizações']), 0)
    if obj['Vídeo assistido até 75%'] != '':
        obj['Vídeo assistido até 75%'] = round(float(obj['Vídeo assistido até 75%'].replace('%', '').replace(',', '.'))/100 * float(obj['Visualizações']), 0)
    if obj['Vídeo assistido até 100%'] != '':
        obj['Vídeo assistido até 100%'] = round(float(obj['Vídeo assistido até 100%'].replace('%', '').replace(',', '.'))/100 * float(obj['Visualizações']), 0)

    campanha = obj['Campanha']
    campanha_parts = campanha.split(' ')

    if len(campanha_parts) > 3:
        obj['Campanha'] = '{} | {} | {}'.format(campanha_parts[1], campanha_parts[2], 'FRIO' if campanha_parts[-1] == '[FR]' else ('QUENTE' if campanha_parts[-1] == '[QT]' else 'OUTRO')).replace('[', '').replace(']', '')
    elif len(campanha_parts) >= 2:
        obj['Campanha'] = '{} | {} | VAZIO'.format(campanha_parts[1], campanha_parts[-1]).replace('[', '').replace(']', '')
    else:
        obj['Campanha'] = campanha_parts[-1].replace('[', '').replace(']', '')

    obj['campaign_name'] = obj.pop('Campanha')
    obj['clicks'] = obj.pop('Cliques')
    obj['impressions'] = obj.pop('Impr.')
    obj['spend'] = float(obj['Custo'].replace(',', '.'))
    obj['reach'] = obj.pop('Visualizações')
    obj['video_p25_watched_actions'] = obj.pop('Vídeo assistido até 25%')
    obj['video_p50_watched_actions'] = obj.pop('Vídeo assistido até 50%')
    obj['video_p75_watched_actions'] = obj.pop('Vídeo assistido até 75%')
    obj['video_p95_watched_actions'] = obj.pop('Vídeo assistido até 100%')
    obj['date_start'] = datetime.strptime(obj['date_start'], '%d/%m/%Y').isoformat()
    obj['date_stop'] = datetime.strptime(obj['date_stop'], '%d/%m/%Y').isoformat()
    obj['social_network'] = 'google'

print(json.dumps(data))





