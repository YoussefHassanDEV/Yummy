class Loader {
  static fadeOutLoader() {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    $("#loader").fadeOut(3150, function() {
      body.style.overflowY = "visible";
    });
  }
}
export { Loader };
