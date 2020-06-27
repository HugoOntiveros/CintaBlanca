// object
const object = {
    M9WByshbxqfnC0qPp9N: {
        done: true,
        priority: 3,
        time: 1,
        title: "Limpiar mi cuarto 4"
    },
    M9W94e8JbBd8VfzAEYj: {
        done: true,
        priority: 3,
        time: 1,
        title: 'Hacer el desayuno'
    },
    M9W94e8JbBd8VfzAEGj: {
        done: false,
        priority: 1,
        time: 1,
        title: 'Hacer la cama'
    }
}

const keysObject = Object.keys(object);
console.log(keysObject);

const idArray = keysObject.map((id) => object[id]);
console.log(idArray);

const numbers = {
    '10': 5,
    '15': 4,
    '20': 1,
    '25': 1,
    '30': 1
};

console.log(Object.keys(numbers));
console.log(Object.values(numbers));

const maxF = Object.keys(numbers).filter((freqs) => {
    return numbers[freqs] == Math.max(...Object.values(numbers));
})

console.log(maxF);