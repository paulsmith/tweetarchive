'use strict';

describe("Tweet archive search controllers", function() {
	describe("TweetListCtrl", function() {
		var rootScope, scope, ctrl, $httpBackend, location;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $location) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET("/search?q=mapnik").
				respond({tweets: [{text: "First"}, {text: "Hello, world"}]})
			scope = $rootScope.$new();
			rootScope = $rootScope;
			ctrl = $controller(TweetListCtrl, {$scope: scope});
			location = $location;
		}));

		it("should create tweets model w/ 2 tweets fetched from xhr", function() {
			expect(scope.tweets).toBeUndefined();
			scope.query = "mapnik";
			scope.search();
			rootScope.$digest();
			$httpBackend.flush();
			expect(scope.tweets).toEqual([
				{text: "First"}, {text: "Hello, world"}
			]);
		});

		it("should set the q search param to the query term", function() {
			expect(location.search()).toEqual({});
			scope.query = "mapnik";
			scope.search();
			expect(location.search()).toEqual({q: "mapnik"});
		});
	});
});
