// Crear una clase Bebida que herede a dos clases, Cerveza y Refresco. Ambas clases deben tener la propiedad cantidad (ml). La clase Refresco debe tener el atributo azucar (g) y la clase Cerveza debe el atributo porcentajeAlcohol. Crear los getters y setters correspondientes.
class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }
    getCantidad = () => this.cantidad
};

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol) {
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    getPorcentajeAlcohol = () => this.porcentajeAlcohol
};

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }
    getAzucar = () => this.azucar 
}