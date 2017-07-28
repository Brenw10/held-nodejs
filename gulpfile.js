const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');

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