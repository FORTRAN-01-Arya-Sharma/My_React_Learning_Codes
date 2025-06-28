import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

 //we can do const also in place of let cause ,in React, counter changes internally by React, not by reassigning manually.
// So React re-renders the component and gives counter a new value every time you call setCounter

const addValue = () => {

    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
  if (counter < 20) {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      console.log("clicked", newCounter);
      return newCounter;
    });
  } else {
    console.log("OOPS Diddy");
  }
};

const removeValue = () => {
  if (counter > 0) {
    setCounter(prevCounter => {
      const newCounter = prevCounter - 1;
      console.log("clicked", newCounter);
      return newCounter;
    });
  } else {
    console.log("OOPS Diddy");
  }
};

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick ={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App


//IMP


// setCounter(prev => prev + 1)
// setCounter(prev => prev + 1)
// setCounter(prev => prev + 1)
// setCounter(prev => prev + 1)
// setCounter(prev => prev + 1)
// Why it works:

// This uses the functional form of setCounter.

// React calls your function with the latest updated state, not the old one.

// So each update is based on the most recent value, even if multiple updates happen in a row.

// Result: ✅ Counter increases by 5.

// ❌ 2. Direct Value Method (Fails)
// js
// Copy
// Edit
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// setCounter(counter + 1)
// Why it fails:

// counter is the stale (unchanged) value at the time this code runs.

// All five calls calculate the same value: counter + 1 (e.g., 0 + 1 = 1)

// React batches these updates for performance, and only the last one is applied.

// Result: ❌ Counter increases by only 1 (not 5).