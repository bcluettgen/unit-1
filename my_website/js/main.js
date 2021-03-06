

function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'New York',
			population: 8622698
		},
		{
			city: 'Los Angeles',
			population: 3999759
		},
		{
			city: 'Chicago',
			population: 2716450
		},
		{
			city: 'Houston',
			population: 2312717
		}
	];
	//append the table element to the div
	$("#mydiv2").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
	for (var i = 0; i < cityPop.length; i++){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		$("table").append(rowHtml);
	};
	//get the div id
	var theid = $('#mydiv2').attr('id');

	//theid is 'mydiv2'; add it as text to the div
	$('#mydiv2').append(theid);

	//add the class 'foo' to the div
	$('#mydiv2').attr('class', 'foo');
	//change the text color
	$('#mydiv2').css('color', 'red');

	//change the text size and alignment
	$('#mydiv2').css({
		'font-size': '2em',
		'text-align': 'left'
	});

	//get the text color and add it as text to the div
	var thecolor = $('#mydiv2').css('color');
	$('#mydiv2').append(thecolor);
//Added below Example 3.8...
    //click listener with anonymous handler function
    $('table').on('click', function(){
        alert('Welcome to the concrete jungle!');
    });

    //alias method for the click event listener
    $('table').click(function(){
        alert('Good luck trying to get through me!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('California gurls were unforgettable');
    };

    //add the event listener
    $('table').on('click', clickme);
	//
	addColumns(cityPop);
	addEvents();
	debugAjax();

}

function addColumns(cityPop){
   
    $('tr').each(function(i){
		//add the header when i = 0
    	if (i == 0){
			
    		$(this).append('<th>City Size</th>');
    	} else {
		
    		var citySize;
			//show size of city based on if population falls into one of three ranges.
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			
    		} else {
    			citySize = 'Large';
			};
			//append the city size based after it runs through if statements.
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	//create mousover function over table
	$('table').mouseover(function(){
		
		var color = "rgb(";
		//for loop creates creates random colors and places html syntax
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		$(this).css('color', color);
	};
		//add a click function
		function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
})};
//add introductory string to the webpage
function debugCallback(mydata){
	
	$('#mydiv').append('GeoJSON data: ' + JSON.stringify(mydata));
};
//function calls data from megacities.geojson and lists out all attributes, by assigning response to a mydata variable.
function debugAjax(){
	
	var mydata;
//
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			mydata=response;
			debugCallback(mydata);
		}
	});
};


;//call the initialize function when the document has loaded
$(document).ready(initialize);