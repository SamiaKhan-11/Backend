// Question 1
console.log('Hello world');
a = 100;
if (a > 70 && a < 120) {
    console.log('Exists');
}
else {
    console.log('Does not exist');
}

// Question 2
age = 21;
if (age > 18) {
    console.log('Eligible for DL');
}
else {
    console.log('Not eligible for DL');
}

// Question 3
num1 = 56;
num2 = 89;
num3 = 5;
if (num1 > num2 && num1 > num3) {
    console.log('num1 is largest');
}
if (num2 > num1 && num2 > num3) {
    console.log('num2 is largest');
}
else {
    console.log('num3 is largest');
}

// Question 4
n = 64;
n1 = Math.sqrt(n);
if (n1 * n1 === n) {
    console.log('Perfect square');
}
else {
    console.log('Not a perfect square');
}



// Question 5
number = 77;
if (number % 7 == 0 && number % 11 == 0) {
    console.log('Number dividible by 7 and 11 :' + number);
}
else {
    console.log('Number not dividible by 7 and 11 :' + number);
}