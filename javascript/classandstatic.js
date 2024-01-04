class Employee{
    constructor(nameP,ageP){
        this.name = nameP;
        this.age = ageP;
        this.setAge = newAge => {
            console.log(`setting age from ${this.age} to ${newAge}`)
            this.age = newAge;
        }
    }
    static compareAge(em1,em2){
        return em1.age - em2.age;
    }

}
var emp1 = new Employee('Max',25)
console.log('emp1 is here: ',emp1)
var emp2 = new Employee('Max',30)
console.log('emp1 is here: ',emp1)

// call static method using class name
const comRes = Employee.compareAge(emp1,emp2)
console.log('compare age is here: ',comRes)

//Example-2
console.log("<-----example-2-------->")
function Person(nameP,ageP)
{
    console.log('inside this',this)
    this.name = nameP;
    var _age = ageP;
    this.setAge = newAge => {
        console.log(`setage is-- ${_age} ${newAge}`)
        _age = newAge;
    }
    this.printAge = function(){
        console.log('_age is: ',_age)
        return _age
    }
}
var p1 = new Person('sachin',25)
var p2 = new Person('sandeep',26)
console.log(`Employee prototype,${Employee.prototype}`)

console.log('p1 is: ',p1)
console.log('p1.age: ',p1.age)
console.log('p2 is: ',p2)
console.log('p1 ',p1.printAge())
console.log('p2 ',p2.printAge())