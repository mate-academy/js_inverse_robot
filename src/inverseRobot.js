'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const FIXED_ROBOT = {};

  for (const key in robot) {
    if (FIXED_ROBOT.hasOwnProperty(robot[key])) {
      return null;
    }

    FIXED_ROBOT[robot[key]] = key;
  }

  return FIXED_ROBOT;
}

module.exports = inverseRobot;
