'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  const entries = Object.entries(robot);

  for (const entry of entries) {
    if (fixedRobot.hasOwnProperty(entry[1])) {
      return null;
    }
    fixedRobot[entry[1]] = entry[0];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
