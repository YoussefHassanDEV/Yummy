class ToggleWidth {
    constructor(navId, settingId) {
        this.nav = $(navId);
        this.setting = $(settingId);
        this.boolTog = 0;

        // Event listener for the setting element
        this.setting.on("click", () => this.toggleWidth());
    }

    toggleWidth() {
        if (this.boolTog === 0) {
            this.boolTog = 1;
            this.nav.animate({ width: "0%" }, 2000);
            this.setting.animate({left:"0"},2000)
        } else {
            this.nav.animate({ width: "16%" }, 2000);
            this.setting.animate({left:"100%"},2000)

            this.boolTog = 0;
        }
    }
}

export { ToggleWidth };
