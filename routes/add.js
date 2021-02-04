var data = require('../data.json');

exports.addFriend = function (request, response) {
	// Your code goes here

	var newFriend = {
		name: request.params.name,
		description: request.params.description,
		imageURL: 'http://lorempixel.com/400/400/people',
	};

	console.log(newFriend);

	data = data.friends.push(newFriend);

	response.render('index', data);
};
