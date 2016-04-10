// Load plugins
var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano      = require("gulp-cssnano"),
    inline       = require("gulp-inline"),
    webserver    = require("gulp-webserver")

gulp.task("styles", function() {
  return gulp.src(["_styles/index.scss", "_styles/resume.scss"])
    .pipe(sass())
    .pipe(autoprefixer("last 2 version"))
    .pipe(cssnano())
    .pipe(gulp.dest("_static"))
})

gulp.task("static", ["styles"], function() {
  gulp.src(["_static/apple-touch-icon.png", "_static/favicon.ico", "_static/about.jpg"])
    .pipe(gulp.dest("public"))
  gulp.src("_static/*.html")
    .pipe(inline({
      base: '_static/'
    }))
    .pipe(gulp.dest("public"))
})

gulp.task("watch", function() {
  gulp.watch("_static/*", ["static"])
  gulp.watch("_styles/*.scss", ["styles"])
})

gulp.task("webserver", function() {
  gulp.src("public")
    .pipe(webserver({
      directoryListing: false,
      host: "localhost",
      livereload: true,
      open: true,
      port: 8000
    }))
})

gulp.task("default", function() {
  gulp.start("static")
  gulp.start("watch")
  gulp.start("webserver")

})
