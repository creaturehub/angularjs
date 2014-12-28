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
  }])
  .config(['$httpProvider', function($httpProvider) {
    // Every POST data becomes jQuery styles
    $httpProvider.defaults.transformRequest.push(function(data) {
      var requestStr;
      if (data) {
        data = JSON.parse(data);
        for (var key in data) {
          if (requestStr) {
            requestStr += '&' + key + '=' + data[key];
          } else {
            requestStr = key + '=' + data[key];
          }
        }
      }
      return requestStr;
    });

    // Set the content type to be FORM type for all post requests
    // This does not add it for GET requests.
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }]);
