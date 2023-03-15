'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swappedRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (swappedRobot.hasOwnProperty(robotValue)) {
      return null;
    }
    swappedRobot[robotValue] = key;
  }

  return swappedRobot;
}

module.exports = inverseRobot;
