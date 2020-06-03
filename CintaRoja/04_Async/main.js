console.log(1);

for (i=0; i < 999999999; i++);

// Funciones anónimas: funciones sin nombre
/* setTimeout(function () {
    console.log(2);
}, 5000
)
 */
setTimeout(function () {
    console.log(3);
}, 3000);

console.log(4);
