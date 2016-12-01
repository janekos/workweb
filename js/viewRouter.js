angular.module('jovfinance', ['ngRoute', 'ngMaterial'])
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "./views/main.html"
        })
        .when("/us", {
            templateUrl : "./views/us.html"
        })
        .when("/services", {
            templateUrl : "./views/services.html"
        })
        .when("/price", {
            templateUrl : "./views/price.html"
        })
        .when("/contact", {
            templateUrl : "./views/contact.html"
        });
    })
    .controller('mainPage', function($scope){
    
        $scope.activeLang = "ee";   
        $scope.inactiveLang1 = "ru";   
        $scope.inactiveLang2 = "gb";   
    
        $scope.responsive = function(){        
            var x = $('.navContent');
            if (x.hasClass("responsive")) {
                x.removeClass("responsive");
            } else {
                x.addClass("responsive");
            }
        };
        
        $('.navWrapper').click(function(e){
            $('.nav-item').each(function(){
                if($(this).hasClass('selected')){
                    $(this).removeClass('selected');
                }
            });
            
            if(e.target.id != "logo" && e.target.class != "langshid" && e.target.id != "iconin"){
                try{
                    $('#'+e.target.id).addClass("selected");
                }catch(err){}
            }
        });
    
        $("#lang").click(function(){
            if($(".langshid").css("display") == "none"){
                $(".langshid").show(100);
            }else{
                $(".langshid").hide(100);
            }
        });
    });