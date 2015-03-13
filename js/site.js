
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15TiT4TZNLBzzFs5fRuk0XGYAQw3zqIt7LarB3EGpvag/pubhtml';

  $(document).ready( function() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     parseNumbers: true } );
  });

  function showInfo(data, tabletop) {
    var source   = $("#hp-template").html();
    var template = Handlebars.compile(source);
    // console.log(data);

    var mySheet = tabletop.sheets("Sheet1");
    console.log(mySheet);

    // $.each( tabletop.sheets("Sheet1").all(), function(i, cat) {
    //   var html = template(cat);
    //   $("#testing").append(html);
    // });



    var context = {title: "My New Post", body: "This is my first post!"};
    var html    = template(context);
    $("#testing").append(html);
  }
    