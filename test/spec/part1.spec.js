describe('partOne', function () {
    'use strict';

    var answer = window.partOne;

    describe('getDescendingNumbers', function () {
        it('should return string with numbers separated by spaces', function () {
            expect(answer.getDescendingNumbers(15, 1)).toEqual('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
        });

        it('should return false if start greater than stop', function () {
            expect(answer.getDescendingNumbers(1, 15)).toBeFalsy();
        });

    });

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(answer.upperCase('This is a sentence')).toBe('This Is A Sentence');
        });
        it('should not change upper case letter', function () {
            expect(answer.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
        });
        it('should not change punctuation', function () {
            expect(answer.upperCase('This is,m Hard')).toBe('This Is,m Hard');
        });
    });

    describe('invertString', function () {

        it('should return 1tseT', function () {
            expect(answer.invertString('Test1')).toEqual('1tseT');
        });

        it('should return dcba', function () {
            expect(answer.invertString('abcd')).toEqual('dcba');
        });
    });

});
