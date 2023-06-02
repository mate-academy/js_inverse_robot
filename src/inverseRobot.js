'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    if (robot[key] in repairedRobot) {
      return null;
    }

    repairedRobot[robot[key]] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
