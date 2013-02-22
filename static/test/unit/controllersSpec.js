'use strict';

describe("Tweet archive search controllers", function() {
	describe("TweetListCtrl", function() {
		var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET("/search?q=mapnik").
				respond({tweets: [{text: "First"}, {text: "Hello, world"}]})
			scope = $rootScope.$new();
			ctrl = $controller(TweetListCtrl, {$scope: scope});
		}));

		it("should create tweets model w/ 2 tweets fetched from xhr", function() {
			expect(scope.tweets).toBeUndefined();
			scope.query = "mapnik";
			scope.search();
			$httpBackend.flush();
			expect(scope.tweets).toEqual([
				{text: "First"}, {text: "Hello, world"}
			]);
		})
	});
});
