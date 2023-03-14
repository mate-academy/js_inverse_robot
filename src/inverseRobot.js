'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (mirrorRobot[value]) {
      return null;
    }

    mirrorRobot[value] = key;
  }

  return mirrorRobot;
}

module.exports = inverseRobot;
