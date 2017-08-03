var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("yay!");
});

gulp.task('html', function(){
    console.log("HTML fun here");
});

gulp.task('styles', function(){
    console.log("SASS fun here");
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});