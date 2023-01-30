'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inRobot = {};

  for (const key in robot) {
    if (!inRobot[robot[key]]) {
      inRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inRobot;
}

module.exports = inverseRobot;
