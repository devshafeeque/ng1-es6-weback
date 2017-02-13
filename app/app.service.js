export default class appService {
    /* @ngInject */
  constructor () {
      this.serviceVar = "Inside Service";
  }

  changeMe() {
      this.serviceVar = "Changed my data";
  }

}