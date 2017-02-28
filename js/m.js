var app=angular.module('aaa',[]);
	     app.controller('show',function($scope,$http){
                 $http.get ('https://bird.ioliu.cn/joke/rand?type=text') .success(function(data) { 
                       $scope.arr=data.data.splice(0,7)
                 });
	     })
	     app.controller('show2',function($scope,$http){
		      $http.get('https://bird.ioliu.cn/joke/rand').success(function(data){ 
		             
		           $scope.arr2=data.data[0]
		           $scope.arr3=data.data.splice(1,4)         
		      })
		   
		      $scope.fnclick=function(){
		         $http.get('https://bird.ioliu.cn/joke/rand').success(function(data){ 
		              
		           $scope.arr2=data.data[0]
		           $scope.arr3=data.data.splice(1,4)         
		        })
		      }
		  })
	     app.controller('show3',function($scope,$http){
		      $http.get('https://bird.ioliu.cn/joke/rand').success(function(data){ 
		              
		           $scope.arr2=data.data[0]
		           $scope.arr3=data.data.splice(1,4)         
		      })
		   
		      $scope.fnclick3=function(){
		         $http.get('https://bird.ioliu.cn/joke/rand').success(function(data){ 
		            
		           $scope.arr2=data.data[0]
		           $scope.arr3=data.data.splice(1,4)         
		        })
		      }
		  })
