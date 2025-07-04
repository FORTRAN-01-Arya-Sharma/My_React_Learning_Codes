import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


function MyApp(){
  return(
    <div>
      <h1>Custom App papi</h1>
    </div>
  )
}


// const reactElement = {
//     type : 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement =(
  <a href='https://google.com' target='_blank'>This is Google</a>
)

const anotherUser ="Damon Salvator"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
 
    reactElement
 
);
