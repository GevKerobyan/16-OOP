// -------------------- AUTHOR - BOOK -------------------- \\ 

/* Create an Author class and a Book class. 

Author should have:
  fields
  name
  email
  gender
  methods
    getters for fields
    toString()

Book should have:
  fields
  title
  author(Author)
  price
  quantity
  methods
  getters for fields
  setters for fields

  getProfit() - which calculates the profit from the book based on the price and quantity.
  toString()
*/

class Author {
    constructor(name, email, gender) {
        this._name = name,
            this._email = email,
            this._gender = gender
    }

    get name() {
        return this._name;
    }

    get email () {
        return this.email;
    }
    
    get gender () {
        return this._gender
    }


toString() {
    if (this.gender.toLowerCase() === `male`) {
        return `Mr ${this.name} .`
    } else if (this.gender.toLowerCase() === `female`) {
        return `Ms ${this.name}`;
    };
}
}

class Book {
    constructor(author, title, price, quantity) {

        this._author = author,
            this._title = title,
            this._price = price,
            this._quantity = quantity
    }

    get price() {
        return this.price;
    }

    set price(value) {
        if (typeof value === `number`) {
            this._price = value;
        } else {
            return "Error"
        }
    }

    getProfit() {
        const proceeds = this._price * this._quantity;
        return `The overall proceeds from sales is $${proceeds}`;
    }

    toString() {
        return `The ${this._title} book of ${this._author} had ${this._quantity} unit sales for ${this._price} .`;
    }
}

const author1 = new Author(`J. K. Rowling`, "abc@gmail.com", "fEmaLe");

console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

const harryPotter = new Book(author1, `Harry Potter`, 3, 8)
// console.log(author1)

harryPotter.price = `khdsf`;
// console.log(harryPotter)
console.log(harryPotter.toString())

console.log(harryPotter.getProfit())


// ------------------------------------------------------------ DONE ------------------------------------------------------------ \\