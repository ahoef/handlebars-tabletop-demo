
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   parseNumbers: true } );
});

function showInfo(data, tabletop) {
	console.log(data);

	function setTemplate(gateway, templateVersion) {
		var template = Handlebars.templates[templateVersion],
			context = tabletop.sheets(gateway),
			html = template(context),
			$gwSelector = $('#' + gateway);

		$gwSelector.append(html);
		console.log($gwSelector.html());

	}

	Handlebars.registerHelper('yymmdd', function(options) {
		 return new Handlebars.SafeString('150316');
	});

	Handlebars.registerHelper('cmWeek', function(options) {
		 return new Handlebars.SafeString('WEEK_11');
	});


	///////////////////// these two need to passed in as params in setTemplate

	Handlebars.registerHelper('tagStyle', function(options) {
		 return new Handlebars.SafeString('dark');
		 // return new Handlebars.SafeString('light');
	});

	Handlebars.registerHelper('gateway', function(options) {
		 return new Handlebars.SafeString('_w');
	});

	/////////////////////////////////

	setTemplate('womens', 'gw-floated-layout');
	// setTemplate('mens','templateB');
	// setTemplate('apartment','templateA');

}





