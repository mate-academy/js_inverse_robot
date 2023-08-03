'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (reverseRobot.hasOwnProperty(key)) {
      return null;
    }

    reverseRobot[key] = value;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
