module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat:{
            options:{
                separator:"\n\n"
            }
        },
        uglify:{
            
        },
        build:{
            src: '<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};