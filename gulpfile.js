// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-minify'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    shell        = require('gulp-shell');

gulp.task('styles', function() {
  gulp.src('styles/default.scss')
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(gulp.dest('public'))
})

gulp.task('resources', function() {
  gulp.src('node_modules/webcomponents.js/webcomponents.min.js')
  .pipe(gulp.dest('public'));
  gulp.src(['resources/*.jpg', 'resources/*.svg'])
  .pipe(gulp.dest('public'))
})

gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
  .pipe(concat('main.js'))
  .pipe(minify({
    ext:{
      min:'.min.js'
    }
  }))
  .pipe(gulp.dest('public'))
})

gulp.task('templates', function() {
  gulp.src('templates/*.html')
  .pipe(concat('templates.html'))
  .pipe(gulp.dest('public'));
})

gulp.task('devd', shell.task('devd -ol public/ \ /resume=http://devd.io:8000 \ /contact=http://devd.io:8000'))

gulp.task('watch', function() {
  gulp.watch('resources/*', ['resources']);
  gulp.watch('styles/*.scss', ['styles']);
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('templates/*.html', ['templates']);
})

gulp.task('default', function() {
  gulp.start('scripts');
  gulp.start('watch');
  gulp.start('devd');
})