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
    const value = robot[key];

    if (swappedRobot.hasOwnProperty(value)) {
      return null;
    }

    swappedRobot[value] = key;
  }

  return swappedRobot;
}

module.exports = inverseRobot;
