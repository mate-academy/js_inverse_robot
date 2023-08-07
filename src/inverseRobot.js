'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const result = robot[key];

    if (result in repairedRobot) {
      return null;
    }

    repairedRobot[result] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
