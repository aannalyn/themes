const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('./config');

let browserSyncTask = function() {
  browserSync.init({server: { baseDir: config.dist.path }});
};

gulp.task('browserSync', browserSyncTask);