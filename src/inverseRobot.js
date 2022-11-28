'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robot2 = {};

  for (const key in robot) {
    const value = robot[key];

    if (value in robot2) {
      return null;
    }

    robot2[value] = key;
  }

  return robot2;
}

module.exports = inverseRobot;
