'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const repaired = {};
  const values = [];
  const keys = [];

  for (const key in robot) {
    values.push(key);
    keys.push(robot[key]);
  }

  for (let i = 0; i < values.length; i++) {
    repaired[keys[i]] = values[i];
  }

  const check = [...new Set(keys)];

  if (check.length !== keys.length) {
    return null;
  }

  return repaired;
}

module.exports = inverseRobot;
