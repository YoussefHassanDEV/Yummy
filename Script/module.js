// import { cartona } from './dispMain.js';
import { Loader } from './loader.js';
Loader.fadeOutLoader();
import { mealFetcher } from './rndfetch.js';
mealFetcher.getMultipleMeals(50).then(meals => {

    let cartona='';
    for (let i = 0; i < 50; i++) {
        cartona += `<div class="card col-md-3 g-3">
        <img src="${meals[i].strMealThumb}" alt="">

        </div>`
    }
    let home=document.querySelector("#Home")
    home.innerHTML=cartona
});
// console.log(cartona);
let boolTog=0;
let setting=document.querySelector("#setting")
setting.addEventListener("click",function(){
console.log("adasdasd");
})
import { ToggleWidth } from './Nav.js'; // Import the ToggleWidth class

// Create an instance of ToggleWidth
const toggleWidthInstance = new ToggleWidth("#Nav", "#setting");
toggleWidthInstance.toggleWidth()