(function () {
    'use strict';
    window.partOne = {

        // (1)Napisz funkcję która zwróci liczby z podanego zakresu w kolejności malejącej (typ zwracany: string)
        // Input: start 5 , stop = 1
        // Output: '5 4 3 2 1'
        getDescendingNumbers: function (start, stop) {
            if (start < stop) {
                return false;
            }
            var descendingNumbers = start;
            for (var i = start - 1; i >= stop; i--) {
                descendingNumbers = descendingNumbers + ' ' + i;
            }
            return descendingNumbers;
        },

        // (2) Napisz funkcję, która zamienia pierwszą literę każdego słowa na dużą.
        // Input: str = 'ala ma kota' ,
        // Output: 'Ala Ma Kota'
        upperCase: function (str) {
            var tmp = str.split(' ');
            var tmpArray = [];
            for (var i = 0; i < tmp.length; i++) {
                tmpArray.push(tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1));
            }
            return tmpArray.join(' ');
        },

        // (3) Napisz funkcje pobierajaca string i zwracajaca go w odwrotnej kolejnosci
        // Input: 'Domek'
        // Output: 'kemoD'
        invertString: function (str) {
            var invStr = '';
            for (var i = 1; i <= str.length; i++) {
                invStr += str.charAt(str.length - i);
            }
            return invStr;
        }

    };
})();
