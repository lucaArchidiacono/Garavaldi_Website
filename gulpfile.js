// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var bower = require('gulp-bower');

gulp.task('bower', function() {
    return bower();
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
gulp.task('default', ['bower','lint', 'sass', 'scripts', 'watch']);
