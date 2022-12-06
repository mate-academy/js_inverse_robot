'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const values = robot[key];

    if (reverseRobot.hasOwnProperty(values)) {
      return null;
    }

    reverseRobot[values] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
