"use strict";

const {
  src,
  dest,
  lastRun,
  watch,
  series
} = require('gulp');

const imagemin = require('gulp-imagemin');


/* ==============================
  image resizer
============================== */
function _imagemin() {
  return src([
      './src/assets/src/*',
      './src/markdowns/notice/image/*'
    ], {
      since: lastRun(_imagemin)
    })
    .pipe(imagemin())
    .pipe(dest('./src/assets/dist'));
}


/* ==============================
  exports
============================== */
exports.default = series(_imagemin);
