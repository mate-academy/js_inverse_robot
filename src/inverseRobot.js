'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    if (!reverseRobot.hasOwnProperty(robot[key])) {
      reverseRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return reverseRobot;
}

module.exports = inverseRobot;
