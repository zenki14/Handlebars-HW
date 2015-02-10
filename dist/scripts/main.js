var person = {
	name: 'Tim',
	age: 31,
	location: "Atlanta",
	animal: "Sloth"
}



var personTemplateFunction = Handlebars.templates['personTemplate'];
var animalTemplateFunction = Handlebars.templates['animalTemplate'];

var renderHTML = personTemplateFunction(person);
var animalHTML = animalTemplateFunction(person);

$('.hero-unit ul').html(personHTML).after(animalHTML);