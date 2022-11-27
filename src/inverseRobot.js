'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const obj = {};
  const values = Object.values(robot);

  for (const key of values) {
    if (obj.hasOwnProperty(key)) {
      return null;
    }

    obj[key] = robot[key];

    for (const keys in robot) {
      if (key === robot[keys]) {
        obj[key] = keys;
      }
    }
  }

  return obj;
}

module.exports = inverseRobot;
