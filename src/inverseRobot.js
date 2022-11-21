'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const [value, key] of Object.entries(robot)) {
    if (fixedRobot.hasOwnProperty(key)) {
      return null;
    }

    fixedRobot[key] = value;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
