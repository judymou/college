/*
	Transit by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: 'css/style.css',
				grid: { gutters: ['1.5em', 0] }
			},
			xlarge: {
				media: '(min-width: 1281px) and (max-width: 1680px)',
				href: 'css/style-xlarge.css'
			},
			large: {
				media: '(min-width: 981px) and (max-width: 1280px)',
				href: 'css/style-large.css'
			},
			mobile: {
				media: '(max-width: 980px)',
				href: 'css/style-mobile.css',
        containers: '90%!',
				grid: { gutters: ['1.25em', 0] }
			},
			medium: {
				media: '(min-width: 737px) and (max-width: 980px)',
				href: 'css/style-medium.css'
			},
			phone: {
				media: '(max-width: 736px)',
				href: 'css/style-phone.css'
			},
			small: {
				media: '(min-width: 481px) and (max-width: 736px)',
				href: 'css/style-small.css'
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: 'css/style-xsmall.css'
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navButton: {
					breakpoints: 'mobile',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				},
				navPanel: {
					animation: 'overlayX',
					breakpoints: 'mobile',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

	});

})(jQuery);
