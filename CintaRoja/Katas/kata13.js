// Crea una función llamada showMessaje() que devuelva "Mi mensaje dentro de un callback" mediante un callback.

const callback = () => {
    return "Mi mensaje dentro de un callback";
}

const showMessaje = (callback) => {
    return callback();
}

/* const showMessaje = (() => {
    return "Mi mensaje dentro de un callback";
}) */

showMessaje();