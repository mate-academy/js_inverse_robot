'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const [key, value] of Object.entries(robot)) {
    if (robot.hasOwnProperty(value)) {
      return null;
    }
    robot[value] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
