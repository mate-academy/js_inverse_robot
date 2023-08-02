'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const robotItem = robot[key];

    if (inversedRobot.hasOwnProperty(robotItem)) {
      return null;
    }

    inversedRobot[robotItem] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
