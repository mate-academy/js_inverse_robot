'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (fixedRobot.hasOwnProperty(value)) {
      return null;
    }
    fixedRobot[value] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
