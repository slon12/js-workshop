(function ()
{
    'use strict';

    window.objects = {
        // (1) Napisz funkcje która będzie dodawać właściwość do obiektu. Przyjmuje jako parametry: obiekt, nazwę własności i wartość.
        addPropertiesToObject: function (object, nameProperties, value)
        {
            object[nameProperties] = value;
            return object;
        },

        // (2)  Napisz funkcje modyfikujaca liste osób (obiektów) w taki sposób, że osoba poniżej 18 lat zostają 18-latkami. Pozostale informacje nie są modyfikowane
        doAdult: function (list)
        {
            for (var i = 0; i < list.length; i++) {
                if (list[i].age < 18) {
                    list[i].age = 18;
                }
            }
        },

        //(3) Napisz funkcje przyjmujacą dowolny obiekt i zwracają w tablicy stringow nazwy atrybutów danego obiektu oraz ich wartość
        propertyNames: function (obj)
        {
            var properties = [];
            for (var prop in obj) {
                properties.push([prop, obj[prop]]);
            }
            return properties;

        },

        // (4) Napisz funkcje licząca objętość dla kazdego box'a w obiekcie boxlist a nastepnie sume wszystkich objętości
        boxlist: {box1: {height: 10, width: 5, length: 5}, box2: {height: 7, width: 2, length: 7}, box3: {height: 5, width: 7, length: 10}},

        getVolume: function (list)
        {
            var tmp = [];
            var sumVolume = 0;
            var volume;
            for (var element in list) {
                volume = (list[element].width * list[element].height * list[element].length);
                tmp.push(element + ' volume: ' + volume);
                sumVolume += volume;
            }
            tmp.push(sumVolume);
            return tmp;


        },

        // (5) Napisz funkcje zmieniającą nazwe atrybutu w obiekcie person
        person: {firstName: 'Jan', secondName: 'Kowalski', age: 35},

        changePropertyName: function (object, nameToChange, newName)
        {
            var tmp = object[nameToChange];
            if (tmp !== undefined) {
                delete object[nameToChange];
                object[newName] = tmp;
                return true;
            } else {
                return false;
            }

        }

    };
})();