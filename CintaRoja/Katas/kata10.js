/* Crea un nuevo método para el siguiente objeto:
const myCollection = { books: [ { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', read: true }, { title: 'Do Androids Dream of Electric Sheep', author: 'Phillip K. Dick', read: false } ] };
El método debe llamarse isRead() que recibirá objeto con los atributos title, author y read.
Si el libro ha sido leído debe retornar:
"Ya has leído Cien Años de Soledad de Gabriel García Márquez"
Si el libro no ha sido leído debe retornar:
"Aún necesitas leer Do Androids Dream of Electric Sheep de Phillip K. Dick" */

const myCollection = {
    books: [
        {
            title: 'Cien Años de Soledad',
            author: 'Gabriel García Márquez',
            read: true
        }, {
            title: 'Do Androids Dream of Electric Sheep',
            author: 'Phillip K. Dick',
            read: false
        }],
    isRead(book) {
/*         class Book {
            constructor(title, author, read) {
                this.title = title;
                this.author = author;
                this.read = read;
            }
        }
        const book = new Book(title, author, read);
 */        if (book.read === true) {
            console.log("Ya has leído Cien Años de Soledad de Gabriel García Márquez");
            return "Ya has leído Cien Años de Soledad de Gabriel García Márquez";
        } else {
            console.log("Aún necesitas leer Do Androids Dream of Electric Sheep de Phillip K. Dick");
            return "Aún necesitas leer Do Androids Dream of Electric Sheep de Phillip K. Dick";
        }
    }
};

myCollection.isRead({ title: "Title", author: "Author", read: true });
myCollection.isRead({ title: "Title", author: "Author", read: false });
