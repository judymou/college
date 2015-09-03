function App() {
  var me = this;
  App.prototype.init = function() {
    $('#signup').on('click', function() {
      $.post('/signup', {name: 'judyclient', email: 'judy email', question: 'blah'},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
        });
    });
  }
}
$(function() {
  window.app = new App();
  app.init();
});
