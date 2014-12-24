angular
  .module('controllerClickMessageApp', [])
  .controller('MainCtrl', [function() {
    var self = this;

    self.message = 'Hello ';

    self.changeMessage = function() {
      self.message = 'Goodbye'
    };
  }]);
