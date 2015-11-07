function App() {
  var me = this;

  App.prototype.init = function() {
    $('#signup').on('click', function(e) {
      e.preventDefault();
      $('#popupbg').show();
      $('.popup').show().css({'position': 'fixed'});
      me.track('Action', 'show signup modal');
    });

    $('#start-talking').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('#three').offset().top
      }, 1000);
      me.track('Action', 'start talking click');
    });

    $('.close-popup, .overlay-bg').on('click', function() {
      $('.overlay-bg, .overlay-content').hide();
    });

    $('#send-message').on('click', function(e) {
      e.preventDefault();
      var signupData = {name: $('#namepopup').val(), email: $('#emailpopup').val(),
              question: $('#messagepopup').val()};
      if (!signupData.name || !signupData.email || !signupData.question) {
        alert('Sorry, cannot sign you up. Some required information is missing.');
        return;
      }
      $.post('/signup', signupData, function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
      me.track('Signup', 'main send message', signupData);
    });

    $('#send-message-footer').on('click', function(e) {
      e.preventDefault();
      var signupData = {name: $('#name').val(), email: $('#email').val(), question: $('#message').val()};
      if (!signupData.name || !signupData.email || !signupData.question) {
        alert('Sorry, cannot sign you up. Some required information is missing.');
        return;
      }
      $.post('/signup', signupData, function(data) {
          if (data.success) {
            alert('Thank you for signing up.');
          } else {
            alert('Sorry, cannot sign you up. Please come back later.');
          }
          $('.overlay-bg, .overlay-content').hide();
        });
      me.track('Signup', 'footer send message', signupData);
    });
  };

  App.prototype.track = function(action, eventString, data) {
    window.mixpanel.track(eventString, data);
    window.ga('send', 'event', 'Homepage', action, eventString);
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});
