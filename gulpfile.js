"use strict";

const { src, dest, lastRun, series } = require("gulp");

const imagemin = require("gulp-imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

const options = [
  imageminGifsicle({
    interlaced: true
  }),
  imageminJpegtran({
    progressive: true,
    arithmetic: true
  }),
  imageminOptipng({
    optimizationLevel: 7,
    bitDepthReduction: true,
    colorTypeReduction: true,
    paletteReduction: true
  }),
  imageminSvgo({
    plugins: [{ removeViewBox: true }, { cleanupIDs: true }]
  })
];

// image resize - asset
function imagemin_asset() {
  return src(["./src/assets/src/*"], {
    since: lastRun(imagemin_asset)
  })
    .pipe(imagemin([...options]))
    .pipe(dest(["./src/assets/dist"]));
}

// image resize - marketing
function imagemin_marketing() {
  return src(["./src/assets/marketing/src/*"], {
    since: lastRun(imagemin_marketing)
  })
    .pipe(imagemin([...options]))
    .pipe(dest(["./src/assets/marketing/dist"]));
}

// image resize - SL Guide
function imagemin_guide() {
  return src(["./src/assets/guide/src/*"], {
    since: lastRun(imagemin_guide)
  })
    .pipe(imagemin([...options]))
    .pipe(dest(["./src/assets/guide/dist"]));
}

// exports
exports.default = series(imagemin_asset, imagemin_marketing, imagemin_guide);
