import app from './app/app.module';
var testsContext = require.context('./app/test/', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);
console.log(app);
