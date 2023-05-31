const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const minifyCSS = require("gulp-clean-css");

gulp.task("styles", function (done) {  // コールバック関数 "done" を追加
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest("./css"))
    .on("end", done);  // タスク完了を通知するコールバック関数を追加
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("styles")); // ファイルの変更を監視してタスクを実行
});

gulp.task("default", gulp.parallel("styles", "watch"));
