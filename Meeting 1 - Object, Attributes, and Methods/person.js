var Person = {
    name: 'John',
    age: 15,
    gender: 'male',
    interest: 'coding',

    greeting: function () {
        console.log("Hi, I'm " + Person.name);
    }
};

// Accessing property using dot notation
console.log(Person.age);

// Accessing property using bracket notation (with the property name as a string)
console.log(Person['age']);

// Calling object's method/function/behaviour
Person.greeting();