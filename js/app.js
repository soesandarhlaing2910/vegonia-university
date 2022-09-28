// Start Jquery Area

$(document).ready(function(){

// Start Header
	// start navbar

	$(".navbuttons").click(function(){
		$(this).toggleClass('crossxs');
	})


	// end navbar
// End Header


});

// End jQuery Area


// Start Javascript Area
	// Start Student Counter Section

var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){

	getcountervalue.textContent = 0;

	// console.log(getcountervalue);

const updatecounter = function(){
	// console.log("i am working");

	const getcountertarget = +getcountervalue.getAttribute('data-target');
	// console.log(getcountertarget);
	// console.log(typeof getcountertarget);


	const getcontent = +getcountervalue.innerText;
	console.log(getcontent, typeof getcontent);

	const incnumber =  getcountertarget /100;
	console.log(incnumber);

	if(getcontent < getcountertarget){

		getcountervalue.textContent = getcontent+incnumber;
		setTimeout(updatecounter,100);
	}

}

updatecounter();

});

// End Student Counter Section


// Start Rating Section


// start google code for chart
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar', 8],
          ['Thailand', 2],
          ['Signapore', 4],
          ['Indonesia', 2],
          ['Srilanka',  8]
        ]);

        var options = {
          title: 'Internal Students',
          width:550,
          height:400
          // backgroundColor:'red'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
// end google code for chart


// End Rating Section




// End JavaScript Area



