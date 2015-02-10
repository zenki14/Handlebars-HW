// (function() {
//   var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
// templates['animalTemplate'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
//   var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
//   return "<p>My favorite animal is a "
//     + escapeExpression(((helper = (helper = helpers.animal || (depth0 != null ? depth0.animal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"animal","hash":{},"data":data}) : helper)))
//     + "</p>";
// },"useData":true});
// templates['personTemplate'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
//   var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
//   return "  <li>Hi, I am "
//     + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
//     + " from "
//     + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
//     + " and I am "
//     + escapeExpression(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"age","hash":{},"data":data}) : helper)))
//     + " years old.</li>";
// },"useData":true});
// })();