console.log('hello from todo');

// will be using local storage to temporarily store and retrieve data

let TODOs = [];

// console.log(localStorage.getItem('blender'))

// source of truth: data should only be retrieved from a single souce

console.log('todos', localStorage.getItem('todos'));

// store in local storage
if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(TODOs));
} else {
    TODOs = JSON.parse(localStorage.getItem('todos'));
}

const todoList = document.querySelector('#todo-list');

// method 1: using string template literal
// todoList.innerHTML += `<li>${TODOs[0]}</li>`;
// `<li>
//     <a href="">
//         ...
//     </a>
// </li>`


// method 2: create elements, attach to the DOM
// const li = document.createElement('li');
// li.innerText = TODOs[0];

// console.log(li);

// todoList.append(li);

// for (let i = 0...) --> using traditional for loop

// array methods

// delete TODOs[0];

function deleteTodo(index) {
    // console.log('deleting...', task);
    delete TODOs[index];
    console.log(TODOs);
}

function renderTodos() {
    // while (todoList.firstChild) {
    //     todoList.firstChild.remove();
    // }
    todoList.innerHTML = '';

    // array methods
    TODOs.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerText = todo;

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete'
        delBtn.addEventListener('click', (evt) => {
            console.log(todo, index);
            // exercise: implement the delete function
            // options: delete, splice, slice
            deleteTodo(index);
            // delete TODOs[]
        })

        li.append(delBtn);

        todoList.append(li);
    });
}

renderTodos();

const addTaskForm = document.querySelector('#add-task');

addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = addTaskForm[0].value;
    TODOs.push(inputValue);

    localStorage.setItem('todos', JSON.stringify(TODOs));

    renderTodos();
    // console.log(TODOs);

    // reset the input
    addTaskForm[0].value = '';
});

// window.localStorage.setItem("task1", "todo app");

// limit: can only store strings
// window.localStorage.setItem('todos', TODOs);

// const localStorageTODOS = localStorage.getItem('todos');

// console.log(localStorageTODOS.split(','));

const japanFood = {
    country: 'japan',
    names: ['sushi', 'ramen', 'takoyaki'],
    sauce: 'wasabi'
}
// localStorage.setItem('food',japanFood);

// const food = localStorage.getItem('food');
// console.log(food);

// const stringTODOs = JSON.stringify(TODOs);
// console.log(stringTODOs);

// const foodStr = JSON.stringify(japanFood)
// console.log('foodStr:', foodStr);

