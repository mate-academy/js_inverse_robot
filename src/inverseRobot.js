'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

/* add func */

function inverseRobot(robot) {
  const inverseRobotObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in inverseRobotObj) {
      return null;
    };

    inverseRobotObj[value] = key;
  }

  return inverseRobotObj;
}

module.exports = inverseRobot;
