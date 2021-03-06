var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');



gulp.task('concatjs', function () {
    gulp.src('js/*.js').pipe(gulp.dest('assets/js'));
})

gulp.task('concatcss',function () {
    gulp.src('css/*.css').pipe(gulp.dest('assets/css'));
})


//
gulp.task('sass' ,function () {
    gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
});

gulp.task('minicss',['concatcss'], function () {
    gulp.src('css/*.css')
        //壓縮
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        //完成搬家
        .pipe(gulp.dest('css/mini/'));
});


gulp.task('watch' ,function () {
    gulp.watch('sass/*.scss',['sass']);
    gulp.watch('css/*.css',['concatcss']);
});


gulp.task('fileinclude', function() {
    gulp.src(['contactus.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./app'));
  });

