class Dispcatsett {
    constructor(search,SearchButtons) {
        this.search = $(search)
        this.search.on("click", () => this.disp());
        this.flag=0
    }
    disp() {
        if (this.flag === 0) {
            this.flag=1
 

            $("#Home").show(500)  
            $("#Categ").fadeOut(500) 
        }
        else
        {
            this.flag=0
            $("#Categ").show(500)  
            $("#SearchButtons").fadeOut(500)  
            $("#Home").fadeOut(500) 
        }
    }
}
export {Dispcatsett}