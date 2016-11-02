// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var bower = require('gulp-bower');
var install = require("gulp-install");
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            directoryListing: {
                enable: true,
                path: 'index.html'
            }
        }));
});

gulp.task('installieren', function(){
    return gulp.src(['./bower.json', './package.json'])
    .pipe(install());
});
  
// Lint Task
gulp.task('lint', function() {
    return gulp.src(['./assets/js/**/*.js', './app/shared/**/*.js', './app/components/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./assets/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./assets/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./assets/js/**/*.js', './app/shared/**/*.js', './app/components/js/**/*.js'], ['lint', 'scripts']);
    gulp.watch('./assets/css/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['installieren','lint', 'sass', 'scripts', 'watch']);
