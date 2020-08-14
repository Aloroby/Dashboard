var gulp = require("gulp"),
    concat = require("gulp-concat"),
    minify = require("gulp-minify"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    sourcemaps = require("gulp-sourcemaps"),
    gulpLivereload = require("gulp-livereload"),
    newer = require('gulp-newer');

// New Files Task
gulp.task("new", function() {
        return gulp.src("stage/**/*/*")
            .pipe(newer('satge/**/*.*'))

    })
    // HTML Task
gulp.task("html", function() {
    return gulp.src("stage/html/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("dist"))
        .pipe(gulpLivereload())
})

// CSS Task
gulp.task("css", function() {
    return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(gulpLivereload())
})

// JS Task
gulp.task("js", function() {
    return gulp.src("stage/js/*.js")
        .pipe(minify())
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(gulpLivereload())
})

gulp.task("watch", function() {
    require("./server.js")
    gulpLivereload.listen()
    gulp.watch("stage/**/*/*", ['new']);
    gulp.watch("stage/html/**/*.pug", ["html"])
    gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ["css"])
    gulp.watch("stage/js/*.js", ["js"])
})