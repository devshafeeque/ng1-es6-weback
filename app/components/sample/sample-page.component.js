let samplePage = {
  bindings: {},
  templateUrl: require('./sample-page.html'),
  controller: class appCtrl {
    constructor($scope, $state) {
      this.myVar = "This is from controller";
    }
  }
}

samplePage.$inject = ['$scope', '$state']; // Inject
export default samplePage;