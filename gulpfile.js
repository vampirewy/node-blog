const gulp = require("gulp");
const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const eslint = require("gulp-eslint");

function dev() {
  return watch("src/**/*.js", { ignoreInitial: false }, () => {
    return src("src/**/*.js")
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe(dest("dist"));
  });
}
function prod() {
  return src("src/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
        ignore: [],
      })
    )
    .pipe(dest("dist"));
}
function lint() {
  return src("src/**/*.js").pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
}
function cleanDoc() {
  return gulp.src("dist/", { read: false }).pipe(clean());
}
if (process.env.NODE_ENV === "production") {
  exports.default = series(cleanDoc, lint, prod);
  return gulp.task(series(cleanDoc, lint, prod));
}
if (process.env.NODE_ENV === "lint") {
  exports.default = lint;
  return gulp.task(lint);
}
exports.default = dev;
gulp.task(dev);
