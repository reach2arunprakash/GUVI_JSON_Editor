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

function templateEngine(template,json_values)
{
	var template_substuited = template;
	for(var key in json_values)
	{
		var template_string = "%" + key + "%";
		alert(template_string);
		template_substuited = template_substuited.replace(new RegExp(template_string,'gi'),json_values[key]);
		alert(template_substuited);
	}
	return template_substuited;
}

function getliTemplate()
{
	return "<li style='list-style:none'><span class='display'>%val%</span><input type='text' class='edit' style='display:none' data-bind ='%key%'>";
	
}

$(document).ready(function(){

var objJSON = new JSONModal;

$.getJSON( "sample.json", function( data ) {
  var items = [];
   objJSON.setJSONModal(data);

  $.each( data, function( key, val ) {
	  var template_values = {};
	  template_values["key"] = key;
	  template_values["val"] = val;
	 // var templatestr = "test";
	  var li_template = getliTemplate();
	
	  
	  var template_substuited = templateEngine(li_template,template_values);
	  /*
	  var start = "<li style='list-style:none'><span class='display'>";
	  var end = "</span><input type='text' class='edit' style='display:none'  data-bind ='";
	  var endli = "'>";
	  
	  
	  
	
	  var li_elem = start + val + end + key + endli ;*/
	  console.log(template_substuited);
    items.push( template_substuited);
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
        var key = $(this).data("bind");
		var val = $(this).val();
		
		
		$(this).hide().siblings(".display").show().text(val);
		alert(key);
		objJSON.setValue(key,val);
		alert(objJSON.getValue(key));
});

});
