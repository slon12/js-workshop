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

    //Stwórz prototyp dla obiektów Box
    Box.prototype = {

        //Napisz funkcje ustawiajacą width
        setWidth: function (width)
        {
            this.width = width;
        },
        //Napisz funckje ustawiajaca height
        setHeight: function (height)
        {
            this.height = height;
        },
        //Napisz funkcje ustawiajaca length
        setLength: function (length)
        {
            this.lenght = length;
        },
        //Napisz funkcje pozwalajaca dodac zawartosc do box'a
        addContent: function (conntentToAdd)
        {
            this.container.push(conntentToAdd);
        },
        //Napisz funkcje zwracajaca zawartość box'a
        getContent: function ()
        {
            if (0 < this.container.length) {
                return this.container;
            } else {
                return false;
            }
        },
        //Napisz funkcje valueOf aby zwracala objetosc box'a
        valueOf: function ()
        {
            if ('number' === typeof this.width && 'number' === typeof this.height && 'number' === typeof this.length) {
                return this.width * this.height * this.length;
            } else {
                return false;
            }
        },
        //Napisz funkcje toString aby zwracala string:
        //Box #id Volume:volume
        //Contain:
        //listOfContent
        //Każdy element z listy w nowej lini
        toString: function ()
        {
            var listOfContent = '';
            if (0 !== this.container.length) {
                for (var i = 0; this.container.length > i; i++) {

                    if (this.container.length - 1 !== i) {
                        listOfContent = listOfContent + this.container[i] + '\n';
                    } else {
                        listOfContent = listOfContent + this.container[i];
                    }
                }
            } else {
                listOfContent += 'nothing';
            }

            return 'Box #' + this.id + ' Volume:' + this.valueOf() + '\nContain:\n' + listOfContent;
        },

        //Napisz funkcje opróżniającą box
        empty: function ()
        {
            this.container = [];
        },

        //Napisz funkcje wyszukujaca element w zawartosci box'a
        searchInContent: function (name)
        {
            for (var i = 0; this.container.length > i; i++) {
                if (name === this.container[i]) {
                    return this.container[i];
                }
            }
            return false;
        },

        //Napisz funckej dodającą zawartość z innego box'a
        appendContent: function (boxToCopy)
        {
            for (var i = 0; boxToCopy.container.length > i; i++) {
                this.container.push(boxToCopy.container[i]);
            }
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