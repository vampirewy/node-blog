const gulp = require("gulp");
const { src, dest, series } = require("gulp");
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
if (process.env.NODE_ENV === "production") {
  exports.default = series(lint, prod);
  return gulp.task(series(lint, prod));
}
if (process.env.NODE_ENV === "lint") {
  exports.default = lint;
  return gulp.task(lint);
}
exports.default = dev;
gulp.task(dev);
