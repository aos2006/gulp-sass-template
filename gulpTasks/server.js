const gulp = require('gulp');const l = require('gulp-load-plugins')();const browser_sync = require('browser-sync').create();module.exports = function(){  return function () {    browser_sync.init({      server: 'build',      files: ['build/css/*.css'],      plugins: [{        module: "bs-html-injector",        options: {          files: ["build/*.html"]        }      }]    })  }};