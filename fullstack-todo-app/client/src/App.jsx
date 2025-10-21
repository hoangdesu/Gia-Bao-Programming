import { use, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const todos = ['create frontend', 'make backend', 'create sql'];

  // React Hook: keeps track of the states (variables)
  // changing the states will also change the UI

  const [todos, setTodos] = useState([]);

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

        setTodos(todos);
      });
  }, []);

  // will wait for the latest state of todos to complete updating
  useEffect(() => {
    setTodoLength(todos.length);
    console.log(todos);
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

        // NEW update

        // const newTodo = {};

        // const newTodos = [newTodo, ...todos];

        // setTodos(newTodos);
      });

    // TODO: append the new todo to the top when client receives 'OK'

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
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}

export default App;
