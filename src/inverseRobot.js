'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctVerion = {};

  for (const key in robot) {
    const i = robot[key];

    if (i in correctVerion) {
      return null;
    }

    correctVerion[i] = key;
  }

  return correctVerion;
}

module.exports = inverseRobot;
