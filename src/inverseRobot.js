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
  }

  for (let i = 0; i < keys.length; i++) {
    inverse[keys[i]] = values[i];
  }

  return inverse;
}

module.exports = inverseRobot;
