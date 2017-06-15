import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';

// css lib
import 'bootstrap/dist/css/bootstrap.min.css';

// css

// components
import mainApp from './app.component';
import home from './components/home/home.component';
import samplePage from './components/sample/sample-page.component';

// services
import appService from './app.service';

// routing
import routing from './app.route';

// directives

// constants
const MODULE_NAME = 'app';
require('../index.html');

angular.module(MODULE_NAME, [uiRouter, ngSanitize, uiBootstrap])
    // components
    .component('myApp', mainApp)
    .component('home', home)
    .component('samplePage', samplePage)
    .service('appService', appService)
    .config(routing);

export default MODULE_NAME;
