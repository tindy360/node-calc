
let diner =   {
  name: 'Tim' , 'James' , 'Sara ',
  meal: Buffet,
}

let bill = {
  cost: 12.95
  tax: 6%

}

function totalMeals (){
 diner.name.val * bill.cost,
 },
console.log(totalMeals());

function  calcTax (totalMeals){
  totalMeals / bill.tax,
},
console.log(calcTax);

// calulate total bill per person
function costPerDiner(){
  totalMeals() + calcTax() / 3
},

console.log(costPerDiner())
