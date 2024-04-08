'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const key in robot) {
    if (!newRobot.hasOwnProperty(robot[key])) {
      newRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
