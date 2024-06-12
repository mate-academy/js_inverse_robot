'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInv = {};

  for (const key in robot) {
    if (robotInv.hasOwnProperty(robot[key])) {
      return null;
    }
    robotInv[robot[key]] = key;
  }

  return robotInv;
}

module.exports = inverseRobot;
