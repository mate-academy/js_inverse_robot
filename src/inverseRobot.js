'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const KEYS = Object.values(robot);
  const VALUES = Object.keys(robot);
  const INVERSED_ROBOT = {};
  const UNIQUE_KEYS = [ ...new Set(KEYS) ];

  if (UNIQUE_KEYS.length !== VALUES.length) {
    return null;
  }

  for (let i = 0; i < KEYS.length; i++) {
    INVERSED_ROBOT[KEYS[i]] = VALUES[i];
  }

  return INVERSED_ROBOT;
}

module.exports = inverseRobot;
