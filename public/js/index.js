function App() {
  var me = this;

  App.prototype.init = function() {
    $('#signup').on('click', function() {
      $('#popupbg').show();
      $('.popup').show().css({'position': 'fixed'});
      me.track('Action', 'show signup modal');
    });

    $('#start-talking').on('click', function() {
      $('html, body').animate({
          scrollTop: $('#three').offset().top
      }, 1000);
      me.track('Action', 'start talking click');
    });

    $('.close-popup, .overlay-bg').click(function() {
      $('.overlay-bg, .overlay-content').hide();
    });

    $('#send-message').on('click', function() {
      event.preventDefault();
      if (!$('#namepopup').val() || !$('#emailpopup').val() || !$('#messagepopup').val()) {
        alert('Sorry, cannot sign you up. Some required information is missing.');
        return;
      }
      $.post('/signup',
             {name: $('#namepopup').val(), email: $('#emailpopup').val(),
              question: $('#messagepopup').val()},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
      me.track('Signup', 'main send message');
    });
    $('#send-message-footer').on('click', function() {
      event.preventDefault();
      if (!$('#name').val() || !$('#email').val() || !$('#message').val()) {
        alert('Sorry, cannot sign you up. Some required information is missing.');
        return;
      }
      $.post('/signup', {name: $('#name').val(), email: $('#email').val(), question: $('#message').val()},
        function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
      me.track('Signup', 'footer send message');
    });
  };

  App.prototype.track = function(action, eventString) {
    window.mixpanel.track(eventString);
    window.ga('send', 'event', 'Homepage', action, eventString);
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});
