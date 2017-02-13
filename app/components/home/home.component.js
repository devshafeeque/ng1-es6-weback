let home = {
  bindings: {},
  templateUrl: require('./home.html'),
  controller: class appCtrl {
    constructor($scope, $state, appService) {
      this.homeVar = "This text is from home controller";
      appService.serviceVar = "Changed from Home";
    }
  },
  controllerAs: 'homeCtrl'
}
home.$inject = ['$scope', '$state', 'appService'];
export default home;