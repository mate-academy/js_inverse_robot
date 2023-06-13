'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    const value = robot[key];

    if (obj.hasOwnProperty(value)) {
      return null;
    }
    obj[value] = key;
  }

  return obj;
}

module.exports = inverseRobot;
