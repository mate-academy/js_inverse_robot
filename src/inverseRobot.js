'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverted = {};

  for (const key in robot) {
    if (robotInverted.hasOwnProperty(robot[key])) {
      return null;
    }

    robotInverted[robot[key]] = key;
  }

  return robotInverted;
}

module.exports = inverseRobot;
