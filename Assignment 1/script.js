/*

	WEB 303 Assignment 1 - jQuery
	Name: Het Patel
	Student ID:0805024
	Date:17/09/2022
	
*/

$(document).ready(function(){
	

	// Using Change Event for function

	$("input").change(function(){
		let sal = $("#yearly-salary").val();
		let perc = $("#percent").val();

		let sol = (( sal * perc)/ 100);
		$("#amount").text('$' + sol.toFixed(2));
	});

	// Using Keyup Event for function

	// $("input").keyup(function(){
	// 	let sal = $("#yearly-salary").val();
	// 	let perc = $("#percent").val();


	// 	let sol = (( sal * perc)/ 100);
	// 	$("#amount").text('$' + sol.toFixed(2));
	// });
});