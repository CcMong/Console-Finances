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

console.log("Financial Analysis for Newbie2JS Corp.");

// 1. To calculate the number of months in the period of analysis:

var monthCount = finances.length;

console.log("Total Duration of Analysis Period: " + monthCount + " months");
document.write("Total Duration of Analysis Period: " + "<br> <br>" + monthCount + " months" + "<br> <br> <br>");

// 2. To calculate the total profits/losses in the period of analysis:

var totalProfit = 0

for (var i = 0; i < finances.length; i++) {
    
    totalProfit += finances[i][1]; // totalProfit = totalProfit + finances [i][1]
}

console.log("Total Profits/Losses over Analysis Period: $" + totalProfit);
document.write("Total Profits/Losses over Analysis Period:" + "<br> <br>" + "$" + totalProfit + "<br> <br> <br>");

// 3. To calculate the average of changes in the profits/losses over the entire period:

/* First define an initial condition, the profit change between the first 2 months, and then loop through the rest of the array to sum up all the profit changes. Then find the average over all months in which a profit change occurs (ie. all except the first month).*/

// Declare a variable totProfitChange, with an initial value corresponding to index 1 profit - index 0 profit:

var totProfitChange = finances [1][1] - finances[0][1];

// Start the loop iteration from i = 2 to continue to sum the profit changes through the array:

for (var i = 2; i < finances.length; i++) {

    // Within the loop, keep adding the difference between monthly profits to the old total profit change value to continually result in the new total profit change value:

    totProfitChange += finances[i][1] - finances[i-1][1];       
}

// Average profit change will now be totProfitChange divided by the total number of months MINUS 1 to account for the number of change periods between months:

var aveProfitChange = totProfitChange / (finances.length - 1);

console.log("Average Month-on-Month Change in Profits: $" + aveProfitChange.toFixed(2));
document.write("Average Month-on-Month Change in Profits:" + "<br> <br>" + "$" + aveProfitChange.toFixed(2) + "<br> <br> <br>");

// 4. To calculate the greatest increase in profits over the period of time:

/*Initial condition is the first profit change, which is index 1 profit minus index 0 profit. 
If any subsequent profit change value is higher than this initial value, then it becomes the new maximum profit change. This will then run through the loop over the entire array.*/

var maxProfitChange = finances[1][1] - finances[0][1];
var maxProfitMonth = finances[1][0]; // the month we calculate the first profit change in

// We begin running the loop from i = 2, just as we did in the previous question:

for(var i = 2; i < finances.length; i++) { 

    if ((finances[i][1] - finances[i-1][1]) > maxProfitChange) { 

        maxProfitChange = finances[i][1] - finances[i-1][1];

        maxProfitMonth = finances[i][0];        
    }    
}

console.log("Best Performing Month, with greatest positive change in profits: " + maxProfitMonth + ", $" + maxProfitChange);
document.write("Best Performing Month, with greatest positive change in profits:" + "<br> <br>" + maxProfitMonth + ", $" + maxProfitChange + "<br> <br> <br>");

// 5. To calculate the greatest decrease in profits over the period of time:

// As in 4, we begin with the first profit change initially. If the next change is lower than this initial value, then it becomes the new minimum profit change. This will then run through the loop over the entire array.

var minProfitChange = finances[1][1] - finances[0][1];
var minProfitMonth = finances[1][0];

for (var i = 2; i < finances.length; i++) {

    if ((finances[i][1] - finances[i-1][1]) < minProfitChange) {

        minProfitChange = finances[i][1] - finances[i-1][1];

        minProfitMonth = finances[i][0];
        
    }
}

console.log("Worst Performing Month, with greatest negative change in profits: " + minProfitMonth + ", $" + minProfitChange);
document.write("Worst Performing Month, with greatest negative change in profits:" + "<br> <br>" + minProfitMonth + ", $" + minProfitChange + "<br> <br> <br>");












