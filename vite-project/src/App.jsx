import Chai from './chai';
import React from 'react';

function App() {
  const username = "papi"
  return (
    <>
      <Chai />
      <h1>
        this is me {username}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, mollitia, ducimus id blanditiis quae expedita odit alias fugiat, asperiores nihil iste ex illo?</p>
    </>
  )
}

export default App;

// This code defines a simple React component named `App` that returns a single `<h1>` element with the text "this is me".
// The component is then exported as the default export of the module, allowing it to be imported and used in other parts of the application.
