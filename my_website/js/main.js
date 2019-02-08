
//initialize function called when the script loads
function myfunc(){
    var mydiv = document.getElementById("mydiv");
    mydiv.innerHTML = "Hello World!";
	var mydiv2 = document.getElementById("mydiv2");
};
window.onload = myfunc();

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

	addColumns(cityPop);
	addEvents();
}

function addColumns(cityPop){
   
    $('tr').each(function(i){
		
    	if (i == 0){
			
    		$(this).append('<th>City Size</th>');
    	} else {
		
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			
    		} else {
    			citySize = 'Large';
			};
			
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	$('table').mouseover(function(){
		
		var color = "rgb(";
		
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
		
		function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
})};
	;//call the initialize function when the document has loaded
	$(document).ready(initialize);