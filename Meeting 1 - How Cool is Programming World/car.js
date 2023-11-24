var car = {
    type: 'Tesla',
    model: 'Model 3',
    color: 'White',

    displayCar: function () {
        console.log('I have ' + this.type);
    }
};

// Accessing property using dot notation
console.log(car.type);

// Accessing property using bracket notation (with the property name as a string)
console.log(car['type']);

// Calling object's method/function/behaviour
car.displayCar();
