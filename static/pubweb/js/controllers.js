'use strict';

/* Controllers */

function TweetListCtrl($scope, $http) {
	$scope.query = "";

	$scope.search = function() {
		$http.get("/search?q=" + $scope.query).success(function(data) {
			$scope.tweets = data.tweets;
		});
	}
}

//TweetListCtrl.$inject = ['$scope', '$http'];
