const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')


gulp.task('default', ['buildJS', 'minifyHMTL', 'minifyCSS'])
gulp.task('deploy', ['pushToGithub'])


gulp.task('buildJS', () => {
  return gulp.src('./app/*.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});



gulp.task('minifyHMTL', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
});


gulp.task('minifyCSS', () => {
  return gulp.src('app/*.css')
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(gulp.dest('dist'));
});


gulp.task('copyCNAME', () => {
  return gulp.src('CNAME')
    .pipe(gulp.dest('dist'))
})


gulp.task('pushToGithub', ['buildJS', 'minifyHMTL', 'minifyCSS', 'copyCNAME'], () => {
  const date = new Date();

  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master',
      message: `automatically generated - ${date.toUTCString()}`
    }));
});
