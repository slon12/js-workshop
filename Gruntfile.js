/*jshint camelcase:false*/

'use strict';

module.exports = function (grunt)
{

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config,
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['app/**/*.js', 'test/**/*.js']
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000, livereload: 35729, hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true, middleware: function (connect)
                    {
                        return [
                            connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            },
            dev: {
                configFile: 'test/karma.conf.js',
                singleRun: false
            }
        }
    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run([
            'connect:livereload', 'watch'
        ]);
    });

    grunt.registerTask('default', ['serve']);
};