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

// 2. To calculate the total profits/losses in the period of analysis:

var totalProfit = 0

for (var i = 0; i < finances.length; i++) {
    
    totalProfit += finances[i][1]; // totalProfit = totalProfit + finances [i][1]
}

console.log("Total Profits/Losses over Analysis Period: $" + totalProfit);

// 3. To calculate the average of changes in the profits/losses over the entire period:

// Assuming the company began in December 2009:

// Declare a variable totProfitChange, with an initial value corresponding to the first month's profit (as we assume that the company started the month before when profit was 0.)

var totProfitChange = finances[0][1];

for (var i = 1; i < finances.length; i++) {

    // Within the loop, we will keep adding the difference between monthly profits to the old total profit change value in order to get the new total profit change value.

    totProfitChange += finances[i][1] - finances[i-1][1]; // totProfitChange + finances[i][1] - finances[i-1][1];
      
}

// console.log(totProfitChange); // 671,099

var aveProfitChange = totProfitChange / finances.length;

console.log("Average Month-on-Month Change in Profits: $" + aveProfitChange.toFixed(2));

/* Another way of solving this question is simply by logical thought: Since we assumed that the first profit entry also equals the profit change for that month, we will always get the same thing happen for every subsequent line as we cumulatively add up the CHANGES in the profits/losses over the period time. 

Therefore, one could simply conclude that the value of the profits at the very last entry (index 85) is the total of the CHANGES in profit over the period. We can then simply divide this number by the number of months to get the average. ie. finances[85][1] / finances.length */


// 4. To calculate the greatest increase in profits over the period of time:

// We begin with the first profit change initially. If the next change is higher than this initial value, then it becomes the new maximum profit change. This will then run through the loop over the entire array.

var maxProfitChange = finances[0][1];
var maxProfitMonth = finances[0][0];

for(var i = 1; i < finances.length; i++) {

    if ((finances[i][1] - finances[i-1][1]) > maxProfitChange) {

        maxProfitChange = finances[i][1] - finances[i-1][1];

        maxProfitMonth = finances[i][0];
        
    }    
}

console.log("Best Performing Month, with greatest positive change in profits: " + maxProfitMonth + ", $" + maxProfitChange);

// 5. To calculate the greatest decrease in profits over the period of time:

// As in 4, we begin with the first profit change initially. If the next change is lower thank this inital value, then it becomes the new minimum profit change. This will then run through the loop over the entire array.

var minProfitChange = finances[0][1];
var minProfitMonth = finances[0][0];

for (var i = 1; i < finances.length; i++) {

    if ((finances[i][1] - finances[i-1][1]) < minProfitChange) {

        minProfitChange = finances[i][1] - finances[i-1][1];

        minProfitMonth = finances[i][0];
        
    }
}

console.log("Worst Performing Month, with greatest negative change in profits: " + minProfitMonth + ", $" + minProfitChange);









