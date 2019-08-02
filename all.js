var app = angular.module('myApp', ["ngRoute"])

               app.config(function ($routeProvider) {
                $routeProvider
                .when("/electricity", {
                templateUrl: "electricity.htm",
                controller: "aaController"
                })
                .when("/mobile", {
                    templateUrl: "mobile.html",
                    controller: "bbController"
                })

    
})

// 				app.controller('aaController', function($scope) 
// {
//     $scope.serviceProviders = ["Reliance", "Tata Power", "Torrent"];

app.controller('aaController', function($scope){
    console.log("in control")
            $scope.elecbiller_list = []
            billers.forEach(function(biller){
            if( biller.biller_category =="Electricity")
                {
                if(!($scope.elecbiller_list.includes(biller.biller_name)))
                    $scope.elecbiller_list.push(biller.biller_name);
                }
                    
            })
            console.log($scope.elecbiller_list)
    
})

               

// app.controller('bbController', function($scope){
//     console.log(billers)
//             $scope.elecbiller_list = []
//             billers.forEach(function(biller){
//             if( biller.biller_category =="Loan")
//                 {
//                 if(!($scope.elecbiller_list.includes(biller.biller_name)))
//                     $scope.elecbiller_list.push(biller.biller_name);
//                 }
                    
//             })
    
// })
    
    
// var myApp = angular.module('myApp2',[])
// 		mainApp.controller('controller_biller', function($scope){
// 			//console.log(billers)
					
// 					$scope.category = 'None';
// 					$scope.test1 = function (category) {
// 						$scope.category = category;
// 						$scope.biller_list = [];
// 						billers.forEach(function(biller){
// 						if(biller.biller_category == category)	{

// 							if(!($scope.biller_list.includes(biller.biller_name)))
//                    				 $scope.biller_list.push(biller.biller_name);
// 							//$scope.biller_list.push(biller.biller_name);	
// 						}												
// 					})	

// 					}
					
// 		})
               