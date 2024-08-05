console.log('--WAP to check if a number is Prime--');

function prime(a) {
    let c = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            c++;
        }
    }
    if (c === 2) {
        console.log('Prime Number' + ' ' + a);
    }
    else {
        console.log('Not a Prime Number');
    }

}
const res = prime(97);

console.log('--WAP to check if a number is Pallindrome--');

function pallindrome(n) {
    let num = n, d, r = 0;
    while (n > 0) {
        d = Math.floor(n % 10);
        n = Math.floor(n / 10);
        r = r * 10 + d;
    }
    if (num === r) {
        console.log('Pallindrome Number ' + ' ' + num);
        console.log('Pallindrome Number ' + ' ' + r);
    }
    else {

        console.log('Not a pallindrome number' + ' ' + n);
        console.log('Not a pallindrome number' + ' ' + r);
    }
}
const result = pallindrome(1212);

console.log('--WAP to reverse a number--');
function reverse(number) {
    let digit, rev = 0, nums1 = number;
    while (number > 0) {
        digit = Math.floor(number % 10);
        number = Math.floor(number / 10);
        rev = rev * 10 + digit;

    }
    console.log(nums1);
    return rev;
}
const result3 = reverse(123423);
console.log(result3);

console.log('--WAP to print prime number in a range--');

function primenum(start, end) {
    // let ctr = 0;
    for (let i = start; i <= end; i++) {
        var flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                // ctr++;
                flag = 1;
                break;
            }
        }


        if (flag == 0) {
            console.log(i);

        }


    }
}
const res4 = primenum(10, 20);


console.log('--WAP to print fibonacci series--');

function fibonacci(nums) {
    let x = 0, y = 1, z;
    console.log(x);
    console.log(y);
    for (let i = 3; i <= nums; i++) {
        z = x + y;
        console.log(z);
        x = y;
        y = z;
    }

}
const res5 = fibonacci(10);