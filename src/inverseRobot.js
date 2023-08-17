'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let repairedRobot = {};

  for (const key in robot) {
    if (repairedRobot[`${robot[key]}`]) {
      repairedRobot = null;

      return repairedRobot;
    }

    repairedRobot[`${robot[key]}`] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
