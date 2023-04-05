'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};

  for (const key in robot) {
    const swappedKey = robot[key];
    const swappedValue = key;

    if (inversedRobot.hasOwnProperty(swappedKey)) {
      return null;
    }

    inversedRobot[swappedKey] = swappedValue;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
