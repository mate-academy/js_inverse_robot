'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  const robotEntries = Object.entries(robot);

  for (const [key, value] of robotEntries) {
    if (reversedRobot.hasOwnProperty(value)) {
      return null;
    }

    reversedRobot[value] = key;
  }

  return reversedRobot;
}
module.exports = inverseRobot;
