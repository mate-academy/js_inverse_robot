'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotOk = {};

  for (const key in robot) {
    const value = robot[key];

    if (robotOk.hasOwnProperty(value)) {
      return null;
    }

    robotOk[value] = key;
  }

  return robotOk;
}

module.exports = inverseRobot;
