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



*/

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

console.log("Is Mark\'s BMI higher than John\'s? true? " + highBMI);


