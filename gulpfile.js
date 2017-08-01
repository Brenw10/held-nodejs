const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const taskListing = require('gulp-task-listing');

gulp.task('serve', () => {
    nodemon({
        script: 'app.js',
        ext: 'js html css',
        ignore: [
            'node_modules/'
        ],
        env: { 'NODE_ENV': 'development' }
    }).on('start', () => {
        gutil.log(gutil.colors.green('Application was started!'));
    });
});

gulp.task('default', taskListing);