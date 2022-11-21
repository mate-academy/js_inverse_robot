'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRob = {};

  for (const key in robot) {
    if (newRob.hasOwnProperty(robot[key])) {
      return null;
    }
    newRob[robot[key]] = key;
  }

  return newRob;
}

module.exports = inverseRobot;
