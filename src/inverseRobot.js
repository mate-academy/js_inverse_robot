'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (reversedRobot.hasOwnProperty(robotKey)) {
      return null;
    }

    reversedRobot[robotKey] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
