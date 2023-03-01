'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const roboNew = {};

  for (const key in robot) {
    if (roboNew[robot[key]]) {
      return null;
    } else {
      roboNew[robot[key]] = key;
    }
  }

  return roboNew;
}

module.exports = inverseRobot;
