'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (invertedRobot.hasOwnProperty(robotKey)) {
      return null;
    }
    invertedRobot[robotKey] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
