'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertedObj = {};

  for (const key in robot) {
    if (invertedObj[robot[key]]) {
      return null;
    }
    invertedObj[robot[key]] = key;
  }

  return invertedObj;
}

module.exports = inverseRobot;
