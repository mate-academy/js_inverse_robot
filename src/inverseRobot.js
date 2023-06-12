'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const INVERSE_KEYS_AND_VALUES = {};

  for (const key in robot) {
    if (INVERSE_KEYS_AND_VALUES[robot[key]] !== undefined) {
      return null;
    }
    INVERSE_KEYS_AND_VALUES[robot[key]] = key;
  }

  return INVERSE_KEYS_AND_VALUES;
}

module.exports = inverseRobot;
