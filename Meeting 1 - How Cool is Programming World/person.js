var person = {
    name: 'John',
    age: 15,
    gender: 'male',
    interest: 'coding',

    greeting: function () {
        console.log("Hi, I'm " + person.name);
    }
};

// Accessing property using dot notation
console.log(person.age);

// Accessing property using bracket notation (with the property name as a string)
console.log(person['age']);

// Calling object's method/function/behaviour
person.greeting();