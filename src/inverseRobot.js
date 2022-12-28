'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (newRobot.hasOwnProperty(value)) {
      return null;
    } else {
      newRobot[value] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
