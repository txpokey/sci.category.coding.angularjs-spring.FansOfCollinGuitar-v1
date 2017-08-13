(function() {
    var app = angular.module('guitarDept', ['guitarDept-directives', 'ngAnimate']);

    app.controller('HeaderController', [ '$http' , function($http){
        var header = this;
        header.carouselSlideDeck = [0,1,2];
        console.log("controller loaded:> " + header.carouselSlideDeck);
        header.targets = [];
        $http.get('../json/header-controller.json').then(function(response){
            header.targets = response.data;
        },function (badResult){
            console.log(badResult)
        }) ;
        // console.log("running inside of controller");
        // $('.carousel').carousel({
        //     interval: 300
        // });
        // $('.carousel').carousel('cycle');
        // console.log("controller completing");
    }]);
    console.log("running outside of controller");

    // app.controller('ReviewController', function() {
    //     this.review = {};
    //
    //     this.addReview = function(product) {
    //         product.reviews.push(this.review);
    //
    //         this.review = {};
    //     };
    // });
})();