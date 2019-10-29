/************************
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1) For each of them, creat an object with properties for their
full name, mass and height.

02) Then, add a method to each object to calculate the BMI, 
together with the full name and the respective BMI. 

Don't forget they might have the same BMI.

*/

var John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 79, //kg
    height: 1.82, //meter
    BMI: function(){
       this.calcBMI = this.mass / (this.height * this.height);
        return this.calcBMI;
    }
};

var Mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 92, //kg
    height: 1.92, //meter
    BMI: function(){
       this.calcBMI = this.mass / (this.height * this.height);
        return this.calcBMI;
    }
};

console.log(John, Mark);

if(John.BMI() > Mark.BMI()){
    console.log(John.firstName + ' ' + John.lastName + ' has higher BMI.');
}else if(John.BMI() < Mark.BMI()){
    console.log(Mark.firstName + ' ' + Mark.lastName + ' has higher BMI.');
}else
    console.log('They have both same BMI\'s.');
