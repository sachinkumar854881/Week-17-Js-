function Employee(nameP,ageP)
{
    console.log('inside this',this)
    this.name = nameP;
    this.age = ageP;
}
var emp1 = new Employee('sachin',27)
var emp2 = new Employee('sandeep',28)

console.log("emp1 is here: ",emp1)
console.log("emp2 is here: ",emp2)

console.log("get prototype of emp1 here: ",Object.getPrototypeOf(emp1))// this is used how get prototype of emp1 object
console.log('proto of emp1',emp1.__proto__)// this is used how get prototype of emp1 object
console.log('outside this',this)