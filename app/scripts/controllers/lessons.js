'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:LessonsCtrl
 * @description
 * # LessonsCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
	.controller('LessonsCtrl', function ($scope, localStorageService) {
	var storageName = 'lessons';
	$scope.lessonStore = localStorageService.get(storageName) || {};

	console.log('From local storage:');
	console.log($scope.lessonStore);

	$scope.instruments = [
		{
			'name':'Piano',
			'price': '20'
		},
		{
			'name':'Oboe',
			'price': '34'
		},
		{
			'name':'Guitar',
			'price': '10'
		},
		{
			'name':'Bass',
			'price': '50'
		},
		{
			'name':'Tuba',
			'price': '35'
		}
	];

	$scope.save = function () {
		var lessons = {
				'instrument' : $scope.lessonStore.instrument ,
				'numberOfLessons': $scope.lessonStore.numberOfLessons
			};
			localStorageService.set(storageName, lessons);
			console.log('From save():');
			console.log(lessons);
	};
});
