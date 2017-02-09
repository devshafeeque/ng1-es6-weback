routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
        .state('home', {
          url: '/home',
          template: '<home></home>'
        })
        .state('samplePage', {
          url: '/samplePage',
          template: '<sample-page></sample-page>',
        })
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(false);
}
