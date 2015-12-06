// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    inline       = require('gulp-inline-source'),
    minifyscript = require('gulp-minify-inline-scripts'),
    minifycss    = require('gulp-minify-css'),
    base64       = require('gulp-base64'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    shell        = require('gulp-shell')

gulp.task('styles', function() {
  return gulp.src('_styles/default.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(base64({
            baseDir: "_media",
            extensions: ['jpg', 'svg']
     }))
    .pipe(gulp.dest('_static'))
})

gulp.task('webcomponents', function() {
  gulp.src('node_modules/webcomponents.js/webcomponents-lite.min.js')
    .pipe(gulp.dest('public'))
})

gulp.task('components', function() {
  gulp.src('_components/*.html')
    .pipe(minifyscript())
    .pipe(concat('components.html'))
    .pipe(gulp.dest('public'))
})

gulp.task('static', ['styles', 'webcomponents', 'components'], function() {
  gulp.src(['_static/*.png', '_static/*.ico'])
    .pipe(gulp.dest('public'))
  gulp.src('_static/*.html')
    .pipe(inline())
    .pipe(gulp.dest('public'))
})

gulp.task('devd', shell.task('devd -ol public/ \ /about=http://devd.io:8000 \ /resume=http://devd.io:8000 \ /downloads=http://devd.io:8000'))

gulp.task('watch', function() {
  gulp.watch('_static/*', ['static'])
  gulp.watch('_styles/*.scss', ['styles'])
  gulp.watch('_components/*.html', ['components'])
})

gulp.task('default', function() {
  gulp.start('static')
  gulp.start('watch')
  gulp.start('devd')
})