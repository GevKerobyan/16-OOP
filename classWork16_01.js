/*
---------- ---------- CoffeeShop ---------- ---------- 
*/

/*
Properties:
    name: a string (basically, of the shop)
    menu: an array of items (of object type), with each item containing the item (name of the item), 
        type (whether food or a drink) and price.
    orders: an empty array

Methods:
    addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
            Otherwise, return "This item is currently unavailable!"
    fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
            empty, return "All orders have been fulfilled!"
    listOrders: returns the list of orders taken, otherwise, an empty array.
    dueAmount: returns the total amount due for the orders taken.
    cheapestItem: returns the name of the cheapest item on the menu.
    drinksOnly: returns only the item names of type drink from the menu.
    foodOnly: returns only the item names of type food from the menu.
    IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

*/

class CoffeeShop {
    constructor(name, menu) {
        this.name = name
        this.menu = menu
        this.orders = []
    }

    addOrder(itemName) {
        if (this.menu[itemName]) {
            this.orders.push(itemName)
            return this.orders
        } else return `This item is currently unavailable!`
    }

    fulFillOrder() {
        if (orders) {
            return `The ${this.orders[0]} is ready!`
        } else {
            this.orders.shift()
            return `All orders have been fulfilled!`
        }
    }

    listOrders() {
        return this.orders
    }

    dueAmount() {
        let reducer = function (acc, el) {
            return acc.price += el.price;
        }
        return this.orders.reduce(reducer);
    }

    cheapestItem() {

        let reducer = function (acc, el) {
            if (acc.price >= el.price) {
                return acc = el;
            }

            return acc
        }
        let cheapest = this.menu.reduce(reducer);
        return `${cheapest.name} is the cheapest item on our menu !`

    }

    drinksOnly() {

        let drinks = [];
        return this.menu.filter((el) => el.type === `drink`)

    }

    foodOnly() {

        let drinks = [];
        return this.menu.filter((el) => el.type === `food`)

    }
}

const ourMenu = [
    { name: "Cappuccino", type: "drink", price: 700 },
    { name: "Americano", type: "drink", price: 500 },
    { name: "Fresh", type: "drink", price: 900 },
    { name: "Hot Dog", type: "food", price: 250 },
    { name: "Ice cream", type: "food", price: 250 },
]

const cafe = new CoffeeShop('CoffeeHouse', ourMenu);

cafe.addOrder('Americano');
cafe.addOrder('Cappuccino');

console.log(cafe.cheapestItem());
console.log(cafe.drinksOnly());
console.log(cafe.foodOnly());


// ------------------------------ DONE ------------------------------ \\ 