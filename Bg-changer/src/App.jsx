import { useState } from "react";

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button onClick={()=> setcolor("red")}
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"red"}}>Red</button>


          <button onClick={()=> setcolor("green")} 
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"green"}}>Green</button>


          <button onClick={()=> setcolor("black")}
          className="border-black px-4 
          py-1 rounded-2xl shadowgreen text-white
          " style= {{backgroundColor:"black"}}>Black</button>


          <button onClick={()=> setcolor("hotpink")}
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"hotpink"}}>Hotpink</button>


          <button onClick={()=> setcolor("indigo")}
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"indigo"}}>Indigo</button>


          <button onClick={()=> setcolor("blue")}
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"blue"}}>Blue</button>

          <button onClick={()=> setcolor("grey")}
          className="border-black px-4 
          py-1 rounded-2xl shadow-lg text-white
          " style= {{backgroundColor:"grey"}}>Grey</button>


        </div>

      </div>
    </div>
  )
}

export default App
