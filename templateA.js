(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['templateA'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"template-a\">\n<h3>First Module: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.Module : stack1), depth0))
    + "</h3>\n<a href=\"http://www.urbanoutfitters.com/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\">First Link</a>\n</div>\n";
},"useData":true});
})();
