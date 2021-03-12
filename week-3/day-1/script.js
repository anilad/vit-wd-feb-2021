function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}

// 1. Create an array with 2 different data types
var arr  = ['Candy', 123];
// 2. Create an object with your first name, last name, favorite color
var me = {
  firstName: 'Dalina',
  lastName: 'Dao',
  favColor: 'blush'
};
// 3. Update the favorite color
me.favColor='lavender';
// 4. Console log the second number from the array with your favorite color
console.log(arr[1]+me.favColor);