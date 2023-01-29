'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rewRobot = {};

  for (const key in robot) {
    if (rewRobot[robot[key]]) {
      return null;
    } else {
      rewRobot[robot[key]] = key;
    }
  }

  return rewRobot;
}

module.exports = inverseRobot;
