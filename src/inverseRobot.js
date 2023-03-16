'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorCopyOfTheRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (mirrorCopyOfTheRobot.hasOwnProperty(value)) {
      return null;
    }

    mirrorCopyOfTheRobot[value] = key;
  }

  return mirrorCopyOfTheRobot;
}

module.exports = inverseRobot;
