class SearchName {
    constructor(fstlet) {
        this.fstlet = $(fstlet);
        this.fstlet.on("keyup", () => this.showSearch());
        this.Data = 0;
        this.cartona = '';
        this.parent = document.getElementById("searchLetRow");
    }

    async showSearch() {
        const searchQuery = this.fstlet.val().trim(); // Trim any leading or trailing whitespace

        // Check if the search query contains letters only using regex
        if (!/^[a-zA-Z]+$/.test(searchQuery)) {
            window.alert('Search query must contain letters only.');
            return; // Exit the function if the search query contains non-letter characters
        }

        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchQuery);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Process the response data
            console.log(data);
            console.log(data.meals.length);
            for (let i = 0; i < data.meals.length; i++) {
                this.cartona += `<div class="card col-md-3 g-1">
                <img src="${data.meals[i].strMealThumb}" alt="">
                </div>`;
            }
            $("#searchLetRow").empty();
            document.querySelector("#searchLetRow").innerHTML = this.cartona;
            this.cartona = '';
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // this.Data=0
        }
    }

    disp() {
        console.log(this.Data);
    }
}

export { SearchName };
