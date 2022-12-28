'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertRobot = {};

  for (const key in robot) {
    if (invertRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    invertRobot[robot[key]] = key;
  }

  return invertRobot;
}

module.exports = inverseRobot;
