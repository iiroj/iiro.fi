// Load plugins
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano      = require("gulp-cssnano"),
    inline       = require('gulp-inline-source'),
    minify       = require('gulp-minify'),
    base64       = require('gulp-base64'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    webserver    = require('gulp-webserver')

gulp.task('styles', function() {
  return gulp.src('_styles/default.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(base64({
            baseDir: "_media",
            extensions: ['jpg', 'svg']
     }))
    .pipe(gulp.dest('_static'))
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
    .pipe(gulp.dest('_static'))
})

gulp.task('static', ['styles', 'scripts'], function() {
  gulp.src(['_static/*.png', '_static/*.ico'])
    .pipe(gulp.dest('public'))
  gulp.src('_static/*.html')
    .pipe(inline())
    .pipe(gulp.dest('public'))
})

gulp.task('watch', function() {
  gulp.watch('_static/*', ['static'])
  gulp.watch('_styles/*.scss', ['styles'])
  gulp.watch('_scripts/*.js', ['scripts'])
})

gulp.task("webserver", function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      proxies: [{source: '/resume', target: 'http://localhost:8000/'}]
    }))
})

gulp.task('default', function() {
  gulp.start('static')
  gulp.start('watch')
  gulp.start('webserver')

})
