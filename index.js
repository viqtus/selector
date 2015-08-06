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

	update: function()
	{
		
	}
};

window.document.body.appendChild(canvas);

window.onload = function()
{
	game.canvas.resize();
};

window.onresize = function()
{
	game.canvas.resize();
};