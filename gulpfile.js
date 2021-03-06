const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: 'scss/theme.scss',
        dest: '.'
    }
};

gulp.task('styles', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'material-style.min'
        })).pipe(gulp.dest(paths.styles.dest));
});

gulp.task('debugStyles', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(rename({
            basename: 'material-style'
        })).pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watchStyles', () => {
    gulp.watch(paths.styles.src, ['debugStyles']);
});