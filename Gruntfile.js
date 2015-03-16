module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'compile-handlebars': {
        allStatic: {
          template: 'templates/template.handlebars',
          output: 'test.html'
        }
    }
  });

  grunt.loadNpmTasks('grunt-compile-handlebars');

  grunt.registerTask('default', ['compile-handlebars']);

};