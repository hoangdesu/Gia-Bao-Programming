import React, { useEffect, useRef, useState } from 'react';

const Todo = (props) => {

  const { todo } = props;

  // console.log('component todo rerendered:', todo);

  const [isEditing, setIsEditing] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.content);

  // const saveTodo = (todo) => {
  //   // similar to document.querySelector('input').value
  //   const updatedValue = inputRef.current.value;

  //   const updatedTodos = structuredClone(todos); // [...todos]

  //   for (let i = 0; i < updatedTodos.length; i++) {
  //     if (todo.id === updatedTodos[i].id) {
  //       updatedTodos[i] = {
  //         ...updatedTodos[i],
  //         name: updatedValue,
  //         isEditing: false,
  //       };
  //       break;
  //     }
  //   }

  //   setTodos(updatedTodos);
  // };


  const inputRef = useRef(null);

  // const aRef = useRef(1);
  // console.log('initial a = ', aRef.current); // 1
  

  const saveTodo = () => {
    // vanilla JS
    // const todoInput = document.querySelector('#todo-content');
    // console.log(todoInput.value);

    // react
    if (inputRef.current) {
      console.log('inputRef.current.value:', inputRef.current.value);
      const newTodoValue = inputRef.current.value;

      // {
      //   "newtodo" //: "value",
      //   "id"    //: "value"
      // }

      JSON.stringify({ newTodo: newTodoValue, id: todo.id });

      fetch('/PUT', {
        method: 'PUT'
      })
        .then(res => {
          if (res.status === 200) {
            // todo.content = newTodoValue

            setTodoContent(newTodoValue);
          }
        })
        .then()
        .catch();
      
      setIsEditing(false);
    }
    
    // aRef.current = aRef.current + 1;
    // console.log('new a =', aRef.current);
    

  };


  // const onEditInputEnter = (evt, todo) => {
  //   // Enter key
  //   if (evt.keyCode === 13) {
  //     saveTodo(todo);
  //   }
  // };

  // const toggleTodo = () => {
    // const updatedTodos = structuredClone(todos); // [...todos]

    // for (let i = 0; i < updatedTodos.length; i++) {
    //   if (todo.id === updatedTodos[i].id) {
    //     updatedTodos[i] = {
    //       ...updatedTodos[i],
    //       isEditing: !updatedTodos[i].isEditing,
    //     };
    //     break;
    //   }
    // }

    // setTodos(updatedTodos);
  // };

  // const removeTodoHandler = () => {
  //   // Dont do this, since it violates the single source of truth principle
  //   // console.log('removing...', todoStr);

  //   // const filteredTodos = todos.filter((todo) => todo.name !== todoStr);

  //   // setTodos(filteredTodos);
  //   // setTodoLength(todos.length); // cannot get the latest state of the todos[]

  //   fetch('http://localhost:7891/todos', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ todo_toRemove: todo }),
  //   })
  //     .then((res) => res.json())
  //     .then((updatedTodos) => {
  //       const newTodos = updatedTodos.map((t) => ({
  //         id: t,
  //         name: t,
  //         isEditing: false,
  //       }));
  //       setTodos(newTodos);
  //     });
  // };

  return (
    <>
      <li key={todo.id} className='todo-container'>
        {!isEditing ? (
          <>
            <p>{todoContent}</p>
            <div>
              <button onClick={() => setIsEditing(true)}>✏️</button>
              <button onClick={() => removeTodoHandler(todo.name)}>🗑️</button>
            </div>
          </>
        ) : (
          <>
            <input
              type='text'
              defaultValue={todoContent}
              // by the time input element is ready, its ref will be saved to inputRef
              ref={inputRef}
              onKeyDown={(evt) => onEditInputEnter(evt, todo)}
              id='todo-content'
            />
            <div>
              <button onClick={() => saveTodo()}>✅</button>
              <button onClick={() => setIsEditing(false)}>❎</button>
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default Todo;
