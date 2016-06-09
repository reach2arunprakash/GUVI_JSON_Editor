function JSONModal() {
	
	this.Modal_data = {};
	this.setValue=function setValue(key,val){
		this.Modal_data[key] = val;        
	}
	
	
	this.getValue=function getValue(key){
		return this.Modal_data[key];
	}
	
	this.BindInputTag1 = function BindInputTag1(json_values){
		var key = json_values["key"];
		var inputtag = $("input[data-bind='"+ key +"']" );
		console.log(inputtag.val());
		inputtag.val(json_values["val"]);
	}
	
	
	this.setJSONModal = function setJSONModal(data){
		this.Modal_data = data;	
		
	$.each( this.Modal_data, function( key, val ) {
		var template_values = {};

		 template_values["key"] = key;
		 template_values["val"] = val;
		 
		this.BindInputTag1(template_values);

	 });

	}
	
	this.getJSONModal = function getJSONModal(data){
		return this.Modal_data;	
	}

}

/*
$('body').on('focusout', 'input.edit', function() {
		var key = $(this).data("bind-bind");
        var val = $(this).val();
		console.log(key);
		objJSON.setValue(key,val);
		console.log(objJSON.getValue(key));
	});


*/