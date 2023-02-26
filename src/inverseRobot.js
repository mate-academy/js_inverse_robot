'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const value in robot) {
    const correctKey = robot[value];

    if (correctRobot.hasOwnProperty(correctKey)) {
      return null;
    }
    correctRobot[correctKey] = value;
  }

  return correctRobot;
}

module.exports = inverseRobot;
