
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   parseNumbers: true } );
});


function showInfo(data, tabletop) {
	console.log(data);

	function setTemplate(gateway, templateVersion, yymmdd, cmWeek, tagStyle) {

		var template = Handlebars.templates[templateVersion],
			context = tabletop.sheets(gateway),
			weeklyInfo = {yymmdd: yymmdd, cmWeek: cmWeek, tagStyle: tagStyle, gateway: gateway},
			newContext = $.extend({}, context, weeklyInfo),
			html = template(newContext),
			$gwSelector = $('#' + gateway);

		$gwSelector.append(html);
		console.log($gwSelector.html());

	}

	setTemplate('us-womens', 'gw-floated-layout', '150316', 'WEEK_11', 'light');
	setTemplate('us-mens', 'column-layout', '150316', 'WEEK_11', 'dark');
	setTemplate('hp','hp-floated-layout', '150316');

}





