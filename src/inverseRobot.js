'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    if ([robot[key]] in correctRobot) {
      return null;
    }

    correctRobot[robot[key]] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
