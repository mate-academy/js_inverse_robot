'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swapedRobot = {};

  for (const key in robot) {
    if (swapedRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    swapedRobot[robot[key]] = key;
  }

  return swapedRobot;
}

module.exports = inverseRobot;
