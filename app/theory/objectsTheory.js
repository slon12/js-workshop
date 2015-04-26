// tworzenie nowego pojedyńczego obiektu
var person = {
    firstName: 'John', lastName: 'Smith'
};
console.log(person);

// dodawanie właściwości do obiektu
person.age = 15;
person['email'] = 'john@gmail.com';
console.log(person);

// usuwanie właciwości
delete person.email;
console.log(person);

// modyfikowanie właciwości
person.age = 18;
console.log(person);

// pętla for in

for (var prop in person) {
    console.log(prop + ' ' + person[prop]);
}

// tworzenie klasy
function Worker(name) {
    this.name = name;
    this.introduce = function () {
        console.log('I am ' + name);
    };
}

var builder = new Worker('Max', 10);
builder.introduce();

// prototype dodawanie nowej funkcjonalnosci - przydatne przy typach wbudowanych
Worker.prototype.salary = 2000;
Worker.prototype.earnings = function () {
    console.log('I earn ' + this.salary);
};
builder.earnings();
builder.salary = 10000;
builder.earnings();

var architect = new Worker('Jack');
architect.introduce();
architect.earnings();
