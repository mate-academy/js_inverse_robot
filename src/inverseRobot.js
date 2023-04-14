'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normalRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (robotValue in normalRobot) {
      return null;
    }

    normalRobot[robotValue] = key;
  }

  return normalRobot;
}

module.exports = inverseRobot;
