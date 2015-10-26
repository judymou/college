function App() {
  App.prototype.init = function() {
    $('#signup').on('click', function() {
     var docHeight = $(document).height();
     var scrollTop = $(window).scrollTop();
     $('.overlay_bg').show().css({'height': docHeight});
     $('.popup').show().css({'top': scrollTop+50+'px'});
     $('.popup').show().css({'position': 'fixed'});
    });

    $('#start-talking').on('click', function() {
      $('html, body').animate({
          scrollTop: $('#three').offset().top
      }, 1000);
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
    });
  };

  App.prototype._signUp = function() {
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});
