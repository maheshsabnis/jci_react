/* Importing  JS Modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Load CSS as Module */
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* Importing other JS objects
  .e.g Components, Logic Objects, Utilities, etc.
*/
import App from './App';

import reportWebVitals from './reportWebVitals';
/* This will localte a HTML element having id as 'root' from index.html
 and in this HTML element the React Component will be MOUNTED 
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* MOUNT the Component and show the HTML of the Component on UI Thread */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
