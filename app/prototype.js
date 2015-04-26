(function ()
{
    'use strict';

    function Box(id, width, height, length)
    {
        this.id = id;
        this.width = width;
        this.height = height;
        this.length = length;
        this.container = [];
    }

    // Stwórz prototyp dla obiektów Box
    Box.prototype = {

        // (1) Napisz funkcje ustawiajacą width
        setWidth: function (width)
        {
        },
        // (2) Napisz funckje ustawiajaca height
        setHeight: function (height)
        {
        },
        // (3) Napisz funkcje ustawiajaca length
        setLength: function (length)
        {
        },
        // (4) Napisz funkcje pozwalajaca dodac zawartosc do box'a
        addContent: function (conntentToAdd)
        {
        },
        // (5) Napisz funkcje zwracajaca zawartość box'a
        getContent: function ()
        {

        },
        // (6) Napisz funkcje valueOf zwracającą objetosc box'a
        valueOf: function ()
        {

        },
        // (7) Napisz funkcje toString zwracającą string:
        //Box #id Volume:volume
        //Contain:
        //listOfContent
        //Każdy element z listy w nowej lini
        toString: function ()
        {

        },

        // (8) Napisz funkcje opróżniającą box
        empty: function ()
        {
        },

        // (9) Napisz funkcje wyszukujaca element w zawartosci box'a
        searchInContent: function (name)
        {

        },

        // (10) Napisz funckej dodającą zawartość z innego box'a
        appendContent: function (boxToCopy)
        {

        }

    };

    window.prot = {
        box1: new Box(1, 2, 2, 2),
        box2: new Box(2, 3, 4, 5),
        box3: new Box(3, 9, 8, 7),
        box4: new Box(4, 6, 5, 4),
        box5: new Box('a', 'b', 2, 9)

    };
})();
