class ingrds {
    constructor(fstlet) {
        this.fstlet = $(fstlet);
        this.fstlet.on("click", () => this.showSearch());
        this.Data = 0;
        this.cartona = ''
        this.parent = document.getElementById("#Area")
    }
    async showSearch() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.meals[1].strArea);
            console.log(data.meals.length);
            for (let i = 0; i < data.meals.length; i++) {
                let x =
                    this.cartona += `<div class="card col-md-3 g-1 text-black h-25 text-center ">
                ${data.meals[i].strIngredient}
                ${data.meals[i].strDescription}

                </div>`
            }
            $("#ing").empty()
            document.querySelector("#ing").innerHTML = this.cartona
            this.cartona = ''
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
}
export { ingrds };