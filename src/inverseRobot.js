'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const keys = Object.values(robot);
  const values = Object.keys(robot);
  let count = 0;

  for (const key of keys) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        count++;
      }
    }

    if (count > 1) {
      return null;
    }

    count = 0;
  }

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

module.exports = inverseRobot;
