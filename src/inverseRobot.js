'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = [];
  const obj = {};

  for (const key in robot) {
    if (values.includes(robot[key])) {
      return null;
    } else {
      values.push(robot[key]);
      obj[robot[key]] = key;
    }
  }

  return obj;
}

module.exports = inverseRobot;
