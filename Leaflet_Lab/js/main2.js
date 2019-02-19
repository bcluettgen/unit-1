function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log(mydata);
        }
    });

    //check the data
    console.log(mydata);
};

function debugCallback(response){
	var mydata;
	$(mydiv).append('<br>GeoJSON data: </br>' + JSON.stringify(mydata));
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			console.log(mydata);
			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
	$(mydiv).append('<br>GeoJSON data: </br>' + JSON.stringify(mydata));
};

$(document).ready(jQueryAjax)