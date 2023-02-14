'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const entry in robot) {
    if (fixedRobot.hasOwnProperty([robot[entry]])) {
      return null;
    }
    fixedRobot[robot[entry]] = entry;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
