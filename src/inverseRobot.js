'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let fixedRobot = {};

  for (const key in robot) {
    if (fixedRobot.hasOwnProperty(robot[key])) {
      fixedRobot = null;

      return fixedRobot;
    } else {
      fixedRobot[robot[key]] = key;
    }
  }

  return fixedRobot;
}

module.exports = inverseRobot;
