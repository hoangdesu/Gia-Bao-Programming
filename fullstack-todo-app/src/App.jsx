import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const todos = ['create frontend', 'make backend', 'create sql'];

  // React Hook: keeps track of the states (variables)
  // changing the states will also change the UI

  const [todos, setTodos] = useState(['create frontend', 'make backend', 'create sql']);
  const [isEditing, setIsEditing] = useState(true);

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    console.log(evt.target[0].value);
    const todoValue = evt.target[0].value;


    // todos.push(todoValue);
    console.log(todos);

    const newTodos = [...todos, todoValue];
    
    setTodos(newTodos);

    evt.target[0].value = '';
  }

  const removeTodoHandler = (todoStr) => {
    console.log('removing...', todoStr);

    const filteredTodos = todos.filter(todo => todo !== todoStr);

    setTodos(filteredTodos);
  }

  return (
    <>
      <h1>TODO app</h1>

      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" />
        <button>Add</button>
      </form>

      <ul>
        {todos.map(todo => {
          return (
            <li key={todo} className='todo-container'>
              {/* <input>{todo}</input> */}
              {/* <input type="text" value={todo} /> */}
              {isEditing ? (<input type="text" value={todo} />) : (<p>{todo}</p>)}
              <div>
                <button onClick={() => setIsEditing(!isEditing)}>✏️</button>
                <button onClick={() => removeTodoHandler(todo)}>🗑️</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
