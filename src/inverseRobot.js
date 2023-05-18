'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const robotKey in robot) {
    const robotValue = robot[robotKey];

    if (inversedRobot.hasOwnProperty(robotValue)) {
      return null;
    }

    inversedRobot[robotValue] = robotKey;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
