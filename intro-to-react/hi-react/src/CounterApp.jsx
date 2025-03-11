import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function CounterApp() {
  const [counter, setCount] = useState(0); // react hook

  // JSX = JS + HTML

  // let counter = 60; // simple variable will not trigger UI rerender

  // State in react:
  // if you change this special variable (state), the UI will AUTOMATICALLY gets updated as well!

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <div>
      <button>-</button>
      <span>Counter: {counter}</span>
      <button onClick={() => {
        // counter++; // this will not trigger UI re-render

        setCount(counter => counter + 1); // changing the counter state will also update UI!!

        console.log('new counter:', counter);
      }}>+</button>
    </div>
  )
}

export default CounterApp;
