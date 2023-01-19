'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const keys in robot) {
    if (fixedRobot.hasOwnProperty(robot[keys])) {
      return null;
    }

    fixedRobot[robot[keys]] = keys;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
