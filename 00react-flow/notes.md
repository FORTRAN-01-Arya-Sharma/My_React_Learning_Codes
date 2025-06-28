# so when js is working it is only working with the js files like to gets its work done we need to use the scrpit tag in the html file without that it will not work

# 01basicsreact/notes.md

- build folder: Contains the production-ready version of your app.
- node_modules folder: Contains all the installed npm packages.

# what is the use of node modules folder

Node modules folder is where all the dependencies (packages) your project needs are stored. When you run `npm install`, it downloads these packages and puts them in this folder. This allows your project to use libraries like React, testing tools, etc., without having to include them directly in your code.

# what is npm

    npm (Node Package Manager) is a tool that helps you manage packages (libraries or tools) for your JavaScript projects. It allows you to install, update, and manage dependencies easily. When you run commands like `npm install`, it fetches the required packages from the npm registry and adds them to your project.

# So basically these are the files and folders that are created when you run `npm start` in a React project. They help you build, test, and run your React application efficiently. and without these files and folders, your React app won't work properly.

# public folder: Contains the static assets of your app, such as the HTML file and images.

- these are for the public to see and use your app. The `index.html` file is the main entry point for your React app, and it links to the JavaScript files that contain your React components.

src folder: Contains the source code of your React app, including components, styles, and tests.

- this is where you write your React code. The `index.js` file is the main entry point for your React app, and it renders the root component into the DOM. The `App.js` file is usually where you define your main application component.

# In 99% of the cases you will only work with the `src` folder, where you write your React components and styles. The other folders are mostly for configuration and build purposes.

# In src folder, you will find:

# index.js: The main entry point of your React application. It renders the root component into the DOM.

# App.js: The main application component where you define your app's structure and logic.

# gitignore: A file that tells Git which files and folders to ignore when committing changes. This is useful for excluding files that shouldn't be tracked, like `node_modules` or build artifacts.

# package.json: The configuration file for your React project. It contains metadata about your app, dependencies, scripts, and more.

# package-lock.json: A file that locks the versions of your dependencies to ensure consistent installs across different environments.

# README.md: A file that provides information about your project, how to run it, and any other relevant details.


📙Another information that in public folder there is a manifest.json file 

# manifest.json: This file provides metadata about your web application, such as its name, icons, and theme colors. It's used for Progressive Web Apps (PWAs) to enhance the user experience on mobile devices.


# json and jsx

# JSON and JSX are two different formats used in web development, especially in React applications.

# JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans and machines. It is often used to store configuration data or exchange data between a server and a client.

# JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is commonly used in React to define the structure of components. JSX gets transpiled into regular JavaScript by tools like Babel before being executed in the browser.

# ReactDOM is a package that provides methods to interact with the DOM in a React application. It allows you to render React components into the DOM and manage updates efficiently.Also know as virtual DOM, which is a lightweight representation of the actual DOM. React uses this virtual DOM to optimize rendering and updates, making it faster and more efficient.

# ReactNative is a framework for building mobile applications using React. It allows you to write code that can run on both iOS and Android devices using a single codebase.

# Render means to display or update the user interface of a React component. When you call `ReactDOM.render()`, it takes a React component and renders it into a specified DOM element, making it visible to the user.

# ReactDOM.render() is a method provided by the ReactDOM package that allows you to render a React component into the DOM. It takes two arguments: the React component you want to render and the DOM element where you want to render it.

# we have two files in src folder:
 index.js and App.js

➡️ In index.js we have coded 
<!-- import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); -->

➡️ In App.js we have coded

<!-- import Coffee from './Coffee';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>hello this is ash boi</p>
      <Coffee />
    </>
  );
}

export default App; -->

➡️ In Coffee.js we have coded

<!-- function Coffee() {
    return (
        <h3>I like hot coffee</h3>
    )
}
export default Coffee;
// This code defines a simple React component named `Coffee` that returns a single `<h3>` element with the text "I like hot coffee". -->



this is how the flow of the code works:
1. **index.js**: This is the entry point of your React application. It imports React, ReactDOM, and the main App component. It creates a root element in the DOM and renders the App component inside it.

2. **App.js**: This file defines the main application component. It imports the Coffee component and renders it along with some other elements like a heading and a paragraph.

3. **Coffee.js**: This file defines a simple React component named `Coffee` that returns a single `<h3>` element with the text "I like hot coffee".

When you run your React application, the `index.js` file is executed first, which renders the `App` component. The `App` component then renders the `Coffee` component, resulting in the final output displayed in the browser. 


index.js
   ⬇
renders <App /> from App.js
   ⬇
App.js contains <Coffee /> (imported from Coffee.js)
   ⬇
Coffee.js returns an <h3> element


# This is how the flow of the code works in a React application, where components are rendered in a hierarchical manner, allowing you to build complex UIs by composing smaller components together.

🏹 **react-scripts** is the reason why you no need to use the script tag in the HTML file. It provides a set of scripts and configurations that help you run, build, and test your React application without needing to manually set up Webpack, Babel, or other tools.


**⚛️ React = HTML + JS Power**



# vite-project/notes.md

Vite is a modern build tool that provides a fast development experience for web applications. It uses native ES modules in the browser during development, which allows for instant updates and a snappy development experience. Vite also supports hot module replacement (HMR), which means that changes to your code are reflected in the browser without a full page reload.

When you create a new Vite project, it sets up a basic structure with an `index.html` file, a `main.js` file, and a `style.css` file. The `index.html` file serves as the entry point for your application, while the `main.js` file is where you write your JavaScript code.


The flow is exactly same as 01basicsreact/notes.md, but with Vite as the build tool instead of Create React App. Vite handles the bundling and serving of your application, making it faster and more efficient during development.

When you run a Vite project, it starts a development server that serves your application files and provides features like hot module replacement. You can also build your application for production using the `vite build` command, which generates optimized static files in a `dist` folder.

also we are not using react-scripts in Vite projects. Instead, it directly used scripts tag

in vite remember these
- name the file and tag with first letter in capital
- use jsx extension for files that contain JSX code avoid using .js extension for files that contain JSX code
- also during export only one elemwent can be exported from a file, so if you want to export multiple elements, you need to use named exports or wrap them in a single component.

<>

# these are call as fragment elements

  <h1>Hello World</h1>
  <p>hello this is ash boi</p>
  <Coffee />
</>


<!-- in mongooes when we have the data like User it will be stored as "users" all in  small and s in the end -->


# subtodo

import { Timestamp } from 'bson';
import mongooes from 'mongooes';
import { Types } from 'mongoose';

const subTodoSchema = new mongooes.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { Timestamp }
);

export const SubTodo = mongooes.model('SubTodo', subTodoSchema);


# in todo model

import mongooes from "mongoose"

const todoSchema = new mongooes.Schema(
  {
    content:{
      typeof:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongooes.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[
      {
        type:mongooes.Schema.Types.ObjectId,
        ref:"SubTodo"
      }
    ]//array og sub_Todos
  }
  ,{timestamps:true})

  export const Todo = mongooes.model("Todo", todoSchema) 


# user

import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {

    // username: String,
    // email: String,
    // isActive:Boolean

    //best way to write mongoose
    username:{
      type:String,
      required:true,
      unique: true,
      lowercase:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      required:[true,"password is required"]
    }

  },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)