(function() {
    'use strict';

    angular.module('jovfinance')    
        .controller('welcome', function($scope){
            var winH = window.innerHeight;
            var nW = $(".navWrapper");
            var hdr = nW.height();
            var jumb = $('.jumbotron');
            var jumbH = winH-hdr;         
        
            /*Onload */
            $('.jumbotron').css({"height": jumbH+"px"});
        }); 
}());