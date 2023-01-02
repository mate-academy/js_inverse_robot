'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robo = {};

  for (const key in robot) {
    if (robo[robot[key]]) {
      return null;
    }

    robo[robot[key]] = key;
  }

  return robo;
}

module.exports = inverseRobot;
