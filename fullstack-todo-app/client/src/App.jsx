import { use, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const todos = ['create frontend', 'make backend', 'create sql'];

  // React Hook: keeps track of the states (variables)
  // changing the states will also change the UI

  const [todos, setTodos] = useState([
    // { id: 1, name: 'create frontend', isEditing: false },
    // { id: 2, name: 'make backend', isEditing: false },
    // { id: 3, name: 'create sql', isEditing: false },
  ]);

  const [todoLength, setTodoLength] = useState(todos.length);

  // when the app first load, input element is not ready yet => null
  const inputRef = useRef(null);

  // Derived value
  // const len = todos.length;

  // Simple, plain value -> not getting updated
  // let counter = 1;

  // const updateCounter = () => {
  //   counter++;
  //   console.log('counter =', counter);
  // }

  // Only call the function after the component has been mounted!
  // Good for fetching data
  useEffect(() => {
    // console.log('Component mounted!');

    fetch('http://localhost:7891/todos')
      .then((res) => res.json())
      .then((todos) => {
        console.log(todos);

        const todoList = todos.map((todo, index) => {
          return {
            id: index + 1,
            name: todo,
            isEditing: false,
          };
        });

        setTodos(todoList);
      });
  }, []);

  // will wait for the latest state of todos to complete updating
  useEffect(() => {
    setTodoLength(todos.length);
  }, [todos]);

  console.log('App component re-renders!');

 

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    console.log(evt.target[0].value);
    const todoValue = evt.target[0].value;

    // 1. prevent empty value
    if (!todoValue) {
      alert('Please enter value');
      return;
    }

    // 2. also add the todo to the server
    fetch('http://localhost:7891/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: todoValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedTodoList) => {
        const todoList = updatedTodoList.map((todo, index) => {
          return {
            id: index + 1,
            name: todo,
            isEditing: false,
          };
        });
        setTodos(todoList);
      });

    // todos.push(todoValue);
    // console.log(todos);

    // const newTodo = {
    //   // id: todos[todos.length - 1].id + 1,
    //   id: Math.random(),
    //   name: todoValue,
    //   isEditing: false,
    // };

    // const newTodos = [...todos, newTodo];

    // setTodos(newTodos);
    // // setTodoLength(todos.length); // cannot get the latest state of the todos[]

    evt.target[0].value = '';
  };

  const removeTodoHandler = (todoStr) => {
    // Dont do this, since it violates the single source of truth principle
    // console.log('removing...', todoStr);

    // const filteredTodos = todos.filter((todo) => todo.name !== todoStr);

    // setTodos(filteredTodos);
    // setTodoLength(todos.length); // cannot get the latest state of the todos[]

    fetch('http://localhost:7891/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo_toRemove: todoStr }),
    })
      .then(res => res.json())
      .then(updatedTodos => {
        const newTodos = updatedTodos.map(t => (
          {
            id: t,
            name: t,
            isEditing: false
          }
        ))
        setTodos(newTodos);
      });
  };

  const toggleTodo = (todo) => {
    const updatedTodos = structuredClone(todos); // [...todos]

    for (let i = 0; i < updatedTodos.length; i++) {
      if (todo.id === updatedTodos[i].id) {
        updatedTodos[i] = {
          ...updatedTodos[i],
          isEditing: !updatedTodos[i].isEditing,
        };
        break;
      }
    }

    setTodos(updatedTodos);
  };

  const saveTodo = (todo) => {
    // similar to document.querySelector('input').value
    const updatedValue = inputRef.current.value;

    const updatedTodos = structuredClone(todos); // [...todos]

    for (let i = 0; i < updatedTodos.length; i++) {
      if (todo.id === updatedTodos[i].id) {
        updatedTodos[i] = {
          ...updatedTodos[i],
          name: updatedValue,
          isEditing: false,
        };
        break;
      }
    }

    setTodos(updatedTodos);
  };

  const onEditInputEnter = (evt, todo) => {
    // Enter key
    if (evt.keyCode === 13) {
      saveTodo(todo);
    }
  };

  return (
    <>
      {/* <div>
        <button onClick={updateCounter}>Count: {counter}</button>
      </div> */}

      <h1>TODO app</h1>

      <form action='' onSubmit={formSubmitHandler}>
        <input type='text' />
        <button>Add</button>
      </form>

      <p>There are {todoLength} TODOs</p>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='todo-container'>
              {!todo.isEditing ? (
                <>
                  <p>{todo.name}</p>
                  <div>
                    <button onClick={() => toggleTodo(todo)}>✏️</button>
                    <button onClick={() => removeTodoHandler(todo.name)}>🗑️</button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type='text'
                    defaultValue={todo.name}
                    // by the time input element is ready, its ref will be saved to inputRef
                    ref={inputRef}
                    onKeyDown={(evt) => onEditInputEnter(evt, todo)}
                  />
                  <div>
                    <button onClick={() => saveTodo(todo)}>✅</button>
                    <button onClick={() => toggleTodo(todo)}>❎</button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
