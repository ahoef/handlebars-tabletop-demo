
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   parseNumbers: true } );
});

function showInfo(data, tabletop) {
  var source   = $("#hp-template").html();
  var template = Handlebars.compile(source);

  var context = tabletop.sheets("Sheet1");

  var html    = template(context);
  $("#testing").append(html);

}
    