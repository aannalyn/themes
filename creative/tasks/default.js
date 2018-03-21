const gulp = require('gulp');
const runSequence = require('run-sequence');

let defaultTask = function() {
  runSequence('clean', ['html', 'img', 'fonts', 'css', 'js', 'watch']);
};

gulp.task('default', defaultTask);