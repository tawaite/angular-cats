'use strict';
 
var gulp = require('gulp'),
    del = require('del'),
    connect = require('gulp-connect');
    
gulp.task('clean', function() {
  return del['dist/*']
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
  return gulp.src('app/**/*.js', 'bower_components/**/*.js')
    .pipe(gulp.dest('dist/'));
})

gulp.task('serve', ['clean'], function() {
  gulp.start('watch');
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.html', ['html']);
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', function() {
  gulp.start('serve');
});