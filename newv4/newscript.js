var app = angular.module("Demo", ["ngRoute"])
            app.config(function($routeProvider) {
                    $routeProvider
                    .when("/electricity", {
                        templateUrl: "electricity.html",
                        controller: "aaController"
                    })
                    .when("/mobile", {
                        templateUrl: "mobile.html",
                        controller: "aaController"
                    })

                });
                    


                    app.controller("aaController", function ($scope) {
                       
                        $scope.category = 'None';
                        $scope.final_biller_list = [];					
                        $scope.test1 = function (category) {
                          this.category = category;
                          console.log(category);
                          console.log($scope.category);
                          $scope.biller_list = [];
                          $scope.country_list = [];
                          billers.forEach(function(biller){
                          if(biller.biller_category == category)	{

                            if(!($scope.biller_list.includes(biller.biller_name)))
                              $scope.biller_list.push(biller.biller_name);
                                
                            if(!($scope.country_list.includes(biller.biller_reg_state)) && !(biller.biller_reg_state == undefined)){
                                $scope.country_list.push(biller.biller_reg_state);
                            }
                            
                          }												
                        })
                        //console.log($scope.country_list);	

                        $scope.final_biller_list =$scope.biller_list;
                        }
                    

                        $scope.selectedBiller = '';
                        $scope.find_auth = function (selectedBiller) 
                            {
                            $scope.selectedBiller = selectedBiller;
                            $scope.auth_list = [];
                            $scope.regex_list = [];
                            $scope.logo = 'None';
                            $scope.bill_copy ='None';   

                            billers.forEach(function(biller)
                            {
                                if(biller.biller_name == selectedBiller)	
                                {
                                //console.log(biller.authenticators[0].regex);
                                for(var i=0;i<biller.authenticators.length;i++)
                                {
                                
                                    if(!($scope.auth_list.includes(biller.authenticators[i].parameter_name)))
                                    {                                 
                                    $scope.auth_list.push(biller.authenticators[i].parameter_name);
                                    }

                                    if(!($scope.regex_list.includes(biller.authenticators[i].regex)) )
                                    {
                                    $scope.regex_list.push(biller.authenticators[i].regex);
                                    }	
                                }
                                                                
                                    $scope.logo = biller.biller_logo;
                                    $scope.bill_copy = biller.biller_bill_copy;
                                                    
                                    //console.log($scope.logo);
                                            }												
                                        })
                                                //console.log($scope.regex_list);	

                                    }



                        $scope.location = 'None';
                        $scope.find_loc_biller = function (location) {
                          //console.log($scope.category );
                          $scope.location = location;
                         // console.log($scope.location);
                          $scope.biller_list = [];
  
                          billers.forEach(function(biller){
                          if(biller.biller_category == $scope.category)	{
                            if(biller.biller_reg_state == location){
  
                              if(!($scope.biller_list.includes(biller.biller_name)))
                                $scope.biller_list.push(biller.biller_name);
                                  
                            }
                          }												
                        })	
                        console.log($scope.biller_list);
                        $scope.final_biller_list =$scope.biller_list;
                        }
                    
                   
           
            });