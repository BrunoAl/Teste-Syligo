angular.module('SyligoTesteApp', ['ngRoute'])
	.controller('msgController', ['$http', '$scope', function($http, $scope){
		var self = this;
		var data = $http.jsonp()
		this.msgData = {nome: 'nome', mensagem: 'mensagem'};
		
	}])
	.controller('submitData', ['$http', '$scope', function($http, $scope){
		$scope.submit = function() {

		}
		var parameter = JSON.stringify({msgData});
   		 $http.post('/api/msgSomeone', parameter)
   	 		.success(function() {
        		console.log(msgData);
     		 })
    		.error(function() {
	       	    console.log("post failed ");
     	 })
	}])