'use strict';

/* Controllers */

function TweetListCtrl($scope, $http, $location) {
	$scope.$watch(function() { return $location.search(); }, function(newVal, oldVal, scope) {
		var q = newVal.q;
		if (q) {
			$scope.lastQuery = q;
			$scope.query = null;
			queryTweets(q);
		}
	}, true);

	$scope.search = function() {
		$location.search({q: $scope.query});
	};

	var queryTweets = function(query) {
		$scope.error = null;
		$http.get("/search?q=" + query)
			.success(function(data) {
				$scope.tweets = (data.tweets || []);
			})
			.error(function() {
				$scope.lastQuery = null;
				$scope.error = "There was an error";
			});
	};

	$scope.location = $location;
}

function UploadCtrl($scope, $location) {
	$scope.location = $location;
}
