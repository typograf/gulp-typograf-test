'use strict';

const gulp = require('gulp');
const typograf = require('gulp-typograf');

gulp.task('typography', function() {
    return gulp.src('./src/typography.txt')
        .pipe(typograf({
            locale: ['ru', 'en-US'],
        }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('notypography', function() {
    return gulp.src('./src/no-typography.txt')
        .pipe(typograf({
            locale: ['ru', 'en-US'],
            safeTags: [
                ['<no-typography>','<\/no-typography>']
            ]
        }))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', gulp.series('typography', 'notypography'));
