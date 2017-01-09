var add = function(number1,number2){
	return number1+number2
};

var sub = function(number1,number2){
	return number1-number2
};

var multiply = function(number1,number2){
	return number1*number2
};

var divide = function(number1,number2){
	return number1/number2
};


var number1= prompt("Enter a number:");
var number2= prompt("Enter another number:");

number1= parseInt(number1);
number2= parseInt(number2);

var result = divide(number1,number2);
alert(result);
