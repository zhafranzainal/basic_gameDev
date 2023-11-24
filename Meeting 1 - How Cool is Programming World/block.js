var block = {
    length: 10.5,
    width: 4.5,
    height: 4.5,
};

function volume() {
    var vol = block.length * block.width * block.height;
    return `The volume of the block is ${vol} cm3`;
}

console.log(volume());
