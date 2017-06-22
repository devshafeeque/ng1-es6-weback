class samplePageCtrl {
  constructor ($scope, $state, appService) {
    this.myVar = 'This is from controller';
    // this.appService = appService;
    // this.appService.serviceVar = "Changed from sample page";
  }
}

let samplePage = {
  bindings: {},
  templateUrl: require('./sample-page.html'),
  controller: samplePageCtrl
};

samplePage.$inject = ['$scope', '$state', 'appService']; // Inject
export default samplePage;
