const request = require("request");

/* JS Vanilla
VAR -> Variable de alcance global
ES6
CONST -> constante de alcance local
LET -> Variable de alcance local */

/*
  --FUNCIONES
  JS Vanilla
  // Funcion convencional
  function miFuncion(arg1, arg2){
    // esto es el bloque de codigo que ejecuta la funcion
  }
  // Funciones Anonimas
  const miFuncion = function (arg1, arg2) {
    // esto es el bloque de codigo que ejecuta la funcion
  }
  ES6
  const miFuncion = () => {
    // esto es el bloque de codigo que ejecuta la funcion
  };
*/


/* 
  Esta es una Funcion de Orden Superior
  (Higher Order Function) 
    -> funciones que reciben como argumento otra funcion
*/
// const API_URL = ''
// request.get(API_URL, () => {
//   /*  
//     Esta funcion que se ejecuta dentro de la funcion de
//     Orden Superior, se conoce como CALLBACK
//   */
// });

// 1) https://github.com/shevabam/breaking-bad-quotes
//  -> No maneja auth;
const getBreakingBadQuote = () => {
    const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    request.get(BR_BA_QUOTES, (err, res, body) => {
        if (res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json);
            console.log(json[0].quote);
        }
        else console.log(res.statusCode, err);
    })
};

getBreakingBadQuote();


// 2) https://www.theaudiodb.com/api_guide.php
//  -> Maneja Auth con API KEY

const getBandInfo = (band) => {
    const AUDIO_DB = `https://theaudiodb.com/api/v1/json/1/search.php?s=${band}`;
    request.get(AUDIO_DB, (err, res, body) => {
        if (err) console.log(err);
        if (res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json.artists[0].strArtist);
        }
        else console.log(res.statusCode, err);
    });
}

getBandInfo('Simon and Garfunkel');

