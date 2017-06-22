class homeCtrl {
  constructor ($scope, $state, appService) {
    this.homeVar = 'This text is from home controller';
    appService.serviceVar = 'Changed from Home';
  }

  myFunc () {
    this.ctrlVar = "some value";
  }
}

let home = {
  bindings: {},
  templateUrl: require('./home.html'),
  controller: homeCtrl,
  controllerAs: 'homeCtrl'
};

home.$inject = ['$scope', '$state', 'appService'];
export default home;
