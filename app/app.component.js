let mainApp = {
  bindings: {},
  templateUrl: require('./app.html'),
  controller: class appCtrl {
    constructor($scope, $state) {
      this.$state = $state;
    }
  }
}

mainApp.$inject = ['$scope', '$state'];
export default mainApp;