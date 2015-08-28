function App() {
  var me = this;
  App.prototype.init = function() {
    /*
    $('.bxslider').bxSlider({
      auto: true,
      captions: true,
      mode: 'fade'
    });
    */
  }
}
$(function() {
  window.app = new App();
  app.init();
});
