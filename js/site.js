
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   parseNumbers: true } );
});

function showInfo(data, tabletop) {
	console.log(data);

	function setTemplate(gateway, templateVersion, date) {
		var template = Handlebars.templates[templateVersion],
			context = tabletop.sheets(gateway),
			html = template(context),
			$gwSelector = $('#' + gateway);

		$gwSelector.append(html);
		console.log($gwSelector.html());

		Handlebars.registerHelper('date', function(options) {
			console.log(date);
		});

	}

	setTemplate('womens', 'womens-test', '150316');
	// setTemplate('mens','templateB');
	// setTemplate('apartment','templateA');

}



