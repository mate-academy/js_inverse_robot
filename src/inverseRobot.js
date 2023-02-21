'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRob = {};

  for (const key in robot) {
    if (inverseRob[robot[key]]) {
      return null;
    } else {
      inverseRob[robot[key]] = key;
    }
  }

  return inverseRob;
}
module.exports = inverseRobot;
