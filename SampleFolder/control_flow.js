

let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "admin";
let userCategory;
let isAuthenticated = true;

// if else statement
if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if(userRole === "manager"){
    accessLevel = " Limited access granted";
} else{
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

// if nested statement
if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = " Welcome , Admin";
    }else{
        userMessage = "Welcome, User";
    }
}else{
    userMessage = "Please log in to access the system";
}
console.log("User Message:", userMessage);

//switch statement
switch(userType){
    case "admin":
        userCategory ="Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

// Ternary operator
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);

// Practice task

