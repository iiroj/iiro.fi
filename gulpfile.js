// Load plugins
var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano      = require("gulp-cssnano"),
    inline       = require("gulp-inline"),
    rename       = require("gulp-rename"),
    concat       = require("gulp-concat"),
    uglify       = require("gulp-uglify"),
    webserver    = require("gulp-webserver")

gulp.task("styles", function() {
  return gulp.src("_styles/default.scss")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(autoprefixer("last 2 version"))
    .pipe(cssnano())
    .pipe(gulp.dest("_static"))
})

gulp.task("scripts", function() {
  return gulp.src("_scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(gulp.dest("_static"))
})

gulp.task("static", ["styles", "scripts"], function() {
  gulp.src(["_static/apple-touch-icon.png", "_static/favicon.ico"])
    .pipe(gulp.dest("public"))
  gulp.src("_static/*.html")
    .pipe(inline({
      base: '_static/',
      js: uglify
    }))
    .pipe(gulp.dest("public"))
})

gulp.task("watch", function() {
  gulp.watch("_static/*", ["static"])
  gulp.watch("_styles/*.scss", ["styles"])
  gulp.watch("_scripts/*.js", ["scripts"])
})

gulp.task("webserver", function() {
  gulp.src("public")
    .pipe(webserver({
      directoryListing: false,
      fallback: "index.html",
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
