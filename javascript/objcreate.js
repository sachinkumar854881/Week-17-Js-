// create object using Object.create()
function Employee(nameP,ageP)
{
    console.log('inside this',this)
    this.name = nameP;
    this.age = ageP;

}
var emp1 = new Employee("arnold",70)
var emp2 = new Employee('nitin',30)

const emp3 = Object.create(Employee)
emp3.Fname = "RajKumar"
emp3.age = 33
console.log("emp3 is here: ",emp3)

console.log("emp1 is here: ",emp1)
console.log("emp2 is here: ",emp2)

console.log('outside this',this)