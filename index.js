var window = window;

var canvas = window.document.createElement('canvas');

var context = canvas.getContext('2d');

var game =
{
	canvas:
	{
		resize: function()
		{
			canvas.height = window.innerHeight;
			canvas.width = window.innerWidth;
		}
	},

	draw: function(object)
	{
		context.drawImage(object, canvas.width/2 - object.width/2, canvas.height/2 - object.height/2, object.width, object.height);
	},

	image: function(src)
	{
		var image = new Image();
			image.src = src;
		return image;
	},

	images: {},

	load: function(objects)
	{
		for(var i = 0; i < objects.length; i++)
		{
			var image = new Image();
				image.src = objects[i].src;
			game.images[objects[i].name] = image;
		};
	},

	mode: 'menu',

	ready: function()
	{
		game.canvas.resize();
	},

	resources:
	{
		images:
		[
			{name: 'selector', src: 'selector.png'}
		]
	},

	show: function()
	{
		game.draw(game.images.selector);
	},

	update: function()
	{

	}
};

game.load(game.resources.images);

window.console.log(game.resources.images);

window.document.body.appendChild(canvas);

window.onload = function()
{
	game.ready();
	game.update();
	game.show();
};

window.onresize = function()
{
	game.ready();
	game.update();
	game.show();
};