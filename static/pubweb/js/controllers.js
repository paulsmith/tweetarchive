'use strict';

/* Controllers */

function TweetListCtrl($scope, $http) {
	$http.get("/search?q=mapnik").success(function(data) {
		$scope.tweets = data.tweets;
	});
}

//TweetListCtrl.$inject = ['$scope', '$http'];
