'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  let fixedRobot = {};

  for (const keys in robot) {
    if (fixedRobot.hasOwnProperty(robot[keys])) {
      fixedRobot = null;
      break;
    }

    fixedRobot[robot[keys]] = keys;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
