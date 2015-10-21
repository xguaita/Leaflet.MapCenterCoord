module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist"],
    uglify: {
      options: {
        banner: '/* <%= pkg.name %>\n<%= pkg.homepage %>\nVersion: <%= pkg.version %> - Date: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/L.Control.MapCenterCoord.min.js': 'src/L.Control.MapCenterCoord.js'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/L.Control.MapCenterCoord.min.css': 'src/L.Control.MapCenterCoord.css'
        }
      }
    },
    copy: {
      icons: {
        cwd: 'src/icons',
        src: '**',
        dest: 'dist/icons/',
        expand: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'copy']);
};
