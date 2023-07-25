'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (invertedRobot.hasOwnProperty(robotValue)) {
      return null;
    }

    invertedRobot[robotValue] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
