'use strict';
 
var gulp = require('gulp'),
    del = require('del'),
    connect = require('gulp-connect');
    
gulp.task('clean', function() {
  return del(['dist/*']);
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
  return gulp.src('img/*.{png,jpg,svg}')
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('js', function() {
  return gulp.src('app/**/*.js')
    .pipe(gulp.dest('dist/'));
})

gulp.task('bower-js', function() {
  return gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest('dist/bower_components/'));
})

gulp.task('bower-css', function() {
  return gulp.src('bower_components/**/*.css')
    .pipe(gulp.dest('dist/bower_components/'));
})

gulp.task('serve', ['clean'], function() {
  gulp.start('watch', 'bower-js', 'bower-css', 'html', 'js', 'images');
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/**/*.js', ['js']);
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', function() {
  gulp.start('serve');
});