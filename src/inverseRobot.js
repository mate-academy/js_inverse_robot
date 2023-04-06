'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot2 = {};

  for (const key in robot) {
    if (robot2.hasOwnProperty(robot[key])) {
      return null;
    }

    robot2[robot[key]] = key;
  }

  return robot2;
}

module.exports = inverseRobot;
