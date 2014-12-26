angular
  .module('formValidationApp', [])
  .controller('MainCtrl', [function() {
    var self = this;

    self.submit = function() {
      alert('User clicked submit with\n\n' + 
              'Email: ' + self.user.email +
              '\nUsername: ' + self.user.username + 
              '\nPassword: ' + self.user.password);
    };
  }]);
