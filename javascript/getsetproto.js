let vehicle = {wheel:4}
let car = {
    seat:5,
    data:{
        name:"javascript"
    },
}
let driver = {}
console.log("get properties of car here: ",Object.getPrototypeOf(car))//this get all prototype related to car object
console.log("set properties of car here: ",Object.setPrototypeOf(car,vehicle))