(function ()
{
    'use strict';
    window.partThree = {

        //(6)U¿ywaj¹c funkcji map() odejmij od ka¿dego elementu tablicy [10,12,7,45,23,99,17] jego po³owê.

        subOneQuarter: function (tab)
        {
            tab = tab.map(function (element)
            {
                return element - (element / 2);
            });
            return tab;
        },

        //(7) Napisz funkcjê, która zwraca litery w alfabetycznej kolejnoœci
        alphabetOrder: function (str)
        {
            return str.split('').sort().join();
        }
    };
})();