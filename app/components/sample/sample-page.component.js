let samplePage = {
  bindings: {},
  templateUrl: require('./sample-page.html'),
  controller: class appCtrl {
    constructor($scope, $state, appService) {
      this.myVar = "This is from controller";
      //this.appService = appService;
      //this.appService.serviceVar = "Changed from sample page"; 
    }
  }
}

samplePage.$inject = ['$scope', '$state', 'appService']; // Inject
export default samplePage;