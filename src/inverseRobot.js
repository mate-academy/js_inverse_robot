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

  for (let i = 0; i < keys.length; i++) {
    if (keys.lastIndexOf(keys[i]) !== i) {
      return null;
    }
    inverse[keys[i]] = values[i];
  }

  return inverse;
}

module.exports = inverseRobot;
