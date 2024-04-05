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
    const inversedKey = robot[key];

    if (inversedRobot.hasOwnProperty(inversedKey)) {
      return null;
    }
    inversedRobot[inversedKey] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
