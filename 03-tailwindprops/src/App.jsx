import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name:"ash",
    age: 23
  }
  return (
    <>
      
    <Card  username = "Price"/>
    <Card username = "ash" someObj = {myObj}/>

    
    </>
  )
}

export default App
