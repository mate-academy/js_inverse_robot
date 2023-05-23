'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const mirrorRobot = {};

  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];

    if (mirrorRobot[value]) {
      return null;
    }

    mirrorRobot[value] = key;
  }

  return mirrorRobot;
}

module.exports = inverseRobot;
