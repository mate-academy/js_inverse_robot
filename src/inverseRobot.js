'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const mirrorKeys = {};

  for (const key in robot) {
    if (mirrorKeys.hasOwnProperty(robot[key])) {
      return null;
    }

    mirrorKeys[robot[key]] = key;
  }

  return mirrorKeys;
}

module.exports = inverseRobot;
