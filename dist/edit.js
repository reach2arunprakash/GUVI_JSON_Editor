function JSONModal() {
	
	this.Modal_data = {};
	this.setValue=function setValue(key,val){
	this.Modal_data[key] = val;
        
	}
	
	
	this.getValue=function getValue(key){
	return this.Modal_data[key];
        
	}
	
	this.setJSONModal = function setJSONModal(data){
		this.Modal_data = data;	
	}
	
	this.getJSONModal = function getJSONModal(data){
		return this.Modal_data;	
	}
	
}


$(document).ready(function(){

var objJSON = new JSONModal;

$.getJSON( "sample.json", function( data ) {
  var items = [];
   objJSON.setJSONModal(data);

  $.each( data, function( key, val ) {
	  var start = "<li><span class='display'>";
	  var end = "</span><input type='text' class='edit' style='display:none'  data-key ='";
	  var endli = "'>";
	  var li_elem = start + val + end + key + endli ;
	  console.log(li_elem);
    items.push( li_elem);
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
        var key = $(this).data("key");
		var val = $(this).val();
		
		
		$(this).hide().siblings(".display").show().text(val);
		alert(key);
		objJSON.setValue(key,val);
		alert(objJSON.getValue(key));
});

});


