'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const tobor = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (tobor[robotValue] !== undefined) {
      return null;
    }

    tobor[robotValue] = key;
  }

  return tobor;
}

module.exports = inverseRobot;
