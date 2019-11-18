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
	    	tag: 'Systems architecture',
	    }, {
			tag: 'Dev-Ops',
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
				'Elixir': null,
				'Ruby on Rails': null
	    	},
	    	limit: Infinity,
	    	minLength: 1,
	    },
	});

});

$("#desc").typeIt({
	strings: ["Austin."],
	speed: 50,
	breakLines: false,
	lifeLike: true,
});
