var gulp = require('gulp');
var webserver = require('gulp-webserver');
var KarmaServer = require('karma').Server;
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('test', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});