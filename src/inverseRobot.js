'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  for (const key in robot) {
    if (robot[robot[key]] === undefined) {
      robot[robot[key]] = key;
      delete robot[key];
    } else {
      return null;
    }
  }

  return robot;
}

module.exports = inverseRobot;
