'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const [value, key] of Object.entries(robot)) {
    if (newRobot.hasOwnProperty(key)) {
      return null;
    }

    newRobot[key] = value;
  }

  return newRobot;
}

module.exports = inverseRobot;
