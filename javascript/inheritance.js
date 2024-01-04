// Prototype based inheritance 
console.log("<------prototype based inheritance-------->")
let vehicle  = { wheel:4 }
let car ={
    seat : 5,
    data : {
        name : 'javascript' 
    },
    __proto__: vehicle
}
let BMW = {
    price : 50000,
    owner : 'Nic John',
    __proto__:car
}
let driver = {};
console.log('BMW here: ',BMW)


// Inheritance using constructor function
console.log("<--------Inheritance using Construction--------->")
function Human(nameP,ageP)
{
    this.name = nameP;
    this.age = ageP;

    this.arms = 2;
    this.legs = 2;
}
function Employee(nameP,ageP,designationP)
{
    Human.call(this,nameP,ageP);
    this.designation = designationP;
    this.setAge = newAge =>{
        console.log('this.age: ',this.age)
        this.age = newAge;
    }
    this.company = 'Walmart'
}
Employee.prototype = Object.create(Human.prototype)

var emp1 = new Employee('sachin kumar',27,'developer')
Employee.prototype.gender = 'Male';
Human.prototype.feet = 2;/* hamne yaha human ka protoype feet set kara hai  or isko access karenge object.create se*/
console.log(emp1)
console.log(emp1.name ,'is ',emp1.gender)
console.log(emp1.name,'is ',emp1.age)
console.log(emp1.name ,'has arms ',emp1.arms)
console.log(emp1.name ,'has legs ',emp1.legs)


// Inheritance using Class 
console.log("<-------Inheritance using Class-------->")
class Human1{
    constructor(nameP,ageP)
    {
        this.name = nameP;
        this.age = ageP;
        this.arms = 2;
        this.legs = 2;
    }
}
class Employee1{
    constructor(nameP,ageP,designP)
    {
        Super(nameP,ageP)
        this.design = designP;
        this.company = 'FaceBook'
    }
    setAge = newAge => {
        console.log('this.age: ',this.age)
        this.age = newAge
    }
}
var emp1 = new Employee('William',26,'developer')
console.log(emp1)
console.log(emp1.name,'is ',emp1.age)
console.log(emp1.name,'has arms ',emp1.arms)