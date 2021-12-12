const gulp = require('gulp');
const babel = require('gulp-babel');
//const eslint = require('gulp-eslint');
//걸프 의존성

function defaultTask(cb) {
    // gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError());
    
    // 노드 소스
    gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));
    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
     cb();
}
  
exports.default = defaultTask

