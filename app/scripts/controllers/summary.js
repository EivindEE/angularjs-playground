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
		if ($scope.lessonStore.instrument) {
			$scope.lessonStore.instrument = JSON.parse($scope.lessonStore.instrument);
		}

		var billingStorageName = 'billing';
		$scope.billingStore = localStorageService.get(billingStorageName) || {};

		$scope.totalCost = function (number, price) {
			return number * price;
		};

		$scope.allDataPresent = function () {
			console.log('userdata:' + $scope.userDataPresent());
			console.log('billingdata:' + $scope.billingDataPresent());
			console.log('lessondata:' + $scope.lessonDataPresent());
			return (
				$scope.userDataPresent() &&
				$scope.billingDataPresent() &&
				$scope.lessonDataPresent()
			);
		};
		$scope.userDataPresent = function () {
			return (
				$scope.user &&
				// Check that all the user fields are set
				$scope.user.name &&
				$scope.user.email &&
				$scope.user.tlf &&
				$scope.user.address
			);
		};

		$scope.billingDataPresent = function () {
			return (
				$scope.billingStore &&

				// Check that all the billing fields are set
				$scope.billingStore.name &&
				$scope.billingStore.cardType &&
				$scope.billingStore.cardNumber
			);
		};

		$scope.lessonDataPresent = function () {
			return (
				$scope.lessonStore &&

				// Check that all the lesson fields are set
				$scope.lessonStore.instrument &&
				$scope.lessonStore.numberOfLessons
			);
		};

		$scope.missingUserFields = function () {
			var missingFields = [];

			if (!$scope.user.name) {
				missingFields.push('Username');
			}

			if (!$scope.user.email) {
				missingFields.push('Email');
			}

			if (!$scope.user.tlf) {
				missingFields.push('Phone number');
			}

			if (!$scope.user.address) {
				missingFields.push('Address');
			}

			return missingFields;
		};

		$scope.missingBillingFields = function () {
			var missingFields = [];

			if (!$scope.billingStore.name) {
				missingFields.push('Cardholder name');
			}

			if (!$scope.billingStore.cardType) {
				missingFields.push('Card type');
			}

			if (!$scope.billingStore.cardNumber) {
				missingFields.push('Card number');
			}

			return missingFields;
		};

		$scope.missingLessonFields = function () {
			var missingFields = [];

			if (!$scope.lessonStore.instrument) {
				missingFields.push('Instrument');
			}

			if (!$scope.lessonStore.numberOfLessons) {
				missingFields.push('Number of lessons');
			}

			return missingFields;
		};
  });
