'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotFix = {};

  for (const key in robot) {
    const value = robot[key];

    if (robotFix.hasOwnProperty(value)) {
      return null;
    }

    robotFix[value] = key;
  }

  return robotFix;
}

module.exports = inverseRobot;
