import pandas as pd
import requests
import os
import json
from dotenv import load_dotenv
import sys

load_dotenv()

fb_api = os.getenv('FB_TOKEN')
ad_acc = os.getenv('FB_ACCOUNT')

date_obj = json.loads(sys.argv[1])

list_keys = []
list_itens = []
list_aux = []
dic = {}
c = 0

base_url = 'https://graph.facebook.com/v14.0/'

#determina quais vão ser as colunas a serem coletados na api
api_fields = ['date_start','date_stop', 'campaign_name', 'reach','impressions', 'clicks', 'spend', 'video_p25_watched_actions', 'video_p50_watched_actions', 'video_p75_watched_actions', 'video_p95_watched_actions']

#determina o periodo a ser analisado
time_range = "&time_range={\'since\':\'" + f"{date_obj['startDate']}" + "\',\'until\':\'" + f"{date_obj['endDate']}" + "\'}"

#acessa o token do facebook
token = '&access_token=' + fb_api

#cria o caminho a ser coletado
url = base_url + 'act_' + str(ad_acc) + '/insights?level=' + 'campaign' + '&fields=' + ','.join(api_fields) + time_range +'&time_increment=1' + token

response = requests.get(url + token)

response = json.loads(response._content.decode('utf-8'))

#exporta as informações
print(json.dumps(response))