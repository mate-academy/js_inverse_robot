'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (fixedRobot.hasOwnProperty(robotKey)) {
      return null;
    }

    fixedRobot[robotKey] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
