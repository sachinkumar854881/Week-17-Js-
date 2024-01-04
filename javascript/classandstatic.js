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