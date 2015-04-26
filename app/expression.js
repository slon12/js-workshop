(function () {
    'use strict';
    window.expression = {

        // (1) Napisz funkcję, która z podanego stringa zwraca string złożony tylko z liter
        returnOnlyLetter: function (str) {
            var tmp = str.split('');
            var pattern = /[A-Za-z]/;
            var result = [];

            for (var i = 0; i < tmp.length; i++) {
                if (pattern.test(tmp[i])) {
                    result.push(tmp[i]);
                }
            }
            return result.join('');

        },

        //(2) Napisz funkcję, która zweryfikuje podany adres e-mail jest poprawny
        // -nazwa konta może zawierać tylko litery liczby, '_', '.', '-'z
        // -po nazwie użytkownika musi występować znak @
        // -po @ przynajmniej jedna kropka(.) pomiędzy domeną a końcówką adresu
        isEmail: function (email) {
            var pattern = /[\w_.-]+@[\w_.-]+\.[a-z]{2,3}/i;
            //var pattern = /[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}/i;
            if (pattern.test(email)) {
                return true;
            } else {
                return false;
            }
        },

        // (3) Napisz funkcję która zwraca tablicę kodów pocztowych (przykładowy wzor: 11-020) znalezione w tekście
        findPostCode: function (str) {
            var postPattern = /[0-9]{2}-[0-9]{3}/g;
            return str.match(postPattern);
        }
    };

})();
