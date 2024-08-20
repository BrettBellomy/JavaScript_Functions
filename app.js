console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        console.log("Please enter a number > 0");
        return;
    }

    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(100);
printOdds(-100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

    if (!userName || !age) {
        console.log("Please provide your name and age");
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you can't drive. Please check back when you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge();
checkAge(15);
checkAge("Brett Bellomy", 30);
checkAge("Naruto Uzumaki", 15);

// Exercise 3 Section
console.log("EXERCISE 4:\n==========\n");

function whichQudrant(xAxisPoint, yAxisPoint) {

    if (xAxisPoint == 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is on the y Axis!`);
    }
    else if (yAxisPoint == 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is on the x Axis!`);
    }
    else if (xAxisPoint > 0 && yAxisPoint > 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is in Quadrant 1!`);
    }
    else if (xAxisPoint < 0 && yAxisPoint > 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is in Quadrant 2!`);
    }
    else if (xAxisPoint < 0 && yAxisPoint < 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is in Quadrant 3!`);
    }
    else if (xAxisPoint > 0 && yAxisPoint < 0) {
        console.log(`The coordinate ${xAxisPoint},${yAxisPoint} is in Quadrant 4!`);
    }
}
whichQudrant(0, 2);
whichQudrant(1, 2);
whichQudrant(-6, 18);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function whatTypeOfTriangle(sideOne, sideTwo, sideThree) {

    if (sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne) {
        console.log(`Sorry, this triangle is invalid`);
    }
    else if (sideOne == sideTwo && sideOne != sideThree) {
        console.log(`This is an isosceles triangle`);
    }
    else if (sideOne == sideThree && sideOne != sideTwo) {
        console.log(`This is an isosceles triangle`);
    }
    else if (sideTwo == sideThree && sideTwo != sideOne) {
        console.log(`This is an isosceles triangle`);
    }
    else if (sideOne == sideTwo && sideTwo == sideThree) {
        console.log(`This is an equilateral triangle`);
    }
    else if (sideOne != sideTwo && sideOne != sideThree) {
        console.log('This is a scalene triangle');
    }
}
whatTypeOfTriangle(1, 2, 2);
whatTypeOfTriangle(1, 1, 2); 