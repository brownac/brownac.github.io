$( document ).ready(function() {
	setTimeout(function() {
		$("#cam").fadeIn(3000).removeClass("hidden");
		$(".popout").fadeIn(5000).removeClass("hidden");
		$(".random-stuff").fadeIn(7000).removeClass("hidden");
	}, 1000);
	$('.chips-initial').material_chip({
	    data: [{
	      tag: 'Full-stack web development',
	    }, {
	      tag: 'UI/UX design',
	    }, {
	      tag: 'Big data analytics',
	    }, {
	    	tag: 'Systems administration'
	    }, {
	    	tag: 'Systems architecture'
	    }],
	    autocompleteOptions: {
	    	data: {
	    		'HTML': null, 
	    		'CSS': null, 
	    		'Javascript': null,
	    		'Java': null,
	    		'PHP': null,
	    		'React': null,
	    		'Meteor': null,
	    		'React Native': null,
	    	},
	    	limit: Infinity,
	    	minLength: 1,
	    },
	});

});

$("#desc").typeIt({
	strings: ["a developer","a cat person","a self-proclaimed chef","also a self-proclaimed photographer","an outdoors enthusiast","Austin."],
	speed: 100,
	breakLines: false,
	lifeLike: true,
});
