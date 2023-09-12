import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// {/* <div>
// {buttonValues.map((value, index) => (
//   <input
//     key={index}
//     type="button"
//     value={value}
//     className="button"
//     onClick={() => clickHandler(value)}
//   />
// ))}
// <br />
// <input type="text" value={result} readOnly />
// </div>
// );
// } */}


// const buttonValues = [
//   '9', '8', '7', '6',
//   '5', '4', '3', '2',
//   '1', '.', '-', '+',
//   '*', '/', '%'
// ];