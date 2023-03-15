'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverted = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (inverted.hasOwnProperty(robotKey)) {
      return null;
    }

    inverted[robotKey] = key;
  }

  return inverted;
}

module.exports = inverseRobot;
