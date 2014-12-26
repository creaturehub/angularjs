angular
  .module('simpleFormApp', [])
  .controller('MainCtrl', [function() {
    var self = this;

    self.submit = function() {
      alert('User clicked submit with\n\nUsername: ' + self.user.username + '\nPassword: ' + self.user.password);
    };
  }]);
