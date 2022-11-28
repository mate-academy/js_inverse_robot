'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (newRobot.hasOwnProperty(value)) {
      return null;
    }

    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
