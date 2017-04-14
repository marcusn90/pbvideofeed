(function () {
    'use strict';

    angular.module('pbUtils')
        .filter(
            'pbNums',
            function () {
                return function ( input ) {
                    console.log(input)
                    let inp = Number(input);
                    let c = [
                        { v: 1000000000, l: 'B' },
                        { v: 1000000, l: 'M' },
                        { v: 1000, l: 'K' }
                    ];

                    for ( let i = 0; i < c.length; i++ ) {
                        // console.log(inp / c[i].v)
                        //TODO: improve presicion check
                        if ( inp / c[i].v >= 1 ) {
                            return (inp / c[i].v).toFixed(1) + c[i].l;
                        }
                    }

                    return inp;
                }
            }
        );
})();