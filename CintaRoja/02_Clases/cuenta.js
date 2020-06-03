/* Crear una clase Cuenta que tenga los siguientes atributos y metodos:
     -Titular y cantidad
     -ingresar(cantidad)
     -retirar(cantidad)
     Hacer las validaciones previas
     Como regla de negocio no debe de tener más de $900 y menos de $10
 */
class Cuenta {
    constructor(titulo, cantidad) {
        this.titulo = titulo
        this.cantidad = cantidad
    }
    ingresar(monto) {
        var suma = this.cantidad + monto
        if (suma > 900) {
            return "No es posible realizar su ingreso.";
        } else {
            return this.cantidad = suma;
        }
    }
    retirar(monto) {
        var resta = this.cantidad - monto;
        if (resta < 10)
            return "No es posible realizar su retiro.";
        return this.cantidad = resta;
    }
}

var cuenta1 = new Cuenta("Andrés", 500);

console.log(cuenta1);
console.log(cuenta1.ingresar(200));
console.log(cuenta1.retirar(200));
console.log(cuenta1);
