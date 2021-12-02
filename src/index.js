import React from 'react';
import ReactDOM from 'react-dom'; //render our app, spec app component and other components inside (root)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicExample from './routes/route';
import Routes from './routes/route';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// routing

