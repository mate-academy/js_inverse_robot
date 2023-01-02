'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    const newKey = robot[key];
    const newValue = key;

    if (obj.hasOwnProperty(newKey)) {
      return null;
    }

    obj[newKey] = newValue;
  }

  return obj;
}
module.exports = inverseRobot;
