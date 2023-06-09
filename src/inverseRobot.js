'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (reversedRobot.hasOwnProperty(value)) {
      return null;
    }

    reversedRobot[value] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
