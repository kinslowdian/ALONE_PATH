// DEBUG
var trace = function(msg){ console.log(msg); };

var pathEXP;

function pageLoad_init()
{
	trace("pageLoad_init();");

	pathEXP = {};


	path_init();
}

function path_init()
{
	var path = anime.path('#MAIN path');

	var motionPath1 = anime({
	targets: ['.obj'],
	translateX: path('x'),
	translateY: path('y'),
	// rotate: path('angle'),
	easing: 'easeInSine',
	duration: 6000,
	loop: false
	});

	var motionPath2 = anime({
	targets: ['.ext'],
	translateX: path('x'),
	translateY: path('y'),
	// rotate: path('angle'),
	easing: 'easeInSine',
	duration: 8000,
	loop: false
	});
}

