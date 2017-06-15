import angular from 'angular';
import 'angular-mocks';

const {
  module,
  inject
} = angular.mock;

describe('Component: App => ', function () {
  var $componentController;
  var ctrl;
  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
    ctrl = $componentController('myApp', {
      $scope: scope
    });
  }));

  it('function testFunction', function () {
    ctrl.testFunction();
    expect(ctrl.newVar).toBe('test value');
  });
});
