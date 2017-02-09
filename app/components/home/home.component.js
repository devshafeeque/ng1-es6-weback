let home = {
  bindings: {},
  templateUrl: require('./home.html'),
  controller: class appCtrl {
    constructor($scope, $state) {
      this.homeVar = "This text is from home controller";
    }
  },
  controllerAs: 'homeCtrl'
}

export default home;