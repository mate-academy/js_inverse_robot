'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const KEYS_SET = new Set();
  const VALUES_SET = new Set();

  for (const [key, value] of Object.entries(robot)) {
    if (KEYS_SET.has(key) || VALUES_SET.has(value)) {
      return null;
    }
    KEYS_SET.add(key);
    VALUES_SET.add(value);
  }

  const TRANSFORMED_OBJECT = Object.fromEntries(
    Object.entries(robot).map(([key, value]) => [value, key])
  );

  return TRANSFORMED_OBJECT;
}

module.exports = inverseRobot;
