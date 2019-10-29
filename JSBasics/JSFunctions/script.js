/**********************************
Functions
**********************************/

function calculateAge(birthyear) {
    return 2019 - birthyear;
}

function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement < 0){
        console.log(name + ' is already retired.');
    }else 
        console.log(name + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/**********************************
Functions Statements and Expressions
**********************************/

var whichProfession = function(job, name){
    switch(job){
        case 'Teacher':
            return name + ' teaches how to code.';
        case 'Driver':
            return name + ' drives school bus.';
        case 'Designer':
            return name + ' designs beautiful websites.';
        default:
            return name + ' does something else.';
    }
}

console.log(whichProfession('Teacher', 'Tom'));
console.log(whichProfession('Designer', 'Jane'));
console.log(whichProfession('Retired', 'Harry'));

/**********************************
Arrays
**********************************/

// Initialize new array

var names = ['Tom', 'Jane', 'Harry'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

