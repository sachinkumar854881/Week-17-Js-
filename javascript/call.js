// call()---an object use a method belonging to another object
const employee={
    name:"john",
    meeting:function(projectPlan="cart page"){
        console.log("thi meeting is all about",projectPlan)
        console.log(`meeting is for employee:${this.name}`)
    }
}
const employee2={
    name:'Marie'
}
console.log(employee.meeting.call(employee,'order module'))
console.log(employee.meeting.call(employee2,'bill module'))

// using make a simple method
console.log("<-------- by make simple method--------->")
var user1 = {
    firstName:'Sachin', lastName:"Kumar"
}
var user2 = {
    firstName:'sandeep', lastName:'nimesh'
}
function meeting(agenda,duration){
    console.log("good Morning ",this.firstName)
    console.log("meeting agenda is ",agenda)
    console.log("meeting duration is ",duration)
}
meeting.call(user1,'war rrom for project issue','1hr')
meeting.call(user2,'documentation of application ','2hr')