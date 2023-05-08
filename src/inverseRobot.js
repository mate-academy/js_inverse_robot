'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};

  for (const key in robot) {
    const item = robot[key];

    if (Object.keys(robotReverse).includes(item)) {
      return null;
    }

    robotReverse[item] = key;
  }

  return robotReverse;
}

module.exports = inverseRobot;
