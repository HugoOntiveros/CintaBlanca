// Crea una función llamada time() que calcule el tiempo (en segundos, con 2 decimales) necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (Tiempo = distancia/velocidad)
const time = () => {
    const velm = 73000;
    const distkm = 120;
    const velkm = velm / 1000;
    console.log(velkm);
    const tiempo = distkm / velkm;
    console.log(tiempo);
    const tiempo2 = tiempo.toFixed(2);
    console.log(tiempo2);
    const tiempoFinal = parseFloat(tiempo2);
    console.log(tiempoFinal);
    return tiempoFinal;
}

time();