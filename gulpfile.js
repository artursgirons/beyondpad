var gulp = require('gulp');
var bundle = require('gulp-bundle-file');
var uglifyJS = require('gulp-uglify');
var uglifyCSS = require('gulp-uglifycss');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('bundle_js', function () {
    return gulp.src('./app/js/*.js.bundle')
        .pipe(bundle.concat())
        .pipe(gulp.dest('./app/js/build/'))
        .pipe(uglifyJS({ mangle: false, preserveComments: 'some' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./app/js/build/'));
});

gulp.task('bundle_css', function () {
    return gulp.src('./app/css/*.css.bundle')
        .pipe(bundle.concat())
        .pipe(replace(/'\.\.\/font\/beyondpad\./g, "'../../icons/font/beyondpad."))
        .pipe(gulp.dest('./app/css/build/'))
        .pipe(uglifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./app/css/build/'));
});

gulp.task('default', ['bundle_js', 'bundle_css']);