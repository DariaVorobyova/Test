let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream:true}))    
})

gulp.task('js', function(){
    return gulp.src(
    'node_modules/swiper/js/swiper.js'
    )
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
})

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss'), gulp.parallel('scss')
    gulp.watch('app/*.html'), gulp.parallel('html')
    gulp.watch('app/js/*.js'), gulp.parallel('js')
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))