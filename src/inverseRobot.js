'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverRobot = {};

  for (const key in robot) {
    if (inverRobot[robot[key]]) {
      return null;
    }

    inverRobot[robot[key]] = key;
  }

  return inverRobot;
}

module.exports = inverseRobot;
