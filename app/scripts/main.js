// var player = {
// 	name: "name",
// 	age: 00,
// 	location: "Atlanta",
// 	position: "Sloth",
// 	height: "6'1"
// 	weight: "200"

// }

var Player = function(options) {
	var args = options || {};

	this.name = args.name;
	this.class = args.class;
	this.location = args.location;
	this.position = args.position;
	this.height = args.height;
	this.weight = args.weight;
	this.number = args.number;
}

var benDurand = new Player({
	name: "Ben Durand",
	class: "Senior",
	location: "Tyngsboro, MA",
	position: "QB",
	height: "6'3",
	weight: "205",
	number: "17"
});

var jeremyJohnson = new Player({
	name: "Jeremy Johnson",
	class: "Junior",
	location: "Montgomery, AL",
	position: "QB",
	height: "6'5",
	weight:"230",
	number: "6"
});

var tuckerTuberville = new Player({
	name: "Tucker Tuberville",
	class: "Junior",
	location: "Wolfforth, TX",
	position: "QB",
	height: "6'0",
	weight:"180",
	number: "16"
});

var jonathanWallace = new Player({
	name: "Jonathan Wallace",
	class: "Senior",
	location: "Phenix City, AL",
	position: "QB",
	height: "6'2",
	weight:"207",
	number: "12"
});

var seanWhite = new Player({
	name: "Sean White",
	class: "Sophomore",
	location: "Hollywood, FL",
	position: "QB",
	height: "6'0",
	weight:"200",
	number: "13"
});





var playerTemplateFunction = Handlebars.templates['playerTemplate'];

var playerHTML = playerTemplateFunction(person);

$('.hero-unit ul').html(playerHTML);