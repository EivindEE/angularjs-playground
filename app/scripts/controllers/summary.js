'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('SummaryCtrl', function ($scope, localStorageService) {
		var userStorageName = 'user';
		$scope.user = localStorageService.get(userStorageName) || {};

		var lessonsStorageName = 'lessons';
		$scope.lessonStore = localStorageService.get(lessonsStorageName) || {};
		$scope.lessonStore.instrument = JSON.parse($scope.lessonStore.instrument);

		var billingStorageName = 'billing';
		$scope.billingStore = localStorageService.get(billingStorageName) || {};

		$scope.totalCost = function (number, price) {
			console.log(number);
			console.log(price);
			return number * price;
		};
  });
