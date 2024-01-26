class MealFetcher {
    async getMultipleMeals(numberOfMeals) {
        try {
            const meals = [];
            for (let i = 0; i < numberOfMeals; i++) {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                meals.push(data.meals[0]); // Push the random meal data to the meals array
            }
            return meals; // Return the array of random meals
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return []; // Return an empty array in case of error
        }
    }
}

// Example usage:
const mealFetcher = new MealFetcher();
export {mealFetcher}