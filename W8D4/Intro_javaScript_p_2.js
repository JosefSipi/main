

function titleize(array, callback) {
    const mapped = array.map(x => `Mx. ${x} Jingleheimer Schmidt`);
    callback(mapped);
};

console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

const printCallback = function (names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    };
};



// function printCallback(names) {
//     for ( let i = 0; i < names.length; i++){
//         console.log(names[i]);
//     };
// };


// I don't understand how this isn't the answer to what they were asking

// the answer 
// function titleize(names, callback) {
//     let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
//     callback(titleized);
// };

// // invoking the function
// titleize(["Mary", "Brian", "Leo"], (names) => {
//     names.forEach(name => console.log(name));
// });
// -----------



// Phase II - Constructors, Prototypes, and `this`

function Elephant(name, height, tricks){
    this.name = name;
    this.height = height;
    this.tricks = tricks;
};

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function () {
    this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

//  Why are we defining these functions with the () i though that invokes them

