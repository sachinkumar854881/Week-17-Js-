const arr = [];
console.log("arr is: ", arr);
const lang = {
    name: "javascript",
    version: "es6",
    sum: function (a, b) {
        return a + b;
    },
};
console.log("language is: ", lang);
console.log("lang.__proto__:", lang.__proto__);
console.log("lang.__proto__.__proto__: ",lang.__proto__.__proto__)

let vehicle = { wheel: 4 };
let car = {
    seats: 5,
    __proto__: vehicle,
};
let driver = {};
// console.log("vehicle is: ",vehicle)
// console.log("vehicle.__proto__: ",vehicle.__proto__)
// console.log("car: ",car)
// console.log("car.__proto__: ",car.__proto__.__proto__)
// console.log("driver: ",driver)
// console.log("driver.__proto__: ",driver.__proto__)

console.log("car:", car);
console.log("car.wheel: ", car.wheel);
console.log("vehicle.seat: ", vehicle.seat); //not shown any key because child properties not inherited into parent,parent not access child properties
console.log("car.__proto__: ", car.__proto__);
console.log("car.__proto__.__proto__:", car.__proto__.__proto__); //null
