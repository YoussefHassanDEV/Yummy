class DispAreasett {
    constructor(search, SearchButtons) {
        this.search = $(search)
        this.search.on("click", () => this.disp());
        this.flag = 0
    }
    disp() {
        if (this.flag === 0) {
            this.flag = 1

            $("#Area").addClass("d-none")
            $("#Area").removeClass("d-block")
            $("#Home").show(500)
            $("#Categ").fadeOut(500)
        }
        else {
            this.flag = 0
            $("#Area").addClass("d-block")
            $("#Area").removeClass("d-none")
            $("#SearchButtons").fadeOut(500)
            $("#Home").fadeOut(500)
            $("#Categ").fadeOut(500)
        }
    }
}
export { DispAreasett }