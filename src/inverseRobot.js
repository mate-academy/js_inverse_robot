'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const robotInversed = {};

  for (const key in robot) {
    const a = robot[key];

    if (robotInversed.hasOwnProperty(a)) {
      return null;
    } else {
      robotInversed[a] = key;
    }
  }

  return robotInversed;
}

module.exports = inverseRobot;
