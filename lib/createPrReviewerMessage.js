const SPLIT_CRITERIA_1 = '## Reviewer'
const SPLIT_CRITERIA_2 = '***'
module.exports = function(text){

  var messagePart = text.split(SPLIT_CRITERIA_1)[1].split(SPLIT_CRITERIA_2)[0]

  return `${SPLIT_CRITERIA_1} ${messagePart}`
};
