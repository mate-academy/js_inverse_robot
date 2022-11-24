'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    if (correctRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    correctRobot[robot[key]] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
