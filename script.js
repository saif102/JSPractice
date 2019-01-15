// function example
function myFunction(a,b){
    return a * b;
}

console.log (myFunction(4,6)); // Answer is 24


// alert, prompt, push
var x = myCalc(87,3);
function myCalc(a, b){
    return a * b;
}

alert ('Please input something in the next dialogue box!');
console.log(prompt (x) + ' ' + x);

/***************************************
Count average using for and while loops
****************************************/

//for loops
arrTest = [276, 986, 724, 255, 762];

var sumArr = 0;
for (i = 0; i < arrTest.length; i++){
    sumArr += arrTest[i];
}

console.log(sumArr);
console.log(sumArr / arrTest.length);

//while lopps

var sumArr = 0;
var i = 0;
while(i < arrTest.length){
    sumArr += arrTest[i];
    i++;
}

console.log(sumArr);
console.log(sumArr / arrTest.length);