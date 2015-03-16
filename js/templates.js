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
templates['templateB'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"template-b\">\n<h5>Sixth Module: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['5'] : stack1)) != null ? stack1.Module : stack1), depth0))
    + "</h5>\n<a href=\"http://www.urbanoutfitters.com/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['5'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\">Sixth Module's Link</a>\n</div>\n";
},"useData":true});
templates['womens-test'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "	<section class=\"this-week-section addcm\" data-cm-module=\"TW_FEATURES\">\n		<div class=\"box box1\">\n			<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_2\">\n				<picture>\n					<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n					<source srcset=\"/urban/images/marketing/150316/_w/1.jpg\" media=\"(min-width: 641px)\" >\n						<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_1m.jpg\" >\n							<img srcset=\"/urban/images/marketing/150316/_w/1.jpg\" alt=\"\">\n							<!--[if lte IE 9]></video><![endif]-->\n		            <!--[if lte IE 9]>\n		            <img src=\"/urban/images/marketing/150316/_w/1.jpg\" alt=\"\">\n		            <![endif]-->\n		        </picture>\n		    </a>\n		    <div class=\"shoptags\">\n		    	<span class=\"shop first\">\n		    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_2\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n		    	</span>\n		    </div>\n		</div>\n\n		<div class=\"box box2\">\n			<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_3\">\n				<picture>\n					<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n					<source srcset=\"/urban/images/marketing/150316/_w/2.jpg\" media=\"(min-width: 641px)\" >\n						<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_2m.jpg\" >\n							<img srcset=\"/urban/images/marketing/150316/_w/2.jpg\" alt=\"\">\n							<!--[if lte IE 9]></video><![endif]-->\n		            <!--[if lte IE 9]>\n		            <img src=\"http://www.urbanoutfitters.com/urban/images/marketing/150316/_w/2.jpg\" alt=\"\">\n		            <![endif]-->\n		        </picture>\n		    </a>\n		    <div class=\"shoptags\">\n		    	<span class=\"shop first\">\n		    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_3\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n		    	</span>\n		    </div>\n		</div>\n		<div class=\"box box3\">\n			<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_4\">\n				<picture>\n					<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n					<source srcset=\"/urban/images/marketing/150316/_w/3.jpg\" media=\"(min-width: 641px)\" >\n						<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_3m.jpg\" >\n							<img srcset=\"/urban/images/marketing/150316/_w/3.jpg\" alt=\"\">\n							<!--[if lte IE 9]></video><![endif]-->\n		            <!--[if lte IE 9]>\n		            <img src=\"http://www.urbanoutfitters.com/urban/images/marketing/150316/_w/3.jpg\" alt=\"\">\n		            <![endif]-->\n		        </picture>\n		    </a>\n		    <div class=\"shoptags\">\n		    	<span class=\"shop first\">\n		    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_4\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['2'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n		    	</span>\n		    </div>\n		</div>\n\n		<div class=\"box box4\">\n			<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['3'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_5\">\n				<picture>\n					<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n					<source srcset=\"/urban/images/marketing/150316/_w/4.jpg\" media=\"(min-width: 641px)\" >\n						<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_4m.jpg\" >\n							<img srcset=\"/urban/images/marketing/150316/_w/4.jpg\" alt=\"\">\n							<!--[if lte IE 9]></video><![endif]-->\n		            <!--[if lte IE 9]>\n		            <img src=\"http://www.urbanoutfitters.com/urban/images/marketing/150316/_w/4.jpg\" alt=\"\">\n		            <![endif]-->\n		        </picture>\n		    </a>\n		    <div class=\"shoptags\">\n		    	<span class=\"shop first\">\n		    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['3'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_5\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['3'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n		    	</span>\n		    </div>\n		</div>\n		<div class=\"box box5\">\n			<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['4'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_6\">\n				<picture>\n					<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n					<source srcset=\"/urban/images/marketing/150316/_w/5.jpg\" media=\"(min-width: 641px)\" >\n						<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_5m.jpg\" >\n							<img srcset=\"/urban/images/marketing/150316/_w/5.jpg\" alt=\"\">\n							<!--[if lte IE 9]></video><![endif]-->\n			            <!--[if lte IE 9]>\n			            <img src=\"http://www.urbanoutfitters.com/urban/images/marketing/150316/_w/5.jpg\" alt=\"\">\n			            <![endif]-->\n			        </picture>\n			    </a>\n			    <div class=\"shoptags\">\n			    	<span class=\"shop first\">\n			    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['4'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_6\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['4'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n			    	</span>\n			    </div>\n			</div>\n\n			<!-- LOAD MORE BUTTON -->\n			<div class=\"btn-loadmore\">\n				<button>Load More</button>\n			</div>\n			<!-- LOAD MORE BUTTON -->\n\n			<div class=\"load-container\">\n				<!-- ONE PICTUREFILL MODULE AT THE TOP OF THE \"LOAD MORE\" SECTION-->\n\n				<div class=\"box box6\">\n					<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['5'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_7\">\n						<picture>\n							<!--[if lte IE 9]><video style=\"display: none;\"><![endif]-->\n							<source srcset=\"/urban/images/marketing/150316/_w/6.jpg\" media=\"(min-width: 641px)\" >\n								<source srcset=\"/urban/images/marketing/150316/mobile/_w/w_6m.jpg\" >\n									<img srcset=\"/urban/images/marketing/150316/_w/6.jpg\" alt=\"\">\n									<!--[if lte IE 9]></video><![endif]-->\n			            <!--[if lte IE 9]>\n			            <img src=\"http://www.urbanoutfitters.com/urban/images/marketing/150316/_w/6.jpg\" alt=\"\">\n			            <![endif]-->\n			        </picture>\n			    </a>\n			    <div class=\"shoptags\">\n			    	<span class=\"shop first\">\n			    		<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['5'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_7\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['5'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n			    	</span>\n			    </div>\n			</div>\n\n\n			<!-- LAZY LOADING STARTS HERE -->\n			\n\n			<div class=\"box box6\">\n				<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['6'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_8\">\n					<img src=\"//www.urbanoutfitters.com/images/white.gif\"\n					class=\"img-lazyload\"\n					data-mobile=\"/urban/images/marketing/150316/mobile/_w/w_7m.jpg\"\n					data-desktop=\"/urban/images/marketing/150316/_w/7.jpg\"/>\n				</a>\n				<div class=\"shoptags\">\n					<span class=\"shop first\">\n						<a href=\"/urban/catalog/category.jsp?id="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['6'] : stack1)) != null ? stack1.CAT1 : stack1), depth0))
    + "\" data-cm-position=\"WEEK_11_POSITION_8\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.elements : depth0)) != null ? stack1['6'] : stack1)) != null ? stack1.TAG1 : stack1), depth0))
    + "</a>\n					</span>\n				</div>\n			</div>\n\n\n		</section>";
},"useData":true});
})();
