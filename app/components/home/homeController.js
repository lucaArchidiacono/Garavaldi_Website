(function(){
    'use strict';
    var app = angular.module('app', []);

    app.component('thumbNails', {
        // defines a two way binding in and out of the component
        bindings: {
            brand:'<'
        },
        // Load the template
        templateUrl: './app/components/home/home.html',
        controller: function () {
            // A list of menus
            this.newyork =[{
                    link: "assets/img/beatifulManhattan.jpg"
                },
                {
                    link: "assets/img/brooklynConnection.jpg"
                },
                {
                    link: "assets/img/famousTaxi.jpg"
                },
                {
                    link: "assets/img/timeSquare.jpg"
                }
            ];
        }
    });
})();