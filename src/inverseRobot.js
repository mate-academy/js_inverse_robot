'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const temp = {};

  for (const key in robot) {
    if (!temp[robot[key]]) {
      temp[robot[key]] = key;
    } else {
      return null;
    }
  }

  return temp;
}

module.exports = inverseRobot;
