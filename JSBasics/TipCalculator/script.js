/**************************

John and his family went to five diffrent restaurants. 
The bills were 124€, 48€, 268€, 180€ and 42€.
John like to tip 20% of the bill when the bill is less than 50€, 
15% when the bill is between 50€ and 200€, 
and 10% if the bill is more than 200€.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid 
bills and do the tip calculations.
4. As an output, create 
        a) a new array containing all tips
        b) an array containing final paid amount (bill + tip).
        
        HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING
*********************

Mark's family also went on a holiday, going to four different 
restaurants. The bills were 77€, 375€, 110€ and 45€.

Mark like to tip 20% of the bill when the bill is less than 100€, 
10% when the bill is between 100€ and 300€, 
and 25% when the bill is more than 300€ (different from John).

5. Implement the same functionality as before, this time using 
Mark's tiping rules.
6. Create a fucntion (not a method) to calculate the average of a given array of tips.

HINT: Loop over the array and in each iteration store the current 
sum in a variable (starting from 0). After you have the sum of the 
array, divide it by the number of elements in it (that's how the 
average is calculated.)

7. Calculate the average tip for each family.
8. Log to the console which family paid the highest tips on average.


****************************/

var john = {
    
    name: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalBills = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            // Determining the percentage based on tipping rules
            
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50){
                percentage = 0.2;
            }else if (bill >= 50 && bill < 200){
                percentage = 0.15;
            }else percentage = 0.1;
            
            // Adding results to the corresponding arrays
            
            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + (bill * percentage);
        }
    }
    
};


/**************************************************
Just for testing if the both family paid same tips.
***************************************************/
/*
var john = {
    
    name: 'John Smith',
    bills: [77, 375, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalBills = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            // Determining the percentage based on tipping rules
            
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100){
                percentage = 0.2;
            }else if (bill >= 100 && bill < 300){
                percentage = 0.1;
            }else percentage = 0.25;
            
            // Adding results to the corresponding arrays
            
            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + (bill * percentage);
        }
    }
    
};
*/


// Part 02



var mark = {
    
    name: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalBills = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            // Determining the percentage based on tipping rules
            
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100){
                percentage = 0.2;
            }else if (bill >= 100 && bill < 300){
                percentage = 0.1;
            }else percentage = 0.25;
            
            // Adding results to the corresponding arrays
            
            this.tips[i] = bill * percentage;
            this.finalBills[i] = bill + (bill * percentage);
        }
    }
    
};


function calAvgTips(tips){
    var avgTip = 0;
    for (var i = 0; i < tips.length; i++){
        avgTip += tips[i];
    }
    return avgTip / tips.length;
    
}

// Doing the calculation 

john.calcTips();
mark.calcTips();

john.average = calAvgTips(john.tips);
mark.average = calAvgTips(mark.tips);

console.log(john, mark);

if (john.average > mark.average){
    console.log(john.name + '\'s family pays higher tips, with an average of ' + john.average + '€.');
} else if (mark.average > john.average){
    console.log(mark.name + '\'s family pays higher tips, with an average of ' + mark.average + '€.');
}else
    console.log('The both family paid the same tips.');