var text = 'Lorem ipsum dolor sit amet';
var a = 1.5;

// typeof() sprawdzenie typu danych
console.log(typeof(text));
console.log(typeof(a));

// length - dlugosc stringa
var textLength = text.length;
console.log(textLength);

// + - konkatenacja stringow
var firstName = 'John';
var lastName = 'Smith';
var person = firstName + ' ' + lastName;
console.log(person);

// charAt() - pobieranie znaku
console.log(text.charAt(2));

// toUpperCase() - zmiana tekstu na duze litery
console.log(firstName.toUpperCase());

// toLowerCase() - zmiana tekstu na duze litery
console.log(firstName.toLowerCase());

// substring(pozycja znaku poczatkowego, pozycja znaku koncowego) - pobranie fragmentu tekstu
console.log(text.substring(0, 5));

// slice() - przycinanie textu, dobrze się nadaje do usuwania pierwszego, ostatniego znaku, wykorzystywany w tablicach
console.log(text.slice(1));
console.log(text.slice(0, text.length - 1));

// split() - dzielenie textu na częci
console.log(text.split(' '));

// indexOf() - sprawdzanie pozycji podtekstu
console.log(text.indexOf('ipsum'));
console.log(text.indexOf('lorem'));

// replace() - zamiana tekstu
console.log(text.replace('ipsum', 'cos'));
