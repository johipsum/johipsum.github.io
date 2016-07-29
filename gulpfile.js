const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')
const babel = require('gulp-babel')
const fs = require('fs')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const handlebars = require('gulp-handlebars-extended')
const metaJSON = require('./meta.json');


gulp.task('default', ['buildJS', 'buildViews', 'minifyCSS'])
gulp.task('deploy', ['pushToGithub'])


gulp.task('buildJS', () => {
  return gulp.src('./app/*.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
})


gulp.task('buildViews', function(){
  const layouts = {
    main: fs.readFileSync('./app/layouts/main.hbs').toString()
  }

  return gulp.src('app/*.hbs')
    .pipe(handlebars({ meta: metaJSON }, { layouts: layouts }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
})


gulp.task('minifyCSS', () => {
  return gulp.src('app/*.css')
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(gulp.dest('dist'));
})


gulp.task('copyCNAME', () => {
  return gulp.src('CNAME')
    .pipe(gulp.dest('dist'))
})


gulp.task('pushToGithub', ['buildJS', 'buildViews', 'minifyCSS', 'copyCNAME'], () => {
  const date = new Date();

  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: 'master',
      message: `automatically generated - ${date.toUTCString()}`
    }));
})
