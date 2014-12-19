var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('jshint', function () {
  gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('test', ['jshint'], function () {
  return gulp.src('*.spec.js')
    .pipe(jasmine());
});

gulp.task('watch', ['test'], function () {
  gulp.watch('*.js', ['test']);
});

gulp.task('default', ['watch']);
