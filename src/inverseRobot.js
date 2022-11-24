'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    if (obj.hasOwnProperty(robot[key])) {
      return null;
    } else {
      obj[robot[key]] = key;
    }
  }

  return obj;
}

module.exports = inverseRobot;
