'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const key in robot) {
    if (robotReverse.hasOwnProperty(robot[key])) {
      return null;
    } else {
      robotReverse[robot[key]] = key;
    }
  }

  return robotReverse;
}

module.exports = inverseRobot;
