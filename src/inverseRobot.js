'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (Object.keys(correctRobot).includes(robotValue)) {
      return null;
    }

    correctRobot[robotValue] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
