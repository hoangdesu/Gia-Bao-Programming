import React from 'react';
import { useState } from 'react';

const Todo = (props) => {
  const { todo } = props;

  const [isEditing, setIsEditing] = useState(false);

  

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

    const removeTodoHandler = () => {
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
      body: JSON.stringify({ todo_toRemove: todo }),
    })
      .then((res) => res.json())
      .then((updatedTodos) => {
        const newTodos = updatedTodos.map((t) => ({
          id: t,
          name: t,
          isEditing: false,
        }));
        setTodos(newTodos);
      });
  };

  return (
    <>
      <li key={todo.id} className='todo-container'>
        {!todo.isEditing ? (
          <>
            <p>{todo.content}</p>
            <div>
              <button onClick={() => toggleTodo(todo)}>✏️</button>
              <button onClick={() => removeTodoHandler(todo.name)}>🗑️</button>
            </div>
          </>
        ) : (
          <>
            <input
              type='text'
              defaultValue={todo.content}
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
    </>
  );
};

export default Todo;
