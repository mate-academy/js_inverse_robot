'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const fixedRobot = {};

  for (const key in robot) {
    const keyValue = robot[key];

    if (fixedRobot.hasOwnProperty(keyValue)) {
      return null;
    } else {
      fixedRobot[keyValue] = key;
    }
  }

  return fixedRobot;
}

module.exports = inverseRobot;
