'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotAfterInverse = {};

  for (const key in robot) {
    if (robot[key] in robotAfterInverse) {
      return null;
    }
    robotAfterInverse[robot[key]] = key;
  }

  return robotAfterInverse;
}

module.exports = inverseRobot;
