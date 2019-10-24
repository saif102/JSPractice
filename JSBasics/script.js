/***************************

Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in varriables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about
wheter Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step3. (Something like "Is Mark's BMI higher than John's? ture").


*****************************/

var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI,
highBMI;

markMass = 78; //kg
markHeight = 182; // centimeters
johnMass = 98;
johnHeight = 192;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

highBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? true? ' + highBMI);


// another way to solve it

if (markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s.');
}else{
    console.log('John\'s BMI is higher than Mark\'s.');
}

/*****************************
The Ternary Operator
*****************************/

var name = 'John';
var age = 22;

age >= 18 ? console.log(name + ' drinks beer.'): 
            console.log(name + ' drinks juice.');

var drink = age >= 18? 'beer': 'juice'; //another way
console.log(drink);


/*****************************
Switch Statements
*****************************/


var job = 'designer';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(name + ' teaches how to code.');
        break;
    case 'driver':
        console.log(name + ' drives car.');
        break;
    case 'designer':
        console.log(name + ' designs beautiful websites.');
        break;
    default:
        console.log(name + ' does something else.');
}


/****************************************

Tom and Mike both play basketball in different teams.
In the latest 3 games, Tom's team scored 89, 120 and 103 points,
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score),
and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the 
same average score).

4. Hary also plays basktball, and his team scored 97, 134 and 105
points. Like before, log the average winner to the console.
Hint: you will need the && operator to take the decision.

5. Like before change the scores to generate different winners, 
keeping in mind there might be draws.

****************************************/































































































