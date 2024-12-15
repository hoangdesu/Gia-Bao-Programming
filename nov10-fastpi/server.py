from typing import Annotated, List, Union

from fastapi import FastAPI, Form, Response
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from pydantic import BaseModel

import random

rand_num = random.randint(1, 10)

# global object
app = FastAPI()


# when the app receives a request at the root route
# responses with data in a dictionary (in JSON format)
@app.get("/")
def read_root():
    return {
        "Hello": "World",
        "status": 200
    }
    
    
# DONT FORGET THE SLASH / 
@app.get('/fav-cars')
def get_fav_cars():
    my_cars = ['Mercedes', 'Lamborghini', 'Koenigsegg']
    wish_cars = ['Pagani', 'Ferrari', 'McLaren']
    
    return my_cars + wish_cars


# path variable
@app.get('/fav-cars/{car_name}')
def get_car_info(car_name: str):
    
    return f'My favorite car is {car_name.title()} and its price is ${random.randint(100000, 1000000)}'


@app.get('/calculate/{a}/{b}')
def calculate(a: int, b: int):
    return {
        'total': a + b,
        'difference': a - b,
        'power': a * b,
        'division': a / b
    }
    
    
@app.get("/html", response_class=HTMLResponse)
async def read_items():
    html_content = """
    <html>
        <head>
            <title>Some HTML in here</title>
        </head>
        <body>
            <h1 style="color: red;">Look ma! HTML!</h1>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content, status_code=200)


@app.get('/guess-the-number/{guess}')
def guess(guess: int):
    
    if guess == rand_num:
        content = {
                'message': 'you guess it correct!',
                'rand num': rand_num,
                'your guess': guess
            }
        return JSONResponse(content=content, status_code=200)
    else:
        content = {
                'message': 'you guess it wrong... :(',
                'rand num': rand_num,
                'your guess': guess
            }
        return JSONResponse(content=content, status_code=400)
        
    


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

print('end')

# server: somebody who SERVES

# https://www.google.com/search?q=fastapi&sca_esv=daae598df6732436&sxsrf=ADLYWILY39P5Eq093hLdccVsR9PTIetsKQ%3A1732941111587&source=hp&ei=N5VKZ__PIYWo4-EPj5eJwAg&iflsig=AL9hbdgAAAAAZ0qjR1ysmrjSRoto7A405WMlWpzE1EyK&ved=0ahUKEwi_x_vanIOKAxUF1DgGHY9LAogQ4dUDCBc&uact=5&oq=fastapi&gs_lp=Egdnd3Mtd2l6IgdmYXN0YXBpMgoQIxiABBgnGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyChAAGIAEGEMYigUyCxAAGIAEGJECGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgsQABiABBiRAhiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBUiyDVCPAVjZCXABeACQAQCYAY0CoAHACKoBBTMuMi4yuAEDyAEA-AEBmAIIoALSCKgCCsICBxAjGCcY6gLCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgILEC4YgAQY0QMYxwHCAgUQABiABMICBBAjGCfCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYigXCAg0QABiABBhDGMkDGIoFwgILEAAYgAQYkgMYigWYAwOSBwUzLjMuMqAHqDg&sclient=gws-wiz

# after question mark: query string
# {
#     q: 'fastapi',
#     sca_esv: 'daae598df6732436',
#     sxsrf: 'ADLYWILY39P5Eq093hLdccVsR9PTIetsKQ%3A1732941111587'
# }

# https://www.youtube.com/results?search_query=fastapi+python

# {
#     search_query: 'fastapi+python'
# }


@app.get('/search')
def search_query_params(query: str):
    return f'You searched for {query}'


@app.get('/hi')
def say_hi(last_name: str, first_name: str):
    msg = f'Hello {first_name.title()} {last_name.title()} :D'
    # return msg
    return HTMLResponse(content=msg, status_code=201)
    

@app.get('/login')
def login_page():
    return FileResponse('login-form.html')

    
@app.post('/login')
def login(username: Annotated[str, Form()], password: Annotated[str, Form()]):
    if username == 'brian' and password == 'secret':
        return HTMLResponse(content='Login successfully', status_code=200)
    else:
        return HTMLResponse(content='Login failed', status_code=403)
    
   
# Send data from client to server using Request Body
# class User implements BaseModel
class Car(BaseModel):
    name: str
    price: float
   
    
@app.post('/car')
def get_car(car: Car):
    return f'{car.name}: ${car.price}'


# Optional type: can be there, or can be missing
@app.get('/hello')
def hello(name: Union[str, None] = 'World'):
    return f'Hello {name.title()}'


class NumList(BaseModel):
    nums: List[int]
    
@app.post('/calculate-total')
def cal_total(num_list: NumList):
    total = 0
    for num in num_list.nums:
        total += num
    
    # return Response(content={'total': total}, media_type='application/json', status_code=200)
    return {
        'total': total
    }
    