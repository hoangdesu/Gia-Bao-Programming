import { useEffect, useRef, useState } from 'react';
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

  
  // Only call the function after the component has been mounted!
  // Good for fetching data
  useEffect(() => {
    // console.log('Component mounted!');
    
    fetch('http://localhost:7891/todos')
      .then(res => res.json())
      .then(todos => {
        console.log(todos);

        const todoList = todos.map((todo, index) => {
          return {
            id: index + 1,
            name: todo,
            isEditing: false
          }
        });

        setTodos(todoList);
        
      });

  }, []);

  
  console.log('App component re-renders!');

  const inputRef = useRef(null);

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    console.log(evt.target[0].value);
    const todoValue = evt.target[0].value;

    // todos.push(todoValue);
    console.log(todos);

    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      name: todoValue,
      isEditing: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);

    evt.target[0].value = '';
  };

  const removeTodoHandler = (todoStr) => {
    console.log('removing...', todoStr);

    const filteredTodos = todos.filter((todo) => todo !== todoStr);

    setTodos(filteredTodos);
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
    if (evt.keyCode === 13) {
      saveTodo(todo);
    }
  };

  return (
    <>
      <h1>TODO app</h1>

      <form action='' onSubmit={formSubmitHandler}>
        <input type='text' />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='todo-container'>
              {!todo.isEditing ? (
                <>
                  <p>{todo.name}</p>
                  <div>
                    <button onClick={() => toggleTodo(todo)}>✏️</button>
                    <button onClick={() => removeTodoHandler(todo)}>🗑️</button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type='text'
                    defaultValue={todo.name}
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
