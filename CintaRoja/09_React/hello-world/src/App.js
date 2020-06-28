/* ES6 const request = require("request");
ES7 import React from "react";
Hagamos un build de producción => import => require
{} Voy a abrir algo con JavaScript
 */
import React, { useState, useEffect } from 'react';
// import Componente from './components/Componente';
import Card from './components/Card';
import axios from 'axios';
import './App.css';


// Componente siempre con mayúscula
const App = () => {

  const [text, setText] = useState();
  const [gifs, setGifs] = useState([]);
  const ENDPOINT = "https://api.giphy.com/v1/gifs/search?";

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  // Ciclo de vida de un componente
  // Arreglo vacío esto se ejecuta cuando el componente se monte
  useEffect(() => {
    console.log("Mi componente se montó");
  }, []);

  useEffect(() => {
    console.log("Valor del texto cambió");
    axios.get(`${ENDPOINT}api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${text}&limit=6`)
      .then((info) => setGifs(info.data.data))
      .catch(() => alert("Oops"))
  }, [text]);

  return (
    // JSX
    <section>
      <h1 className="text-center" >GIFs</h1>
      <div className="container" >
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={handleChange} />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">Busca tu GIF</span>
          </div>
        </div>
        <div className="row" >
          {gifs.map((gif) => <Card key={gif.id} img={gif.images.downsized_large.url} title={gif.title} url={gif.url} />)}
        </div>
      </div>
    </section>

  );
}

export default App;
