// declaration
var myName;

// integer
var a = 5;
var b = 1;

// float
var c = 7.5;

// boolean
var isRed = true;

// string
var firstName = 'John';
var lastName = 'Smith';
var age = '21';

/* operation on variables - operacje na zmiennych */
var d = a + b;
console.log('a + b = ' + d);

d += c;
console.log('d + c = ' + d);

myName = firstName + ' ' + lastName;
console.log(myName);

/* conditionals - instrukcje warunkowe*/
if (isRed) {
    console.log('red');
}

// == / ===
if (age === 21) {
    console.log('Equal');
} else {
    console.log('NOT equal');
}

// shorthand conditional expressions
if (firstName === 'John') {
    age = 19;
} else {
    age = 24;
}
console.log('age = ' + age);

age = firstName === 'John' ? 19 : 24;
console.log('age = ' + age);

/* loops - petle for, while, do while */

// for
console.log('for');
for (var i = 1; i <= 3; i++) {
    console.log(i);
}

//while
console.log('while');
i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}

//do while
console.log('do while');
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3);
