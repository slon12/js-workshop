describe('prot', function ()
{
    'use strict';

    var answer = window.prot;

    describe('Box Constructor and prototype functions ', function ()
    {

        var box6 = Object.create(answer.box1);

        beforeEach(function ()
        {
            answer.box1.addContent("bear");
            answer.box1.addContent("cat");
            answer.box1.addContent("bat");
            answer.box1.addContent("mouse");

            answer.box2.addContent("lion");
            answer.box2.addContent("tiger");

            answer.box3.addContent("bird");
            answer.box3.addContent("elephant");

            box6.id = 6;
            box6.setWidth("abc");
        });

        afterEach(function ()
        {
            answer.box1.empty();
            answer.box2.empty();
            answer.box3.empty();
            answer.box4.empty();
        });

        describe('getContent', function ()
        {

            it('should return array of box content', function ()
            {
                expect(answer.box1.getContent()).toEqual(["bear", "cat", "bat", "mouse"]);
                expect(answer.box2.getContent()).toEqual(["lion", "tiger"]);
                expect(answer.box3.getContent()).toEqual(["bird", "elephant"]);
            });

            it('should return false if box is empty', function ()
            {
                expect(answer.box4.getContent()).toBe(false);
                answer.box1.empty();
                expect(answer.box1.getContent()).toBe(false);
                expect(answer.box2.getContent()).not.toBe(false);
            });
        });

        describe('valueOf', function ()
        {

            it('should return volume of box', function ()
            {
                expect(answer.box1.valueOf()).toEqual(8);
                expect(answer.box2.valueOf()).toEqual(60);
                expect(answer.box3.valueOf()).toEqual(504);
                expect(answer.box4.valueOf()).toEqual(120);
            });

            it('should be false if parameters is not a number', function ()
            {
                expect(answer.box5.valueOf()).toBe(false);
                expect(box6.valueOf()).toBe(false);
            });

        });

        describe('toString', function ()
        {
            it('should return :Box #id Volume:volume\\nContain:\\nlistOfContent each element of list in new line', function ()
            {
                expect(answer.box1.toString()).toEqual("Box #1 Volume:8\nContain:\nbear\ncat\nbat\nmouse");
                expect(answer.box2.toString()).toEqual("Box #2 Volume:60\nContain:\nlion\ntiger");
                expect(answer.box3.toString()).toEqual("Box #3 Volume:504\nContain:\nbird\nelephant");
                expect(answer.box4.toString()).toEqual("Box #4 Volume:120\nContain:\nnothing");
            });
        });

        describe('searchInContent', function ()
        {
            it('should return searching content or false if content not exist', function ()
            {
                expect(answer.box1.searchInContent("bat")).toEqual("bat");
                expect(answer.box1.searchInContent(2)).toBe(false);
                expect(answer.box2.searchInContent("tiger")).toEqual("tiger");
            });
        });

        describe('appendContent', function ()
        {
            it('should add content to box from another box', function ()
            {
                answer.box1.appendContent(answer.box4);
                answer.box2.appendContent(answer.box1);
                expect(answer.box1.getContent()).toEqual(['bear', 'cat', 'bat', 'mouse']);
                expect(answer.box2.getContent()).toEqual(['lion', 'tiger', 'bear', 'cat', 'bat', 'mouse']);

            });
            it('should not change appended object', function ()
            {
                var tmpBoxContent1 = answer.box3.container;
                answer.box4.addContent("parrot");
                var tmpBoxContent2 = answer.box4.container;
                answer.box1.appendContent(answer.box3);
                answer.box2.appendContent(answer.box4);
                expect(answer.box3.getContent()).toEqual(tmpBoxContent1);
                expect(answer.box4.getContent()).toEqual(tmpBoxContent2);
            });
        });

    });
});