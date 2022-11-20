'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  let newRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (newRobot.hasOwnProperty(value)) {
      newRobot = null;
      break;
    }
    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
