'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReversed = {};

  for (const key in robot) {
    if (robot[key] in robotReversed) {
      return null;
    }

    robotReversed[robot[key]] = key;
  }

  return robotReversed;
}

module.exports = inverseRobot;
