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
        return `${this.firstName} ${this.lastName};`
    }
}
const person1 = new Person("John", "Doe");
console.log(person1.getFullName);