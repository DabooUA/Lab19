var grocerySelection=["Salsa","Chips","Toilet Paper","Choclate Bar","Bannana"];
var groceryPrice=[6,3,17.99,3.99,0.59];
var total=0;

function purchase(grocerySelection,groceryPrice){
console.log(grocerySelection,groceryPrice);
total+=groceryPrice

}
  function checkOut(){
  console.clear();
  console.log("Your total is: $"+ total);
}