'use strict';

var tweetArchive = angular.module('tweetArchive', []).
		config(['$routeProvider', function($routeProvider) {
				$routeProvider.
						when("/", {templateUrl: "/static/partials/search.html", controller: "TweetListCtrl"}).
						when("/upload", {templateUrl: "/static/partials/upload.html", controller: "UploadCtrl"}).
						otherwise({redirectTo: "/"});
		}]);
