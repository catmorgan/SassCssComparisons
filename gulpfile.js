var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('clean',function(){
	del('dist');
});

gulp.task('sass', function(){
	return gulp.src('styles/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("dist"));
});

gulp.task('default',['clean','sass']);