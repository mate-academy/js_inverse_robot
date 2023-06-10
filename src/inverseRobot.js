'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  let robotRealKey;

  for (const key in robot) {
    robotRealKey = robot[key];

    if (fixedRobot.hasOwnProperty(robotRealKey)) {
      return null;
    }

    fixedRobot[robotRealKey] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
