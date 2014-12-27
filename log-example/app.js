angular
  .module('logExampleApp', [])
  .controller('MainCtrl', ['$log', function($log) {
    var self = this;

    self.logStuff = function() {
      $log.log('The button was pressed.');
    };
  }]);
