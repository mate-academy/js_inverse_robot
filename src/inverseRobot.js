'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};

  for (const key in robot) {
    if (!inversed.hasOwnProperty([robot[key]])) {
      inversed[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inversed;
}

module.exports = inverseRobot;
