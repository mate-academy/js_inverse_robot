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
    if (swappedRobot.hasOwnProperty(robot[key])) {
      return null;
    } else {
      swappedRobot[robot[key]] = key;
    }
  }

  return swappedRobot;
}

module.exports = inverseRobot;
