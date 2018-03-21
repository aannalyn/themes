const gulp = require('gulp');
const browserSync = require('browser-sync').reload;
const config = require('./config');

let htmlTask = function() {
  return gulp.src(`${config.dev.html}*.html`)
  .pipe(gulp.dest(config.dist.path))
  .pipe(browserSync({stream: true}));
};

gulp.task('html', htmlTask);