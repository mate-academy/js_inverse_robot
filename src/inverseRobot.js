'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const values = Object.keys(robot);
  const inverse = {};

  for (const key of keys) {
    if (keys.lastIndexOf(key) !== keys.indexOf(key)) {
      return null;
    }
    inverse[key] = values[keys.indexOf(key)];
  }

  return inverse;
}

module.exports = inverseRobot;
