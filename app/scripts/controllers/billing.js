'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:BillingCtrl
 * @description
 * # BillingCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
	.controller('BillingCtrl', function ($scope, localStorageService) {
		var storageName = 'billing';


		$scope.save = function () {
			var billing = {
				'name' : $scope.billingInformation.name,
				'cardType': $scope.billingInformation.cardType,
				'cardNumber' : $scope.billingInformation.cardNumber
			};
			localStorageService.set(storageName, billing);
		};

				$scope.billingInformation = localStorageService.get(storageName) || {};
});
