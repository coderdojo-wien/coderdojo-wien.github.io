---
---

(function($, window, document) {
    $(function() {
        var $window = $(window);
		'use strict';
		
		window.addEventListener("load", function () {
			window.cookieconsent.initialise({
				"palette": {
					"popup": {
						"background": "#000000",
						"text": "#ffffff"
					},
					"button": {
						"background": "#dc0102"
					}
				},
				"theme": "false",
				"content": {
					"message": "{{ site.data.cookie-consent.message }}",
					"link": "{{ site.data.cookie-consent.more-info-message }}",
					"href": "{{ site.data.cookie-consent.more-info-url }}",
					"dismiss": "{{ site.data.cookie-consent.dismiss-button-text }}"
				}
			})
		});
		
    });

}(window.jQuery, window, document));