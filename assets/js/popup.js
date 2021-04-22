
var TogglePopup = (function () {
	
	var DOM = {};

	function cacheDom() {
		DOM.popupTriggers = document.querySelectorAll('.open__popup');
		DOM.popupCloseBtns = document.querySelectorAll('.popup__close');
	}

	function bindEvents() {
		if (DOM.popupTriggers.length) {
			for (var i = 0; i < DOM.popupTriggers.length; i++) {
				DOM.popupTriggers[i].addEventListener('click', function (e) {
					e.preventDefault();
					
					var popup = this.getAttribute('data-popup');
					toggleModule(document.querySelector('#' + popup));
				});
			}
		}
		if (DOM.popupCloseBtns.length) {
			for (var i = 0; i < DOM.popupCloseBtns.length; i++) {
				DOM.popupCloseBtns[i].addEventListener('click', function (e) {
					e.preventDefault();
					
					var popup = this.closest('.popup');
					closeModule(popup);
				});
			}
		}
	}
	
	function toggleModule(element) {
		var isClosed = element.getAttribute('data-toggle') === 'true';

		closeModule(element);

		if (isClosed) {
			openModule(element);
		}
	}
	
	function closeModule(element) {
		element.classList.remove('opened');
		element.setAttribute('data-toggle', 'true');
	}

	function openModule(element) {
		element.classList.add('opened');
		element.setAttribute('data-toggle', 'false');
	}
	
	function init() {
		cacheDom();
		bindEvents();
	}

	return {
		init: init
	};
	
}());

(function () {

	TogglePopup.init();

})();