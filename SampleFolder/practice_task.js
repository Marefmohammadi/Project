/// Practic Task
let customerRole = "Subscriber";
let accessService;

if(customerRole === "Employee"){
    accessService = "Your are aothorized to have access to Dietary Services.";
} else if(customerRole === "Enrolled Member"){
    accessService = "You have access to Dietary Services one-on-one.";
} else if (customerRole === "Subscriber"){
    accessService = "You have partial access to Dietary Services";
}else{
    accessService = "You are need to enroll or at least subscribe first to avail this facility.";

}
console.log("Access Services:", accessService);

function add(){
    const a =3;
    const b =3;
    return a + b;
}
document.getElementById("functiondata1").innerHTML = add();

function add1(a, b){
    return a + b;
}
document.getElementById("functiondata2").innerHTML=add1(7,8);

// function expression
const sum = function(a, b){
    console.log(a+b);
}
sum(2, 3);
(function hallo(a, b){
    console.log(a+b);
})(4,6);

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const greet = () => {
    console.log("hello, world!");
}
greet();