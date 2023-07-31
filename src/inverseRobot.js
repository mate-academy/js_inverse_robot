'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const reversedRobot = {};

  for (const key in robot) {
    reversedRobot[robot[key]] = key;
  }

  // Check our input object for duplicate values
  const isDuplicates = Object.values(robot).map(function(item, idx, arr) {
    return arr.indexOf(item) !== idx;
  });

  // If there are some values which are duplicate
  // it will have value of true in our isDuplicates array,
  // so we check it with for loop
  for (const i of isDuplicates) {
    if (i) {
      return null;
    }
  }

  return reversedRobot;
}

module.exports = inverseRobot;
