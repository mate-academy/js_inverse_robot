'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};
  const VALUES = Object.values(robot);
  const KEYS = Object.keys(robot);
  const REMOVE_DUBLICATE_VALUES = new Set(VALUES);

  if ([...REMOVE_DUBLICATE_VALUES].length !== VALUES.length) {
    return null;
  }

  for (let i = 0; i < KEYS.length; i++) {
    reverseRobot[VALUES[i]] = KEYS[i];
  }

  return reverseRobot;
}

module.exports = inverseRobot;
