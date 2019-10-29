/**********************************
Tip Calculator
***********************************

Johan and his family went on a holiday and went to three different
restaurents. The bills were €124, €48 and €268.

To tip the waiter a fair amount, Johan created a simple tip calculator (as a function). He likes to tip 20% of the bill
when the bill is less than €50, 15% when the bill is between
€50 and €200, and 10% when the bill is more than ¢200.

In the end, Johan would like to have two arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

NOTE: To calculate 20% of a value, simply multiply if with
20/100 = 0.2

*/

var bills = [124 , 48, 268];

function tipCalculator(tipPercentage){
    if (tipPercentage < 50){
        return  tipPercentage * 0.2;
    }else if(tipPercentage >= 50 && tipPercentage <= 200){
        return tipPercentage * 0.15;
    }else
        return tipPercentage * 0.1;
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]),
           tipCalculator(bills[2])];
var finalBill = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];
console.log(tips);
console.log(finalBill);


/*****
Another solution
*****************


function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);

*/
