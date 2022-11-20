'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const refurbishedRobot = {};

  for (const key in robot) {
    if (robot[key] in refurbishedRobot) {
      return null;
    } else {
      refurbishedRobot[robot[key]] = key;
    }
  }

  return refurbishedRobot;
}

module.exports = inverseRobot;
