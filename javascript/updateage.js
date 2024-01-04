// How Update Age of empolyees
function Employee(nameP,ageP)
{
    console.log('inside this',this)
    this.name = nameP;
    this.age = ageP
}
var emp1 = new Employee('Manoj',30)
var emp2 = new Employee('ved',25)

emp1.age = 29;//update age of emp3
console.log("Manoj age is updated: ",emp1)

console.log("emp3 is here: ",emp1)
console.log("emp4 is here: ",emp2)

// How Update Age using Arrow Function
console.log("<---------Update age using Arrow function-------->")
function Employees(nameP,ageP)
{
    console.log('inside this',this)
    this.name =nameP;
    this.age = ageP;
    this.setAge =newAge => {
        console.log(`setAge is-->${this.age} ${newAge}`)
        this.age = newAge
    }
}
var emp3 = new Employees('Harry',22)
var emp4 = new Employees('Jackei',20)
emp3.setAge(25)
emp4.setAge(26)
console.log("emp3 here: ",emp3)
console.log("emp4 here: ",emp4)

console.log('outside this',this)