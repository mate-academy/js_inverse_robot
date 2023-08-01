'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const robotValue = robot[key];

    if (reverseRobot.hasOwnProperty(robotValue)) {
      return null;
    }

    reverseRobot[robotValue] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
