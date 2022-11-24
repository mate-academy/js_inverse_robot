'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversed = {};

  for (const k in robot) {
    if (inversed.hasOwnProperty(robot[k])) {
      return null;
    }
    inversed[robot[k]] = k;
  }

  return inversed;
}

module.exports = inverseRobot;
