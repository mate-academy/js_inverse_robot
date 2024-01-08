'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normalRobot = {};

  for (const key in robot) {
    if (normalRobot[robot[key]]) {
      return null;
    }

    normalRobot[robot[key]] = key;
  }

  return normalRobot;
}

module.exports = inverseRobot;
