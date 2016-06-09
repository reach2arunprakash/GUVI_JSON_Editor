


$(document).ready(function(){

var objJSON = new JSONModal;

$.getJSON( "sample.json", function( data ) {
   objJSON.setJSONModal(data);
});



});
