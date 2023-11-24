class Student {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }

    static display(student) {
        console.log(`I am ${student.name}, I like ${student.hobby}!`);
    }
}

const students = [
    new Student("Andra", "Reading"),
    new Student("Bella", "Cooking"),
    new Student("Caka", "Gaming"),
    new Student("Davina", "Coding"),
    new Student("Evan", "Basketball")
];

students.forEach(
    student => Student.display(student)
);
