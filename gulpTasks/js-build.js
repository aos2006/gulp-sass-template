const gulp = require('gulp'),  l = require('gulp-load-plugins')(),  combine = require('stream-combiner2').obj,  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';module.exports = function(options){  return function () {    return combine(      gulp.src(options.src),      l.if(isDevelopment, l.sourcemaps.init()),      l.concat('main.js'),      // l.rigger(),      l.uglify(),      l.if(isDevelopment, l.sourcemaps.write()),      gulp.dest(options.dist),      l.debug({title: 'build js'})    )  }};