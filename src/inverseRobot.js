'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRob = {};

  for (const key in robot) {
    if (!inverseRob[robot[key]]) {
      inverseRob[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inverseRob;
}

module.exports = inverseRobot;
