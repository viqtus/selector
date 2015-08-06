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

	draw: function()
	{

	},

	mode: 'menu',

	update: function()
	{

	}
};

var image = new Image();
	image.src = 'selector.png';

window.document.body.appendChild(canvas);

window.onload = function()
{
	game.canvas.resize();
	context.drawImage(image, canvas.width/2 - image.width/2, canvas.height/2 - image.height/2, image.width, image.height);
	context.scale(2, 2);
};

window.onresize = function()
{
	game.canvas.resize();
};