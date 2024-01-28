// import { cartona } from './dispMain.js';
import { Loader } from './loader.js';
import { SearchName } from './SearchName.js'
import { discat } from './dispCatg.js';
import { mealFetcher } from './rndfetch.js';
import { Searchlet } from './SearchLet.js';
import { dispSearch } from './displaySearch.js'
import { ToggleWidth } from './Nav.js'; // Import the ToggleWidth class
import {Dispcatsett} from './dispcatgsettings.js';
import { disArea } from './disArea.js';
import { DispAreasett } from './disAreaSet.js';
Loader.fadeOutLoader();
mealFetcher.getMultipleMeals(50).then(meals => {
    let cartona = '';
    for (let i = 0; i < 50; i++) {
        cartona += `<div class="card col-md-3 g-3">
        <img src="${meals[i].strMealThumb}" alt="">

        </div>`
    }
    let home = document.querySelector("#Home")
    home.innerHTML = cartona
});
let boolTog = 0;

// Create an instance of ToggleWidth
const toggleWidthInstance = new ToggleWidth("#Nav", "#setting", "#content");
toggleWidthInstance.toggleWidth()
let searchletter = document.querySelector("#searchletter",)
const dispSearch1 = new dispSearch("#search", "#SearchButtons");
dispSearch1.disp();
const searchlet = new Searchlet("#searchletter");
const SearchName1 = new SearchName("#Name")
const discat1 = new discat("#categories")
const disset1=new Dispcatsett("#categories")
const disArea1=new disArea("#area")
const DispAreasett1=new DispAreasett("#area")
