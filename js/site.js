
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

	setTemplate('womens', 'womens-test');
	setTemplate('mens','templateB');
	setTemplate('apartment','templateA');

}

