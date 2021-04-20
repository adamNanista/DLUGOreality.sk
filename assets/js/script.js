(function () {
	
	// Fotky - Slider 
	
	var primarySlider = new Splide( '#photo__slider--primary', {
		type: 'fade', 
		heightRatio: 0.67, 
		cover: true, 
		pagination: false, 
	} );
	
	var secondarySlider = new Splide( '#photo__slider--secondary', {
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
	} ).mount();
	
	primarySlider.sync( secondarySlider ).mount();
	
	// Recenzie - Slider
	
	new Splide( '.testimonials__slider', {
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
	} ).mount();
	
})();
