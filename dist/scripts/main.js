(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playerTemplate'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " wears the number "
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + " on his jersey and is from "
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + " and is a "
    + escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + ". He plays at "
    + escapeExpression(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"position","hash":{},"data":data}) : helper)))
    + " and weighs "
    + escapeExpression(((helper = (helper = helpers.weight || (depth0 != null ? depth0.weight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"weight","hash":{},"data":data}) : helper)))
    + " lbs. and measures at "
    + escapeExpression(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"height","hash":{},"data":data}) : helper)))
    + " in height.</li>";
},"useData":true});
})();
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

var Players = [benDurand, jeremyJohnson, tuckerTuberville, jonathanWallace, seanWhite];



var playerTemplateFunction = Handlebars.templates['playerTemplate'];

Players.forEach(function(x){
	var playerHTML = playerTemplateFunction(x);
	$('.hero-unit ul').append(playerHTML);
});
// var playerHTML = playerTemplateFunction(x);


// $('.hero-unit ul').append(playerHTML);