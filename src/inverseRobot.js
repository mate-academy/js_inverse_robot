'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    if (!repairedRobot.hasOwnProperty(robot[key])) {
      repairedRobot[robot[key]] = key;
      continue;
    }

    return null;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
