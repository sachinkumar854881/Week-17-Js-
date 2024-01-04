let vehicle = {wheel:4}
let car = {
    seat:5,
    data:{
        name:"javascript"
    },
    _proto_:vehicle
}
let driver = {}
const carProperties = Object.keys(car)
console.log("car properties here: ",carProperties)

const carData = Object.keys(car.data)
console.log("car data here: ",carData)

const carValue = Object.values(car)
console.log("car values her: ",carValue)

const dataValue = Object.values(car.data)
console.log("car data values here: ",dataValue)