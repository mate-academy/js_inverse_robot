'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (robotKey in inversed) {
      return null;
    }

    inversed[robotKey] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
