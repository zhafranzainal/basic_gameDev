// Create class
class Game {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
};

// Create object
var game1 = new Game("Dota 2", "MOBA");

console.log(game1.name);
console.log(game1.genre);
