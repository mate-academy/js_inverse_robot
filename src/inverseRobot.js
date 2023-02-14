'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (newRobot.hasOwnProperty(robotKey)) {
      return null;
    }

    newRobot[robotKey] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
