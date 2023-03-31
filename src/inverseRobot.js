'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversed = {};

  for (const key in robot) {
    const value = robot[key];

    if (robot.hasOwnProperty(inversed[value])) {
      return null;
    }
    inversed[value] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
