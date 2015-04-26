describe('partTwo', function () {
    'use strict';

    var answer = window.partTwo;

    describe('maxArray', function () {

        it('should return max element from array', function () {
            expect(answer.maxArray([2, 5, 7, 1, 3, 20, 10, 19])).toEqual(20);
        });

    });

    describe('squareOdd', function () {
        it('should return square the odd numbers', function () {
            expect(answer.squareOdd([1, 2, 3, 4])).toEqual([1, 2, 9, 4]);
        });

        it('should return empty array', function () {
            expect(answer.squareOdd([])).toEqual([]);
        });

    });

});
