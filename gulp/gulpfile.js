var autoprefixer = require("gulp-autoprefixer"),
    concat       = require("gulp-concat"),
    cssnano      = require("gulp-cssnano"),
    gulp         = require("gulp"),
    sass         = require("gulp-sass")

gulp.task("scss", function() {
  return gulp.src("scss/default.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 version"))
    .pipe(cssnano())
    .pipe(concat("main.css"))
    .pipe(gulp.dest("../static"))
})

gulp.task("watch", function() {
  gulp.watch("scss/*.scss", ["scss"])
})

gulp.task("default", function() {
  gulp.start("watch")
})
