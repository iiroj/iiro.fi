// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    inline       = require('gulp-inline-source'),
    minify       = require('gulp-minify'),
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
  gulp.src('node_modules/webcomponents.js/CustomElements.min.js')
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', function() {
  gulp.src('_scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(minify({
      ext:{
            src:'-debug.js',
            min:'.js'
        },
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('static', ['styles', 'webcomponents', 'scripts'], function() {
  gulp.src(['_static/*.png', '_static/*.ico'])
    .pipe(gulp.dest('public'))
  gulp.src('_static/*.html')
    .pipe(inline())
    .pipe(gulp.dest('public'))
})

gulp.task('devd', shell.task('devd -ol public/ \ /about=http://devd.io:8000 \ /resume=http://devd.io:8000 \ /resources=http://devd.io:8000'))

gulp.task('watch', function() {
  gulp.watch('_static/*', ['static'])
  gulp.watch('_styles/*.scss', ['styles'])
  gulp.watch('_scripts/*.js', ['scripts'])
})

gulp.task('default', function() {
  gulp.start('static')
  gulp.start('watch')
  gulp.start('devd')
})
