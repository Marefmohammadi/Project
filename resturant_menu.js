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