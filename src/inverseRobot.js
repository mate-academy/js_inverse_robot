'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repearRobot = {};

  for (const key in robot) {
    if (!repearRobot.hasOwnProperty([robot[key]])) {
      repearRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return repearRobot;
}

module.exports = inverseRobot;
