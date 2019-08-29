'use-strict'

const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  merge = require('merge-stream'),
  minify = require('gulp-minify-css')

const
  sassSrc = '../lib/styles/style.scss',
  bundleSrc = '../dist/bundle.css',
  fontAssetsSrc = '../lib/icon-style/fonts/*.*',
  fontSrc = '../lib/icon-style/style.css',
  dist = '../dist'

gulp.task('style', function() {
  const scssStream = gulp.src(sassSrc)
    .pipe(sass({
      errorLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    .pipe(concat('scss-files.scss'))

  const cssStream = gulp.src([bundleSrc, fontSrc])
    .pipe(concat('css-files.css'))

  const mergeStreams = merge(scssStream, cssStream)
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(gulp.dest(dist))

  return mergeStreams
}) 

gulp.task('font', function() {
  return gulp.src(fontAssetsSrc)
    .pipe(gulp.dest('../dist/fonts/'))
})