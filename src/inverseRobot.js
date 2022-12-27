'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rotateRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    if (value in rotateRobot) {
      return null;
    }

    rotateRobot[value] = key;
  }

  return rotateRobot;
}

module.exports = inverseRobot;
