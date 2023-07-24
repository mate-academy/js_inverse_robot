'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRob = {};

  for (const key in robot) {
    if (inverseRob.hasOwnProperty(robot[key])) {
      return null;
    }
    inverseRob[robot[key]] = key;
  }

  return inverseRob;
}

module.exports = inverseRobot;
