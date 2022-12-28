'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (invRobot.hasOwnProperty(robotKey)) {
      return null;
    }
    invRobot[robotKey] = key;
  }

  return invRobot;
}

module.exports = inverseRobot;
