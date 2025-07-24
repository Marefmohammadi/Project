/// employee details

const employees =[
    {id: 1, name: 'John Doe', age: 30, specialization: 'JavaScript', department: 'IT', salary: 50000},
    {id: 2, name: 'Alice smith', age: 28, specialization: 'reseacher', department: 'HR', salary: 45000},
    {id: 3, name: 'Bob Johnson', age: 35, specialization: 'data analys', department: 'Finance', salary: 60000},
];
/// Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) =>
    `<p>${employee.id}: ${employee.name}: ${employee.age}:${employee.department}:${employee.salary}`).join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees;

}

// Function calculate total salary
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc , employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}
// Function display HR employees

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((employee, index) =>
    `<p>${employee.id}:${employee.name}:${employee.age} - ${employee.department} - ${employee.salary}`).join('');
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}
// find employee by ID 2
function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if(foundEmployee){
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}:${foundEmployee.name}:${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary}`;

    } else{
        document.getElementById("employeesDetails").innerHTML ="no employee has been found with this ID";
    }
}

function findEmployeeBySpecialization(specialization){
    const foundEmployeeBySpecialization = employees.find(employee => employee.specialization === specialization);

    if(foundEmployeeBySpecialization){
      
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployeeBySpecialization.id}:${foundEmployeeBySpecialization.name}:${foundEmployeeBySpecialization.age} - ${foundEmployeeBySpecialization.specialization} - ${foundEmployeeBySpecialization.department} - ${foundEmployeeBySpecialization.salary}`;
    }
}

//class and object
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person("John", "Doe");
const person2 = new Person("Ali", "Ahmadi");
console.log(person1.getFullName());
console.log(person2.getFullName());
// Object literals

const person = {
    firstName: "Alice",
    lastName: "Johnson",
    getName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.getName());

// Function Constructor

function Car (make, model){
    this.make = make;
    this.model = model;
}
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("Car1 details are", car1);
console.log("Car2 details are", car2);

// object array

const students = [
    {name: "Alice",age: 25},
    {name: "ali",age: 30},
    {name: "Ahmad",age: 35},
    {name: "Taqi",age: 40},

];
for (let i = 0; i < students.length; i ++){
    console.log(students[i].name, students[i].age);
}