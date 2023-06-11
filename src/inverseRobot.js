'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const VALUES_ROBOT = Object.values(robot);

  for (let i = 0; i < VALUES_ROBOT.length; i++) {
    for (let j = i; j < VALUES_ROBOT.length; j++) {
      if (VALUES_ROBOT[i] === VALUES_ROBOT[j + 1]) {
        return null;
      }
    }
  }

  const INVERSE_KEYS_AND_VALUES = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      INVERSE_KEYS_AND_VALUES[robot[key]] = key;
    }
  }

  return INVERSE_KEYS_AND_VALUES;
}

module.exports = inverseRobot;
