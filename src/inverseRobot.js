'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseObject = {};

  for (const key in robot) {
    if (!inverseObject[robot[key]]) {
      inverseObject[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inverseObject;
}

module.exports = inverseRobot;
