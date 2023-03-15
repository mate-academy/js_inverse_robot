'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const property = robot[key];

    if (correctRobot.hasOwnProperty([property])) {
      return null;
    }
    correctRobot[property] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
