// Crea una clase llamada Triangle que tenga dos atributos baseline y height, además crear dos métodos que calculen el perimeter() y el surface()
class Triangle {
    constructor(baseline, height) {
        this.baseline = baseline;
        this.height = height;
    }
    perimeter = () => this.baseline * 3
    surface = () => this.baseline * this.height / 2
}

const triangle = new Triangle(4, 5);
console.log(triangle.baseline);
console.log(triangle.height);
console.log(triangle.perimeter());
console.log(triangle.surface());
