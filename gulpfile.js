var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");


gulp.task("css",
    function() {
        return gulp.src([
                "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ])
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("app/css"));
    });

gulp.task("scripts",
    function() {
        return gulp.src([
                "node_modules/angular/angular.min.js"
            ])
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("app/scripts"));
    });

gulp.task("lint",
    function() {
        return gulp.src("app/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
    });

gulp.task("src",
    function() {
        return gulp.src([
                "app/*.js"
            ])
            .pipe(uglify())
            .pipe(gulp.dest("app/scripts"));
    });

gulp.task("watch",
    function() {
        gulp.watch("app/*.js", ["lint", "src"]);
    });


gulp.task("default", ["css", "scripts", "lint", "src", "watch"]);