import app from './app/app.module';
var testsContext = require.context('./app/', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);
console.log(app);
