'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const i in robot) {
    if (reversedRobot.hasOwnProperty(robot[i])) {
      return null;
    }
    reversedRobot[robot[i]] = i;
  }

  return reversedRobot;
}
module.exports = inverseRobot;
