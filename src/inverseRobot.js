'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const swappedRobot = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (!(value in swappedRobot)) {
        swappedRobot[value] = key;
      } else {
        return null;
      }
    }
  }

  return swappedRobot;
}

module.exports = inverseRobot;
