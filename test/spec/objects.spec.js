describe('objects', function ()
{
    'use strict';

    var answer = window.objects;

    describe('addPropertiesToObject', function ()
    {
        it('should return change object input value number', function ()
        {
            expect(answer.addPropertiesToObject({properties1: 20, properties2: 30}, 'properties3',
                    1234)).toEqual({properties1: 20, properties2: 30, properties3: 1234});
        });
        it('should return change object input string asd', function ()
        {
            expect(answer.addPropertiesToObject({properties1: 20, properties2: 30}, 'properties3',
                    'asd')).toEqual({properties1: 20, properties2: 30, properties3: 'asd'});
        });
    });

    describe('doAdult', function ()
    {

        var list = [
            {name: 'Jan', age: 10},
            {name: 'Ala', age: 14},
            {name: 'Andrzej', age: 30},
            {name: 'Maria', age: 55}
        ];
        var teenAge = list[0].age;
        var adultAge = list[3].age;

        beforeEach(function ()
        {
            answer.doAdult(list);
        });
        it('should change person age', function ()
        {
            expect(list[0].age).not.toEqual(teenAge);
        });
        it('should change person age to 18 if age<18', function ()
        {
            expect(list[1].age).toEqual(18);
        });
        it('should dont change age if aga>18', function ()
        {
            expect(list[3].age).toEqual(adultAge);
        });

    });

    describe('propertyNames', function ()
    {
        it('should array of property names and values', function ()
        {
            expect(answer.propertyNames({name: 'Jan', age: 34})).toEqual([
                ['name', 'Jan'],
                ['age', 34]
            ]);
        });
        it('should array of indeks and values', function ()
        {
            expect(answer.propertyNames({item: 'book', comment: 'sample string'})).toEqual([
                [ 'item', 'book' ],
                [ 'comment', 'sample string' ]
            ]);
        });
    });

    describe('getVolume', function ()
    {
        it('should return volume of boxes in string array, last element should be sum of all volumes saved as number', function ()
        {
            expect(answer.getVolume(answer.boxlist)).toEqual(['box1 volume: 250', 'box2 volume: 98', 'box3 volume: 350', 698]);
        });

    });

    describe('changePropertyName', function ()
    {
        var propNamesBefore = [];
        var propNamesAfter = [];
        beforeEach(function ()
        {

            for (var ele in answer.person) {
                propNamesBefore.push(ele);
            }
            answer.changePropertyName(answer.person, 'age', 'newAge');
            for (var ele in answer.person) {
                propNamesAfter.push(ele);
            }
        });
        afterEach(function ()
        {
            propNamesBefore = [];
            propNamesAfter = [];
        });

        it('should change property name in object', function ()
        {
            expect(propNamesAfter).not.toEqual(propNamesBefore);
        });

        it('should change property age to newAge', function ()
        {
            expect(propNamesAfter).toEqual(['firstName', 'secondName', 'newAge']);
        });

        it('should return false if property not exist', function ()
        {
            expect(answer.changePropertyName(answer.person), 'height', 'width').toBe(false);
        });
    });

});