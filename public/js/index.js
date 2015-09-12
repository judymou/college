function App() {
  var me = this;
  App.prototype.init = function() {
    $('#signup').on('click', function() {
     var docHeight = $(document).height();
     var scrollTop = $(window).scrollTop();
     $('.overlay_bg').show().css({'height': docHeight});
     $('.popup').show().css({'top': scrollTop+50+'px'});
     $('.popup').show().css({'position': 'fixed'});
    });

    $('.close-popup, .overlay-bg').click(function() {
      $('.overlay-bg, .overlay-content').hide();
    });

    $('#send-message').on('click', function() {
      event.preventDefault();
      $.post('/signup', {name: $('#namepopup').val(), email: $('#emailpopup').val(), question: $('#messagepopup').val()},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
    });
    $('#send-message-footer').on('click', function() {
      event.preventDefault();
      $.post('/signup', {name: $('#name').val(), email: $('#email').val(), question: $('#message').val()},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
    });
  }
}
$(function() {
  window.app = new App();
  app.init();
});
