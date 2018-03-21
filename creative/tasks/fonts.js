const gulp = require('gulp');
const config = require('./config');

let fontsTask = function() {
  return gulp.src(`${config.dev.fonts}**/*.+(eot|svg|ttf|woff|woff2|otf)`)
  .pipe(gulp.dest(config.dist.fonts))
};

gulp.task('fonts', fontsTask);