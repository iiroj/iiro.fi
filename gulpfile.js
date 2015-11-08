// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-minify'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    shell        = require('gulp-shell');

gulp.task('scss', function() {
  gulp.src('_scss/default.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public'))
})

gulp.task('media', function() {
  gulp.src(['_media/*.jpg', '_media/*.png', '_media/*.svg'])
    .pipe(gulp.dest('public/media'))
})

gulp.task('scripts', function() {
  gulp.src('node_modules/webcomponents.js/webcomponents.min.js')
    .pipe(gulp.dest('public'));
  gulp.src('_scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(minify({
      ext:{
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('components', function() {
  gulp.src('_components/*.html')
    .pipe(gulp.dest('public/component'));
})

gulp.task('devd', shell.task('devd -ol public/ \ /resume=http://devd.io:8000 \ /contact=http://devd.io:8000'))

gulp.task('watch', function() {
  gulp.watch('_media/*', ['media']);
  gulp.watch('_scss/*.scss', ['scss']);
  gulp.watch('_scripts/*.js', ['scripts']);
  gulp.watch('_components/*.html', ['components']);
})

gulp.task('default', function() {
  gulp.start('scripts');
  gulp.start('watch');
  gulp.start('devd');
})