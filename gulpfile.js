var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');

gulp.task('default', function(){
    console.log("yay!");
});

gulp.task('html', function(){
    console.log("HTML fun here");
});

gulp.task('styles', function(){
    gulp.src('./app/assets/Styles/styles.css')
    .pipe(postcss([cssvars,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});
// 