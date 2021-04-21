(function () {
	
	// Fotky - Slider 
	
	var primarySliderElement = document.querySelector( '#photo__slider--primary' );
	var secondarySliderElement = document.querySelector( '#photo__slider--secondary' );
	
	if (typeof(secondarySliderElement) != 'undefined' && secondarySliderElement != null) {
		var primarySlider, secondarySlider;
		
		secondarySlider = new Splide( '#photo__slider--secondary', {
			fixedWidth: 100, 
			height: 67, 
			gap: 8, 
			rewind: true, 
			cover: true, 
			isNavigation: true,
			arrows: false, 
			pagination: false, 
			breakpoints: {
				1024: {
					gap: 4, 
				},
				767: {
					fixedWidth: 66, 
					height: 44, 
				},
			},
		} );
		
		secondarySlider.mount();
		
		if (typeof(primarySliderElement) != 'undefined' && primarySliderElement != null) {
			primarySlider = new Splide( '#photo__slider--primary', {
				type: 'fade', 
				heightRatio: 0.67, 
				cover: true, 
				pagination: false, 
			} );
			
			primarySlider.sync( secondarySlider ).mount();
		}
	}
	
	// Recenzie - Slider
	
	var testimonialsSliderElement = document.querySelector( '.testimonials__slider' );
	
	if (typeof(testimonialsSliderElement) != 'undefined' && testimonialsSliderElement != null) {
		var testimonialsSlider;
		
		testimonialsSlider = new Splide( '.testimonials__slider', {
			type: 'loop', 
			perPage: 2, 
			perMove: 1, 
			pagination: false, 
			focus: 'center', 
			breakpoints: {
				1024: {
					perPage: 1,
				},
			},
		} );
		
		testimonialsSlider.mount();
	}
	
})();
