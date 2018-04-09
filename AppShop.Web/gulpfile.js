var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require("gulp-sass");
var paths = {
    modules: "./node_modules/",
    scss: "./wwwroot/client/assets/scss/",
    js: "./wwwroot/client/assets/js/",
    dist: "./wwwroot/client/dist/"
};
// Sass Compile and minify
var cssFiles = [
    paths.modules + "bootstrap/dist/css/bootstrap.min.css",
    paths.scss + "site.scss",
    paths.scss + "responsive.scss"
];
gulp.task('minify-css', function () {
    gulp.src(cssFiles)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest(paths.dist));
});
// Js minify
var jsFiles = [
    paths.modules + "bootstrap/dist/js/bootstrap.min.js",
    paths.modules + "popper.js/dist/js/popper.min.js",
    paths.modules + "jquery.nicescroll/dist/jquery.nicescroll.min.js",
    paths.js + "site.js"
];
gulp.task('minify-js', function () {
    gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat('site.min.js'))
        .pipe(gulp.dest(paths.dist));
});
// Main task
gulp.task('watch-files', ['minify-css','minify-js'], function () {
    gulp.watch(cssFiles, ['minify-css']);
    gulp.watch(jsFiles, ['minify-js']);
});