// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    cache        = require('gulp-cache'),
    shell        = require('gulp-shell');

// Styles
gulp.task('styles', function() {
  return gulp.src('styles/default.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public'))
});

gulp.task('styles', function() {
    shell.task([
        'devd -ol public/'
    ]);
    gulp.watch('styles/**/*.scss', ['styles']);
});
gulp.task('devd', shell.task('/usr/local/bin/devd -ol public/'))

gulp.task('default', function() {
    gulp.start('styles');
    gulp.start('devd');
})