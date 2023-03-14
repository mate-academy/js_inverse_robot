'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const key in robot) {
    if (robotReverse[robot[key]] === undefined) {
      robotReverse[robot[key]] = key;
    } else {
      return null;
    }
  }

  return robotReverse;
}

module.exports = inverseRobot;
