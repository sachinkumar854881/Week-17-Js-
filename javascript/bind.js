// bind() function 
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
const invite1 = meeting.bind(user1)
const invite2 = meeting.bind(user2)
invite1 (' bind war rrom for project issue',' bind 1hr')
invite2 ('bind documentation of application ',' bind 2hr')