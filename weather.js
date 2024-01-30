$(document).ready(function(){

	$("#submitCity").click(function(){
		return getWeather();
	});
});

function getWeather(){
	var city = $("#city").val();

	if(city != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
			"&APPID=52827ce67cdeeaaf0c60c4b244f1bf10", 
			type: "GET",
			dataType: "jsonp",
			success: function(data){

				var widget = showResults(data);
				
				$("#showWeather").html(widget);
				$("#city").val('');
			}
		});
	}
	else
	{
		$("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
	}
}


function showResults(data){
	return '<h2 style="font-weight:bold; font-size:30px; padding-top: 30px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
			"<h3 style='padding-left:8%;'><strong>Weather: </strong>"+data.weather[0].main+"</p>"+
			"<h3 style='padding-left:8%;'><strong>Weather Description: </strong> <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description+"</p>"+
			"<h3 style='padding-left:8%;'><strong>Temperature: </strong> "+data.main.temp+" &deg;C</h3>"+
			"<h3 style='padding-left:8%;'><strong>Pressure: </strong>"+data.main.pressure+" hPa </h3>"+
			"<h3 style='padding-left:8%;'><strong>Humidity: </strong>"+data.main.humidity+" % </h3>"+
			"<h3 style='padding-left:8%;'><strong>Min Temp: </strong>"+data.main.temp_min+" &deg;C </h3>"+
			"<h3 style='padding-left:8%;'><strong>Max Temp: </strong>"+data.main.temp_max+" &deg;C </h3>"+
			"<h3 style='padding-left:8%;'><strong>Wind Speed: </strong>"+data.wind.speed+" m/s </h3>"+
			"<h3 style='padding-left:8%;'><strong>Wind Direction: </strong>"+data.wind.deg+"&deg; </h3>"+
			"<h3 style='padding-left:8%; padding-bottom: 30px;'><strong>Cloudiness: </strong>"+data.clouds.all+"% </h3>";
}