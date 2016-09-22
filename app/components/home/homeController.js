(function(){
    'use strict';
    var app = angular.module('app', []);

    app.component('thumbNails', {
        // defines a two way binding in and out of the component
        bindings: {
            brand:'<'
        },
        // Load the template
        templateUrl: 'Garavaldi_Website/app/components/home/home.html',
        controller: function () {
            // A list of menus
            this.sneaker = {
                name: "Sneakers"
            };
            this.newyork ={
                name: "New York"
            };
        }
    });
})();