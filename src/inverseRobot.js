'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const key in robot) {
    if (robot.hasOwnProperty(robot[key])) {
      return null;
    }

    robot[robot[key]] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
