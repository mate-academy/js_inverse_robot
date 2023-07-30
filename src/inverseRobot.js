'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (newRobot.hasOwnProperty(robotValue)) {
      return null;
    }

    newRobot[robotValue] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
