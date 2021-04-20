(function () {
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