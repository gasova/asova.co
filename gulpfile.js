const { gulp, parallel, src, dest } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function jslint(cb) {
  return src([
    'src/js/**/*.js',
  ], { sourcemaps: true })
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      noSource: true
    }))
    .pipe(dest('assets/js'));
  cb();
}

function sasslint(cb) {
  return src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('bundle.min.css'))
    .pipe(dest('assets/css/'));
  cb();
}

exports.build = parallel(sasslint, jslint);
exports.default = parallel(sasslint, jslint);
