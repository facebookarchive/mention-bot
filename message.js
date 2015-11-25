var util = require('util');

module.exports = function(reviewerList, mentionSentenceBuilder, defaultMessageGenerator) {
	return defaultMessageGenerator(reviewerList);
};