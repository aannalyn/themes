const gulp = require('gulp');
const del = require('del');
const config = require('./config');

let cleanTask = function() {
  del.sync([`${config.dist.path}**`]);
};

gulp.task('clean', cleanTask);