const {src, dest, series} = require('gulp')
const sass = require('gulp-sass')
const include = require('gulp-file-include')
const concat = require('gulp-concat')

function html() {
  return src('src/**.html')
  .pipe(include({
    prefix: '@@'
  }))
  .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
  .pipe(sass())
  .pipe(concat('index.css'))
  .pipe(dest('dist'))
}

exports.build = series(html, scss)