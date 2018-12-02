'use strict';

const gulp = require('gulp');
const typograf = require('gulp-typograf');

gulp.task('default', function() {
    return gulp.src('./src/*.txt')
        .pipe(typograf({
            locale: ['ru', 'en-US'],
            safeTags: [
                ['<notypography>','</notypography>']
            ]
        }))
        .pipe(gulp.dest('./dest'));
});
