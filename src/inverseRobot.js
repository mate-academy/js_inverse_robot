'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInversed = {};

  for (const key in robot) {
    if (robotInversed[robot[key]]) {
      return null;
    } else {
      robotInversed[robot[key]] = key;
    }
  };

  return robotInversed;
}

module.exports = inverseRobot;
