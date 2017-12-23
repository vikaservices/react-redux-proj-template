const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch-files', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app',
    },
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('injectCss');
  });

  watch('./app/src/**/*.js', function() {
    gulp.start('runEslint');
    gulp.start('refreshJs');
  });
});

gulp.task('injectCss', ['styles'], function() {
  return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('refreshJs', ['bundle'], function() {
  browserSync.reload();
});

gulp.task('runEslint', function() {
  gulp.start('lint');
});
