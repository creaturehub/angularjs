angular
  .module('httpGetExampleApp', [])
  .controller('MainCtrl', ['$http', function($http) {
    var self = this;
    
    self.books = [];

    $http.get('/api/book').then(function(res) {
      self.books = res.data;
    }, function(err) {
      console.err('Error while fetching books.');
    });
  }]);
