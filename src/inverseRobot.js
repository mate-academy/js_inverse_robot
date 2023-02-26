'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (copyRobot[value]) {
      return null;
    }
    copyRobot[value] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
