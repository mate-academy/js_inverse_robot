'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revert = {};

  for (const key in robot) {
    if (robot[key] in revert) {
      return null;
    }
    revert[robot[key]] = key;
  }

  return revert;
}

module.exports = inverseRobot;
