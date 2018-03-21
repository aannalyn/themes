const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');

const source = 'dev/';
const dest = 'dist/';
const fontawesome = 'node_modules/font-awesome/';
const jquery = 'node_modules/jquery/dist/jquery.min.js';
const scss = {
  from: source + 'scss/main.scss',
  to: dest + 'css',
  options: {
    outputStyle: 'compressed',  // nested, expanded, compact, compressed
    errLogToConsole: true,
    includePaths: [fontawesome + 'css']
  },
  watch: source + 'scss/**/*.scss',
}

gulp.task('browserSync', function() {
  browserSync.init({ server: { baseDir: './' } });
});

gulp.task('sass', function() {
  return gulp
    .src(scss.from)
    .pipe(sass({ outputStyle: 'expanded', errLogToConsole: true, includePaths: [fontawesome + 'css'] }))
    .pipe(gulp.dest(source + 'css'))

    // Compressed CSS copy
    .pipe(sass(scss.options))
    .pipe(rename('main.min.css'))        
    .pipe(gulp.dest(scss.to))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts', function() {
  return gulp.src([ jquery, source + 'js/*.js'])
    .pipe(concat('main.js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest + 'js'))
    .pipe(browserSync.reload({ stream: true }));
});

// Optimizing Images
gulp.task('images', function() {
  return gulp.src(source + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest(dest + 'images'))
});

gulp.task('fonts', function () {
  return gulp
    .src(fontawesome + 'fonts/**/*')
    .pipe(gulp.dest(dest + 'fonts'));
});

// Watchers
// ========
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(scss.watch, ['sass']);
  gulp.watch(source + 'js/*.js', ['scripts']);
  gulp.watch('./*.html', browserSync.reload);  
});

gulp.task('default', ['sass', 'scripts', 'fonts', 'images', 'watch']);