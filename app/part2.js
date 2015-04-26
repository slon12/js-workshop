(function ()
{
    'use strict';
    window.partTwo = {

        // (4) Napisz funkcje zwracajaca maksymalny element z tablicy
        // Input: [5,4,3,9,1]
        // Output: 9
        maxArray: function (tab)
        {
            var max = tab[0];
            for (var i = 0; i < tab.length; i++) {
                if (max < tab[i]) {
                    max = tab[i];
                }
            }
            return max;

        },

        // (5) Napisz funkcje podnosz¹c¹ liczby nieparzyste podane w tablicy do kwadratu
        // Input: tab =  [1,2,3,4]
        // Output: [1,2,9,4]
        squareOdd: function (tab)
        {
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] % 2 !== 0) {
                    tab[i] *= tab[i];
                }
            }
            return tab;
        }

    };
})();