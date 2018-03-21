const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant    = require ('imagemin-pngquant');
const browserSync = require('browser-sync');
const config = require('./config');

let imgTask = function() {
  return gulp.src(`${config.dev.img}**/*.+(png|jpg|jpeg|gif|svg|ico)`)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(config.dist.img))
    .pipe(browserSync.reload({stream: true}))
};

gulp.task('img', imgTask);

