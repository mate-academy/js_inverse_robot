'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in correctRobot) {
      return null;
    }

    correctRobot[value] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
