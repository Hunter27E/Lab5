// Get all of our friend data
var data = require('../data.json'); // loads JSON into data

exports.view = function (request, response) {
	console.log(data);
	response.render('index', data);
};
