'use strict';

// wrapper function
module.exports = function (grunt) {

    // project and task configuration
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script: 'server.js',
                    debug: true
                }
            },
            prod: {

            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        }
    });


    // load grunt plugins and tasks

    // custom tasks
    grunt.registerTask('express-keepalive', 'keep grunt running', function(){
        this.async();
    });

    grunt.registerTask('serve', 'default is dev environment', function (target) {
        if (target == 'bla bla') {
            return grunt.task.run([]);
        }

        grunt.task.run([
            'express:dev',
            'open',
            'express-keepalive'
        ]);
    });
}
