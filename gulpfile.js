var autoprefixer = require("gulp-autoprefixer"),
    cssnano      = require("gulp-cssnano"),
    gulp         = require("gulp"),
    inline       = require("gulp-inline"),
    sass         = require("gulp-sass"),
    webserver    = require("gulp-webserver")

gulp.task("scss", function() {
    return gulp.src("scss/default.scss")
        .pipe(sass())
        .pipe(autoprefixer("last 2 version"))
        .pipe(cssnano())
        .pipe(gulp.dest("static"))
})

gulp.task("static", ["scss"], function() {
    return gulp.src("index.html")
        .pipe(inline({
            base: "static"
        }))
        .pipe(gulp.dest("public"))
})

gulp.task("watch", function() {
    gulp.watch("scss/*.scss", ["static"])
    gulp.watch("index.html", ["static"])
})

gulp.task('webserver', function() {
    gulp.src('public')
    .pipe(webserver({
        directoryListing: false,
        fallback: 'index.html',
        host: 'localhost',
        livereload: true,
        open: true,
        port: 8080
    }));
});

gulp.task("default", function() {
    gulp.start("static")
    gulp.start("watch")
    gulp.start("webserver")
})
