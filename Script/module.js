// Define the dispdetailsmain function
function dispdetailsmain(strInstructions, strMealThumb) {
    // Construct the HTML content
    let cartona = `
        <div class="vh-100">
            <div class="d-flex justify-content-center">
                <img src="${strMealThumb}" alt="">
                <h1 id="closeDetails">X</h1> <!-- Added id="closeDetails" to the "X" element -->
            </div>
            <div class="bg-dark text-white"> meal: ${strInstructions}</div>
        </div>`;

    // Update the #details element with the generated content
    document.querySelector("#detailsMain").innerHTML = cartona;

    // Remove the 'd-none' class and add the 'd-block' class to display the #detailsMain element
    $("#detailsMain").removeClass("d-none").addClass("d-block");
    // Hide the #Home element
    $("#Home").removeClass("d-block").addClass("d-none");

    // Add event listener to the "X" element to close the details
    document.getElementById("closeDetails").addEventListener("click", function() {
        $("#detailsMain").removeClass("d-block").addClass("d-none"); // Hide the details
        $("#Home").removeClass("d-none").addClass("row"); // Show the home content
    });
}



// Your other JavaScript code
import { Loader } from './loader.js';
import { SearchName } from './SearchName.js';
import { discat } from './dispCatg.js';
import { mealFetcher } from './rndfetch.js';
import { Searchlet } from './SearchLet.js';
import { dispSearch } from './displaySearch.js';
import { ToggleWidth } from './Nav.js';
import { Dispcatsett } from './dispcatgsettings.js';
import { disArea } from './disArea.js';
import { DispAreasett } from './disAreaSet.js';

Loader.fadeOutLoader();

mealFetcher.getMultipleMeals(50).then(meals => {
    let cartona = '';
    for (let i = 0; i < 50; i++) {
        cartona += `<div class="card col-md-3 g-3 vh-25">
            <img src="${meals[i].strMealThumb}" alt="">
            <div class="bg-dark text-white"> meal: ${meals[i].strMeal}</div>
        </div>`;
    }
    let home = document.querySelector("#Home");
    home.innerHTML = cartona;

    // Add event listener to dynamically created elements
    home.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', function () {
            dispdetailsmain(meals[index].strInstructions, meals[index].strMealThumb); // Pass the instructions to dispdetailsmain
        });
    });
});

const toggleWidthInstance = new ToggleWidth("#Nav", "#setting", "#content");
toggleWidthInstance.toggleWidth();

const dispSearch1 = new dispSearch("#search", "#SearchButtons");
dispSearch1.disp();

const searchlet = new Searchlet("#searchletter");
const SearchName1 = new SearchName("#Name");
const discat1 = new discat("#categories");
const disset1 = new Dispcatsett("#categories");
const disArea1 = new disArea("#area");
const DispAreasett1 = new DispAreasett("#area");
