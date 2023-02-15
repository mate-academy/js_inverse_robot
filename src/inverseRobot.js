'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const detail = robot[key];

    if (correctRobot.hasOwnProperty(detail)) {
      return null;
    }

    correctRobot[detail] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
