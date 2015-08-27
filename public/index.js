function App() {
  var me = this;
  App.prototype.init = function() {
    console.log("hiiiii");
    $('.temp').html("hello judy");
  }
}
$(function() {
  window.app = new App();
  app.init();
});
