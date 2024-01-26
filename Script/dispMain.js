import { mealFetcher } from './rndfetch.js';
let cartona = ''

mealFetcher.getMultipleMeals(50).then(meals => {
    for (let i = 0; i < 50; i++) {
        cartona += `<div class="card col-md-3 g-1">
        <img src="${meals[i].strMealThumb}" alt="">

        </div>`
    }
});
console.log(cartona)
export {cartona}
