class discat {
    constructor(fstlet) {
        this.fstlet = $(fstlet);
        this.fstlet.on("click", () => this.dispcat());
        this.Data = 0;
        this.cartona = '';
        this.parent = document.getElementById("searchLetRow");
        
    }

    async dispcat() {
        console.log("asdasdasdaddasda");

        try {
            console.log("asdasdasdaddasda");
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Process the response data
            console.log(data);
            console.log(data.categories.length);
            for (let i = 0; i < data.categories.length; i++) {
                this.cartona += `<div class="bg-dark  card col-md-3 g-1 h-25">
                <img src="${data.categories[i].strCategoryThumb}" alt="">
                ${data.categories[i].strCategory}
                </div>`;
            }
            document.querySelector("#searchLetRow").innerHTM = '';
            $("#catgRow").empty()
            document.querySelector("#catgRow").innerHTML = this.cartona
            this.cartona=''
            // this.Data=data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // this.Data=0
        }
    }
}

export { discat };
