'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const oldRobot = Object.entries(robot);
  const newRobot = {};

  for (const part of oldRobot) {
    const robotKey = part[0];
    const robotValue = part[1];

    if (newRobot[robotValue]) {
      return null;
    }

    newRobot[robotValue] = robotKey;
  }

  return newRobot;
}

module.exports = inverseRobot;
