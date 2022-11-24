'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const values = Object.values(robot);

  for (const key in robot) {
    if (values.indexOf(robot[key]) !== values.lastIndexOf(robot[key])) {
      return null;
    }
  }

  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
