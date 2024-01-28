class ToggleWidth {
    constructor(navId, settingId,content) {
        this.nav = $(navId);
        this.setting = $(settingId);
        this.boolTog = 0;
        this.content=$(content)
        // Event listener for the setting element
        this.setting.on("click", () => this.toggleWidth());
    }

    toggleWidth() {
        if (this.boolTog === 0) {
            this.boolTog = 1;
            this.nav.animate({left:"-13%"},1000)
            this.content.fadeOut(1500)
        } else {

            this.nav.animate({left:"0"},1000)
            this.content.show(1500)


            this.boolTog = 0;
        }
    }
}

export { ToggleWidth };
