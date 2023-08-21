import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';
import reportWebVitals from './reportWebVitals';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './index.css'; // Import default index.css from React app
// import Script1 from './Script1';

// Your JavaScript code goes here (copy your script.js content here)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Script1/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
