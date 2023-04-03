'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const fixedRobot = {};

  for (const part in robot) {
    if (fixedRobot.hasOwnProperty(robot[part])) {
      return null;
    }
    fixedRobot[robot[part]] = part;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
