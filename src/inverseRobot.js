'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    const objKey = robot[key];

    if (obj[key] || obj[objKey]) {
      return null;
    }
    obj[objKey] = key;
  }

  return obj;
}

module.exports = inverseRobot;
