from typing import Annotated, Union
from pydantic import BaseModel
import google.generativeai as ai

from fastapi import FastAPI, Form
from fastapi.responses import FileResponse, HTMLResponse

ai.configure(api_key="AIzaSyAKl6HV8W78e7qFlne1bMqMa6C4K05teeE") 

model = ai.GenerativeModel('gemini-1.5-flash')

chat_session = model.start_chat()

app = FastAPI()

@app.get("/")
def index():
    return FileResponse('../client/index.html')


class Chat(BaseModel):
    content: str
    
@app.post("/chat")
async def chat(data: Chat): # Annotated[str, Form()]
    # print(userChat)
    # return HTMLResponse(content=userChat, status_code=200)
    #     return HTMLResponse(content='Login successfully', status_code=200)
    # else:
    #     return HTMLResponse(content='Login failed', status_code=403)
    
    print(data)
    
    response = chat_session.send_message(data.content)
    return response.text

    # userChat => {
    #     content: 'string'
    # }
    
