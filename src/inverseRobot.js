'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (repairedRobot.hasOwnProperty(value)) {
      return null;
    }

    repairedRobot[value] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
