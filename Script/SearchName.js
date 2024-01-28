class SearchName {
    constructor(fstlet) {
        this.fstlet = $(fstlet);
        this.fstlet.on("keyup", () => this.showSearch());
        this.Data = 0;
        this.cartona = ''
        this.parent = document.getElementById("#searchLetRow")

    }

    async showSearch() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.fstlet.val());
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Process the response data
            console.log(data);
            console.log(data.meals.length);
            for (let i = 0; i < data.meals.length; i++) {
                // console.log(data.meals[i].strMealThumb);
                this.cartona += `<div class="card col-md-3 g-1">
                <img src="${data.meals[i].strMealThumb}" alt="">
        
                </div>`
            }
            document.querySelector("#searchLetRow").innerHTM = '';
            parent.innerHTML = null
            $("#searchLetRow").empty()
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            const container = document.querySelector('#searchLetRow');
            removeAllChildNodes(container);
            document.querySelector("#searchLetRow").innerHTML = this.cartona
            // this.Data=data;
            this.cartona=''
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // this.Data=0
        }
    }
    disp() {
        console.log(this.Data)
    }

}

export { SearchName };
