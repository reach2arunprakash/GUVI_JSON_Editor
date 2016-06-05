


$.getJSON( "sample.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
	  var start = "<li><span class=\"test display\">"
	  var end = "</span><input type=\"text\" class=\"edit\" style=\"display:none\"/></li>"
    items.push( start + val + end );
  });
 
  $( "<ul/>", {
    "class": "none",
    html: items.join( "" )
  }).appendTo( "body" );
});


$('body').on('click', 'span.display', function() {
        $(this).hide().siblings(".edit").show().val($(this).text()).focus();
});


$('body').on('focusout', 'input.edit', function() {
        $(this).hide().siblings(".display").show().text($(this).val());
});

