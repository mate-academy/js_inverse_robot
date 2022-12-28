'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const keys in robot) {
    const value = robot[keys];

    if (correctRobot.hasOwnProperty(value)) {
      return null;
    }
    correctRobot[value] = keys;
  }

  return correctRobot;
}

module.exports = inverseRobot;
