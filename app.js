console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        count *= -1;
    }
    for (i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(-10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkName(userName, age) {

    if (userName === undefined) {
        console.log(`Not sure who you are but we can check your age.`);
    }

    if (age === undefined) {
        console.log(`How am I supposed to check your age when you won't provide ID?`);
    }
    else {
        let aboveSixteen = `Congrats ${userName}, you can drive!`;
        let underSixteen = `Sorry ${userName}, but you need to wait until you're sixteen.`;
        if (age < 16) {
            console.log(underSixteen);
        }
        else {
            console.log(aboveSixteen);
        }
    }
}

checkName("David", 29);
checkName("Sienna", 1);
checkName();

//Exercise 3 Section
console.log("EXERCISE 3: \n===========\n");

function quadrant(x, y) {
    if (x == 0) {
        console.log(`(${x},${y}) is on the x axis.`);
    }
    else if (y == 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    }
    else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 1.`);
    }
    else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 2.`);
    }
    else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 3.`);
    }
    else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 4.`);
    }
}

quadrant(0, -2);
quadrant(4, 0);
quadrant(4, 9);
quadrant(-2, 10);
quadrant(-3, -4);
quadrant(7, -1);

//Exercise 4 Section
console.log("EXERCISE 4: \n===========\n");

function triangle(sideOne, sideTwo, sideThree) {
    if (sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne) {
        if (sideOne == sideTwo && sideOne == sideThree && sideTwo == sideThree) {
            console.log(`Equilateral triangle.`);
        }
        else if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree) {
            console.log(`Isosceles triangle.`);
        }
        else {
            console.log('Scalene triangle.');
        }
    }
    else {
        console.log("False Triangle.");
    }
}

triangle(38, 44, -2);
triangle(32, 33, 32);
triangle(45, 45, 45);
triangle(52, 45, 33);

//Exercise 5 Section
console.log("EXERCISE 5: \n==========\n");

function dataPlan(planLimit, day, usage) {
    let calcDailyUse = (planLimit / 30).toFixed(2); //calculated daily use you can use per day to meet plan
    //console.log(`calculated daily use: ${calcDailyUse}`);
    let actualUse = (usage / day).toFixed(2); //how much you are actually using
    //console.log(`actual usage: ${actualUse}`);
    //actual usage if continued on current path
    let totalUse = (actualUse * 30).toFixed(2);
    //console.log(`projected use: ${totalUse}.`);
    //console.log(`plan limit: ${planLimit}`);
    let difference = planLimit - totalUse; //this gives how much is left on the plan for projected course
    //console.log(`difference: ${difference}.`); 
    
    //find out how many days we have left til the plan rolls over
    console.log(`This is day ${day} of your data plan. You have ${30 - day} days left.`);
    //tell the customer how much data THEY are using per data
    console.log(`On average, you are using ${actualUse}gb per day.`)
    //compare how much data they are using
    if (usage > planLimit) {
        console.log(`Get off your phone!! You have exceeded your data plan by ${usage - planLimit}gb.`);
    }
    else {
        if (calcDailyUse < actualUse) {
            let desiredUse = (100 * (planLimit - usage) / (30 - day) / 100).toFixed(2);
            console.log(`You are EXCEEDING your average daily use.\n If you continue this, you will exceed your data plan by ${(difference * -1).toFixed(2)}gb.`);
            console.log(`In order to stay within your data limit you need to reduce your usage to ${desiredUse}gb per day.`);
        }
        else if (calcDailyUse > actualUse) {
            console.log(`You are BELOW your average daily use by ${(calcDailyUse - actualUse).toFixed(2)}gb/day.\n Keep up the progress and you will be right under your limit!`);
        }
        else {
            console.log(`You are using your data at the calculated average, which is ${actualUse}. Great job!`);
        }
    }
    console.log(`\n`);
}

dataPlan(25, 20, 18);

dataPlan(100, 10, 1);

dataPlan(100, 30, 100);

dataPlan(100, 20, 200);


