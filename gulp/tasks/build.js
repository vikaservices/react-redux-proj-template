const gulp = require('gulp');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

//
// task for previewing stuff in dist folder
//
gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist',
    },
  });
});

//
// clean up before starting, delete dist folder
//
gulp.task('deleteDistFolder', function() {
  return del('./dist');
});

//
// include here other files that need to copien to dist
//
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  const pathsToCopy = [
    // './app/**/*',
    // '!./app/index.html',
    // '!./app/assets/images/**',
    // '!./app/assets/styles/**',
    // '!./app/assets/scripts/**',
    // '!./app/temp',
    // '!./app/temp/**'
  ];
  return gulp.src(pathsToCopy)
      .pipe(gulp.dest('./dist'));
});

//
// - in indexhtml file, add comment for *.js *.css files -> usemin will watch them
// - for js/ccs do rev and compressing (rev creates a random name for files)
// - copy js/css to /dist/assets/styles and /dist/assets/scripts
//
gulp.task('usemin', ['deleteDistFolder', 'styles', 'bundle'], function() {
  return gulp.src('./app/index.html')
      .pipe(usemin({
        css: [function() { return rev(); }, function() { return cssnano(); }],
        js: [function() { return rev(); }, function() { return uglify(); }],
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'usemin']);
