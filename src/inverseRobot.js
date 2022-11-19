'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  let newRobot = {};

  for (const key in robot) {
    if (newRobot[robot[key]]) {
      newRobot = null;
      break;
    }
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
