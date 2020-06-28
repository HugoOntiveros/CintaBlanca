import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'; // Llamada de componente, siempre con mayúscula

ReactDOM.render(
  // JSX, lo que vemos en el navegador, es el componente principal
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */