'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const key in robot) {
    if (robot[key] in robotReverse) {
      return null;
    }

    robotReverse[robot[key]] = key;
  }

  return robotReverse;
}

module.exports = inverseRobot;
