'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const key in robot) {
    const value = robot[key];

    if (robot[value]) {
      return null;
    }

    robot[value] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
