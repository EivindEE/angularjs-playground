'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
	.controller('ProfileCtrl', function ($scope, localStorageService) {
		$scope.user = localStorageService.get('user') || {};
		$scope.save = function () {
			var user = {
				'name' : $scope.user.name,
				'email': $scope.user.email,
				'tlf' : $scope.user.tlf,
				'address': $scope.user.address,
				'allowsMail': $scope.user.allowsMail
			};
			localStorageService.set('user', user);
		};
	});
