//* paypal
simpleCart({
  checkout: {
    type: "PayPal",
    email: "you@yours.com"
  }
});

//* Añadir el dropdown en el header
jQuery(document).ready(function () {
  $('.showCart').on('click', function () {
    $('#cartPopover').slideToggle('fast');
    $('.showCart span.dropdown').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
  })
});

var googleSheetURI = 'https://docs.google.com/spreadsheets/d/11BNDZeQ4nqwVA-BYViMeM1QfWBtqJT-hqKpc6hh22aM/edit#gid=0';


var HRTemplate = Handlebars.compile($('#hr-template').html());

//* Cargar los productos
$('#products').sheetrock({
  url: googleSheetURI,
  query: "select A,B,C,D,E",
  rowTemplate: HRTemplate
});
