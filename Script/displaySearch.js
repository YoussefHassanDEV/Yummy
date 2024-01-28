class dispSearch {
    constructor(search,SearchButtons) {
        this.search = $(search)
        this.search.on("click", () => this.disp());
        this.flag=0
    }
    disp() {
        if (this.flag === 0) {
            this.flag=1
            $("#SearchButtons").slideUp(1000)
            $("#Area").slideUp("1000")
            $("#Home").show(1000)  
            $('#Categ').slideUp(1000);
            $("#SearchButtons").addClass("d-none")
            $("#SearchButtons").removeClass("d-block")


        }
        else
        {
            $("#SearchButtons").addClass("d-block")
            $("#SearchButtons").removeClass("d-none")

            this.flag=0
            $("#Home").fadeOut(1000)  
            $('#Categ').fadeOut();

        }
    }
}
export {dispSearch}