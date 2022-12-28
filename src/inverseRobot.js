'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (inversedRobot.hasOwnProperty(robotKey)) {
      return null;
    }
    inversedRobot[robotKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
