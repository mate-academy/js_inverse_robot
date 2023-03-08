'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robot2 = {};

  for (const key in robot) {
    if (!robot2[robot[key]]) {
      robot2[robot[key]] = key;
    } else {
      return null;
    }
  }

  return robot2;
}

module.exports = inverseRobot;
