// Crea una funcion llamada frequent() que recibirá de parámetro un arreglo con distintos números, retornar el elemento más frecuente dentro del arreglo.
const frequent = (numbers) => {
    console.log(numbers);
    const freq = {};
    for (let i = 0; i < numbers.length; i++) {
        let contador = 0;
        for (let c = i; c < numbers.length; c++) {
            if (numbers[i] === numbers[c]) {
                if (contador === 0 && freq.hasOwnProperty([numbers[i]])) {
                    break;
                } else {
                    contador++;
                    freq[numbers[i]] = contador;
                }
            }
        }

    }
    console.log(freq);

    const maxFreq = object => {
        return Object.keys(object).filter(e => {
            return object[e] == Math.max(...Object.values(object));
        });
    };
    const maxF = maxFreq(freq);
    console.log(maxF);

    const result = maxF.map((e) => parseInt(e));
    console.log(result);
    
    for (let j = 0; j < result.length; j++) {
    console.log(result[j]);
    return result[j];
    }
}

frequent([10, 30, 15, 20, 15, 25, 10, 10, 10, 10, 15, 15])
