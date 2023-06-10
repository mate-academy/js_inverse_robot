'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const values = Object.keys(robot);
  let value = '';
  let key = '';
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys.slice(i + 1).includes(keys[i])) {
      return null;
    }
    key = keys[i];
    value = values[i];
    result[key] = value;
  }

  return result;
}

module.exports = inverseRobot;
