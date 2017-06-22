class appCtrl {
  constructor ($scope, $state, appService) {
    this.$state = $state;
    this.appService = appService;
  }

  testFunction () {
    this.newVar = 'test value';
  }
}

let mainApp = {
  bindings: {},
  templateUrl: require('./app.html'),
  controller: appCtrl
};

mainApp.$inject = ['$scope', '$state', 'appService'];
export default mainApp;
