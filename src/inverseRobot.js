'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInversed = {};

  for (const key in robot) {
    if (robot[key] in robotInversed) {
      return null;
    }

    robotInversed[`${robot[key]}`] = key;
  }

  return robotInversed;
}

module.exports = inverseRobot;
