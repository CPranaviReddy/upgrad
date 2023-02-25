function simpleInterest(principle, time, rate)
{
	// Display parameters values
	//console.log("Principle : " + principle);
	//console.log("Time : " + time);
	//console.log("Rate : " + rate);
	// Calculate interest
	var amount = (principle * time * rate) / 100;
	// Display amount
	console.log("Simple Interest : " + amount + "\n");
}

//function main()
//{
	// Test Cases
	simpleInterest(1000, 3, 7.3);
//}
// Start program execution
//main();