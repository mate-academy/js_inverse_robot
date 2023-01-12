'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    if (robot[key] in copyRobot) {
      return null;
    }

    copyRobot[robot[key]] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
