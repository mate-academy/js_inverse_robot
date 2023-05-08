'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  let robotKey;

  for (const key in robot) {
    robotKey = robot[key];

    if (fixedRobot.hasOwnProperty(robotKey)) {
      return null;
    }

    fixedRobot[robotKey] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
