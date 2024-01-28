class ingrdsSet {
    constructor(search) {
        this.search = $(search)
        this.search.on("click", () => this.disp());
        this.flag = 0
    }
    disp() {
        if (this.flag === 0) {
            this.flag = 1

            $("#ingredients1").addClass("d-none")
            $("#ingredients1").removeClass("d-block")
            $("#Home").show(500)
            $("#Area").fadeOut(500)
            $("#Categ").fadeOut(500)
            $("#Area").slideUp("1000")

        }
        else {
            this.flag = 0
            $("#ingredients1").addClass("d-block")
            $("#ingredients1").removeClass("d-none")
            $("#SearchButtons").fadeOut(500)
            $("#Home").fadeOut(500)
            $("#Categ").fadeOut(500)
            $("#Area").fadeOut(500)

        }
    }
}
export { ingrdsSet }