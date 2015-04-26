// http://javascript-html5-tutorial.pl/wyrazenia-regularne-w-javascript.html

// test() - czy wystepuje wzorzec
var text = 'Ala ma kota i psa. Ala ma koty.';
var pattern = /psa/;
// czy text zawiera wyraz 'psa'?
console.log(pattern.test(text));

// czy text zwiera slowo zaczynajace sie od duzej litery?
pattern = new RegExp('[A-Z]{1}[^\s]+');
console.log(pattern.test(text));

pattern = /kot*/g;
// exec() - zwraca tablica, znaleziony element, index, dane wejsciowe
console.log(pattern.exec(text));

//match() - zwraca tablice ze znalezionymi wynikami
console.log(text.match(pattern));

