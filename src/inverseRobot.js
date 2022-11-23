'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightVersionOfRobot = {};

  for (const key in robot) {
    if (rightVersionOfRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    rightVersionOfRobot[robot[key]] = key;
  }

  return rightVersionOfRobot;
}

module.exports = inverseRobot;
