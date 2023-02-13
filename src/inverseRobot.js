'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    if (reverseRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    reverseRobot[robot[key]] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
