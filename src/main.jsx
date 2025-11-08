import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import './index.css'
import App from './App.jsx'

// const headding = <h1 id="mainHeading">Hello, React from headding!</h1>; // JSX element
// console.log(1111);
// console.log(headding);
// const otherHader = React.createElement("h1", {}, "Hello, React from createElement!") // React element; // jsx
// console.log(2222);
// console.log(otherHader);
createRoot(document.getElementById('root')).render(
 <strictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
   </strictMode>
)
