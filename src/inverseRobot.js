'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robot1 = {};

  for (const key in robot) {
    if (!robot1[robot[key]]) {
      robot1[robot[key]] = key;
    } else {
      return null;
    }
  }

  return robot1;
}
module.exports = inverseRobot;
