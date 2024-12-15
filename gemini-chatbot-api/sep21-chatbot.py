import os
import google.generativeai as ai
from dotenv import load_dotenv
import PIL.Image

load_dotenv()

ai.configure(api_key=os.getenv('API_KEY')) 

model = ai.GenerativeModel('gemini-1.5-flash')

# chat_session_list = []

chat_session = model.start_chat()

while True:
    prompt = input('\n> You: ')

    if prompt == 'describe this image':
        image_path = input('Please enter image name: ')
        image = PIL.Image.open(f'./image/{image_path}')
        res = chat_session.send_message([prompt, image], stream=True)
        
    else:
        res = chat_session.send_message(prompt, stream=True)
    
    print('> Bot:', end=" ")
    for chunk in res:
        print(chunk.text, end="")
        
    
# Server-sent events 