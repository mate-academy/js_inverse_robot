'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let normalRobot = {};

  for (const key in robot) {
    if (normalRobot[robot[key]]) {
      normalRobot = null;
      break;
    } else {
      normalRobot[robot[key]] = key;
    }
  }

  return normalRobot;
}

module.exports = inverseRobot;
