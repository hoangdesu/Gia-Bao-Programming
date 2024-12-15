import os
import google.generativeai as ai
from dotenv import load_dotenv
import PIL.Image

load_dotenv()

ai.configure(api_key=os.getenv('API_KEY')) # Protect the API KEY using env file

model = ai.GenerativeModel('gemini-1.5-flash') # constructor

# simple chat bot
# while True:
#     reponse = model.generate_content(input('You: '))

#     print('Bot:', reponse.text)

image = PIL.Image.open('./image/merc.jpg')
response = model.generate_content(['What do you see in this image?', image])
print(response.text)
