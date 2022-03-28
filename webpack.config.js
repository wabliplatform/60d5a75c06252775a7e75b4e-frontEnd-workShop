const path = require('path');

module.exports = {
  entry: {
	'homepage' : './javascript/homepage.js',
	'createProject' : './javascript/createProject.js',
	'viewProject' : './javascript/viewProject.js',
	'updateProject' : './javascript/updateProject.js',
	'createWorkpackage' : './javascript/createWorkpackage.js',
	'updateWorkpackage' : './javascript/updateWorkpackage.js',
	'createTask' : './javascript/createTask.js',
	'updateTask' : './javascript/updateTask.js',
	'viewTasks' : './javascript/viewTasks.js',
	'viewTask' : './javascript/viewTask.js',
	'createEmployee' : './javascript/createEmployee.js',
	'updateEmployee' : './javascript/updateEmployee.js',
	'viewEmployees' : './javascript/viewEmployees.js',
	'viewWorkpackages' : './javascript/viewWorkpackages.js',
	'createDeliverable' : './javascript/createDeliverable.js',
	'updateDeliverable' : './javascript/updateDeliverable.js',
	'viewDeliverables' : './javascript/viewDeliverables.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};