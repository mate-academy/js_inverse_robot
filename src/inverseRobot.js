'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotFix = {};

  for (const key in robot) {
    if (robotFix.hasOwnProperty(robot[key])) {
      return null;
    }

    robotFix[robot[key]] = key;
  }

  return robotFix;
}

module.exports = inverseRobot;
