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
		var storageName = 'user';
		$scope.user = localStorageService.get(storageName) || {};
		$scope.save = function () {
			var user = {
				'name' : $scope.user.name,
				'email': $scope.user.email,
				'tlf' : $scope.user.tlf,
				'address': $scope.user.address,
				'allowsMail': $scope.user.allowsMail
			};
			localStorageService.set(storageName, user);
		};
	});
