var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

/* pseudocode 

* I think the total number of months can be acquire merely doing a .length
of the finance variable
* then i need to create a for loop which adds the value of the profit/losses and puts it into a variable
* i need to create a for loop which work out changes in profit/loss and store in an array called variable.
* sum the array and then divide by total number of months. 
*/
//------------------------------------------------------ total number of months ---------------------------------------------------------------------//
// total months is the length of finances variable
console.log(finances.length) 
// created monthNum variable to store this length
const monthNum = finances.length;

//-------------------------------------------------------- net total of profit/losses ---------------------------------------------------------------//

let pfSum = 0; // pfSum to sum all of the profit/loss value
// for loop which adds all of the profit loss values to pfSum
for (i = 0; i < monthNum; i++) {
    pfSum += finances[i][1]
}

// sum of profit/loss //
console.log(pfSum)

//---------------------------------------------------------- average of changes in profit/losses ----------------------------------------------------//

let numbers = []; // creating new array to store all the profit/loss values in order to calculate changes
// for loop which pushes profit/loss values to numbers
for (i = 0; i < monthNum; i++) {
    numbers.push(finances[i][1]);
}
// new array with just the numbers // 
console.log(numbers)

let changes = []; // new array which will contain the values of the changes
// for loop which calculates changes and stores in the changes variable
for (i = 0; i < numbers.length; i++) {
    changes.push(numbers[i] - numbers[i-1]);
}

// new array with just changes // 
console.log(changes);
// ERROR, changes variable contains naN value at the start as there is no [i-1] value//
changes.splice(0, 1, finances[0][1]); // delete the first element of array and replaces it with 

console.log(changes)
//----------------------------------------------------- Calculate average change!!! ------------------------------------------------------------------//
let cSum = 0; // new variable to add the changes
// created for loop to add the values from changes to cSum variable
for (i = 0; i < changes.length; i++) {
    cSum += changes[i];
}

console.log(cSum)

let averageChange = cSum / monthNum; // calculating average by dividing cSum by monthNum (total number of months!)

console.log(averageChange);

//------------------------------------------------------- Calculate the largest smallest values in profit losses -------------------------------------//
 
let largest = 0; // create largest to store max value
// for loop: if largest is smaller than numbers[i] then largest = numbers[i]
for (i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
        largest = numbers[i];
    }
}

console.log(largest)
// for loop which loops the finance array, find the nested array which contains the same value and sets the largest value to = the date and value
for (i = 0; i < finances.length; i++) {
    if (largest === finances[i][1]){
        largest = finances[i];
    }
}

console.log(largest)

let smallest = 0; // smallest to store min value
// for loop: if smallest is larger than numbers[i] then smallest = numbers[i]
for (i = 0 ; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
        smallest = numbers[i];
    }
}

console.log(smallest);

for (i = 0; i < numbers.length; i++) {
    if (smallest === finances[i][1]) {
        smallest = finances[i];
    }
}

console.log(smallest)

//-----------------------------------------------------------------formatting numbers to display as currency-----------------------------------------//

const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})



//-------------------------------------------------------------------- console display --------------------------------------------------------------//

console.log(`
Financial Analysis
--------------------------
Total months: ${monthNum}
Total: ${numberFormatter.format(pfSum)}
Average Change: ${averageChange}
Greatest Increase in Profits: ${largest}
Greatest Decrease in Profits: ${smallest}


`)


