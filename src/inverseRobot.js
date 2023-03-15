'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const newPropertyName = robot[key];

    if (newPropertyName in correctRobot) {
      return null;
    }

    correctRobot[newPropertyName] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
