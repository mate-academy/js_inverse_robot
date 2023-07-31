'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const reversedRobot = {};

  for (const key in robot) {
    if (reversedRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    reversedRobot[robot[key]] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
