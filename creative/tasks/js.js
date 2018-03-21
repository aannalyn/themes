const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const config = require('./config');

let jsTask = function() {
  gulp.src([
    config.nodemodules.jquery, 
    config.nodemodules.bootstrap.js, 
    `${config.dev.js}*.js`
  ])
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest(config.dist.js))
  .pipe(browserSync.reload({stream: true}))
};

gulp.task('js', jsTask);
