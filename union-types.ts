class BookSearchModel{
    //fields
    name: string;
    author: string;
    publisher: string | null;
    //yearPublished: Date;
    //hasEBook: boolean;
    price: number | null;
    //references: string[] | null;

    //constructor
    constructor(name:string, author:string, publisher:string | null, price:number | null){
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;

    }

}

let firstBook = new BookSearchModel("1984", "George Orwell", null, 7);
console.log(firstBook)