'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const key in robot) {
    if (!robotReverse.hasOwnProperty(robot[key])) {
      robotReverse[robot[key]] = key;
    } else {
      return null;
    }
  }

  return robotReverse;
}

module.exports = inverseRobot;
