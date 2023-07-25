'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  for (const key in robot) {
    const KEY_IS_DUPLICATED = robot[key] in correctRobot;

    if (KEY_IS_DUPLICATED) {
      return null;
    }

    correctRobot[robot[key]] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
