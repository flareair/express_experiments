module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Define the configuration for all the tasks
  grunt.initConfig({
 
    // concat js files
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

    less: {
      development: {
        files: {
          'public/css/production.css': 'client/less/main.less' 
        }
      }
    },
 
    // Prefixer
 
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      files: {
        src: 'public/css/production.css',
        dest: 'public/css/production.css'
      }
    },
    concat: {
      options: {
        separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'client/js/app.js',
          'client/js/services.js',
          'client/js/controllers.js'
         ],
        dest: 'public/js/production.js',
      },
    },
 
    //minify css
 
    cssmin: {
      minify: {
        src: 'public/css/production.css',
        dest: 'public/css/production.css'
      }
    },
 
    // watch task
 
    watch: {
      scripts: {
        files: ['client/js/{,*/}*.js'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['client/less/{,*/}*.less'],
        tasks: ['less','autoprefixer','cssmin']
      }
    }
  });
 
  grunt.registerTask('build', [
    'concat','less','autoprefixer','cssmin'
  ]);
  grunt.registerTask('start', [
    'build', 'nodemon'
  ]);
};