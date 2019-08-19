var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var destpath = {
    local: 'app/',
    web: 'C:/xampp/htdocs/css3generator/'
};

var jslibspath = [

];

var jspath = [
    'dev/js/app.js'
];

var csslibspath = [
    'dev/css/libs/normalize.css',
    'dev/css/libs/animate.min.css'
];

var csspath = [
    'dev/css/style.css'
];

gulp.task('buildCss', function () {
    return gulp.src(csspath)
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(destpath.local + 'css'))
        .pipe(gulp.dest(destpath.web + 'css'));
});

gulp.task('buildCssLibs', function () {
    return gulp.src(csslibspath)
        .pipe(concat('libs.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(destpath.local + 'css/libs'))
        .pipe(gulp.dest(destpath.web + 'css/libs'));
});

gulp.task('buildPhp', function () {
    return gulp.src('dev/*.php')
        .pipe(gulp.dest(destpath.local))
        .pipe(gulp.dest(destpath.web));
});

gulp.task('buildJs', function () {
    return gulp.src(jspath)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destpath.local + 'js'))
        .pipe(gulp.dest(destpath.web + 'js'));
});

gulp.task('buildJsLibs', function () {
    return gulp.src(jslibspath)
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destpath.local + 'js/libs'))
        .pipe(gulp.dest(destpath.web + 'js/libs'));
});

gulp.task('buildImage', function () {
    return gulp.src('dev/image/*.*')
        .pipe(gulp.dest(destpath.local + 'image'))
        .pipe(gulp.dest(destpath.web + 'image'));
});

gulp.task('buildFonts', function () {
    return gulp.src('dev/fonts/*.*')
        .pipe(gulp.dest(destpath.local + 'fonts'))
        .pipe(gulp.dest(destpath.web + 'fonts'));
});

gulp.task('css', function () {
    return gulp.src(csspath)
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(destpath.web + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('php', function () {
    return gulp.src('dev/*.php')
        .pipe(gulp.dest(destpath.web));
});

gulp.task('js', function () {
    return gulp.src(jspath)
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destpath.web + 'js'));
});
gulp.task('watch', function () {
    browserSync.init({
        proxy: "https://ip-4a87.proline.net.ua/css3generator/"
    });
    gulp.watch('dev/css/**/*.css', gulp.parallel('css')).on('change', browserSync.reload);
    gulp.watch('dev/js/**/*.js', gulp.parallel('js')).on('change', browserSync.reload);
    gulp.watch('dev/**/*.php', gulp.parallel('php')).on('change', browserSync.reload);
});

gulp.task('build', gulp.series('buildPhp', 'buildJs', 'buildCss', 'buildCssLibs'));

exports.default = gulp.parallel('css', 'php', 'js', 'watch');