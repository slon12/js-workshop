describe('partThree', function ()
{
    'use strict';

    var answer = window.partThree;

    describe('subOneQuarter', function ()
    {
        it('should return string with numbers separated by spaces', function ()
        {
            expect(answer.subOneQuarter([10, 12, 7, 45, 23, 99, 17])).toEqual([ 5, 6, 3.5, 22.5, 11.5, 49.5, 8.5 ]);
        });
    });

    describe('alphabetOrder', function ()
    {
        it('should return letters in alphabetical order', function ()
        {
            expect(answer.alphabetOrder('alfa')).toBe('a,a,f,l');
        });

    });


});