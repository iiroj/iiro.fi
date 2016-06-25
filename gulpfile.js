const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const gulp         = require('gulp');
const inline       = require('gulp-inline');
const sass         = require('gulp-sass');
const webserver    = require('gulp-webserver');

gulp.task('scss', function() {
  return gulp.src('scss/default.scss')
  .pipe(sass())
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest('static'));
});

gulp.task('inline', ['scss'], function() {
  return gulp.src('index.html')
  .pipe(inline({
    base: 'static',
    css: cssnano
  }))
  .pipe(gulp.dest('public'));
});

gulp.task('webserver', function() {
  gulp.src('public')
  .pipe(webserver({
    directoryListing: false,
    fallback: 'index.html',
    host: 'localhost',
    livereload: true,
    open: true,
    port: 8000
  }));
});

gulp.task('default', function() {
  gulp.start('scss');
  gulp.start('inline');
  gulp.watch(['scss/*.scss', 'index.html'], ['scss', 'inline']);
  gulp.start('webserver');
});
