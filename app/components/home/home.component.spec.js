import angular from 'angular';
import 'angular-mocks';

const {
  module,
  inject
} = angular.mock;

describe('Component: Home => ', function () {
  var $componentController;
  var ctrl;
  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
    ctrl = $componentController('home', {
      $scope: scope
    });
  }));

  it('function myFunc', function () {
    ctrl.myFunc();
    expect(ctrl.ctrlVar).toBe('some value');
  });
});
