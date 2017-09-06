angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.code = "";
    $scope.name = "";
    $scope.address = "";
    $scope.latitude = "";
    $scope.longitude = "";
    
    $scope.newListing = function() {
      var newListing = { "code" : $scope.code,"name" : $scope.name,"address" : $scope.address,
          "coordinates" : {
              "latitude" : $scope.latitude,
              "longitude" : $scope.longitude
          }
      };
      $scope.listings.push(newListing);
      $scope.code = "";
      $scope.name = "";
      $scope.address = "";
      $scope.latitude = "";
      $scope.longitude = "";
    };
    
    $scope.deleteListing = function(ref) {
      let index = $scope.listings.indexOf(ref);
      if(index !== -1) {
        $scope.listings.splice(index, 1);
      }
      //checks to ensure you *can* splice
    };
    
    $scope.showDetails = function(ref) {
      $scope.info = {
        "latitude" : "",
        "longitude" : "",
        "addr" : ""
      };
      $scope.info = {
        "latitude" : ref.coordinates.latitude,
        "longitude" : ref.coordinates.longitude,
        "address" : ref.address
      };   
    };
  }
]);