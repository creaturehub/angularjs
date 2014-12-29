angular
  .module('httpPostExampleApp', [])
  .controller('MainCtrl', ['$http', function($http) {
    var self = this;

    self.books = [];

    var fetchBooks = function() {
      return $http.get('/api/book').then(function(res) {
        self.books = res.data; 
      }, function(err) {
        console.err('Error while fetching books.');
      });
    };

    fetchBooks();

    self.add = function() {
      $http.post('/api/book', self.newBook)
        .then(fetchBooks)
        .then(function() {
          self.newBook = {};
        });
    };
  }]);
