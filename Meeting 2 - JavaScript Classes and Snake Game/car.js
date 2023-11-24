// Create class
class Car {
    constructor(type, color) {
        this.type = type;
        this.color = color;

        this.display = function () {
            console.log(this.color + ' ' + this.type);
        }
    }
};

// Create object
var car1 = new Car("Tesla", "White");
var car2 = new Car("BMW", "Grey");
var car3 = new Car("Mercedes", "Black");

// Call object's method/function/operation
car1.display();
car2.display();
car3.display();