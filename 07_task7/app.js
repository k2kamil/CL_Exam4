class Product {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    printInfo(){
        let text = `${this.constructor.name} - title: ${this.title}, author: ${this.author}`;
        return text;
    }
}

class Ebook extends Product {
    download(){
        console.log('Ściąganie' + this.title);
        let description = `Sciąganie + title: ${this.title}`;
        return description;
    }
}

class Book extends  Product {
    order(){
        console.log('Podaj adres dostawy!')
        let descript = `Podaj adres dostawy!`;
        return descript;
    }
}

let ebook = new Ebook();
console.log(ebook);

let book = new Book();
console.log(book);

ebook.download();
book.order();
