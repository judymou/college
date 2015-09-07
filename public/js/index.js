function App() {
  var me = this;
  App.prototype.init = function() {
    $('#signup').on('click', function() {
      /*
      $.post('/signup', {name: 'judyclient', email: 'judy email', question: 'blah'},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
        });
      */
     var docHeight = $(document).height();
     var scrollTop = $(window).scrollTop();
     $('.overlay_bg').show().css({'height': docHeight});
     $('.popup').show().css({'top': scrollTop+50+'px'});
    });

    $('.close-btn, .overlay-bg').click(function() {
      $('.overlay-bg, .overlay-content').hide();
    });
  }
}
$(function() {
  window.app = new App();
  app.init();
});
