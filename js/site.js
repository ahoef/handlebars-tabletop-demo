
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   parseNumbers: true } );
});

function showInfo(data, tabletop) {
	function setTemplate(template, gateway) {

		var source   = $('#' + template ).html(),
	  	 	template = Handlebars.compile(source),
			context = tabletop.sheets(gateway),
			html    = template(context);

	  	$('#' + gateway).append(html);
	}

	setTemplate('templateA', 'womens');
	setTemplate('templateB', 'mens');

}
    