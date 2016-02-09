

/* REQUIRES --------------------*/

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    streamify = require('gulp-streamify'),
    cache = require('gulp-cached'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps')
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    vinyl = require('vinyl-fs'),
    stripDebug = require('gulp-strip-debug'),
    autoprefix = require('gulp-autoprefixer'),
    tasks = require('gulp-task-listing');


/* SCRIPTS --------------------*/

// Browserify
gulp.task('browserify', function() {
  browserify('./src/js/requires/requires.js')
    .bundle()
    .pipe(source('requires.js'))
    .pipe(streamify(uglify()))
    .pipe(streamify(stripDebug()))
    .pipe(gulp.dest('./build/js/requires'));
});

// JS compiler
gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('./build/js/'));
});

// JSHint task
gulp.task('jshint', function() {
  gulp.src('./src/js/*.js')
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JSHint watch task
gulp.task('jsWatch', function() {
  // watch for JS changes
  gulp.watch('./src/js/*.js', ['jshint']);
});


/* STYLES --------------------*/

// Sass task
gulp.task('less', function () {
  gulp.src('./src/css/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('less-watch', function() {
  gulp.watch('./src/css/*.less', ['less'])
});


/* MARKUP & ASSETS --------------------*/

// minify html
gulp.task('minifyHTML', function() {
var src = './src/*.html',
    dest = './build';
	gulp.src(src)
		.pipe(changed(dest))
		.pipe(minifyHTML())
		.pipe(gulp.dest(dest));
});

// minify new images
gulp.task('imagemin', function() {
  var src = './src/img/*',
      dest = './build/img';
  gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest))
});


/* UTILITY --------------------*/

// Build out all files that haven't yet been built
gulp.task('build', function() {
  var src = ['./src/*', './src/**/*'],
      dest = './build/';
  gulp.src(src)
    .pipe(changed(dest))
    .pipe(gulp.dest(dest));
});

// List all tasks
gulp.task('tasks', tasks);


/* DEFAULT --------------------*/

gulp.task('default', ['less', 'imagemin', 'minifyHTML', 'jshint', 'browserify', 'scripts']);


/* WATCH --------------------*/
gulp.task('watch', function() {

  // watch for JS changes
  gulp.watch('./src/js/*.js', ['browserify', 'jshint']);

  // watch for CSS changes
  gulp.watch('./src/css/*.less', ['less']);

  // watch for HTML changes
  gulp.watch('./src/*.html', ['minifyHTML']);

  // watch for images
  gulp.watch(['./src/img/*.png', './src/img/*.jpg'], ['imagemin']);
});
