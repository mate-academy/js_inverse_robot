'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const kay in robot) {
    if (robot.hasOwnProperty(robot[kay])) {
      return null;
    }

    robot[robot[kay]] = kay;
    delete robot[kay];
  }

  return robot;
}

module.exports = inverseRobot;
