'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRob = {};

  for (const key in robot) {
    if (newRob[robot[key]]) {
      return null;
    }

    newRob[robot[key]] = key;
  }

  return newRob;
}

module.exports = inverseRobot;
