const gulp = require('gulp');
const server = require("gulp-server-livereload");

gulp.task('build', (cb) => {
    console.log("construyendo");
    setTimeout(cb, 1200);
    cb();
});

gulp.task('serve', (cb) => {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});