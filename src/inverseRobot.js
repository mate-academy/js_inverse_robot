'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    if (obj[robot[key]]) {
      return null;
    }

    if (obj.key === undefined) {
      obj[robot[key]] = key;
    }
  }

  return obj;
}

module.exports = inverseRobot;
