var block = {
    length: 10,
    width: 5,
    height: 4,

    volume: function () {
        return this.length * this.width * this.height;
    }
};

function displayVolume() {
    var vol = block.length * block.width * block.height;
    return `The volume of the block is ${vol} cm^3`;
}

console.log(displayVolume());
console.log(block.volume());
