document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName = "Duy";
let workFromHome = false;
let side = 15;
let radius = 10;

console.log("My name is " + myName);
console.log("I work from home: " + workFromHome);
console.log (`The length of each side of the square is ${side}`);
console.log (`The radius of the circle is ${radius}`);

let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log(`The circle area is ${circleArea} and the perimeter is ${circlePerimeter}`);

let travelOptions = [ "foot", "bike", "car", "airplane" ];

console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

var travelType = prompt ("How would you like to travel?");
console.log("Travel Type: " + travelType);

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} 
    else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
        if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
        time= distance / 10
    }
        else {
        console.log("Biking is free! Speed is 10mph.");
        cost = 0;
        }
        time = distance / 10
        }
    else if (travelType === "car") {
            console.log("Driving is $0.25/mi. Speed is 60mph.");
            cost = 0.25 * distance;
            time = distance / 60;
            } 
    else if (travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
        console.log("Flying is $0.10/mi. Speed is 400mph.");
        cost = 0.10 * distance * passengerCount;
        time = distance / 400;
    }
    else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
    }
console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost ${cost}!`);

let timeBar = "Cost: ";
for (let i = 0; i < time; i++) {
    timeBar += "/";
  }
  console.log(timeBar);
let costBar = "Cost: ";
for (let i = 0; i < cost; i++) {
    costBar += "$";
  }
  console.log(costBar);

  if (travelType === "car") {
    let meterCostRemaining = 1.00;
    while (meterCostRemaining > 0) {
        let quarter = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
        meterCostRemaining -= .25;
        let dime = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
        meterCostRemaining -= .10;
        let nickel = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
        meterCostRemaining -= .05;
        let penny = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
        meterCostRemaining -= .01;
        console.log("Meter cost remaining: " + meterCostRemaining);
      }
      console.log("You have paid the parking meter.");
  }
  