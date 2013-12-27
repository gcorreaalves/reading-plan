module.export = function(grunt){
	grunt.initConfig({
		pkg: grunt.fild.readJSON('package.json')
	});

	grunt.loadNpmTasks('grunt-devtools');

	grunt.registerTask('default', ['devtools']);
}