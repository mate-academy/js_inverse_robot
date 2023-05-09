'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReversed = {};

  for (const key in robot) {
    if (robotReversed.hasOwnProperty(robot[key])) {
      return null;
    }

    robotReversed[robot[key]] = key;
  }

  return robotReversed;
}

module.exports = inverseRobot;
