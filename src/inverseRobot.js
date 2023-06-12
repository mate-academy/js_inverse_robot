'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const reapiredRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (reapiredRobot.hasOwnProperty(value)) {
      return null;
    }
    reapiredRobot[value] = key;
  }

  return reapiredRobot;
}

module.exports = inverseRobot;
