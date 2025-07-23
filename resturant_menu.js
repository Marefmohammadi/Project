//Resturant Menu using Array and Arrays methode

const breakfastMenue = ["Pancakes- $12", "Eggs Benedict", "Oatmeal", "Fruits"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Frruits salad"];
// map the array
const breakfastMenuItemsHTML= breakfastMenue.map((item, index) => `<p> Item ${index +1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseitem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseitem += `<P>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseitem;

let dessertItem = '';
for(let i = 0; i<dessertMenu.length; i++){
    dessertItem += `<p> Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;

/// Array methods
// forEch method

function sendWelcomeEmail(email){
    console.log(`Welcome email sent to ${email}`);
}
const users = [
    {name: "Alice", email: "alice@gmail.com"},
    {name: "Bob", email: "bob@gmail.com"},
    {name: "Cahlie", email: "charlie@gmail.com"}

];
users.forEach((user) =>{
    sendWelcomeEmail(user.email);
});

//Map method
const products = [
    {name: "Laptop", price: "1000$"},
    {name: "Smartphone", price: 600},
    {name: "Tablet", price: 300},
    {name: "Monitor", price: 250},
    {name: "Keyboard", price: 50}
];
products.map((product) =>{
    console.log(`The price of ${product.name} is ${product.price}`);
});

//filter method
function filterProductByPriceRange(products, minPrice, maxPrice){
    return products.filter((product) =>product.price >= minPrice &&
product.price <= maxPrice);
}

const maxPrice = 500;
const minPrice = 100;

const filteredProducts = filterProductByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) =>{
    console.log(`${product.name} is of $${product.price}`);
});

