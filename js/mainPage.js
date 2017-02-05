(function() {
    'use strict';

    angular.module('jovfinance')    
        .controller('MainPage', function($scope){
            /*
            $scope.activeLang = "ee";   
            $scope.inactiveLang1 = "ru";   
            $scope.inactiveLang2 = "gb";   
            */
        
            var nW = $(".navWrapper");
            var nS = "navScrolled";
            var hdr = nW.height();
            var mV = $("#mainView");
            var li = $('#logo');
            var lc = $('.logo');
        
            mV.css({paddingTop: hdr +'px'});
            
            $(window).scroll(function() {
                if( $(this).scrollTop() > hdr ) {
                    nW.addClass(nS);
                    lc.addClass("logoSmall");
                    li.removeClass("logoInit");
                    li.addClass("logoDown");
                } else {
                    nW.removeClass(nS);
                    lc.removeClass("logoSmall");
                    li.removeClass("logoDown");
                    li.addClass("logoInit");
                }
            });
        });
}());