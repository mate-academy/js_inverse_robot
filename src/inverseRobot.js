'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (reverseRobot.hasOwnProperty(newKey)) {
      return null;
    }

    reverseRobot[newKey] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
