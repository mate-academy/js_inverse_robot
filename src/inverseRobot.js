'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const correctKey = robot[key];

    if (correctRobot.hasOwnProperty(correctKey)) {
      return null;
    }

    correctRobot[correctKey] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
