'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const withoutRepeat = new Set(values);

  if (withoutRepeat.size !== values.length) {
    return null;
  }

  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }

  return result;
}

module.exports = inverseRobot;
