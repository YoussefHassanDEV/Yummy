class Dispcatsett {
    constructor(search,SearchButtons) {
        this.search = $(search)
        this.search.on("click", () => this.disp());
        this.flag=0
    }
    disp() {
        if (this.flag === 0) {
            this.flag=1
 
            $("#Area").addClass("d-none")
            $("#Area").removeClass("d-block")

            $("#Home").show(500)  
            $("#Categ").fadeOut(500) 
        }
        else
        {
            $("#Area").addClass("d-none")
            $("#Area").removeClass("d-block")
            this.flag=0
            $("#Categ").show(500)  
            $("#SearchButtons").fadeOut(500)  
            $("#Home").fadeOut(500) 

        }
    }
}
export {Dispcatsett}