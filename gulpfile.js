const { gulp, parallel, watch, src, dest } = require('gulp');
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

function watcher(cb) {
  watch('src/js/**/*.js', jslint);
  watch('src/sass/**/*.scss', sasslint);
  cb();
}

exports.build = parallel(sasslint, jslint);
exports.watch = parallel(watcher);
exports.default = parallel(sasslint, jslint);
