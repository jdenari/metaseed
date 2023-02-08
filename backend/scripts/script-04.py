import json
import pyautogui
pyautogui.hotkey('ctrl', 't')
pyautogui.write('www.netflix.com.br')
pyautogui.press('enter')
print(json.dumps('Ação Executada 04!'))