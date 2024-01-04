// apply()--method takes argument as an array instead of sepearted commas
// using Constructor function
function Student(fnameP,lnameP,ageP)
{
    this.fname = fnameP;
    this.lname = lnameP;
    this.age = ageP;
}
const greet = function(prefix,suffix){
    console.log(`${prefix} ${this.fname} ${this.lname} ${this.age} ${suffix}`)
}
const std1 = new Student('sachin','kumar',27)
const std2 = new Student('Raj','kamal',28)
greet.call(std1,'hi..','how are you')
greet.apply(std2,['hi','how are you'])    
