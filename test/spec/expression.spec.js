describe('partOne', function () {
    'use strict';

    var answer = window.expression;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answer.returnOnlyLetter('a4l1f5a')).toBe('alfa');
        });
        it('should return only letter', function () {
            expect(answer.returnOnlyLetter('A4l1f5a')).toBe('Alfa');
        });
    });

    describe('isEmail', function () {
        it('should return true when email is OK', function () {
            expect(answer.isEmail('test-email@gmail.com')).toBe(true);
        });
        it('should return false when email is not OK', function () {
            expect(answer.isEmail('11@o2.pl')).toBe(true);
        });
    });

    describe('findPostCode', function () {
        it('should return array of posts code', function () {
            expect(answer.findPostCode('Kody pocztowe to np. 14-223 albo 13-100 ...')).toEqual(['14-223', '13-100']);
        });
    });

});
