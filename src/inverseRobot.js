'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const key in robot) {
    const robotRealKey = robot[key];

    if (fixedRobot.hasOwnProperty(robotRealKey)) {
      return null;
    }

    fixedRobot[robotRealKey] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
