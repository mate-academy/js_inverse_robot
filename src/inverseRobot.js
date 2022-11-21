'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const double = new Set(Object.values(robot)).size
    === Object.values(robot).length;

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return double ? result : null;
}
module.exports = inverseRobot;
