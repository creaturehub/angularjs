angular
  .module('filtersApp', [])
  .controller('FilterCtrl', [function() {
    this.amount = 1024;
    this.totalCost = 4906;
    this.name = 'Shyam Seshadri';
    this.startTime = new Date().getTime();
    this.obj = {test:'value', num:123};
    this.notes = [
      {label: 'FC Todo', type: 'chore', done: false},
      {label: 'FT Todo', type: 'task', done: false},
      {label: 'FF Todo', type: 'fun', done: true},
      {label: 'SC Todo', type: 'chore', done: false},
      {label: 'ST Todo', type: 'task', done: true},
      {label: 'SF Todo', type: 'fun', done: true},
      {label: 'TC Todo', type: 'chore', done: false},
      {label: 'TT Todo', type: 'task', done: false},
      {label: 'TF Todo', type: 'fun', done: false}
    ];
    this.sortOrder = ['+type', '-label'];

    this.filterOptions = {
      "string": '',
      "object": {done: false, label: 'C'},
      "function": function(note) {
        return note.type === 'task' && note.done === false;
      }
    };

    this.currentFilter = 'string';
    this.someTimeAgo = new Date().getTime() - (1000 * 60 * 60 * 4);
  }])
  .filter('timeAgo', [function() {
    var ONE_MINUTE = 1000 * 60;
    var ONE_HOUR = ONE_MINUTE * 60;
    var ONE_DAY = ONE_HOUR * 24;
    var ONE_MONTH = ONE_DAY * 30;

    return function(ts) {
      var currentTIme = new Date().getTime();
      var diff = currentTIme - ts;
      if (diff < ONE_MINUTE) {
        return 'seconds ago';
      } else if (diff < ONE_HOUR) {
        return 'minutes ago';
      } else if (diff < ONE_DAY) {
        return 'hours ago';
      } else if (diff < ONE_MONTH) {
        return 'days ago';
      } else {
        return 'months ago';
      }
    };
  }]);
