const gulp = require('gulp');
const config = require('./config');

let watchTask = function() {
  gulp.watch(`${config.dev.html}*.html`, ['html']);
  gulp.watch(`${config.dev.sass}**/*.scss`, ['css']);  
  gulp.watch(`${config.dev.js}*.js`, ['js']);  
  gulp.watch(`${config.dev.img}**/*.+(png|jpg|jpeg|gif|svg|ico)`, ['img']);  
};

gulp.task('watch', ['browserSync'], watchTask);
