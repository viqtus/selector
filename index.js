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

	cursor:
	{
		x: 0,
		y: 0
	},

	draw: function(object, x, y)
	{
		context.drawImage(object, x, y, object.width, object.height);
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

	objects:
	{
		button:
		{
			play:
			{
				active: function()
				{
					if
					(
						(game.cursor.x >= game.objects.button.play.x) &&
						(game.cursor.x < game.objects.button.play.x + game.objects.button.play.w) &&
						(game.cursor.y >= game.objects.button.play.y) &&
						(game.cursor.y < game.objects.button.play.y + game.objects.button.play.h)
					)
					{
						canvas.style.cursor = 'pointer';
						game.draw(game.images.play_active, game.objects.button.play.x, game.objects.button.play.y);
					}
					else
					{
						canvas.style.cursor = 'default';
						game.draw(game.images.play, game.objects.button.play.x, game.objects.button.play.y);
					};
				},
				h: 0,
				w: 0,
				x: 0,
				y: 0
			}
		},
	},

	ready: function()
	{
		game.canvas.resize();
	},

	resources:
	{
		images:
		[
			{name: 'play', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAoCAYAAAAIeF9DAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNvyMY98AAAE4SURBVGhD7dOxrcJAEIRhEldBQMV0QAXUQG+gSxAajfc8ZmRvMMEnPXGr38HoXZZliUboj3Ge7x/P1+0d58ggzWSQZv4a5P647jbrsXfVb08167F3Rr3PICtmPfbOqPe2Qdg7U93v6VX29Kp7d4/JIKC6d/eYDAKqe3ePySCgunf3mAwCqnt3j8kgoLp395gMAqp7d4/JIKC6d/eYDAKqe3ePySCgunf3GNsgqlmPvat+e6ojekwGWXFEj8kgK47oMbZB2LuqQ8/5/UHtZRDg/P6g9jIIcH5/UHsZBDi/P6i9DAKc3x/UXgYBzu8Pai+DAOf3B7XXdhDVrMfema09FesxGQRs7alYj8kgYGtPxXrMX4OEXwZphg7C/uXiGBmkmQzSTAZpJoM0QweJHuiPcR76Y5xluXwArPXDm9mpJgYAAAAASUVORK5CYII='},
			{name: 'play_active', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAoCAYAAAAIeF9DAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC42/Ixj3wAAATNJREFUaEPt0zGqw0AQg2E3vj85R4rcJFdK2CYEIc9atrCnUPHBIzv8LsRb1nWNRuiPcZ/fH6/38ol7ZJBmMkgzpwZ5PI+b9di76r+nmvXYO6PeZ5ANsx57Z9R72yDsnanuj/QqR3rVvbvHZBBQ3bt7TAYB1b27x2QQUN27e0wGAdW9u8dkEFDdu3tMBgHVvbvHZBBQ3bt7TAYB1b27x2QQUN27e4xtENWsx95V/z3VFT0mg2y4osdkkA1X9BjbIOxd1aHn/P6g9jIIcH5/UHsZBDi/P6i9DAKc3x/UXgYBzu8Pai+DAOf3B7WXQYDz+4PaazuIatZj78zenor1mAwC9vZUrMdkELC3p2I95tQg4ZdBmqGDsH+5uEYGaSaDNJNBmskgzdBBogf6Y9yH/hh3WZcvEuFbs9bMpEcAAAAASUVORK5CYII='},
			{name: 'selector', src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAACgCAMAAACrIC0OAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAzDA+zJIm+Mlu94qpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7F2kSgAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNvyMY98AAA9dSURBVHhe7d1Lii1LDkXB+s1/yq9Wwyiu4CUiwonKjltzS6HjJLuf//jrun7RLeD1q24Br191C3j9qlvA61fdAl6/6hbw+lW3gNevugW8ftUt4PWr/ijgfw44MRi94sRgFMEhx15xYjB6xYnVv/9HsPIDrzgxGB1yLLeArzgxGL3ixEr7Ilj5gVecGIwOOZZbwFecGIxecWKlfRGs/MArTgxGhxzLLeArTgxGrzix0r4IVn7gFScGo0OO5RbwFScGo1ecWGlfBCs/8IoTg9Ehx3IL+IoTg9ErTqy0L4KVH3jFicHokGO5BXzFicHoFSdW2hfByg+84sRgdMix3AK+4sRg9IoTK+2LYOUHXnFiMDrkWG4BX3FiMHrFiZX2RbDyA684MRgdciy3gK84MRi94sRK+yJY+YFXnBiMDjmWvy3gPx9zYnAslh5wYnAsgkOOxY8+4MTgWCw94MRK+yJYeVL81Mp6nBiMYv0BH8ax3ALGjz7gxOBYLD3gxEr7Ilh5UvzUynqcGIxi/QEfxrHcAsaPPuDE4FgsPeDESvsiWHlS/NTKepwYjGL9AR/GsdwCxo8+4MTgWCw94MRK+yJYeVL81Mp6nBiMYv0BH8ax3ALGjz7gxOBYLD3gxEr7Ilh5UvzUynqcGIxi/QEfxrHcAsaPPuDE4FgsPeDESvsiWHlS/NTKepwYjGL9AR/GsdwCxo8+4MTgWCw94MRK+yJYeVL81Mp6nBiMYv0BH8ax3ALGjz7gxOBYLD3gxEr7Ilh5UvzUynqcGIxi/QEfxrHcAsaPPuDE4FgsPeDESvsiWHlS/NTKepwYjGL9AR/GsdwCxo8+4MTgWCw94MRK+yJYeVL8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'}
		]
	},

	show: function()
	{
		var h, w, x, y;

		x = canvas.width/2 - game.images.selector.width/2;
		y = canvas.height/2 - game.images.selector.height*1.5
		game.draw(game.images.selector, x, y);

		h = game.images.play.height; game.objects.button.play.h = h;
		w = game.images.play.width; game.objects.button.play.w = w;
		x = canvas.width/2 - game.images.play.width/2; game.objects.button.play.x = x;
		y = canvas.height/2; game.objects.button.play.y = y;
		game.draw(game.images.play, x, y);
	},

	update: function()
	{

	}
};

/* load */

game.load(game.resources.images);

window.console.log(game.resources.images);

window.document.body.appendChild(canvas);

/* events */

window.onload = function()
{
	game.ready();
	game.update();
	game.show();
};

window.onmousemove = function(e)
{
	game.cursor.x = e.x;
	game.cursor.y = e.y;
	game.objects.button.play.active();
};

window.onresize = function()
{
	game.ready();
	game.update();
	game.show();
};