'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revers = {};

  for (const key in robot) {
    if (revers[robot[key]]) {
      return null;
    }
    revers[robot[key]] = key;
  }

  return revers;
}

module.exports = inverseRobot;
