'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const keyIsDuplicated = robot[key] in correctRobot;

    if (keyIsDuplicated) {
      return null;
    }

    correctRobot[robot[key]] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
