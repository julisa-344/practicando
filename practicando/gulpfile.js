var gulp = require('gulp'); //npm install
var sass = require('gulp-sass')(require('sass')); //npm install --save-dev sass
    minifyCSS = require ('gulp-minify-css'); //npm install gulp-minify-css
    concat = require ('gulp-concat'); //npm install gulp-concat

gulp.task('hello', done => {
    console.log('Hello!!!!')
    done()
  });

//para pasar scss a css
gulp.task('sass', async () => {
    return gulp
    .src('style/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("public/stylesheets"));
});
//para pasar minificarlo
gulp.task('style_min', async () => {
    return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('style_main.min.css')) //lo va a juntar todos los archivos
    .pipe(gulp.dest("style"));
});
//para que se actualice automáticamente
gulp.task('watch', async () => {
    gulp.watch('style/**/*.scss', gulp.series('style_min'));
   });