'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotRight = {};

  for (const key in robot) {
    if (robot[key] in robotRight) {
      return null;
    }

    robotRight[robot[key]] = key;
  }

  return robotRight;
}

module.exports = inverseRobot;
