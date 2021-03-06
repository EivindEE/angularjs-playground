'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
	.module('yoApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'LocalStorageModule',
		'credit-cards'

	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/profile', {
				templateUrl: 'views/profile.html',
				controller: 'ProfileCtrl',
				controllerAs: 'profile'
			})
			.when('/billing', {
				templateUrl: 'views/billing.html',
				controller: 'BillingCtrl',
				controllerAs: 'billing'
			})
			.when('/lessons', {
				templateUrl: 'views/lessons.html',
				controller: 'LessonsCtrl',
				controllerAs: 'lessons'
			})
			.when('/summary', {
				templateUrl: 'views/summary.html',
				controller: 'SummaryCtrl',
				controllerAs: 'summary'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.config(['localStorageServiceProvider', function(localStorageServiceProvider){
		localStorageServiceProvider.setPrefix('myEvent');
}]);
