const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const taskListing = require('gulp-task-listing');
const git = require('gulp-git');

gulp.task('serve-dev', () => {
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

gulp.task('serve-prod', ['pull', 'serve-dev']);

gulp.task('pull', function (done) {
    git.pull('origin', 'master', {}, function (err) {
        if (err) throw err;
        done();
    });
});

gulp.task('default', taskListing);