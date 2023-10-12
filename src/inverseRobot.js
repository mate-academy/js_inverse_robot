'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    if (copyRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    copyRobot[robot[key]] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
